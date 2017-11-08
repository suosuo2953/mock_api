const settings = {
  port       : process.env.NODE_PORT || 3306,
  database   : {
    protocol : "mysql",
    query    : { pool: true },
    host     : "127.0.0.1",
    database : "my_music",
    user     : "root",
    password : "abc123_"
  }
};

export default settings;