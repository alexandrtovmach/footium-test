import { Image, Stack } from "react-bootstrap";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #8b2636;
`;

interface HeaderProps {
  club: Club;
}

const Header: React.FunctionComponent<HeaderProps> = ({ club }) => {
  return (
    <HeaderContainer className="d-flex p-2 justify-content-between">
      <Stack gap={3} direction="horizontal">
        <Image src="https://via.placeholder.com/50" />
        <Stack className="text-white">
          <span className="fw-bold text-uppercase">{club.name}</span>
          <div className="fw-light">
            <span>#{club.position} in </span>
            <a className="text-white" href={`/leagues/${club.league.id}`}>
              {club.league.name}
            </a>
            <span> – Next game: </span>
            <a className="text-white" href={`/games/${club.games[0].id}`}>
              {club.games[0].clubA.name} (
              {new Date(club.games[0].startDate).toDateString()})
            </a>
          </div>
        </Stack>
      </Stack>
    </HeaderContainer>
  );
};

export default Header;
