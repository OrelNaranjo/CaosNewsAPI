import { Test, TestingModule } from '@nestjs/testing';
import { UsersPermissionsController } from './users-permissions.controller';
import { UsersPermissionsService } from './users-permissions.service';

describe('UsersPermissionsController', () => {
  let controller: UsersPermissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersPermissionsController],
      providers: [UsersPermissionsService],
    }).compile();

    controller = module.get<UsersPermissionsController>(UsersPermissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
