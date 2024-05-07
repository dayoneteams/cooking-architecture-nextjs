import {Game} from "../types";

const games: Game[] = [
  {
    name: "Game 1",
    description: "Description 1",
    image: "https://via.placeholder.com/150",
    url: "#",
    categoryId: "1",
    providerId: "1",
  },
  {
    name: "Game 1",
    description: "Description 1",
    image: "https://via.placeholder.com/150",
    url: "#",
    categoryId: "1",
    providerId: "1",
  },
  {
    name: "Game 1",
    description: "Description 1",
    image: "https://via.placeholder.com/150",
    url: "#",
    categoryId: "1",
    providerId: "1",
  }
];

export function getGames(): Promise<Game[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 2000);
  });
}
