import { readDB1, readDB2, writeDB2 } from '../data/db';
import logger from '../utils/logger';

export const migrateData = async (): Promise<void> => {
    try {
        logger.info('Starting data migration...');
        const db1 = await readDB1();
        logger.info('Reading data from DB1');
        const db2 = await readDB2();
        logger.info('Reading data from DB2');

        const updatedDB2 = {
            backUpUsers: mergeData(db1.users, db2.backUpUsers),
            backUpBranches: mergeData(db1.branches, db2.backUpBranches)
        };

        await writeDB2(updatedDB2);
        logger.info('Data written to DB2');
        logger.info('Data migration completed successfully');
    } catch (error) {
        logger.error('Error during data migration:', error);
        throw error;
    }
};

const mergeData = (source: any[], target: any[]): any[] => {
    const targetMap = new Map(target.map(item => [item.id, item]));
    source.forEach(item => {
        targetMap.set(item.id, item);
    });
    return Array.from(targetMap.values());
};