import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Permission } from "src/users-permissions/entities/users-permission.entity";

@Entity('groups')
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => User, user => user.groups)
    users: User[];

    @ManyToMany(() => Permission, permission => permission.groups)
    permissions: Permission[];
}