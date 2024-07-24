import {Routes, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home';
import { useEffect } from 'react';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {HideLoading, ShowLoading, ReloadData, setPortfolioData } from './redux/rootSlice';
import Admin from './pages/Admin/Index';
import Login from './pages/Admin/Login';

function App() {
  const {loading, portfolioData, reloadData} = useSelector(state => state.root)
  const dispatch = useDispatch();

  const getPortfolioData = async () =>{
    try {
      dispatch(ShowLoading())
      const response = await axios.get("/api/portfolio/get-portfolio-data")
      dispatch(setPortfolioData(response.data))
      dispatch(ReloadData(false))
      dispatch(HideLoading())
    } catch (error) {

      dispatch(HideLoading())
    }
  };

  useEffect(() => {
    if(!portfolioData){
        getPortfolioData();
    }
      }, [portfolioData]);
      

      useEffect(() => {
        console.log(portfolioData)
      }, [portfolioData]);

      useEffect(() => {
        if(reloadData){
          getPortfolioData();
        }
      }, [reloadData])

  return (
    <BrowserRouter>
    {loading ? <Loader /> : null}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
