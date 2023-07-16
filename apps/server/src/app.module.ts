import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CountryModule } from './country/country.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://tester:000099@groundwater.iptime.org:27017/?authMechanism=DEFAULT', {
      dbName: 'gachaFools'
    }),
    CountryModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
