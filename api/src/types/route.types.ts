import { Request, Response } from 'express';

export interface Service {
    create(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
    read(_req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
}