import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersPermissionsService } from './users-permissions.service';
import { CreateUsersPermissionDto } from './dto/create-users-permission.dto';
import { UpdateUsersPermissionDto } from './dto/update-users-permission.dto';

@Controller('users-permissions')
export class UsersPermissionsController {
  constructor(private readonly usersPermissionsService: UsersPermissionsService) {}

  @Post()
  create(@Body() createUsersPermissionDto: CreateUsersPermissionDto) {
    return this.usersPermissionsService.create(createUsersPermissionDto);
  }

  @Get()
  findAll() {
    return this.usersPermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersPermissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersPermissionDto: UpdateUsersPermissionDto) {
    return this.usersPermissionsService.update(+id, updateUsersPermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersPermissionsService.remove(+id);
  }
}
