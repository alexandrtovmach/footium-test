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

interface PlayerProps {
  player: Player;
}

const Player: React.FunctionComponent<PlayerProps> = ({ player }) => {
  return (
    <PlayerContainer className="align-items-center">
      <TShirt />
      <p className="text-center m-0">{player.lastName}</p>
      <p className="text-center fw-bolder m-0">{player.number}</p>
    </PlayerContainer>
  );
};

export default Player;
