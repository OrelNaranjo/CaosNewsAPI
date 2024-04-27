import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersGroupDto } from './dto/create-users-group.dto';
import { UpdateUsersGroupDto } from './dto/update-users-group.dto';
import { Group } from './entities/users-group.entity';

@Injectable()
export class UsersGroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
  ) {}

  async create(createUsersGroupDto: CreateUsersGroupDto): Promise<Group> {
    const newGroup = this.groupsRepository.create(createUsersGroupDto);
    return this.groupsRepository.save(newGroup);
  }

  findAll(): Promise<Group[]> {
    return this.groupsRepository.find();
  }

  findOne(id: number): Promise<Group> {
    return this.groupsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUsersGroupDto: UpdateUsersGroupDto): Promise<Group> {
    await this.groupsRepository.update(id, updateUsersGroupDto);
    return this.groupsRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<void> {
    return this.groupsRepository.delete(id).then(() => null);
  }
}