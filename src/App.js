import Directory from "./component/directory/directory";
import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation '/navigation";
import {initializeApp} from 'firebase/app'
import SignIn from "./routes/sign in/sign-in";


function Shop(){
    return(
        <div>
            <h1>I am a shop page</h1>
        </div>
    )
}
function App() {

  return (
      <Routes>
          <Route path={'/'} element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path={'shop'} element={<Shop/>}/>
              <Route path={'signIn'} element={<SignIn/>}/>
          </Route>

         {/* the slash means that its tha base URL (starting point)*/}
          {/*the index means render this as the base elemt with the persitent one*/}
      </Routes>
  );
}

export default App;
