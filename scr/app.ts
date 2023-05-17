import express, { Application} from 'express';
import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/post.routes';



 export class App {

   private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.router();
    }

    settings(){
        this.app.set('port', this.port || 3000)
    }

    middlewares() {
        this.app.use(express.json());
    }

    router(){
        this.app.use(IndexRoutes);
        this.app.use('/posts',PostRoutes);

    }

    async listen() {
        await this.app.listen(3000, () => {
            console.log(`Server running on port ${3000}`);
        })
    }

 }