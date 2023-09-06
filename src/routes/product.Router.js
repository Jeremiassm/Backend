import { Router } from 'express';
import { productFSService} from '../services/productFSService.js'
import { productDBService } from '../services/productDBService.js';
import { uploader } from '../utils/multerUtil.js';

const router = Router()
//const ProductService = new productFSService('Products.json');
const ProductService = new productDBService();


router.get('/', (req, res) => {
    const products = ProductService.getAllProducts();

    res.send(products);
    });

router.post('/', uploader.array('thumbnails', 3), (req, res) =>{

    if (req.files){
        req.body.thumbnails = []
        req.files.forEach((file) =>{
            req.body.thumbnails.push(file.filename)
        })
    }

    const result = ProductService.createProduct(req.body);

    res.send({
        message: result
    });
});

export default router;