import {IVenue} from './venue';
import {IFriend} from './friend';
import {ISession} from './session';
import {ISpeaker} from './speaker';

export interface IMeetup {
  id: string;
  name: string;
  communityId: string;
  venueId: string;
  friendIds: string[];
  sessions: ISession[];

  newVenue?: IVenue;
  newFriends: IFriend[];
  newSpeakers: ISpeaker[];
}


export class MeetupFactory {
  public static createMeetup(): IMeetup {
    return {
      newVenue: null,
      sessions: [{
        startTime: new Date(),
        endTime: new Date(),
        talk: {
          id: '',
          codeUrl: '',
          description: '',
          seeAlsoTalkIds: [{
            value: ''
          }],
          slidesUrl: '',
          title: '',
          videoUrl: '',
          speakerIds: ['']
        }
      }],
      venueId: '',
      newFriends: [],
      id: '',
      name: '',
      friendIds: [''],
      communityId: 'SpbDotNet',
      newSpeakers: [],
    };
  }
}
