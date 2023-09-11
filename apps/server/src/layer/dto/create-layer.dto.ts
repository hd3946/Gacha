import { Date, ObjectId } from 'mongoose';

export class CreateLayerDto {
  readonly layerName: string;
  readonly userId: ObjectId;
  readonly gachaProbability: number;
  readonly creationDate: Date;
}
