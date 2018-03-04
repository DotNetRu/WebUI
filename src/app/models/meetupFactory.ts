import {ISpeaker} from "./speaker";
import {ITalk} from "./talk";
import {IFriend} from "./friend";
import {ISession} from "./session";
import {IMeetup} from "./meetup";
import {IVenue} from "./venue";

export class MeetupFactory {
  public static createSpeaker(): ISpeaker {
    return {
      id: '',
      twitterUrl: '',
      contactsUrl: '',
      blogUrl: '',
      description: '',
      companyName: '',
      name: '',
      habrUrl: '',
      companyUrl: '',
      isNew: false
    };
  }

  public static createTalk(): ITalk {
    return {
      id: '',
      codeUrl: '',
      description: '',
      seeAlsoTalkIds: [{
        value: ''
      }],
      slidesUrl: '',
      title: '',
      videoUrl: '',
      speakers: [MeetupFactory.createSpeaker()]
    };
  }

  public static createFriend(): IFriend {
    return {
      id: '',
      url: '',
      name: '',
      description: '',
      isNew: false
    };
  }

  public static createSession(previousEnd?: Date): ISession {
    let startDate = new Date();
    startDate.setHours(19, 0, 0);

    let endDate = new Date(startDate);
    endDate.setTime(endDate.getTime() + (60 * 60 * 1000));

    if (previousEnd) {
      startDate = new Date(previousEnd);
      startDate.setTime(startDate.getTime() + (30 * 60 * 1000));

      endDate = new Date(startDate);
      endDate.setTime(endDate.getTime() + (60 * 60 * 1000));
    }

    return {
      startTime: startDate,
      endTime: endDate,
      talk: MeetupFactory.createTalk()
    };
  }

  public static createVenue(): IVenue {
    return {
      id: '',
      isNew: false,
      address: '',
      mapUrl: '',
      name: ''
    };
  }

  public static createMeetup(): IMeetup {
    return {
      venue: MeetupFactory.createVenue(),
      sessions: [MeetupFactory.createSession()],
      id: '',
      name: '',
      friends: [MeetupFactory.createFriend()],
      communityId: 'SpbDotNet'
    };
  }
}
