import { Users } from '../../users/entities/Users.entity';

export class Profiles {
  title: string[100];
  imageURL: string[255];
  user: Users;
}
