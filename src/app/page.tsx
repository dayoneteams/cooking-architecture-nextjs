'use client';
import {useEffect, useState} from "react";
import {Game, GameCarousel, GameHorizontalCard, GameVerticalCard, getGames} from "@lib/casino";

export default function Home() {
  const [games, setGames] = useState<Game[]>();

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <div>
      <div>
        <GameHorizontalCard game={{
          name: "Game 1",
          description: "Description 1",
          image: "https://via.placeholder.com/150",
          url: "#",
          categoryId: "1",
          providerId: "1",
        }} />
      </div>
      <div>
        <GameVerticalCard game={{
          name: "Game 1",
          description: "Description 1",
          image: "https://via.placeholder.com/150",
          url: "#",
          categoryId: "1",
          providerId: "1",
        }} />
      </div>
      {games && <div>
        <GameCarousel games={games} />
      </div>}
    </div>
  );
}
