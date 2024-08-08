// auth.controller.ts
import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IRequest extends Request {
  user: any; // or the type of user you expect
}

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const register = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ name, password: hashedPassword });
  await user.save();
  res.status(201).send('User registered');
};

export const login = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
  // Include the user ID in the response
  res.json({ token, user_id: user._id.toString() });
};

export const verifyToken = (req: IRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string }; // Asserting the decoded type as having an id of type string
    req.user = decoded; // Now TypeScript understands req.user
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
