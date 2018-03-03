import {ISeeAlsoId} from './seeAlsoId';
import {ISpeaker} from './speaker';

export interface ITalk {
  id: string;
  speakers: ISpeaker[];
  title: string;
  description: string;
  seeAlsoTalkIds: ISeeAlsoId[];
  codeUrl: string;
  slidesUrl: string;
  videoUrl: string;
}

