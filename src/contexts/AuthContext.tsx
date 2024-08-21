import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  userCategory: string | null;
  login: (token: string, category: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userCategory, setUserCategory] = useState<string | null>(null);

  const login = (token: string, category: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('category', category);
    setIsLoggedIn(true);
    setUserCategory(category);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('category');
    setIsLoggedIn(false);
    setUserCategory(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userCategory, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
