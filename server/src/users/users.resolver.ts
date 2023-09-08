import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { BadRequestException, UseGuards, UsePipes } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import Role from 'src/enums/roles.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import isValidEmail from 'src/common/validators/isEmailvalid';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Mutation(() => User)
  @UsePipes(new ValidationPipe())
 // @UsePipes(new ValidationPipe())
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {


    try {
      // Validate unique username and check valid email
    const username = createUserInput.username;
    const email = createUserInput.email;
    const existingUser = await this.usersService.findUserByUsername(username);
   // const existingEmail = await this.usersService.findUserByUsername(email);
    if (existingUser) {
      throw new Error('Username already exists');
    }
    if (!isValidEmail(email)) {
      throw new Error('Invalid email format');
    }
   
    return this.usersService.createUser(createUserInput);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
   
  }

  @Query(() => [User])
 /* async users(
    @Args('take', { nullable: true }) take?: number,
    @Args('skip', { nullable: true }) skip?: number,
  ): Promise<User[]> {
    const users = await this.usersService.findAll(take, skip);
    return users;
  }*/
  async users(): Promise<User[] | null> {
    return this.usersService.findAll();
  } 

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }
  @UseGuards(GqlAuthGuard,RolesGuard)
  @Roles(Role.CUSTOMER)
  @UsePipes(new ValidationPipe())
  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.deleteUser(id);
  }
  @Mutation(()=>User)
  async changePassword(
    @Args('userId') userId: number,
    @Args('currentPassword') currentPassword: string,
    @Args('newPassword') newPassword: string,
  ): Promise<User | null> {
    return this.usersService.changePassword(userId, currentPassword, newPassword);
  }
 /* @Mutation()
  async forgotPassword(@Args('email') email: string): Promise<void> {
    return this.usersService.forgotPassword(email);
  } 
  @Mutation()
  async resetPassword(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<User> {
    return this.usersService.resetPassword(token, newPassword);
  } */
}
