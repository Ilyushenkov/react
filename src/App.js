
import {Routes, Route, BrowserRouter} from "react-router-dom";
import SearchPage from "./components/pages/search_page";
import Auth from "./components/pages/auth";
import Registeration from "./components/pages/registeration";
import Concertspage from "./components/pages/concerts_page";
import Test from "./components/test";
import Order_page from "./components/pages/order_page";
import Order_management_page from "./components/pages/order_management_page";
import Select_seat_page from "./components/pages/select_seat_page";
import Profile_page from "./components/pages/profile_page";




function App() {


  return (<div>

                <Routes>
                    <Route path={'/'} element={<SearchPage/>}/>
                    <Route path={'/register'} element={<Registeration/>}/>
                    <Route path={'/login'} element={<Auth/>}/>
                    <Route path={'/concerts/:date1/:date2/:type'} element={<Concertspage/>}/>
                    <Route path={'/test'} element={<Test/>}/>
                    <Route path={'/order/:id/:concert_code/:name_concert/:date_concert/:time_start/:time_finish/:duration/:price'} element={<Order_page/>}/>
                    <Route path={'/order_management/:code'} element={<Order_management_page/>}/>
                    <Route path={'/select_seat/:code'} element={<Select_seat_page/>}/>
                    <Route path={'/profile'} element={<Profile_page/>}/>
                </Routes>


        </div>
  );
}

export default App;
