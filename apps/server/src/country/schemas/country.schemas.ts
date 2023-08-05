import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CountryDocument = HydratedDocument<Country>;

@Schema()
export class Country {
  @Prop()
  simpleName: string;

  @Prop()
  englishName: string;

  @Prop()
  originName: string;

  @Prop()
  wikiLink: string;

  @Prop()
  koreanName: string;

  @Prop()
  numberCode: number;

  @Prop()
  threeLetterCode: string;

  @Prop()
  twoLetterCode: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
