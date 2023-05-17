import express, { Application} from 'express';
import IndexRoutes from './routes/index.routes'


 export class App {

   private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.router();
    }

    settings(){
        this.app.set('port', this.port || 3000)
    }

    router(){
        this.app.use(IndexRoutes);
    }

    async listen() {
        await this.app.listen(3000, () => {
            console.log(`Server running on port ${3000}`);
        })
    }

 }