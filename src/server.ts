import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import indexRoutes from './routes/index.routes';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';

class Server {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	config() {
		const MONGO_URI = 'mongodb://localhost/MEAN_DB';
		mongoose.set('useFindAndModify', true);
		mongoose
			.connect(MONGO_URI || process.env.MONGODB_URL, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
			})
			.then((db) => console.log('DB is Connected to: ', MONGO_URI));

		//Settigs
		this.app.set('port', process.env.PORT || 3000);

		//Middlewares
		this.app.use(morgan('dev'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(helmet());
		this.app.use(compression());
		this.app.use(cors());
	}

	routes() {
		this.app.use(indexRoutes);
		this.app.use('/api/products', productsRoutes);
		this.app.use('/api/users', usersRoutes);
	}

	start() {
		this.app.listen(this.app.get('port'), () => {
			console.log('Server on port:', this.app.get('port'));
		});
	}
}

const server = new Server();
server.start();
