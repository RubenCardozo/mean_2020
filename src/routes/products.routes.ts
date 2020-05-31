import { Request, Response, Router } from 'express';
import Product from '../models/Product';

class ProductsRoutes {
	router: Router;

	constructor() {
		this.router = Router();
		this.routes();
	}

	//All products
	async getAll(req: Request, res: Response): Promise<void> {
		const products = await Product.find();
		res.json(products);
	}

	// Only one product for id
	async getById(req: Request, res: Response): Promise<void> {
		//Parameters. http://localhost:3000/products/id
		let product = await Product.findById(req.params.id);
		res.json(product);
	}

	//Creating new product
	async save(req: Request, res: Response): Promise<void> {
		const newProduct = new Product({
			name: req.body.name,
			price: req.body.price,
			sku: req.body.sku,
			description: req.body.description,
			category: req.body.category,
		});
		let dataProduct = await newProduct.save();
		res.json(dataProduct);
	}

	//Update product
	async update(req: Request, res: Response) {
		let product = await Product.findByIdAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true }
		);
		res.json(product);
	}

	//Delete product
	async delete(req: Request, res: Response) {
		let product = await Product.findByIdAndDelete(req.params);
		res.json({ message: 'Product deleted!!!!' });
	}

	routes() {
		this.router.get('/', this.getAll);
		this.router.get('/:id', this.getById);
		this.router.post('/', this.save);
		this.router.put('/:id', this.update);
		this.router.delete('/:id', this.delete);
	}
}
const productsRoutes = new ProductsRoutes();

export default productsRoutes.router;
