import "./App.css";
import useRehydrateUser from "./hooks/useRehydrateUser";
import Routes from "./routes/routes";

function App() {
  useRehydrateUser();

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
