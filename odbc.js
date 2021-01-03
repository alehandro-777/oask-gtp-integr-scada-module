const odbc = require('odbc');
 
exports.Connect = (dsn) => {
    return odbc.connect(`DSN=${dsn};`)        
}

exports.Select = (connection, scada_id) => {
    return  connection.query(`SELECT Id, CurrentValueAsReal, CurrentTime, CurrentQuality FROM CDBPoint WHERE Id = ${scada_id}`) 
}

exports.Close = (connection) => {
    return connection.close();
}


