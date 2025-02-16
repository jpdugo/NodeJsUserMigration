import { Request, Response } from 'express';
import { getAllBranches, getAllBackUpBranches, getBranchById, createBranch, updateBranch, deleteBranch, reactivateBranch } from '../models/Branch';

export const getAllBranchesController = async (req: Request, res: Response): Promise<void> => {
    const branches = await getAllBranches();
    res.json(branches);
};

export const getAllBackUpBranchesController = async (req: Request, res: Response): Promise<void> => {
    const branches = await getAllBackUpBranches();
    res.json(branches);
};

export const getBranchByIdController = async (req: Request, res: Response): Promise<void> => {
    const branch = await getBranchById(req.params.id);
    if (branch) {
        res.json(branch);
    } else {
        res.status(404).send('Branch not found');
    }
};

export const createBranchController = async (req: Request, res: Response): Promise<void> => {
    const { name, address, city } = req.body;
    const newBranch = await createBranch(name, address, city);
    res.status(201).json(newBranch);
};

export const updateBranchController = async (req: Request, res: Response): Promise<void> => {
    const { name, address, city, isActive } = req.body;
    const branch = await updateBranch(req.params.id, name, address, city, isActive);
    if (branch) {
        res.status(200).json(branch);
    } else {
        res.status(404).send('Branch not found');
    }
};

export const deleteBranchController = async (req: Request, res: Response): Promise<void> => {
    const success = await deleteBranch(req.params.id);
    if (success) {
        res.status(200).send('Branch deleted');
    } else {
        res.status(404).send('Branch not found');
    }
};

export const reactivateBranchController = async (req: Request, res: Response): Promise<void> => {
    const branch = await reactivateBranch(req.params.id);
    if (branch) {
        res.status(200).json(branch);
    } else {
        res.status(404).send('Branch not found');
    }
};