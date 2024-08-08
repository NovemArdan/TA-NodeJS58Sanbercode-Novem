// types.d.ts
import 'express';

declare module 'express' {
  interface Request {
    user?: {
      id: string;
    } // Assuming your JWT contains an id property
  }
}
