const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports ={

    async index(request,response){
        const devs=await Dev.find();
        return response.json(devs);
    },
    async store(request,response){
        const {github_username, techs,latitude, longitude}=request.body;
        let dev = await Dev.findOne({github_username});
        if(!dev){
     const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);
     const{name = login, avatar_url, bio}=apiresponse.data;
     const techsarray = parseStringAsArray(techs);
     console.log(name, avatar_url, bio, github_username);
     const location={
         type:'Point',
         coordinates:[longitude,latitude],
     };
     dev =await Dev.create({
    name,
    github_username,
    bio,
    avatar_url,
    techs:techsarray,
    location,
}
)
}

    
return response.json(dev);    
}};