import { create } from "zustand";

interface userSessionData {
  bossId: string;
  setBossId: (_id: string) => void;
}

export const useUserSession = create<userSessionData>()((set) => ({
  bossId: "",
  setBossId: (_id: string) => set({ bossId: _id }),
}));


