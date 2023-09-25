import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import bookride from "./pages/bookride";
import About from "./pages/About";
import Services from "./pages/Services";
import form from "./pages/form";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bookride" exact component={bookride} />
          <Route path="/about" exact component={About} />
          <Route path="/Services" exact component={Services} />
          <Route path="/form" exact component={form} />
        </Switch>
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
