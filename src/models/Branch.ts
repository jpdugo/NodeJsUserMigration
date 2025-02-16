import { readDB1, writeDB1, readDB2 } from '../data/db';
import { generateId } from '../utils/idGenerator';

export interface Branch {
    id: string;
    name: string;
    address: string;
    city: string;
    isActive: boolean;
}

interface UpdateBranchParams {
    id: string;
    name?: string;
    address?: string;
    city?: string;
    isActive?: boolean;
}

export const getAllBranches = async (): Promise<Branch[]> => {
    const db1 = await readDB1();
    return db1.branches;
};

export const getAllBackUpBranches = async (): Promise<Branch[]> => {
    const db2 = await readDB2();
    return db2.backUpBranches;
};

export const getBranchById = async (id: string): Promise<Branch | undefined> => {
    const db1 = await readDB1();
    return db1.branches.find(branch => branch.id === id);
};

export const createBranch = async (name: string, address: string, city: string): Promise<Branch> => {
    const db1 = await readDB1();
    const newBranch: Branch = { id: await generateId(4), name, address, city, isActive: true };
    db1.branches.push(newBranch);
    await writeDB1(db1);
    return newBranch;
};

export const updateBranch = async (id: string, name: string, address: string, city: string, isActive: boolean): Promise<Branch | undefined> => {
    const db1 = await readDB1();
    const branch = db1.branches.find(branch => branch.id === id);
    if (branch) {
        branch.name = name;
        branch.address = address;
        branch.city = city;
        branch.isActive = isActive;
        await writeDB1(db1);
    }
    return branch;
};

export const updateUser = async (params: UpdateBranchParams): Promise<Branch | undefined> => {
    const db1 = await readDB1();
    const branch = db1.branches.find(branch => branch.id === params.id);
    if (branch) {
        if (params.name !== undefined) branch.name = params.name;
        if (params.address !== undefined) branch.address = params.address;
        if (params.city !== undefined) branch.city = params.city;
        if (params.isActive !== undefined) branch.isActive = params.isActive;
        await writeDB1(db1);
    }
    return branch;
};

export const deleteBranch = async (id: string): Promise<boolean> => {
    const db1 = await readDB1();
    const branch = db1.branches.find(branch => branch.id === id);
    if (branch) {
        branch.isActive = false;
        await writeDB1(db1);
        return true;
    }
    return false;
};

export const reactivateBranch = async (id: string): Promise<Branch | undefined> => {
    const db1 = await readDB1();
    const branch = db1.branches.find(user => user.id === id);
    if (branch) {
        branch.isActive = true;
        await writeDB1(db1);
    }
    return branch;
};