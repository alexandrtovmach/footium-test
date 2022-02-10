import { useState } from "react";
import { Button, Stack, Form, ProgressBar } from "react-bootstrap";
import styled from "styled-components";

import FieldImageSrc from "../assets/images/field.png";

const GrassField = styled.div`
  background-color: green;
`;

const GrassFieldHeader = styled(Stack)`
  background-color: lightgreen;
`;

const TacticInfo = styled.aside`
  background-color: darkgreen;
  flex-grow: 0;
  flex-basis: 200px;
`;

const TacticPlayers = styled.aside``;

const TacticMap = styled(Stack)`
  width: 500px;
  height: 720px;
  background-image: url(${FieldImageSrc});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

interface TacticFieldProps {
  players: Player[];
}

const applyTacticToPlayers = (tactic: string, players: Player[]) => {
  const rows = tactic.split("-").reverse();
  let i = 0;
  return [...rows, 1].map((count) => {
    const playersLine = players.slice(i, +count + i);
    console.log(i, count, +count);
    i += +count;
    return playersLine;
  });
};

const TacticField: React.FunctionComponent<TacticFieldProps> = ({
  players,
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
        className="d-flex p-2 justify-content-between align-items-center rounded"
      >
        <Stack gap={2} direction="horizontal">
          <Button variant="success" className="rounded-circle">
            ←
          </Button>
          <p className="text-uppercase fw-bold mb-0">Tactics</p>
          <Form.Select value={tacticSchema} onChange={handleTacticSchemaChange}>
            <option value="4-3-3">4-3-3</option>
            <option value="4-5-1">4-5-1</option>
            <option value="3-4-3">3-4-3</option>
            <option value="1-2-4-3">1-2-4-3</option>
          </Form.Select>
        </Stack>
        <Stack gap={2} direction="horizontal">
          <Form.Group>
            <Form.Label>Familiarity</Form.Label>
            <ProgressBar now={40} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Intensity</Form.Label>
            <ProgressBar now={60} />
          </Form.Group>
        </Stack>
      </GrassFieldHeader>

      <Stack
        direction="horizontal"
        gap={2}
        className="py-2 align-items-start justify-content-between"
      >
        <TacticInfo className="rounded p-2">
          <h2>Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis
            veritatis eum et! Voluptatum accusantium officia ad ratione
            blanditiis, culpa repellendus rem atque nemo, qui tempora, sint
            architecto alias consectetur?
          </p>

          <h2>Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis
            veritatis eum et! Voluptatum accusantium officia ad ratione
            blanditiis, culpa repellendus rem atque nemo, qui tempora, sint
            architecto alias consectetur?
          </p>

          <h2>Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis
            veritatis eum et! Voluptatum accusantium officia ad ratione
            blanditiis, culpa repellendus rem atque nemo, qui tempora, sint
            architecto alias consectetur?
          </p>
        </TacticInfo>
        <TacticMap
          as="section"
          className="d-flex flex-column justify-content-between py-5"
        >
          {playersMap.map((row, i) => (
            <Stack
              key={`players-line-${i}`}
              direction="horizontal"
              className="justify-content-around"
            >
              {row.map((player) => (
                <span key={player.lastName}>{player.lastName} {player.number}</span>
              ))}
            </Stack>
          ))}
        </TacticMap>
        <TacticPlayers>Players</TacticPlayers>
      </Stack>
    </GrassField>
  );
};

export default TacticField;
