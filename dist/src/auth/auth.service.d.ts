import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User | null>;
    login(user: User): Promise<{
        access_token: string;
    }>;
    register(createUserDto: any): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
