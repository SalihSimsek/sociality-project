const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom


const dataScrape = (req,res,next) => {
    axios.get(req.body.link).then(response => {
        const dom = new JSDOM(response.data)
        const webDoc = dom.window.document
        const productName = webDoc.querySelector("[data-buy-box-listing-title]").textContent.trim()
        const productImage = webDoc.querySelector("[data-carousel-first-image]").src
        const productPrice = webDoc.querySelector(".wt-text-title-03.wt-mr-xs-2").textContent.trim()
        req.body.productName = productName
        req.body.productImage = productImage
        req.body.productPrice = productPrice
        next()
    })
}

module.exports = dataScrape