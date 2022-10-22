import './App.css';
import Home from './pages/Home';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviousAddress from './pages/PreviousAddress';
import ThankYou from './pages/ThankYou';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Home />}
          path="/"
        />

        <Route
          element={<PreviousAddress />}
          path="/previous-address"
        />

        <Route
          element={<ThankYou />}
          path="/thankyou"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
