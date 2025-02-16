import { readDB1 } from '../data/db';

export const generateId = async (length: number): Promise<string> => {
    const db1 = await readDB1();
    return String(db1.users.length + 1).padStart(length, '0');
};