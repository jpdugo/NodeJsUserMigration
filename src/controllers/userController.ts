import { Request, Response } from 'express';
import { getAllUsers, getAllBackUpUsers, getUserById, createUser, updateUser, deleteUser, reactivateUser } from '../models/User';

export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
    const users = await getAllUsers();
    res.json(users);
};

export const getAllBackUpUsersController = async (req: Request, res: Response): Promise<void> => {
    const users = await getAllBackUpUsers();
    res.json(users);
};

export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    const user = await getUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
};

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    const { name, lastname, email, phone, branch } = req.body;
    const newUser = await createUser(name, lastname, email, phone, branch);
    res.status(201).json(newUser);
};

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
    const { name, lastname, email, phone, branch, isActive } = req.body;
    const user = await updateUser({ id: req.params.id, name, lastname, email, phone, branch, isActive });
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
};

export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    const success = await deleteUser(req.params.id);
    if (success) {
        res.status(200).send('User deleted');
    } else {
        res.status(404).send('User not found');
    }
};

export const reactivateUserController = async (req: Request, res: Response): Promise<void> => {
    const user = await reactivateUser(req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
};