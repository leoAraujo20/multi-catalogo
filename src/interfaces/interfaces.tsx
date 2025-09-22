interface IAnimal {
  id: string;
  nome: string;
  especie: string;
  imagem: string;
}

interface ILivros {
  id: string;
  titulo: string;
  autor: string;
  ano: number;
  capa: string;
}

interface IPessoas {
  id: string;
  nome: string;
  nascimento: string;
  area: string;
  foto: string;
}
export type { IAnimal, ILivros, IPessoas };