'use client';
import {useEffect, useState} from "react";
import {Game, GameCarousel, getGames, useCasinoNavigation} from "@lib/casino";
import {LoginForm, LoginUser, useAuth} from "@lib/auth";

export default function Home() {
  const [games, setGames] = useState<Game[]>();
  const {loginUser} = useAuth();
  const {goToGameScreen} = useCasinoNavigation();

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  const handleLoginSuccess = (loginUser: LoginUser) => {
    // go to home screen
    goToGameScreen(1);

    // ask for payment

    // ask for upgrade

    // display promotion
  };

  return (
    <div>
      {!loginUser && (
        <div>
          <LoginForm onSuccess={handleLoginSuccess}/>
        </div>
      )}
      {games && <div>
        <GameCarousel games={games}/>
      </div>}
    </div>
  );
}
