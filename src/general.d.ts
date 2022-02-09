interface Game {
  id: string;
  startDate: string;
  endDate: string;
  location: string;
  clubA: Pick<Club, "name" | "id">;
  clubB: Pick<Club, "name" | "id">;
}

interface League {
  id: string;
  name: string;
}

type Club = {
  id: string;
  name: string;
  league: League;
  position: number;
  games: Game[];
};
