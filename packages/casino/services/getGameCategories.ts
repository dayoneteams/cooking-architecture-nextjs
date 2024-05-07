import {GameCategory} from "../types";

const categories: GameCategory[] = [
  {
    name: "Category 1",
    id: "1",
  },
  {
    name: "Category 2",
    id: "2",
  },
  {
    name: "Category 3",
    id: "3",
  },
];

export function getGameCategories(): Promise<GameCategory[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 2000);
  });
}
