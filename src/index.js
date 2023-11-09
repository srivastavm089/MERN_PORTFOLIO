import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    
      {" "}
      <Router>
   
        <App />
        
      </Router>
   
  </Provider>
);
