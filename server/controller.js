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
}


}