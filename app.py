from flask import Flask, jsonify
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

@app.route("/incidences", methods=['GET'])
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

@app.route("/incidences/<matricula>", methods=['GET'])
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
    
@app.route("/users", methods=['GET'])
def users_list():
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
        return jsonify({"usuarios": usuario})
    except Exception as ex:
        return "Error en server"



if(__name__ == '__main__'):
    app.run(debug=True, port=5000)