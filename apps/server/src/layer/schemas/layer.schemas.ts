import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, ObjectId } from 'mongoose';

export type LayerDocument = HydratedDocument<Layer>;

@Schema()
export class Layer {
  @Prop()
  layerName: string;

  @Prop()
  userId: ObjectId;

  @Prop()
  gachaProbability: number;

  @Prop()
  creationDate: Date;
}

export const LayerSchema = SchemaFactory.createForClass(Layer);
