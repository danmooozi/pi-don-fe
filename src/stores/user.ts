import { create } from 'zustand';

interface userStore {
  userId: string | null;
  mbti: string | null;
  setUserId: (userId: string) => void;
}

const useUserStore = create<userStore>((set) => ({
  userId: 'wynter',
  mbti: 'INFP',
  setUserId: (userId) => set(() => ({ userId })),
}));

export default useUserStore;
