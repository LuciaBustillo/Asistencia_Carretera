from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS
import re
app = Flask(__name__)
cors = CORS()

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'asistroad'
cors.init_app(app)
conexion = MySQL(app)

#VALIDATION LOGIN:
    
@app.route("/login", methods=['POST'])
def login():
    try:
        body = request.json
        cursor = conexion.connection.cursor()
        sql = "SELECT * FROM usuarios WHERE usuario='" + body['user'] + "'"
        app.logger.info('SQL: %s', sql)
        cursor.execute(sql)
        columna = cursor.fetchone()
        if (columna != None):
            usuario = {
                'codigo': columna[0], 
                'usuario': columna[1], 
                'contraseña': columna[2], 
                'nombre': columna[3], 
                'apellido': columna[4],
                'dni': columna[5],
                'telefono': columna[6]
            }
            if body['password'] == usuario['contraseña']:
                return jsonify({"isValidUser": "true", 'usuario': usuario})
            else:
                return jsonify({"isValidUser": "false"})
        else:
            return jsonify({"isValidUser": "false"})
    except Exception as ex:
        return  str(ex)
    
#VALIDATIONS REGISTER:
    
def is_user_exist(body):
    cursor = conexion.connection.cursor()
    print (body['user'])
    sql = "SELECT usuario FROM usuarios WHERE usuario='" + body['user'] + "'"
    cursor.execute(sql)
    search = cursor.fetchone()
    if search != None :
        if body['user'] == search[0] :
            return True
        else:
            return False
    else: 
        return False

def register_validations(body):
    bOk = True
    errorDesc = ""
    if body['password'] != body['confirmPassword'] :
        bOk = False
        errorDesc = "Las contraseñas no coinciden"
    elif is_user_exist(body) :
        bOk = False
        errorDesc = "El usuario ya existe"
    elif len(body['dni']) < 9 or len(body['dni']) > 9 :
        bOk = False
        errorDesc = 'El DNI tiene que tener 8 números y 1 letra'
    elif len(body['phone']) < 9 or len(body['phone']) > 9 :
        bOk = False
        errorDesc = 'El teléfono tiene que tener 9 números'
    return bOk, errorDesc

@app.route("/register", methods=['POST'])
def register_save():
    try:
        body = request.json
        isValidRegister, errorDesc = register_validations(body)
        
        if isValidRegister:
            cursor = conexion.connection.cursor()
            sql = 'INSERT INTO usuarios (usuario, contraseña, nombre, apellido, dni, telefono) VALUES (%s, %s, %s, %s, %s, %s)'
            values = ( body['user'], body['password'], body['name'], body['lastName'], body['dni'], body['phone'])
            data = cursor.execute(sql, values)
            conexion.connection.commit()
            
            return jsonify({"isValidInserted": data})
        else:
            return jsonify({"isValidInserted": 'false', "errorDescription": errorDesc})
        
    except Exception as ex:
        return  str(ex)
    
#VALIDATIONS INCIDENCES:
    
def incidences_validations(body):
    bOk = True
    errorDescr = ""
    search = re.search("^([0-9]{4}[A-Z]{3})$", body['registration'])
    print(search)
    if search==None:
        print("Entramos por none")
        bOk = False
        errorDescr = "La matricula debe tener 4 números y 3 letras"
    if len(body['registration']) != 7:
        bOk = False
        errorDescr = "La matricula debe tener los 7 carácteres"
    return bOk, errorDescr

@app.route("/incidences", methods=['POST'])
def incidence_save():
    try: 
        body = request.json
        isValidIncidence, errorDesc = incidences_validations(body)
        
        if isValidIncidence:
            cursor = conexion.connection.cursor()
            sql = 'INSERT INTO incidencias (matricula, tipo_problema, problema_vehiculo, observaciones, daños, urgencia, localizacionLat, localizacionLng, estado, idUsuario) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'
            values = ( body['registration'], body['problem'], body['problemVehicle'], body['observations'], body['injuries'], body['urgency'], float(body['localization']['lat']), float(body['localization']['lng']), body['state'], body['idUser'])
            data = cursor.execute(sql, values)
            conexion.connection.commit()
        
            return jsonify({"isValidInserted": data})
        else:
            return jsonify({"isValidInserted": False, "errorDescription": errorDesc})
    
    except Exception as err: 
        return str(err)

@app.route("/incidences/<idUsuario>", methods=['GET'])
def incidences_user(idUsuario):
    try: 
        print(idUsuario)
        cursor = conexion.connection.cursor()
        sql = "SELECT * FROM incidencias WHERE idUsuario like('{0}')".format(idUsuario)
        cursor.execute(sql)
        datos = cursor.fetchall()
        print(datos)
        incidencias = []
        if (datos != None) :
            for columna in datos:
                incidencia = {
                    'codigo': columna[0], 
                    'matricula': columna[1], 
                    'tipo_problema': columna[2], 
                    'problema_vehiculo': columna[3], 
                    'observaciones': columna[4],
                    'daños': columna[5],
                    'urgencia': columna[6],
                    'localizacionLat': columna[7],
                    'localizacionLng': columna[8],
                    'estado': columna[9]
                }
                incidencias.append(incidencia)
            return jsonify({"incidencias": incidencias})
        else :
            return jsonify({"mensaje": "Usuario sin incidencias"})
        
    except Exception as ex:
        return "Error en server"

@app.route("/incidences/delete/<idIncidencia>", methods=['DELETE'])
def incidences_delete(idIncidencia):
    try: 
        print(idIncidencia)
        cursor = conexion.connection.cursor()
        sql = "DELETE FROM incidencias WHERE codigo = '{0}'".format(idIncidencia)
        cursor.execute(sql)
        conexion.connection.commit()
        #cursor.close()
        print(cursor.rowcount, "record(s) deleted")
        if cursor.rowcount > 0:
            return jsonify({"isDeleted": True})
        else :
            return jsonify({"isDeleted":False, "errorDescription": "Not found"})
    except Exception as ex:
        return ex

@app.route("/incidences/edit/<idIncidencia>", methods=['PUT'])
def incidences_edit(idIncidencia):
    try: 
        body = request.json
        print(idIncidencia)
        print(body)
        cursor = conexion.connection.cursor()
        sql = "UPDATE incidencias SET observaciones = %s, estado = %s WHERE codigo = %s"
        values = (body['observations'], body['state'], idIncidencia)
        data = cursor.execute(sql, values)
        conexion.connection.commit()
    
        return jsonify({"isValidUpdated": data})
    
    except Exception as err: 
        return str(err)
    

if(__name__ == '__main__'):
    app.run(debug=True, port=5000)