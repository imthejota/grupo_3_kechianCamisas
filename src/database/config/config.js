module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "kechian",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 3999 // BUG prestar atención al puerto al trabajar, modificar en caso de que sea necesario a 3306 / 3999
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
