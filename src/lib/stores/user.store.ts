import { create } from "zustand";

export type UserStoreType = {
  name?: string;
  setName: (value: string) => void;
  setTitle: (value: string) => void;
  title?: string;
};

export const useUserStore = create<UserStoreType>((set) => ({
  name: undefined,
  setName: (value: string) => set({ name: value }),
  title: undefined,
  setTitle: (value: string) => set({ title: value }),
}));
