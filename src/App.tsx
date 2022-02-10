import { Container } from "react-bootstrap";
import TacticField from "./containers/TacticField";
import { players } from "./MOCK";

const App: React.FunctionComponent = () => {
  return (
    <Container>
      <TacticField players={players} />
    </Container>
  );
};

export default App;
