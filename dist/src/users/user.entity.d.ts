import { Role } from '@prisma/client';
export declare class User {
    id: number;
    name: string;
    email: string;
    role: Role;
}
