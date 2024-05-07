'use client';
import {useEffect, useState} from "react";
import {Game, GameCarousel, getGames} from "@lib/casino";
import {LoginForm, useAuth} from "@lib/auth";

export default function Home() {
  const [games, setGames] = useState<Game[]>();
  const {loginUser} = useAuth();

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <div>
      {!loginUser && (
        <div>
          <LoginForm/>
        </div>
      )}
      {games && <div>
        <GameCarousel games={games} />
      </div>}
    </div>
  );
}
