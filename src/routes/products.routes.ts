import { Router } from 'express';
import ProductsCtrl from '../controllers/products.ctrl';

class ProductsRoutes {
	router: Router;
	productsCtrl: ProductsCtrl;

	constructor() {
		this.router = Router();
		this.productsCtrl = new ProductsCtrl();
		this.routes();
	}

	routes() {
		this.router.get('/', this.productsCtrl.getAll);
		this.router.get('/:id', this.productsCtrl.getById);
		this.router.post('/', this.productsCtrl.save);
		this.router.put('/:id', this.productsCtrl.update);
		this.router.delete('/:id', this.productsCtrl.delete);
	}
}
const productsRoutes = new ProductsRoutes();

export default productsRoutes.router;
