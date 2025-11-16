'use client';

import { create } from 'zustand';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

interface UserState {
  isAuthenticated: boolean;
  profile?: UserProfile;
  bonusPoints: number;
  login: (profile: UserProfile) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  bonusPoints: 240,
  login: (profile) => set({ isAuthenticated: true, profile }),
  logout: () => set({ isAuthenticated: false, profile: undefined })
}));
