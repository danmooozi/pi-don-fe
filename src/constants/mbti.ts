import { MbtiType, SynergyMap } from '@/types/mbti';

const MBTI: Record<MbtiType, MbtiType> = {
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

export const synergy: SynergyMap = {
  INFP: {
    good: MBTI.ENFJ,
    bad: MBTI.ISTJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  INFJ: {
    good: MBTI.ENFP,
    bad: MBTI.ESTJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  INTP: {
    good: MBTI.ENTJ,
    bad: MBTI.ISFJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  INTJ: {
    good: MBTI.ENTP,
    bad: MBTI.ISTJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ISFP: {
    good: MBTI.ESFJ,
    bad: MBTI.INFJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ISFJ: {
    good: MBTI.ESTP,
    bad: MBTI.ENFJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ISTP: {
    good: MBTI.ESTJ,
    bad: MBTI.INFP,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ISTJ: {
    good: MBTI.ESFP,
    bad: MBTI.ENFP,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ENFP: {
    good: MBTI.INTJ,
    bad: MBTI.ISTJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ENFJ: {
    good: MBTI.INFP,
    bad: MBTI.ISFJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ENTP: {
    good: MBTI.INTJ,
    bad: MBTI.ESTJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ENTJ: {
    good: MBTI.INTP,
    bad: MBTI.ESFJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ESFP: {
    good: MBTI.ISTJ,
    bad: MBTI.ENFJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ESFJ: {
    good: MBTI.ISFP,
    bad: MBTI.ENTJ,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ESTP: {
    good: MBTI.ISFJ,
    bad: MBTI.ENFP,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
  ESTJ: {
    good: MBTI.ISTP,
    bad: MBTI.ENTP,
    desc: '팔로잉, 팔로워는 많이 없지만, 풍부한 상상력을 기반으로 들쭉날쭉한 커밋을 하시는 타입이시네요!',
  },
};
