import { Injectable } from '@nestjs/common';
import { createClientAsync } from 'soap';

@Injectable()
export class NumberService {
  private readonly wsdlUrl =
    'https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL';

  async numberToWords(number: string): Promise<string> {
    const client = await createClientAsync(this.wsdlUrl);
    const [result] = await client.NumberToWordsAsync({ ubiNum: number });
    return result?.NumberToWordsResult || 'Conversion failed';
  }
}
