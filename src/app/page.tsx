import {CasinoHorizontalCard, CasinoVerticalCard} from "@lib/casino";

export default function Home() {
  return (
    <div>
      <div>
        <CasinoHorizontalCard game={{
          name: "Game 1",
          description: "Description 1",
          image: "https://via.placeholder.com/150",
          url: "#",
          categoryId: "1",
          providerId: "1",
        }} />
      </div>
      <div>
        <CasinoVerticalCard game={{
          name: "Game 1",
          description: "Description 1",
          image: "https://via.placeholder.com/150",
          url: "#",
          categoryId: "1",
          providerId: "1",
        }} />
      </div>
    </div>
  );
}
