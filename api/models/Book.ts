import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  description?: string;
  categories?: string;
  price: number;
  newPrice?: number;
  bookPicture: string;
  status: string;
  sellerId: mongoose.Types.ObjectId;
  buyerId?: mongoose.Types.ObjectId | null;
  bookStore?: mongoose.Types.ObjectId;
  checkout: boolean;
  booked: boolean;
  soldOut: boolean;
  timeStamp?: Date;
}

const bookSchema = new Schema<IBook>({
  title: { type: String,  },
  author: { type: String,  },
  description: { type: String },
  categories: { type: String },
  price: { type: Number,  },
  newPrice: { type: Number },
  bookPicture: { type: String,  },
  status: { type: String,  },
  sellerId: { type: Schema.Types.ObjectId, ref: 'User',  },
  buyerId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  bookStore: { type: Schema.Types.ObjectId, ref: 'Store' },
  checkout: { type: Boolean, default: false },
  booked: { type: Boolean, default: false },
  soldOut: { type: Boolean, default: false },
  timeStamp: { type: Date },
});

const Book = mongoose.model<IBook>('Book', bookSchema);

export default Book;
