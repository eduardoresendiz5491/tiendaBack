const express = require('express'),
      tiendaModel = require('../Models/tienda'),
      router = express.Router();

router.get('/',(req, res) => {
    tiendaModel.find((err,newTiendas) =>{
        if (err) {
            res.status(400).json({
                ok:false,
                message: 'No se pudo traer las tiendas',
                err
            })
        }
        res.status(200).json({
            newTiendas
        })
    })
})

router.get('/:id', (req, res) => {
    let id = req.params.id;

    tiendaModel.findById(id, (err, newFindTienda) => {
        if (err){ 
            res.status(404).json({
                ok:false,
                message:`No se encontro la tienda ${id}`,
                err
            })
        }
        res.status(200).json({
            newFindTienda
        })
    })
})

router.post('/create',(req, res) =>{
    let body = req.body;

    let postTienda = {
        nameTienda: body.nameTienda,
        adressTienda: body.adressTienda,
        cellphoneTienda: body.cellphoneTienda,
        streetTienda: body.streetTienda,    
    }

    tiendaModel.create(postTienda, (err, createTienda) =>{
        if(err) {
            res.status(400).json({
                ok: false,
                message: 'Error al crear la nueva tienda',
                err
            })
        }

        res.status(200).json({
            createTienda
        })
    })
})

router.put('/:id',(req , res) =>{
    let id = req.params.id;
    let body = req.body;

    tiendaModel.findById(id,(err,tienda) =>{
        if (err) {
          return res.status(400).json({
              ok:true,
              message : 'No se encontro el id',
              err
          })  
        }
        if (!tienda) {
            return res.status(500).json({
                ok: true,
                message:'La tienda con este id no existe'
            })
        }

        tienda.nameTienda = body.nameTienda,
        tienda.streetTienda = body.streetTienda,
        tienda.adressTienda = body.adressTienda,
        tienda.cellphoneTienda = body.cellphoneTienda

        tienda.save((err,tiendaActualizada) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    message:'Error al actualizar'
                })
            }
            res.status(200).json({
                tiendaActualizada
            })
        })
    })
})

// router.put('/:id', (req, res) =>{
//     let id = req.params.id;
//     let body = req.body



//     tiendaModel.findById(id,(err, tiendaActualizada) =>{
//         if (err) {
//             return res.status(400).json({
//                 ok:false,
//                 message: `error no se encotre el ${id}`,
//                 err
//             })
//         }

//         if (!tiendaActualizada) {
//             return res.status(500).json({
//                 ok : false,
//                 message : "La tienda con este id no existe"
//             })
//         }
//         tienda.nameTienda = body.nameTienda,
//         tienda.adressTienda = body.adressTienda,
//         tienda.cellphoneTienda = body.cellphoneTienda,
//         tienda.streetTienda = body.streetTienda
//         tienda.save((err, tiendaActualizada) =>{
//             if (err) {
//                 return res.status(400).json({
//                     ok:false,
//                     message:'Error al actualizar los datos',
//                     err
//                 })
//             }
//             res.status(200).json({
//                 tiendaActualizada
//             })
//         })
//     })
// })

    module.exports = router;