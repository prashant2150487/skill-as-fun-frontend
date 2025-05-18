import "./App.css";
import Loader from "./components/loader";
import useRehydrateUser from "./hooks/useRehydrateUser";
import Routes from "./routes/routes";

function App() {
  useRehydrateUser();

  return (
    <>
      <Routes />
      <Loader/>
    </>
  );
}

export default App;
