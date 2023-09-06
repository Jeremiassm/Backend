import { Router } from 'express';
import { productFSService} from '../services/productFSService.js'


const router = Router()
const productService = new productFSService('Products.json');

router.get('/', (req, res) => {
    const products = productService.getAllProducts();

    res.send(products);
    });

router.post('/', (req, res) =>{
    const result  = productService.createProduct(req.body);

    res.send({
        message: result
    });
});

export default router;