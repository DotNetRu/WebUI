import {IFriend} from "@/components/models/friend";
import {IVenue} from "@/components/models/venue";
import {ISession} from "@/components/models/session";

export interface IMeetup {
  id: string;
  communityId: string;
  venueId: string;
  newVenue?: IVenue;
  friendIds: string[];
  newFriends?: IFriend[];
  sessions: ISession[];
}
