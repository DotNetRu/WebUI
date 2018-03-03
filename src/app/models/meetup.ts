import {IVenue} from './venue';
import {IFriend} from './friend';
import {ISession} from './session';

export interface IMeetup {
  id: string;
  name: string;
  communityId: string;
  venue: IVenue;
  friends: IFriend[];
  sessions: ISession[];
}


