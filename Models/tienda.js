const mongoose = require('mongoose');

const tiendaModel = new mongoose.Schema({
    nameTienda:{
        type: String,
    },
    addressTienda:{
        type: String
    },
    cellphoneTienda:{
        type: Number
    },
    streetTienda: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tiendas', tiendaModel);