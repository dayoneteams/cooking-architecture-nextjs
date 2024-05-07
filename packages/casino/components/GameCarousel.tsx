import {Game} from "../types";
import {GameVerticalCard} from "@lib/casino";

export function GameCarousel({games}: { games: Game[] }) {
  return (
    <div>
      <h1>Game carousel</h1>
      <div className="d-flex">
        {games.map((game, index) => (
          <GameVerticalCard key={index} game={game}/>
        ))}
      </div>
    </div>
  );
}
