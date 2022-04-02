import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import DetailProject from './components/DetailProject/DetailProject';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/DetailProject/:ProjectId">
            <DetailProject />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
