const express= require('express');
const mongoose=require('mongoose');
const app = express();
const routes =require('./routes');
const cors = require('cors');
mongoose.connect('mongodb+srv://Gabriel:@@gG0808@cluster0-teejn.mongodb.net/week10?retryWrites=true&w=majority'
,{useNewUrlParser:true,     
useUnifiedTopology:true,
useCreateIndex: true,
});
app.use(express.json());

//Métodos HTTP: get, post, put, delete

//Tipos de parametros:
//Query Params: req.query(Filtros, ordenação,paginação,...)
//Route Params: request.params (Identificar um recurso na alteração ou na remoção)
//Body:request.body(dados para criação ou alteração de um registro)

//MongoDB (Não Relacional)
app.use(cors({origin:'http://localhost:3000'}));
app.use(cors());
app.use(routes);
app.listen(3333); 