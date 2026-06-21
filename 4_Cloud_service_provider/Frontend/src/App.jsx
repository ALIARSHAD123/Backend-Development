import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostCreate from "./pages/PostCreate";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<PostCreate />} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
    </Router>
  );
};

export default App;
