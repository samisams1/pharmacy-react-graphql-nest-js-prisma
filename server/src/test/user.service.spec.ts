import { Test, TestingModule } from '@nestjs/testing';
import { UserMock } from  '../users/mocks/user.mock';
import { UsersService } from '../users/users.service';

describe('UserService', () => {
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        // Replace the actual UserService with the mock implementation
        {
          provide: UsersService,
          useClass: UserMock,
        },
      ],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });

  it('should return all users', async () => {
    const users = await userService.findAll();
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
    
    users.forEach((user) => {
      console.log(`User ID: ${user.id}`);
      console.log(`Username: ${user.username}`);
      console.log(`Email: ${user.email}`);
    });
  });

  // Add more test cases as needed
});