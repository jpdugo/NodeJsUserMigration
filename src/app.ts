import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes';
import { migrateData } from './jobs/migrateData';
import cron from 'node-cron';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

// Schedule the migration to run every 2 hours
// cron.schedule('0 */2 * * *', async () => {
//     migrateData();
// });

cron.schedule('*/5 * * * *', async () => {
    await migrateData();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});