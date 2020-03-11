const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports={
async index(request, response){
    const {latitude, longitude, techs} = request.query;
    const techsarray = parseStringAsArray(techs);

//Buscar todos os devs num raio de 10 KM
//Filtrar por tecnologias
const devs =await Dev.find({
    techs:{
        $in: techsarray,
    },
    location:{
        $near: {
            $geometry:{
                type:'Point',
                coordinates:[Number(longitude), Number(latitude)],
            },
            $maxDistance: 10000,
        },
    },
});

return response.json({devs});
}

}   