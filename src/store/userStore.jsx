import create from 'zustand';

// Define your user store
const useUserStore = create((set) => ({
  user: null, // Initially no user is logged in
  setUser: (user) => set({ user }), // Method to set the user
  logout: () => set({ user: null }), // Method to logout
}));

export default useUserStore;