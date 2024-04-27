import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersGroupDto } from './create-users-group.dto';

export class UpdateUsersGroupDto extends PartialType(CreateUsersGroupDto) {}
