import fs from 'fs/promises';
import path from 'path';
import { User } from '../models/User';
import { Branch } from '../models/Branch';

const db1Path = path.join(__dirname, 'db1.json');
const db2Path = path.join(__dirname, 'db2.json');

export const readDB1 = async (): Promise<{ users: User[], branches: Branch[] }> => {
    const data = await fs.readFile(db1Path, 'utf-8');
    return JSON.parse(data);
};

export const writeDB1 = async (data: { users: User[], branches: Branch[] }): Promise<void> => {
    await fs.writeFile(db1Path, JSON.stringify(data, null, 2), 'utf-8');
};

export const readDB2 = async (): Promise<{ backUpUsers: User[], backUpBranches: Branch[] }> => {
    const data = await fs.readFile(db2Path, 'utf-8');
    return JSON.parse(data);
};

export const writeDB2 = async (data: { backUpUsers: User[], backUpBranches: Branch[] }): Promise<void> => {
    await fs.writeFile(db2Path, JSON.stringify(data, null, 2), 'utf-8');
};