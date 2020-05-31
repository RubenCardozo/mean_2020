import { Request, Response, Router } from 'express';
import User from '../models/User';

class UsersRoutes {
	router: Router;

	constructor() {
		this.router = Router();
		this.routes();
	}

	//All users
	async getAll(req: Request, res: Response): Promise<void> {
		const users = await User.find();
		res.json(users);
	}

	// Only one user for id
	async getByUsername(req: Request, res: Response): Promise<void> {
		//Parameters. http://localhost:3000/users/:username
		let user = await User.findOne(req.params).populate(
			'products',
			'name price -_id'
		);
		res.json(user);
	}

	//Creating new product
	async save(req: Request, res: Response): Promise<void> {
		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			username: req.body.username,
		});
		let dataUser = await newUser.save();
		res.json(dataUser);
	}

	//Update product
	async update(req: Request, res: Response): Promise<void> {
		let user = await User.findOneAndUpdate(req.params, req.body, { new: true });
		res.json(user);
	}

	//Delete product
	async delete(req: Request, res: Response): Promise<void> {
		let product = await User.findOneAndDelete(req.params);
		res.json({ message: 'User deleted!!!!' });
	}

	routes() {
		this.router.get('/', this.getAll);
		this.router.get('/:username', this.getByUsername);
		this.router.post('/', this.save);
		this.router.put('/:username', this.update);
		this.router.delete('/:username', this.delete);
	}
}
const usersRoutes = new UsersRoutes();

export default usersRoutes.router;
