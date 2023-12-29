import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="CreateLogin" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
