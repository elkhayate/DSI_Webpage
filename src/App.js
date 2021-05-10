import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from './Nav';
import Services from "./components/Services";
import Client from "./components/Client";
import Partner from "./components/Partner";
import Product from "./components/Product";
import About from "./components/About";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path= "/" exact component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/client" component={Client}/>
        <Route path="/partner" component={Partner}/>
        <Route path="/product" component={Product}/>
        <Route path="/about" component={About}/>
        <Route path="/technology" component={Technology}/>
      </Switch>
    </div>
    </Router>
  );
}


function Home() {
  return(<div>
    <h1>Home page.</h1>
    <Footer />
  </div>)
}
export default App;
