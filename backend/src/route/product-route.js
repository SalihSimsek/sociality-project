const router = require('express').Router()
const ProductService = require('../service/product-service')
const dataScrape = require('../middleware/data-scrape')

router.post('/', dataScrape, async (req, res) => {
    const product = { name: req.body.productName, price: req.body.productPrice, image: req.body.productImage }
    const createdProduct = await ProductService.add(product)
    res.status(200).send(createdProduct)
})

router.get('/',async(req,res) => {
    const products = await ProductService.findAll()

    res.status(200).send(products)
})

router.get('/:id', async(req,res) => {
    const product = await ProductService.find(req.params.id)
    if(!product) return res.status(400).send({'message':'Product not found'})
    res.status(200).send(product)
})

module.exports = router