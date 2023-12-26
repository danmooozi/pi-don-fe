const MBTI = {
  INFP: 'INFP',
  INFJ: 'INFJ',
  INTP: 'INTP',
  INTJ: 'INTJ',
  ISFP: 'ISFP',
  ISFJ: 'ISFJ',
  ISTP: 'ISTP',
  ISTJ: 'ISTJ',
  ENFP: 'ENFP',
  ENFJ: 'ENFJ',
  ENTP: 'ENTP',
  ENTJ: 'ENTJ',
  ESFP: 'ESFP',
  ESFJ: 'ESFJ',
  ESTP: 'ESTP',
  ESTJ: 'ESTJ',
} as const;

export const synergy = {
  [MBTI.INFP]: {
    good: MBTI.ENFJ,
    bad: MBTI.ISTJ,
  },
  [MBTI.INFJ]: {
    good: MBTI.ENFP,
    bad: MBTI.ESTJ,
  },
  [MBTI.INTP]: {
    good: MBTI.ENTJ,
    bad: MBTI.ISFJ,
  },
  [MBTI.INTJ]: {
    good: MBTI.ENTP,
    bad: MBTI.ISTJ,
  },
  [MBTI.ISFP]: {
    good: MBTI.ESFJ,
    bad: MBTI.INFJ,
  },
  [MBTI.ISFJ]: {
    good: MBTI.ESTP,
    bad: MBTI.ENFJ,
  },
  [MBTI.ISTP]: {
    good: MBTI.ESTJ,
    bad: MBTI.INFP,
  },
  [MBTI.ISTJ]: {
    good: MBTI.ESFP,
    bad: MBTI.ENFP,
  },
  [MBTI.ENFP]: {
    good: MBTI.INTJ,
    bad: MBTI.ISTJ,
  },
  [MBTI.ENFJ]: {
    good: MBTI.INFP,
    bad: MBTI.ISFJ,
  },
  [MBTI.ENTP]: {
    good: MBTI.INTJ,
    bad: MBTI.ESTJ,
  },
  [MBTI.ENTJ]: {
    good: MBTI.INTP,
    bad: MBTI.ESFJ,
  },
  [MBTI.ESFP]: {
    good: MBTI.ISTJ,
    bad: MBTI.ENFJ,
  },
  [MBTI.ESFJ]: {
    good: MBTI.ISFP,
    bad: MBTI.ENTJ,
  },
  [MBTI.ESTP]: {
    good: MBTI.ISFJ,
    bad: MBTI.ENFP,
  },
  [MBTI.ESTJ]: {
    good: MBTI.ISTP,
    bad: MBTI.ENTP,
  },
} as const;
