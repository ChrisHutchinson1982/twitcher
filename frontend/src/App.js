import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./pages/homePage/homePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage navigate={useNavigate()} />} />
    </Routes>
  );
};

export default App;
