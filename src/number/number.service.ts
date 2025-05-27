import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClientAsync } from 'soap';
import { NumberToWordsResponse } from './interfaces/number-to-words-result/number-to-words-result.interface';

@Injectable()
export class NumberService {
  private readonly wsdlUrl: string;

  constructor(private configService: ConfigService) {
    this.wsdlUrl = this.configService.get<string>('NUMBER_WSDL_URL');
  }

  async numberToWords(number: string): Promise<string> {
    const client = await createClientAsync(this.wsdlUrl);
    const [result] = await client.NumberToWordsAsync({ ubiNum: number }) as [NumberToWordsResponse];
    return result.NumberToWordsResult;
  }
}