import {ITalk} from './talk';

export interface ISession {
  startTime: Date;
  endTime: Date;
  talk: ITalk;
}
