import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import SignIn from "./pages/SignIn";
import AuthorizedLayout from "./layouts/AuthorizedLayout";
import Home from "./pages/Home";
import "./App.css";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<SignIn />} />
        </Route>

        <Route path="/me" element={<AuthorizedLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
