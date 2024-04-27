import { Module } from '@nestjs/common';
import { UsersGroupsService } from './users-groups.service';
import { UsersGroupsController } from './users-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/users-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  controllers: [UsersGroupsController],
  providers: [UsersGroupsService],
})
export class UsersGroupsModule {}
