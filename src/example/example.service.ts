import { Injectable } from '@nestjs/common';
import { IParamExemple } from 'src/app.controller';

@Injectable()
export class ExampleService {
  async addBorrower(borrower: IParamExemple): Promise<boolean> {
    console.log('added ' + borrower.firstName);

    return true;
  }
}
