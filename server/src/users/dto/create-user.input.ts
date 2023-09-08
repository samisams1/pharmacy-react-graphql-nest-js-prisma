import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { PasswordStrength } from 'src/common/validators/password-strength.validator';

@InputType()
export class CreateUserInput {
  @Field()
   @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;

  @Field()
  @Length(6, 20)
  @IsNotEmpty({ message: 'Password is required' })
  @PasswordStrength({ message: 'The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit' })
  password: string;

  @Field({ nullable: true })
  resetToken: string;
  
}