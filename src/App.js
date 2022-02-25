
import {Routes, Route, Link} from "react-router-dom";
import SearchPage from "./components/pages/search_page";
import Auth from "./components/pages/auth";
import Registeration from "./components/pages/registeration";

function App() {


  return (<div>
            <Routes>
                <Route path={'/'} element={<SearchPage/>}/>
                <Route path={'/register'} element={<Registeration/>}/>
                <Route path={'/login'} element={<Auth/>}/>
            </Routes>

        </div>
  );
}

export default App;
