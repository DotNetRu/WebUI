import {IVenue} from './venue';
import {IFriend} from './friend';
import {ISession} from './session';
import {ISpeaker} from './speaker';

export interface IMeetup {
  id: string;
  name: string;
  communityId: string;
  venueId: string;
  newVenue?: IVenue;
  friendIds: string[];
  sessions: ISession[];

  newFriends: IFriend[];
  newSpeakers: ISpeaker[];
}
