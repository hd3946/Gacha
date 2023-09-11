import { Date, ObjectId } from 'mongoose';

export class CreatePartDto {
  readonly partName: string;
  readonly layerId: ObjectId;
  readonly userId: ObjectId;
  readonly gachaProbability: number;
  readonly creationDate: Date;
}
