import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState } from '../interfaces/index';

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: (user) => set({ user, isAuthenticated: true }),
            logout: () => set({ user: null, isAuthenticated: false }),
        }),
        {
            name: 'auth-localStorage',
        }
    )
);