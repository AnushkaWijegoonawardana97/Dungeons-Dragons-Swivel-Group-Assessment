
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import FavouritePage from "./pages/FavouritePage";
import SpellsList from "./pages/SpellsList";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/spells" element={<SpellsList />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </Provider>
  );
}

export default App;
