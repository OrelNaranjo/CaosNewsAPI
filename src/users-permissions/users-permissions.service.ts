import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersPermissionDto } from './dto/create-users-permission.dto';
import { UpdateUsersPermissionDto } from './dto/update-users-permission.dto';
import { Permission } from './entities/users-permission.entity';

@Injectable()
export class UsersPermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionsRepository: Repository<Permission>,
  ) {}

  async create(createUsersPermissionDto: CreateUsersPermissionDto): Promise<Permission> {
    const newPermission = this.permissionsRepository.create(createUsersPermissionDto);
    return this.permissionsRepository.save(newPermission);
  }

  findAll(): Promise<Permission[]> {
    return this.permissionsRepository.find();
  }

  findOne(id: number): Promise<Permission> {
    return this.permissionsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUsersPermissionDto: UpdateUsersPermissionDto): Promise<Permission> {
    await this.permissionsRepository.update(id, updateUsersPermissionDto);
    return this.permissionsRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<void> {
    return this.permissionsRepository.delete(id).then(() => null);
  }
}