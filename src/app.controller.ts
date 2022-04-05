import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ExampleService } from './example/example.service';

export interface IParamExemple {
  mail: string;
  firstName: string;
  lastName: string;
}

export interface IReturnExemple {
  success: boolean;
}

@Controller()
export class AppController {
  constructor(private readonly qardService: ExampleService) {}

  @GrpcMethod('exampleService', 'exampleCall')
  async exampleMethod(
    data: IParamExemple,
    metadata: any,
  ): Promise<IReturnExemple> {
    console.log(metadata);

    const test = await this.qardService.addBorrower(data);

    return { success: test };
  }
}
