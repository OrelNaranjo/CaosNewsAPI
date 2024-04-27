import { IsNotEmpty, IsString } from "class-validator";

export class CreateUsersGroupDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
