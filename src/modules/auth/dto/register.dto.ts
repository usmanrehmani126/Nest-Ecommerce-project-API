import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  @MaxLength(20, { message: 'Password must be at most 20 characters long' })
  password: string;

  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'First name must be at least 3 characters long' })
  @MaxLength(20, { message: 'First name must be at most 20 characters long' })
  firstName?: string;

  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'Last name must be at least 3 characters long' })
  @MaxLength(20, { message: 'Last name must be at most 20 characters long' })
  lastName?: string;
}
