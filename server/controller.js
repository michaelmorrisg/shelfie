module.exports = {
    getItems: (req,res)=>{
    const dbInstance = req.app.get('db')

    dbInstance.get_inventory()
    .then(response=>res.status(200).send(response))
},

addProduct : (req,res)=>{
    const dbInstance = req.app.get('db')

    dbInstance.create_product({name:req.body.name,price:req.body.price,img_url:req.body.imgUrl})
    .then(response=>res.status(200).send(response))
},

deleteProduct: (req,res)=>{
    const dbInstance = req.app.get('db')

    dbInstance.delete_product(req.params.id)
    .then(response=>res.status(200).send(response))
},
editProduct: (req,res)=>{
    const dbInstance = req.app.get('db')

    dbInstance.edit_product({id:req.params.id,name:req.body.name,price:req.body.price,img_url:req.body.imgUrl})
    .then(response=>res.status(200).send(response))
    .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
}



}