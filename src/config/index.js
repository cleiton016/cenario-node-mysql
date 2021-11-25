module.exports = {
    app: {
        port: process.env.PORT || 4000,
        //MYSQL Conection
        port_mysql: process.env.MYSQL_PORT,
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
};
