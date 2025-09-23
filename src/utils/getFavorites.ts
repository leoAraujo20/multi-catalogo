import mocks from "../mocks/mocks.json";
import type { IAnimal, ILivros, IPessoas } from "../interfaces/interfaces";

export function getFavorites(favorites: string[]): (IAnimal | ILivros | IPessoas)[] {
  const allData: (IAnimal | ILivros | IPessoas)[] = [
    ...mocks.animais, 
    ...mocks.livros, 
    ...mocks.pessoas
  ];
  
  return allData.filter((item) => favorites.includes(item.id));
}
