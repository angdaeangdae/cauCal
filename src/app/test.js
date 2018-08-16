var mysql = require('mysql');
 
var connection = mysql.createConnection({
    host    :'127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'root',
    database:'db'
});
 
connection.connect();
 
connection.query('SELECT * FROM cal_user', 
    function(err, rows, fields) {
      if (err) throw err;
 
      console.log( rows[0].id );
    }
);
connection.end();
/*
db.getConnection(
  {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    var query ="select * from cal_user";
  
    connection.execute(query,
      function(err,result)
      {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result);
        console.log(result.metaData);
        console.log(result.resultSet);
        doRelease(connection);
      });

  });

function doRelease(connection)
{
  connection.release(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}*/