import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { OfferEntity } from '../offer/index.js';
import { UserEntity } from '../user/index.js';

@modelOptions({
  schemaOptions: {
    collection: 'comments',
  },
})

export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true, type: String })
  public text!: string;

  @prop({ required: true, type: Number })
  public rate!: number;

  @prop({
    ref: () => OfferEntity,
    required: true,
  })
  public offerId!: Ref<OfferEntity>;

  @prop({
    ref: () => UserEntity,
    required: true,
  })
  public userId!: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
