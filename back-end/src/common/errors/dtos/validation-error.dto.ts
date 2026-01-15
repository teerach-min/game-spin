import { ErrorResponse } from './common-error.dto';

export class ValidationErrorDto extends ErrorResponse {
  code: string = 'VALIDATION_ERROR';
  reason: string;
  data: {
    field: string;
    message: string;
  }[];

  constructor(errors: { field: string; message: string }[]) {
    super();
    this.reason = 'Validation failed';
    this.data = errors;
  }
}
