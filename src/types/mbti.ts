export type MbtiType =
  | 'INFP'
  | 'INFJ'
  | 'INTP'
  | 'INTJ'
  | 'ISFP'
  | 'ISFJ'
  | 'ISTP'
  | 'ISTJ'
  | 'ENFP'
  | 'ENFJ'
  | 'ENTP'
  | 'ENTJ'
  | 'ESFP'
  | 'ESFJ'
  | 'ESTP'
  | 'ESTJ';

export type SynergyMap = {
  [key in MbtiType]: { good: MbtiType; bad: MbtiType; desc: string };
};
