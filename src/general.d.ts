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

interface Club {
  id: string;
  name: string;
  colors: string[];
  league: League;
  position: number;
  games: Game[];
};

interface Player {
  id: number;
  firstName: string;
  lastName: string;
  number: number;
}