import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ValidationErrorDto } from '../dtos/validation-error.dto';

export function validationExceptionFactory(errors: ValidationError[]) {
  const formattedErrors = errors.map((error) => {
    const messages = Object.values(error.constraints || {});
    return {
      field: error.property,
      message: messages.join(', '),
    };
  });

  const validationErrorDto = new ValidationErrorDto(formattedErrors);

  return new BadRequestException(validationErrorDto);
}
