import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {tabAchat} from './constant/page'
import Banner from "./Banner/Banner";
import Tab from "./Tabs/Tab";
import MenuItems from "./MenuItems/MenuItems";
import Info from "./Info/Info";
import Footer from "./Footer/Footer";
import Achat from "./Achat/Achat";
import Claims from "./Claims/Claims";
import Spinner from "react-spinner-material";
import { axiosInstance } from "../../axiosInstance";
import { APIURL } from "../../lib/ApiKey";

function App() {
  const [cartCount, setCartCount] = useState(tabAchat.length);
  const [validSlug, setValidSlug] = useState(false); // State to track the validity of the resto slug
  const [restos, setRestos] = useState([]);
  const [restosslug, setRestosSlug] = useState([]);
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [restoId, setRestoId] = useState(null)
  const [dishes, setDishes] = useState([])
  const [selectedTab, setSelectedTab] = useState('All');
  const [resInfo , setResInfo] = useState([])

  // Function to fetch the list of available restos
  // const fetchRestos = async () => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/restos");
  //     const data = await response.json();
  //     let Data = [];
  //     if(data)
  //     {
  //       Data = data; 
  //       const restoSlug = window.location.pathname.split("/")[2];
  //       let slug='';
  //       Data.map((item) => {
  //         console.log("The Items =>" ,item);
  //         slug= item.slug;
  //         setRestoId(item.id)
  //       })
  //       if(slug == restoSlug)
  //       {
  //          return console.log("The Slug Valide = ", true, slug, restoSlug);
  //       }
  //       else{
  //         setValidSlug(true)
  //       }
  //     }
  //     setRestos(data);
  //   } catch (error) {
  //     console.error("Error fetching restos:", error);
  //   }
  // };

  
  const restoSlug = window.location.pathname.split("/")[2];

  const fetchCategories = async (id) => 
  {
    setLoading(true)
    try{
      const res = await fetch(`${APIURL}/api/getCategorieByResto/${id}`);
      const data = await res.json();
      if(data)
      {
        console.log("The Response of The categories => ", data);
        setCategories(data)
      }

      return data;

    }catch(err)
    {
      console.log("the Error => ", err);
    }
    finally{
      setLoading(false)
    }
  }

  const fetchDishes = async () => {
    try {
        let url = `${APIURL}/api/getdishes`;

        // // // If category is provided, add it to the URL query string
        if (selectedTab != "All") {
            url += `?category=${selectedTab}`;
        }  

        console.log("The Url => ", url);
        // // If restoId is provided, add it to the URL query string
        // if (restoId) {
        //     url += `&resto_id=${restoId}`;
        // }

        const response = await fetch(url);
        const data = await response.json();

        if (data) {
          console.log('Fetched dishes:', data); // Log the fetched data
          setDishes(data);
      } else {
          console.log('No data fetched');
      }

    } catch (error) {
        console.error('Error fetching dishes:', error);
    }
};

const fetchInfo = async (id) => {
  try{ 
    const res = await axiosInstance.get('/api/infos/'+id)
    if(res)
    {
      console.log("The data of Info => ", res);
      let Data = [];
      Data = res.data;
      Data.map(item => {
        setResInfo(item)
      })
    }
  }
  catch(err)
  {
    console.log("the Error => ",err);
  }

}
  const fetchRestosbyslug = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${APIURL}/api/getRestoBySlug/${restoSlug}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      
      console.log("The Response => ",data);
      let Data = [];
      Data = data;
      const res = await axiosInstance.get('/api/infos/'+Data[0].id)
      if(data)
      {
        Data.map((item) => {
          setRestos(item);
          fetchCategories(item.id)
          // fetchInfo(item.id)
        })
        // setLoading(true)

        if(res)
          {
            console.log("The data of Info => ", res);
            let Data = [];
            Data = res.data;
            Data.map(item => {
              setResInfo(item)
            })
          }
      }
      // const isValidSlug = useValidateSlug(restoSlug, Data.map(item => item.slug));

      // console.log("The IsValide => ", isValidSlug);
      // if(!isValidSlug)
      // {
      //   return <Navigate to="/not-found" replace />;
      // }
    } catch (error) {
      console.error("Error fetching restos:", error.message);
    }
    finally{
      setLoading(false)
    }
  };

  console.log('The Selected => ', selectedTab);


useEffect(() => {
  // fetchRestos();
  fetchRestosbyslug();
  fetchDishes()

}, [restoSlug]); // Fetch restos when the component mounts

useEffect(() => {
  if (selectedTab) {
    fetchDishes(); // Fetch dishes when selectedTab changes
  }
}, [selectedTab]);
  if(loading)
  { 
    return(
      <div className='justify-center items-center flex  h-screen'>
      <Spinner size={100} spinnerColor={"#28509E"} spinnerWidth={1} visible={true} style={{borderColor: "#28509E", borderWidth: 2}}/>
    </div>
    )
  }

// console.log("The IsValid => ", isValidSlug);
  // if(!isValidSlug)
  // {
  //   return <Navigate to="/not-found" replace />;
  // }

  console.log("The Resto => ",dishes);
  return (
    // <Router>
      <div className="h-screen">

          <Routes>
            <Route
              path={`/`}
              element={
                <>
                  <Banner items={restos} infoRes={resInfo}/>
                  <Tab categories={categories} resto={restoId}  dishes={dishes} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                  <Footer slug={restoSlug}/>
                </>
              }
            />
            <Route path={`/theme/:restoSlug/info`} element={
              <>
              <Info items={restos} infoRes={resInfo}/>
              <Footer slug={restoSlug}/>
              </>
            } />
            <Route path="/theme/:restoSlug/Achat" element={
              <>
              <Achat  cartCount={cartCount} setCartCount={setCartCount} />
              <Footer slug={restoSlug}/>
              </>
            } />
            <Route path="/theme/:restoSlug/Claims" element={
              <>
              <Claims items={restos}/>
              <Footer slug={restoSlug}/>
              </>
            } />
          </Routes>

      </div>
  );
}

function useValidateSlug(slug, validSlugs) {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (!validSlugs.includes(slug)) {
      setIsValid(false);
      navigate("/not-found", { replace: true }); // Redirects to a "Not Found" page
    }
  }, [slug, validSlugs, navigate]);

  return isValid;
}


export default App;
