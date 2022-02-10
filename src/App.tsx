import { Container } from "react-bootstrap";
import TacticField from "./containers/TacticField";
import { club, players } from "./MOCK";

const App: React.FunctionComponent = () => {
  return (
    <Container>
      <TacticField players={players} club={club} />
    </Container>
  );
};

export default App;
