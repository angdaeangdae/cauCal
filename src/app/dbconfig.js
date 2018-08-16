module.exports = {
    user          : process.env.NODE_ORACLEDB_USER || "root",
    password      : process.env.NODE_ORACLEDB_PASSWORD || "root",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/db",
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
  };