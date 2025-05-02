import {create} from 'zustand';

const useUserStore = create((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  isLoggedIn: () => !!get().user,
}));

export default useUserStore;