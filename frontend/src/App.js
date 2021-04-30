// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store/store";

import Header from "./Components/Header/Header";
import CartContainer from "./Components/CartContainer/CartContainer";

import Shop from "./screens/Shop/Shop";
import Home from "./screens/Home/Home";
import SignUpPage from "./screens/SignUpPage/SignUpPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/signup" component={SignUpPage} />
            <Route path="/shop" component={Shop} />
            <Route path="/" component={Home} />
          </Switch>
          <CartContainer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
