import Directory from "./component/directory/directory";
import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation '/navigation";
import {initializeApp} from 'firebase/app'
import AuthenticationComponent from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

function App() {

  return (
      <Routes>
          <Route path={'/'} element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path={'shop'} element={<Shop/>}/>
              <Route path={'auth'} element={<AuthenticationComponent/>}/>
          </Route>

         {/* the slash means that its tha base URL (starting point)*/}
          {/*the index means render this as the base elemt with the persitent one*/}
      </Routes>
  );
}

export default App;
