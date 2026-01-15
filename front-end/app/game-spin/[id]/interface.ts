export interface GameSpin {
    id: string;
    point: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
export interface User {
    id: string;
    name: string;
    point: number;
  }
  
export interface SpinResult {
    spin: {
      id: string;
      point: number;
    };
    user: User;
  }
  