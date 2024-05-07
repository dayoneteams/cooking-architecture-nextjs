export interface Game {
  name: string;
  description: string;
  image: string;
  url: string;
  categoryId: string;
  providerId: string;
}

export interface GameCategory {
  id: string;
  name: string;
}

export interface GameProvider {
  id: string;
  name: string;
}
