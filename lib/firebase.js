import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ========== AUTHENTICATION ==========

export const authFunctions = {
  signUp: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Créer un document utilisateur dans Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: new Date().toISOString(),
        displayName: '',
      });

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  signIn: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  signOut: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getSession: async () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      });
    });
  },
};

// ========== USER OPERATIONS ==========

export const userDB = {
  // Sauvegarder la progression de l'utilisateur
  saveUserProgress: async (userId, moduleId, score, answers) => {
    try {
      const progressRef = doc(db, 'users', userId, 'progress', moduleId);
      await setDoc(progressRef, {
        moduleId,
        score,
        answers,
        completedAt: new Date().toISOString(),
      });
      return true;
    } catch (error) {
      console.error('Error saving progress:', error);
      throw error;
    }
  },

  // Récupérer la progression de l'utilisateur
  getUserProgress: async (userId) => {
    try {
      const progressRef = collection(db, 'users', userId, 'progress');
      const snapshot = await getDocs(progressRef);
      return snapshot.docs.map((doc) => doc.data());
    } catch (error) {
      console.error('Error getting progress:', error);
      throw error;
    }
  },

  // Récupérer la progression pour un module spécifique
  getModuleProgress: async (userId, moduleId) => {
    try {
      const progressRef = doc(db, 'users', userId, 'progress', moduleId);
      const docSnap = await getDoc(progressRef);
      return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
      console.error('Error getting module progress:', error);
      throw error;
    }
  },

  // Obtenir les certificats de l'utilisateur
  getUserCertificates: async (userId) => {
    try {
      const certificatesRef = collection(db, 'users', userId, 'certificates');
      const snapshot = await getDocs(certificatesRef);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error getting certificates:', error);
      throw error;
    }
  },

  // Sauvegarder un certificat
  saveCertificate: async (userId, certificateData) => {
    try {
      const certificatesRef = collection(db, 'users', userId, 'certificates');
      const docRef = doc(certificatesRef);
      await setDoc(docRef, {
        ...certificateData,
        createdAt: new Date().toISOString(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error saving certificate:', error);
      throw error;
    }
  },
};

// ========== BLOG/ARTICLES OPERATIONS ==========

export const blogDB = {
  // Récupérer les articles
  getArticles: async (limitCount = 10) => {
    try {
      const articlesRef = collection(db, 'articles');
      const q = query(
        articlesRef,
        orderBy('publishedAt', 'desc'),
        limit(limitCount)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error getting articles:', error);
      return [];
    }
  },

  // Récupérer un article par slug
  getArticleBySlug: async (slug) => {
    try {
      const articlesRef = collection(db, 'articles');
      const q = query(articlesRef, where('slug', '==', slug));
      const snapshot = await getDocs(q);
      return snapshot.docs.length > 0 ? snapshot.docs[0].data() : null;
    } catch (error) {
      console.error('Error getting article by slug:', error);
      return null;
    }
  },

  // Récupérer les articles par catégorie
  getArticlesByCategory: async (category, limitCount = 10) => {
    try {
      const articlesRef = collection(db, 'articles');
      const q = query(
        articlesRef,
        where('category', '==', category),
        orderBy('publishedAt', 'desc'),
        limit(limitCount)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error getting articles by category:', error);
      return [];
    }
  },
};

// ========== UTILITY ==========

export const utils = {
  // Vérifier si l'utilisateur est authentifié
  isAuthenticated: () => !!auth.currentUser,

  // Obtenir l'utilisateur actuel
  getCurrentUser: () => auth.currentUser,

  // Écouter les changements d'authentification
  onAuthChange: (callback) => {
    return onAuthStateChanged(auth, callback);
  },
};
