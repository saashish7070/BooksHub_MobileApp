// User.ts
import mongoose, { Schema, Document, Types } from 'mongoose';
import { IBook } from './Book'; // Import IBook directly

interface IBillingAddress {
  province?: string;
  city?: string;
  area?: string;
  address?: string;
  landmark?: string;
  defaultShipping?: boolean;
  defaultBilling?: boolean;
}

interface IUser extends Document {
  uid: string;
  name: string;
  email: string;
  billingAddress?: IBillingAddress;
  contact?: number;
  bookId?: Types.ObjectId[] | IBook[];
  bookStore?: Types.ObjectId | string | any; // Adjust the type based on your Store model
  checkOutBooks?: Types.ObjectId[] | IBook[];
  soldBooks?: Types.ObjectId[] | IBook[];
}

const userSchema = new Schema<IUser>({
  uid: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  billingAddress: {
    province: { type: String },
    city: { type: String },
    area: { type: String },
    address: { type: String },
    landmark: { type: String },
    defaultShipping: { type: Boolean },
    defaultBilling: { type: Boolean },
  },
  contact: { type: Number },
  bookId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  bookStore: { type: Schema.Types.ObjectId, ref: 'Store' },
  checkOutBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  soldBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
