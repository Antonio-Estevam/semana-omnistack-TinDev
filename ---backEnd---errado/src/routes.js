const express = require('express');

const routes = express.Router();

routes.get('/',(req,res)=>{
    return res.json({message:`olá ${req.query.name}`});
    //get post put delet
});

routes.post('/devs',(req, res) => {
    console.log(req.body);

    return res.json( req.body );
});

module.exports = routes;