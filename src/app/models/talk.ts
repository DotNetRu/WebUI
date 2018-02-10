import {ISeeAlsoId} from './seeAlsoId';

export interface ITalk {
  id: string;
  speakerIds: string[];
  title: string;
  description: string;
  seeAlsoTalkIds: ISeeAlsoId[];
  codeUrl: string;
  slidesUrl: string;
  videoUrl: string;
}

