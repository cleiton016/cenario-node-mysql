const dbConn = require("@config/db.config");

const User = {};

User.login = async (req, res) => {
    const dados = req.body
    
    sql = `SELECT id FROM users  WHERE nome = '${dados.nome}' AND senha = '${dados.senha}'`;

    const user = await dbConn.execute(sql);
    
    if (user.res.length > 0) {
        res.send({ error: 0, msg: "Logged in user!", user });
    } else {
        res.send({ error: 1, msg: "Failed to login" });
    }
};

User.get = async (req, res) => {
    const { id } = req.params;
    let sql
    if(id){
        sql = `SELECT * FROM users WHERE id = ${id}`
    }else{
        sql = "SELECT * FROM users"
        
    }
    const user = await dbConn.execute(sql);
    if (user.err == 0 ) {
        res.send({ error: 0, msg: "Results encountered!", users: user.res });
    } else {
        res.send({ error: 1, msg: user.sqlMessage });
    }
};

User.add = async (req, res) => {
    const dados = req.body
    
    sql = `INSERT INTO users (nome, senha) VALUES ('${dados.nome}','${dados.senha}');`;

    const user = await dbConn.execute(sql);
    if (user) {
        res.send({ error: 0, msg: "User created successfully!", user });
    } else {
        res.send({ error: 1, msg: "Failed to create user!" });
    }
};

User.edit = (req, res) => {
    let user = true;
    if (user) {
        res.send({ error: 0, msg: "User edited successfully!", user });
    } else {
        res.send({ error: 1, msg: "Failed to create user!" });
    }
};

User.delete = (req, res) => {
    let user = true;
    if (user) {
        res.send({ error: 0, msg: "User deleted successfully!" });
    } else {
        res.send({ error: 1, msg: "Failed to delet user!" });
    }
};

module.exports = User;
