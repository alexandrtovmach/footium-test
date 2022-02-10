import { Stack } from "react-bootstrap";
import styled from "styled-components";

import { ReactComponent as TShirtSvg } from "../assets/images/t-shirt.svg";

const TShirt = styled(TShirtSvg)`
  flex-grow: 0;
  flex-shrink: 0;
  width: 60px;
`;

const PlayerContainer = styled(Stack)`
  flex: 0 0 80px;
  font-size: 14px;
`

const PlayerNumber = styled.p`
  margin-top: -2.5rem;
  text-shadow: 0 0 1px black;
`

interface PlayerProps {
  player: Player;
  color: string;
}

const Player: React.FunctionComponent<PlayerProps> = ({ player, color }) => {
  return (
    <PlayerContainer className="align-items-center">
      <TShirt color={color} />
      <PlayerNumber className="text-center fw-bolder fs-6">{player.number}</PlayerNumber>
      <p className="text-center m-0">{player.lastName}</p>
    </PlayerContainer>
  );
};

export default Player;
