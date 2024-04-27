import { Module } from '@nestjs/common';
import { UsersPermissionsService } from './users-permissions.service';
import { UsersPermissionsController } from './users-permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './entities/users-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  controllers: [UsersPermissionsController],
  providers: [UsersPermissionsService],
})
export class UsersPermissionsModule {}
