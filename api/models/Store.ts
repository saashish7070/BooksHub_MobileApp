import mongoose, { Schema, Document } from 'mongoose';

interface IStore extends Document {
  storeName: string;
  ownerId: mongoose.Types.ObjectId;
  location: string;
  range: string;
  about?: string;
  status?: string;
  rate: number;
  storePicture?: string;
  contact: number;
  websiteUrl?: string;
  booksId: mongoose.Types.ObjectId[];
  date?: Date;
}

const storeSchema = new Schema<IStore>({
  storeName: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  location: { type: String, required: true },
  range: { type: String, required: true },
  about: { type: String },
  status: { type: String },
  rate: { type: Number, default: 0 },
  storePicture: { type: String, required: true},
  contact: { type: Number, required: true },
  websiteUrl: { type: String },
  booksId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  date: { type: Date },
});

const Store = mongoose.model<IStore>('Store', storeSchema);

export default Store;
