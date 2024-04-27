import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersPermissionDto } from './create-users-permission.dto';

export class UpdateUsersPermissionDto extends PartialType(CreateUsersPermissionDto) {}
