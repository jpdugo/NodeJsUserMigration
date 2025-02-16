import { Request, Response } from 'express';
import { migrateData } from '../jobs/migrateData';

export const migrateDataController = (req: Request, res: Response): void => {
    migrateData();
    res.status(200).send('Data migrated successfully');
};