import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
