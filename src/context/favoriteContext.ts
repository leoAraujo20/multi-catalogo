import { createContext, useState, createElement, useContext } from "react";

interface IFavoriteContext {
    favorites: (string)[];
    toggleFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

interface FavoriteProviderProps {
    children: React.ReactNode;
}

const FavoriteContext = createContext<IFavoriteContext | undefined>(undefined);


export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const [favorites, setFavorites] = useState<(string)[]>([]);

    const toggleFavorite = (id: string) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(favId => favId !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    const isFavorite = (id: string) => {
        return favorites.includes(id);
    }

    return createElement(
        FavoriteContext.Provider,
        { value: { favorites, toggleFavorite, isFavorite } },
        children
    );
}

export const useFavoriteContext = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error("Deu ruim");
    }
    return context;
}

export default FavoriteContext;
