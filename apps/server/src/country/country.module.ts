import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CountryController } from './country.controller'
import { CountryService } from './country.service'
import { Country, CountrySchema } from './schemas/country.schemas'

@Module({
  imports: [MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }])],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}
