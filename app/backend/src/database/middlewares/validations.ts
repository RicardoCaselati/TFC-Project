import { Request, Response } from 'express';

const validate = async (req: Request, res: Response) => {
  res.status(200).json({ role: req.body.user.role });
};

export default validate;
