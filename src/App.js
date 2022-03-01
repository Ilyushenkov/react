
import {Routes, Route} from "react-router-dom";
import SearchPage from "./components/pages/search_page";
import Auth from "./components/pages/auth";
import Registeration from "./components/pages/registeration";
import Concertspage from "./components/pages/concerts_page";
import Test from "./components/test";
import Order_page from "./components/pages/order_page";

function App() {


  return (<div>
            <Routes>
                <Route path={'/'} element={<SearchPage/>}/>
                <Route path={'/register'} element={<Registeration/>}/>
                <Route path={'/login'} element={<Auth/>}/>
                <Route path={'/concerts/:date1/:date2/:type'} element={<Concertspage/>}/>
                <Route path={'/test'} element={<Test/>}/>
                <Route path={'/order/:id/:concert_code/:name_concert/:date_concert/:time_start/:time_finish/:duration/:price'} element={<Order_page/>}/>
            </Routes>

        </div>
  );
}

export default App;
