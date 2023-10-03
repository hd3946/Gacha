import { Injectable } from '@nestjs/common';
import { startCreating, buildSetup } from './hashilip_engine/src/main';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // 수신된 parts 이미지를 조합하여 nft 이미지를 생성하는 기능 구현
    // await buildSetup();
    await startCreating(10, 1);
    return 'Hello World!';
  }
}
