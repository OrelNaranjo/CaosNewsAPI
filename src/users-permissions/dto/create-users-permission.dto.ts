import { IsNotEmpty, IsString } from "class-validator";

export class CreateUsersPermissionDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
