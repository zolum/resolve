import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  company: string;
  website: string;
  plan: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isDeployed: boolean;
  signUp: (data: { name: string; email: string; password: string; company: string; website: string }) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  completeDeploy: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isDeployed, setIsDeployed] = useState(false);

  const signUp = (data: { name: string; email: string; company: string; website: string }) => {
    setUser({
      name: data.name,
      email: data.email,
      company: data.company,
      website: data.website,
      plan: 'Starter',
    });
  };

  const signIn = (email: string) => {
    setUser({
      name: 'Demo User',
      email,
      company: 'My Company',
      website: 'mycompany.com',
      plan: 'Starter',
    });
    setIsDeployed(true);
  };

  const signOut = () => {
    setUser(null);
    setIsDeployed(false);
  };

  const completeDeploy = () => {
    setIsDeployed(true);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isDeployed,
      signUp,
      signIn,
      signOut,
      completeDeploy,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
