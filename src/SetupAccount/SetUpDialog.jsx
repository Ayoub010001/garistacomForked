'use client'
import { useState  } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress"

// Component
import AddCategory from "./AddCategory";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantCover from "./RestaurantCover";
import Pagination from "./Pagination";
import MockUp from "./MockUp";


function SetUpDialog({handleClose}) {

    const defaultRestInfo = {
        name: "",
        description: "",
        adress: "",
        currency: "",
        restLogo: "",
        restCover: "",
        categories: [],
      };

    const [restInfo, setRestInfo] = useState(defaultRestInfo);
    
    function handleFile(file, type){
        if(file){
          const reader = new FileReader();
          reader.onload = () =>{
            setRestInfo((prevState)=>{
              if(type === "restLogo"){
                return {...prevState,
                   restLogo:reader.result}
              }
              return {...prevState,
                restCover:reader.result}
            })
          }
          reader.readAsDataURL(file);
        }
      }
    
    function handleChange(value, type) {
          let arrayNoDuplicates = [];
          setRestInfo(oldState =>{
            
            if(type === "categories"){
              const removeDuplicates = new Set([...oldState.categories, value]);
              arrayNoDuplicates = Array.from(removeDuplicates).filter((element)=> element !== "");
            }
            
            return ({
              ...oldState,
              [type]: (type === "categories") ? [...arrayNoDuplicates] :value
            })
          });
        
      }
    
    function handleDelete(deletedElement){
          setRestInfo( prevstate =>{
            const newArray = prevstate.categories.filter(element => element !== deletedElement);
            return {...prevstate, categories:newArray};
          })
    }
    
    const handleCurrencyChange = (newCurrency) => {
        setRestInfo(prevState => ({
          ...prevState,
          currency: newCurrency
        }));
      }
    
    const init = 1;
    const [currentPage, setCurrentPage]= useState(init);
    
    function handleNextPage(){
        setCurrentPage(prevState =>{
          if(prevState<3)
            return prevState+1
          return prevState
        });
      }
    
    function handlePrevPage(){
          setCurrentPage(prevState =>{
            if(prevState>1)
                return prevState-1
            return prevState
        })
      }
    
    const renderComponent = () => {
        switch (currentPage) {
          case 1:
            return <RestaurantInfo restInfo={restInfo}
                                   handleChange={handleChange}
                                   handleCurrencyChange={handleCurrencyChange}/>;
          case 2:
            return <RestaurantCover restInfo={restInfo}
                                    handleFile={handleFile}
                                    />;
          case 3:
            return <AddCategory restInfo={restInfo}
                                handleChange={handleChange}
                                handleDelete={handleDelete}
                                />;
          default:
            return null;
        }
      };
    
      return (
        <main className="flex flex-col items-center justify-center">
          <Card className="flex flex-col gap-4 px-12 py-6 ">
            <div className="mb-2 flex flex-col ms- h-10 relative w-[80%] m-auto">
              <Pagination pageNumber={1} currentPage={currentPage}/>
              <Pagination pageNumber={2} currentPage={currentPage}/>
              <Pagination pageNumber={3} currentPage={currentPage}/>
              <Progress value={33*currentPage} className="w-full my-4 m-auto"/>
            </div>
            <div className="flex justify-between gap-8">
              <div className=" hidden md:flex w-[250px] relative  flex-col items-center justify-center">
                <div className=" w-[240px] h-[450px]  mockup overflow-y-scroll no-scrollbar bg-white rounded-3xl border-8 border-slate-950 mt-2">
                  <MockUp restInfo={restInfo}/>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 w-[340px]">
                {renderComponent()}
                <div className="flex flex-row-reverse justify-between items-center">
                  {currentPage === 3? 
                    <Button variant="success" onClick={handleClose}> Finish</Button>
                    :
                    <Button onClick={handleNextPage}>Next step</Button>
                  }
                  {currentPage !== 1 && 
                    <p className=" cursor-pointer text-md opacity-80" onClick={handlePrevPage}>Go back</p>
                  }
                </div>
              </div>
            </div>
          </Card> 
        </main>
      );
}

export default SetUpDialog