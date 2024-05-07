import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {tabAchat} from './constant/page'
import Banner from "./Banner/Banner";
import Tab from "./Tabs/Tab";
import MenuItems from "./MenuItems/MenuItems";
import Info from "./Info/Info";
import Footer from "./Footer/Footer";
import Achat from "./Achat/Achat";
import Claims from "./Claims/Claims";
import Spinner from "react-spinner-material";

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

  // Function to fetch the list of available restos
  const fetchRestos = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/restos");
      const data = await response.json();
      let Data = [];
      if(data)
      {
        Data = data; 
        const restoSlug = window.location.pathname.split("/")[2];
        let slug='';
        Data.map((item) => {
          console.log("The Items =>" ,item);
          slug= item.slug;
          setRestoId(item.id)
        })
        if(slug == restoSlug)
        {
           return console.log("The Slug Valide = ", true, slug, restoSlug);
        }
        else{
          setValidSlug(true)
        }
      }
      setRestos(data);
    } catch (error) {
      console.error("Error fetching restos:", error);
    }
  };

  
  const restoSlug = window.location.pathname.split("/")[2];

  const fetchCategories = async (id) => 
  {
    try{
      const res = await fetch(`http://127.0.0.1:8000/api/getCategorieByResto/${id}`);
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
  }

  const fetchDishes = async () => {
    setLoading(true);
    try {
        let url = 'http://127.0.0.1:8000/api/getdishes/';

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
          setLoading(false);
      } else {
          console.log('No data fetched');
      }

    } catch (error) {
        console.error('Error fetching dishes:', error);
    }
};

  const fetchRestosbyslug = async () => {
    setLoading(true)
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/getRestoBySlug/${restoSlug}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if(data)
      {
        setRestosSlug(data);
        fetchCategories(data[0].id)
      }
      setLoading(false)
    } catch (error) {
      console.error("Error fetching restos:", error.message);
    }
  };

  console.log('The Selected => ', selectedTab);


useEffect(() => {
  fetchRestos();
  fetchRestosbyslug();
  fetchDishes()

}, []); // Fetch restos when the component mounts
useEffect(() => {
  fetchDishes()
}, [selectedTab]); // Fetch restos when the component mounts


  if(loading)
  { 
    return(
      <div className='justify-center items-center flex  h-screen'>
      <Spinner size={100} spinnerColor={"#28509E"} spinnerWidth={1} visible={true} style={{borderColor: "#28509E", borderWidth: 2}}/>
    </div>
    )
  }


  if(validSlug)
  {
    return null;
  }
  return (
    // <Router>
      <div className="h-screen">

          <Routes>
            <Route
              path={`/`}
              element={
                <>
                  <Banner items={restosslug}/>
                  <Tab categories={categories} resto={restoId} dishes={dishes} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                  <Footer slug={restoSlug}/>
                </>
              }
            />
            <Route path={`/theme/:restoSlug/info`} element={
              <>
              <Info />
              <Footer slug={restoSlug}/>
              </>
            } />
            <Route path="/theme/:restoSlug/Achat" element={
              <>
              <Achat   cartCount={cartCount} setCartCount={setCartCount} />
              <Footer slug={restoSlug}/>
              </>
            } />
            <Route path="/theme/:restoSlug/Claims" element={
              <>
              <Claims/>
              <Footer slug={restoSlug}/>
              </>
            } />
          </Routes>
        
      </div>
  );
}

export default App;
