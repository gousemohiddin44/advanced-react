import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./components/Home";
import Posts from "./containers/posts";
import Error from "./containers/errorPage";
import Axios from "./containers/axios";
import PageElement from "./containers/pagination";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/axios" element={<Axios />} />
          <Route path="/pagination" element={<PageElement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
