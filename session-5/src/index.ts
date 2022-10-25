import express from 'express';
import router from './routes';
import * as dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler';
import logger from './middlewares/logger';

dotenv.config();

const PORT = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

const app = express();

app.use(express.json());
app.use(logger);
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} environment ${environment}`);
});