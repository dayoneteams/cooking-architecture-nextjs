import {Game} from "../types";

export function GameVerticalCard({game}: {game: Game}) {
  return (
    <div className="card" style={{width: "200px", height: "500px"}}>
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <p className="card-text">
          {game.description}
        </p>
        <a href="#" className="btn btn-primary">
          Play game
        </a>
      </div>
    </div>
  );
}
