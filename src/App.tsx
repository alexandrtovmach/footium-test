import Dashboard from "./containers/Dashboard";
import Header from "./containers/Header";
import { club } from "./MOCK";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header club={club} />
      <Dashboard club={club} />
    </>
  );
};

export default App;
