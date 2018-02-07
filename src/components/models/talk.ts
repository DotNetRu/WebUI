import {ISpeaker} from "@/components/models/speaker";

export interface ITalk {
  id: string;
  speakerIds: string[];
  newSpeakers?: ISpeaker[];
  title: string;
  description: string;
  seeAlsoTalkIds: string[];
  codeUrl: string;
  slidesUrl: string;
  videoUrl: string;
}
