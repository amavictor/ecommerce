import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation '/navigation";
import AuthenticationComponent from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import {useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener} from "./utils/firebase/firebase.utils";
import {setCurrentUser} from "./store/user/user.action";
import {useDispatch} from "react-redux";
import Checkout from "./routes/chekout/checkout.component";

function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, [dispatch]);//this dispatch doesn't change
  return (
      <Routes>
          <Route path={'/'} element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path={'shop/*'} element={<Shop/>}/>
              <Route path={'auth'} element={<AuthenticationComponent/>}/>
              <Route path={'checkout'} element={<Checkout/>}/>
          </Route>

         {/* the slash means that its tha base URL (starting point)*/}
          {/*the index means render this as the base elemt with the persitent one*/}
      </Routes>
  );
}


export default App;
