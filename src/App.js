import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
