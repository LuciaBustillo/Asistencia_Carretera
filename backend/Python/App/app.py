from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
cors = CORS()

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'asistroad'
cors.init_app(app)
conexion = MySQL(app)

@app.route("/")
def saludo():
    return "Hola Lucia"

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
                return jsonify({"isValidUser": "true"})
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

def register_pass_validations(body):
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
        isValidRegister, errorDesc = register_pass_validations(body)
        
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


@app.route("/incidences", methods=['POST'])
def incidence_save():
    try:
        body = request.json
        cursor = conexion.connection.cursor()
        sql = 'INSERT INTO incidencias (matricula, tipo_problema, problema_vehiculo, observaciones, daños, urgencia, localizacion, atendido) VALUES (%s, %s, %s, %s, %s, %s, %s)'
        values = ( body['registration'], body['problem'], body['problemVehicle'], body['observations'], body['injuries'], body['urgency'], body['localization'], body['localization'], body['attended'])
        data = cursor.execute(sql, values)
        conexion.connection.commit()
        
        return jsonify({"isValidInserted": data})
        
    except Exception as ex:
        return  str(ex)


@app.route("/incidencesss", methods=['GET'])
def incidences_list():
    try:
        cursor = conexion.connection.cursor()
        sql = "SELECT * FROM incidencias"
        cursor.execute(sql)
        datos = cursor.fetchall()
        incidencias = []
        for columna in datos:
            incidencia = {
                'codigo': columna[0], 
                'matricula': columna[1], 
                'tipo_problema': columna[2], 
                'problema_vehiculo': columna[3], 
                'observaciones': columna[4],
                'daños': columna[5],
                'urgencia': columna[6],
                'localizacion': columna[7],
                'atendido': columna[8]
            }
            incidencias.append(incidencia)
        return jsonify({"incidencias": incidencias})
    except Exception as ex:
        return "Error en server"

@app.route("/incidencessss/<matricula>", methods=['GET'])
def incidences_one(matricula):
    try: 
        print(matricula)
        cursor = conexion.connection.cursor()
        sql = "SELECT * FROM incidencias WHERE matricula like('{0}')".format(matricula)
        cursor.execute(sql)
        datos = cursor.fetchone()
        print(datos)
        if(datos != None):
            incidencia = {"codigo": datos[0], 'matricula': datos[1], 'tipo_problema': datos[2]}
            return jsonify({"incidencia": incidencia})
        else:
            return jsonify({"mensaje": "Matricula sin incidencias"})
    except Exception as ex:
        return "Error en server"

@app.route("/usuarios", methods=['GET'])
def usuarios_list():
    try:
        cursor = conexion.connection.cursor()
        sql = "SELECT * FROM usuarios"
        cursor.execute(sql)
        datos = cursor.fetchall()
        usuarios = []
        for columna in datos:
            usuario = {
                'codigo': columna[0], 
                'usuario': columna[1], 
                'contraseña': columna[2], 
                'nombre': columna[3], 
                'apellido': columna[4],
                'dni': columna[5],
                'telefono': columna[6]
            }
            usuarios.append(usuario)
        return jsonify({"usuarios": usuarios})
    except Exception as ex:
        return "Error en server"


if(__name__ == '__main__'):
    app.run(debug=True, port=5000)