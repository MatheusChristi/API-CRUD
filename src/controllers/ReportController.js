const User = require('../models/User');
const {Op} = require('sequelize')
module.exports = {
    async Show(req, res){
        const user = await User.findAll({
            attributes: ['name', 'email'],
            where:{
                email:{
                    [Op.like]: '%@rocketseat.com.br%'
                }
            }
        })
        return res.json(user);
    } 
};