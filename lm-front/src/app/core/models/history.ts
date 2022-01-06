import { Book } from './book';
import { User } from './user';

export class History {
  id: number ;
  date: string ;
  type: string ;
  user: User ;
  book: Book ;
}
