'use client';
import {useEffect, useState} from "react";
import {Game, GameCarousel, getGames} from "@lib/casino";

export default function Home() {
  const [games, setGames] = useState<Game[]>();

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <div>
      {games && <div>
        <GameCarousel games={games} />
      </div>}
    </div>
  );
}
