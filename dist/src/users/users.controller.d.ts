import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findOne(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
