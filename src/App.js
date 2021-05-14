import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from './Nav';
import Services from "./components/Services";
import Client from "./components/Client";
import Partner from "./components/Partner";
import Product from "./components/Product";
import About from "./components/About";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import style from "./App.module.css";
import pana from "./images/pana.png";
import desk from "./images/desk.png";
import verified from "./images/verified.png";
import product from "./images/product.png";
import cog from "./images/cogwheel.png";
import Abouts from "./components/Abouts";
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
        <Route path="/abouts" component= {Abouts} />
      </Switch>
    </div>
    </Router>
  );
}


function Home() {
  return (
    <section className={style.section}>
      <div className={style.container1}>
        <div className={style.container1content}>
        <h1>Making the most of <br></br>the ever-growing <br></br>
        <span>Information Technology</span></h1>
        <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
        <button>Read More</button>
        </div>
        <div className={style.container1img}>
          <img src = {pana} alt = ""/>
        </div>
      </div>
      <div className={style.back}>
      <div className={style.container2}>
        <div className={style.container2img}>
          <img src={desk} alt = "" />
        </div>
        <div className={style.container2content}>
          <h1>Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span></h1>
          <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span>DSI</span>’s distinct front-end based application concept.</p>
          <p>Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
        </div>
      </div>
      </div>
      <div className={style.back1}>
        <h1 className={style.title}>Product ans Service</h1>
      <div className={style.container3}>
      <div className={style.item1}>
      <img src={product} alt=""/>
      <h1><span>Our Product</span></h1>
      <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
      <button>Read More</button>
      </div>
      <div className={style.item2}>
      <img src={verified} alt=""/>
      <h1><span>Our Product</span></h1>
      <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
      <button>Read More</button>
      </div>
      <div className={style.item3}>
        <img src={cog} alt=""/>
      <h1><span>Our Product</span></h1>
      <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
      <button>Read More</button>

      </div>
      </div>
      </div>
      <Footer />
    </section>
    
  )
}
export default App;


