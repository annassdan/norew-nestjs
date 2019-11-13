import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PengunjungModule } from './endpoints/pengunjung/pengunjung.module';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 *  Install NestJs TypeORM Wrapper 'npm install --save @nestjs/typeorm'
 */
@Module({
  imports: [
    /**
     * Konfigurasi Database forRoot dari TypeORM Nest akan ter-inject otomatis
     * dari file 'ormconfig.json' yang berada di root folder
     */
    TypeOrmModule.forRoot(),

    /* Import Pengunjung Module */
    PengunjungModule

  ],
  controllers: [AppController],
  providers: [ AppService ],
  exports: []
})
export class AppModule {}
