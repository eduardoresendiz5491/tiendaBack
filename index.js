const express = require('express'),                             // npm install express,body-parser,mongoose,cors
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      tiendaRoute = require('./Rutas/tiendaRuta')
      app = express(),
      cors = require('cors');
                                //Conecion a la base de datos ademas de descargar el mongo compass desde el navegador

var mongoURI = "mongodb://localhost:27017/tiendilla";  
mongoose.connect(mongoURI,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
         .then(()=> console.log("Base de datos en linea"))
         .catch((error) => console.log(error))         // des cargar mongo de https://www.mongodb.com/download-center/community
            
                                //Hacer los middlewares

app.use(cors({origin: true, credentials: true})); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send('Bienvenidos a la tienda de musica')
})

app.use('/tienda', tiendaRoute);

app.listen('3000', () => console.log('Esta vivo tu servidor'));


//instalar en nodemon  npm install nodemon -g   para instalarlo globalmente