import Sequelize  from "sequelize";
const sequelize = new Sequelize('sistemaDeCadastro', 'admin', '123', {
    host: "localhost",
    dialect: "mysql"
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type:  Sequelize.TEXT
    }
});

const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});