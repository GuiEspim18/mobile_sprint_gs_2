import { auth } from "@/services/firebaseConfig";
import { useRouter, useSegments } from "expo-router";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const segments = useSegments(); // Para detectar se estamos em /auth ou /tabs

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // 🔄 Controle automático de rotas
  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === "(auth)";

    // Login OK → manda para tabs
    if (user && inAuthGroup) {
      router.replace("/(tabs)");
    }

    // Sem user → manda sempre para login
    if (!user && !inAuthGroup) {
      router.replace("/(auth)/login");
    }
  }, [user, loading, segments]);

  // 🔐 Logout
  const logout = async () => {
    await signOut(auth);
    router.replace("/(auth)/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
