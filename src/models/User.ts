import { readDB1, writeDB1, readDB2 } from '../data/db';
import { generateId } from '../utils/idGenerator';

export interface User {
    id: string;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    branch: string;
    isActive?: boolean;
}

interface UpdateUserParams {
    id: string;
    name?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    branch?: string;
    isActive?: boolean;
}

export const getAllUsers = async (): Promise<User[]> => {
    const db1 = await readDB1();
    return db1.users;
};

export const getAllBackUpUsers = async (): Promise<User[]> => {
    const db2 = await readDB2();
    return db2.backUpUsers;
};

export const getUserById = async (id: string): Promise<User | undefined> => {
    const db1 = await readDB1();
    return db1.users.find(user => user.id === id);
};

export const createUser = async (name: string, lastname: string, email: string, phone: string, branch: string): Promise<User> => {
    const db1 = await readDB1();
    const newUser: User = { id: await generateId(4), name, lastname, email, phone, branch, isActive: true };
    db1.users.push(newUser);
    await writeDB1(db1);
    return newUser;
};

export const updateUser = async (params: UpdateUserParams): Promise<User | undefined> => {
    const db1 = await readDB1();
    const user = db1.users.find(user => user.id === params.id);
    if (user) {
        if (params.name !== undefined) user.name = params.name;
        if (params.lastname !== undefined) user.lastname = params.lastname;
        if (params.email !== undefined) user.email = params.email;
        if (params.phone !== undefined) user.phone = params.phone;
        if (params.branch !== undefined) user.branch = params.branch;
        if (params.isActive !== undefined) user.isActive = params.isActive;
        await writeDB1(db1);
    }
    return user;
};

export const deleteUser = async (id: string): Promise<boolean> => {
    const db1 = await readDB1();
    const user = db1.users.find(user => user.id === id);
    if (user) {
        user.isActive = false;
        await writeDB1(db1);
        return true;
    }
    return false;
};

export const reactivateUser = async (id: string): Promise<User | undefined> => {
    const db1 = await readDB1();
    const user = db1.users.find(user => user.id === id);
    if (user) {
        user.isActive = true;
        await writeDB1(db1);
    }
    return user;
};