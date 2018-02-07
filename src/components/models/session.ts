import {ITalk} from "@/components/models/talk";

export interface ISession {
  startTime: Date;
  endTime: Date;
  talk: ITalk;
}
