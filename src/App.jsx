import "./App.css";

import Home from "./pages/Home/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import NotFound from "./pages/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import PageTransition from './components/PageTransition/PageTransition'
import useHtmlFadeEffect from "./hooks/usePageTransition";
function App() {
  const location = useLocation().pathname.substring(1);  
  useHtmlFadeEffect()
  return (
    <>
    <nav>
      <NavBar></NavBar>
    </nav>
    <PageTransition direction="right">
      <main className={location}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notFound" replace />} />
        </Routes>
      </main>
      </PageTransition>
    </>
  );
}

export default App;
