import { Container } from "react-bootstrap";
import Header from "./containers/Header";
import TacticField from "./containers/TacticField";
import { club, players } from "./MOCK";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header club={club} />
      <Container>
        <TacticField players={players} club={club} />
      </Container>
    </>
  );
};

export default App;
