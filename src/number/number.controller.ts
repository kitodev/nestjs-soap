import { Controller, Get, Query } from '@nestjs/common';
import { NumberService } from './number.service';

@Controller('number')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Get('to-words')
  async getWords(@Query('value') value: string): Promise<string> {
    return this.numberService.numberToWords(value);
  }
}
