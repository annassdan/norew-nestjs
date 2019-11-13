import { Module } from '@nestjs/common';
import { PengunjungController } from './pengunjung.controller';
import { PengunjungService } from './pengunjung.service';

@Module({
  controllers: [PengunjungController],
  providers: [PengunjungService]
})
export class PengunjungModule {}
