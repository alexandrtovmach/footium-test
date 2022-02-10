import { useState } from "react";
import { Stack, Form } from "react-bootstrap";
import styled from "styled-components";

import FieldImageSrc from "../assets/images/field.png";
import Player from "../components/Player";

const GrassField = styled.div`
  background-color: green;
`;

const GrassFieldHeader = styled(Stack)`
  background-color: darkgreen;
`;

const TacticInfo = styled.aside`
  background-color: darkgreen;
  flex-grow: 1;
  flex-basis: 20%;
`;

const TacticPlayers = styled.aside`
  flex-grow: 1;
  flex-basis: 20%;
`;

const TacticMap = styled(Stack)`
  width: 500px;
  height: 750px;
  flex-grow: 0;
  flex-shrink: 0;
  background-image: url(${FieldImageSrc});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

interface TacticFieldProps {
  players: Player[];
  club: Club;
}

const applyTacticToPlayers = (tactic: string, players: Player[]) => {
  const rows = tactic.split("-").reverse();
  let i = 0;
  return [...rows, 1].map((count) => {
    const playersLine = players.slice(i, +count + i);
    i += +count;
    return playersLine;
  });
};

const TacticField: React.FunctionComponent<TacticFieldProps> = ({
  players,
  club,
}) => {
  const [tacticSchema, setTacticSchema] = useState<string>("4-5-1");

  const handleTacticSchemaChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTacticSchema(e.target.value);
  };

  const playersMap = applyTacticToPlayers(tacticSchema, players);

  return (
    <GrassField className="p-2 rounded">
      <GrassFieldHeader
        gap={2}
        direction="horizontal"
        className="d-flex p-2 justify-content-between align-items-center rounded text-white"
      >
        <Stack gap={2} direction="horizontal">
          <p className="text-uppercase fw-bold mb-0">Tactics</p>
          <Form.Select value={tacticSchema} onChange={handleTacticSchemaChange}>
            <option value="4-3-3">4-3-3</option>
            <option value="4-5-1">4-5-1</option>
            <option value="3-4-3">3-4-3</option>
            <option value="1-2-4-3">1-2-4-3</option>
          </Form.Select>
        </Stack>
      </GrassFieldHeader>

      <Stack
        direction="horizontal"
        gap={5}
        className="py-2 align-items-start justify-content-between"
      >
        <TacticInfo className="rounded p-2 text-white">
          <h2 className="text-uppercase">info</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis
            veritatis eum et! Voluptatum accusantium officia ad ratione
            blanditiis, culpa repellendus rem atque nemo, qui tempora, sint
            architecto alias consectetur?
          </p>
        </TacticInfo>
        <TacticMap
          as="section"
          className="d-flex flex-column justify-content-between py-4"
        >
          {playersMap.map((row, i) => (
            <Stack
              key={`players-line-${i}`}
              direction="horizontal"
              className="justify-content-around text-white"
            >
              {row.map((player) => (
                <Player
                  key={player.lastName}
                  player={player}
                  color={club.colors[0]}
                />
              ))}
            </Stack>
          ))}
        </TacticMap>
        <TacticPlayers className="text-white">
          <div className="d-flex flex-wrap justify-content-center">
            {players.slice(0, 11).map((player) => (
              <Player
                key={player.lastName}
                player={player}
                color={club.colors[0]}
              />
            ))}
          </div>
          <hr />
          <div className="d-flex flex-wrap justify-content-center">
            {players.slice(11).map((player) => (
              <Player
                key={player.lastName}
                player={player}
                color={club.colors[0]}
              />
            ))}
          </div>
        </TacticPlayers>
      </Stack>
    </GrassField>
  );
};

export default TacticField;
