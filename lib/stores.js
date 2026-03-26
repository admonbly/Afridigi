import { create } from 'zustand';

// ========== AUTH STORE ==========
// Gère l'état de l'authentification (utilisateur connecté, etc.)
// Firebase gère l'authen réelle, Zustand gère l'état local
export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
      loading: false,
    }),

  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
      loading: false,
    }),

  setLoading: (loading) => set({ loading }),
}));

// ========== PROGRESS STORE ==========
// Gère la progression du quiz localement (avant sauvegarde Firebase)
export const useProgressStore = create((set) => ({
  progress: {},
  currentScore: 0,
  currentModule: null,

  setProgress: (moduleId, data) =>
    set((state) => ({
      progress: {
        ...state.progress,
        [moduleId]: data,
      },
    })),

  setCurrentScore: (score) => set({ currentScore: score }),

  setCurrentModule: (moduleId) => set({ currentModule: moduleId }),

  getModuleProgress: (moduleId) =>
    set((state) => state.progress[moduleId]),
}));

// ========== BLOG STORE ==========
// Gère les articles du blog (fetched depuis Firebase)
export const useBlogStore = create((set) => ({
  articles: [],
  currentArticle: null,
  filter: 'all',

  setArticles: (articles) => set({ articles }),

  setCurrentArticle: (article) => set({ currentArticle: article }),

  setFilter: (filter) => set({ filter }),
}));

