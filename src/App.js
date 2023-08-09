import { Provider } from "react-redux";
import "./App.css";
import Routes from "./Components/Routes";
import ScrollToTop from "./Components/utils/ScrollToTop";
import store from "./store/store";
import SnakeBar from "./Components/utils/SnakeBar";
import LoadingScreen from "./Components/utils/LoadingScreen";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <ScrollToTop />
        <SnakeBar />
        <LoadingScreen/>
      </Provider>
   
    </>
  );
}

export default App;
