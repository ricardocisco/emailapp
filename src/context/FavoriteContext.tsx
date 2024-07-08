import React, { createContext, useState, useContext, ReactNode } from "react";

interface Email {
  id: number;
  nome: string;
  email: string;
  titulo: string;
  descricao: string;
  time: string;
  imagem: string;
}

interface FavoriteContextType {
  favoriteEmails: Email[];
  toggleFavorite: (email: Email) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteEmails, setFavoriteEmails] = useState<Email[]>([]);

  const toggleFavorite = (email: Email) => {
    setFavoriteEmails((prev) => {
      if (prev.some((favEmail) => favEmail.id === email.id)) {
        return prev.filter((favEmail) => favEmail.id !== email.id);
      } else {
        return [...prev, email];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favoriteEmails, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = (): FavoriteContextType => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite deve ser usado por FavoriteProvider");
  }
  return context;
};
