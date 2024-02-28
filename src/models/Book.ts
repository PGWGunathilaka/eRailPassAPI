import {
  Document, Model, Mongoose, Schema, Types, model
} from 'mongoose';

export interface IBook extends Document {
  /** Name of the book */
  name: string;
  /** Name of the author */
  author: string;
}

interface IBookModel extends Model<IBook> { }

const schema = new Schema({
  name: { type: Schema.Types.String, required: true },
  author: { type: Schema.Types.String, required: true }
});

export const Book: IBookModel = model<IBook, IBookModel>('Book', schema);
