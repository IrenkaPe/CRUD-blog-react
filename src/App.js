import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from 'react-bootstrap'

import Home from "./components/pages/Home/Home";
import AddPost from "./components/pages/AddPost/AddPost";
import PostPage from "./components/pages/PostPage/PostPage";
import EditPost from "./components/pages/EditPost/EditPost";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";

import Header from "./components/views/Header";
import Footer from "./components/views/Footer";


function App() {
   return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path= '/' element= {<Home/>} />
          <Route path= '/post/:id' element= {<PostPage/>} />
          <Route path= '/post/add' element= {<AddPost/>} />
          <Route path= '/post/edit/:id' element= {<EditPost/>} />
          <Route path= '/about' element= {<About/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
