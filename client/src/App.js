import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Ramen from './pages/ramen';
import NewRamen from './pages/newRamen';
import UpdateRamen from './pages/updateRamen';
import ShowRamen from './pages/showRamen';
import AddUser from './pages/signup';
import LoginUser from './pages/login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
            />
          <Route 
            path="/ramen" 
            element={<Ramen />} 
            />


          <Route path="/" element={<ProtectedRoutes/>}>
            <Route 
              path="/new-ramen" 
              element={<NewRamen />} 
              />
            <Route 
              path="/ramen/update/:id" 
              element={<UpdateRamen />} 
              />
            <Route 
              path="/ramen/show/:id" 
              element={<ShowRamen />} 
              />
          </Route>


          <Route 
            path="/signup" 
            element={<AddUser />} 
            />
          <Route 
            path="/login" 
            element={<LoginUser />} 
            />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// # <Routes>
// #   {/** Protected Routes */}
// #   {/** Wrap all Route under ProtectedRoutes element */}
// #   <Route path="/" element={<ProtectedRoutes/>}>
// #     <Route path="/" element={<InnerContent/>}>
// #       <Route path="/" element={<Navigate replace to="dashboard" />}/>
// #       <Route path="dashboard" element={<Dashboard/>}/>
// #       <Route path="tabs" element={<Tabs/>}>
// #           <Route path="/tabs" element={<Navigate replace to="tab1" />}/>
// #           <Route path="tab1" element={<Tab1/>}/>
// #           <Route path="tab2" element={<Tab2/>}/>
// #           <Route path="tab3" element={<Tab3/>}/>
// #       </Route>                       
// #        <Route path="settings" element={<Settings/>}/>            
// #        <Route path="users" element={<Users extraItem="test extra item from router"/>}/>            
// #        <Route path="users/:userId" element={<SingleUser/>}/>           
// #        <Route path="users/new" element={<NewUser/>}/>           
                
// #     </Route>
// #   </Route>       
  
// #    {/** Public Routes */}
// #   {/** Wrap all Route under PublicRoutes element */}
// #   <Route path="login" element={<PublicRoutes/>}>
// #     <Route path="/login" element={<Login/>}/>
// #   </Route>
// # </Routes>