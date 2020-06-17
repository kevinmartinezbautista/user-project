'use strict'
const SequelizeDB = use('App/utils/Sequelize');
const Sequelize = use('sequelize');
const UsuarioModel = use('App/Models/Sequelize/usuario')(SequelizeDB, Sequelize.DataTypes);
class UserController {
    async index () {
        const users = await UsuarioModel.findAll();
        if (!users) {
            return {
                "message":"Sin datos",
                "data":"200"
            };
        }
        return {
            "message":"Ok",
            "data":JSON.parse(JSON.stringify(users))
        };
    }

    async show({request,response}) {
        const {id} = request.all();
        console.log(id);
        let user = await UsuarioModel.findAll({ 
            where:{id_usuario:id}
        });
        user = JSON.parse( JSON.stringify(user));
        return user.length ? 
        {"data":user,"message":"Ok"}:{"data":user,"message":"Usuario no encontrado"};
    }

    async create({ request, response }) { 
        const body = request.all();
        body.usuario_de_creacion = 'sistemas';
        let user = JSON.parse( JSON.stringify( await UsuarioModel.findAll({ 
            where:{id_usuario:body.id_usuario}
        })));
        if (user.length){
            return {"message":"Usuario existente"}
        }
        let data;
        try {
            data = await UsuarioModel.create(body);
            data = {
                'message':'OK',
                'row:':data
            };
        } catch (error) {
            data = {
                'message':'OK',
                'row:':error
            };
        }
        return  data;
    }
}

module.exports = UserController
