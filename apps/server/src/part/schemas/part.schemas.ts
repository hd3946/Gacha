import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, ObjectId } from 'mongoose';

export type PartDocument = HydratedDocument<Part>;

@Schema()
export class Part {
  @Prop()
  partName: string;

  @Prop()
  layerId: ObjectId;

  @Prop()
  userId: ObjectId;

  @Prop()
  gachaProbability: number;

  @Prop()
  creationDate: Date;
}

export const PartSchema = SchemaFactory.createForClass(Part);
