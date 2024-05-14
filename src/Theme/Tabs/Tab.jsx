import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from '../MenuItems/MenuItems';

function Tab({
  categories,
  dishes,
  setSelectedTab,
  selectedTab
}) {
const menu = [
        { id: 1, title: 'All', url: '/' },
        { id: 2, title: 'Burgers', url: '/Burgers' },
        { id: 3,  title: 'Pizza', url: '/Pizza' },
        { id: 4, title: 'Donuts', url: '/Donuts' },
        { id: 5, title: 'Sandwich', url: '/Sandwich' },
        { id: 6, title: 'Salades', url: '/Salades' },
      ];
 
      

  return (
    <div className="">
        
       


      <div className="tabs-container overflow-x-auto pl-4">
        <div className="flex gap-4">
        <div className="relative shadow-md rounded-xl border-gray-300 border inline-block">
            <div
              className={`tab flex items-center w-[90px] justify-center h-9 pl-1.5 pr-2.5 font-semibold rounded-[8px] cursor-pointer transition-colors ${
                selectedTab === 'All' ? 'bg-[#28509E] text-white' : 'hover:bg-[#28509E] hover:text-white'
              }`}
              onClick={() => setSelectedTab('All')}
            >
              <h2 className="text-[14px] mb-0">All</h2>
            </div>
          </div>
          {categories.length >0 && categories.map((item) => (
            <div key={item.id} className="relative shadow-md rounded-xl border-gray-300 border inline-block ">
              
                <div
                  onClick={() => setSelectedTab(item.name)}
                  className={`tab flex items-center  px-[35px] w-full justify-center h-9  font-semibold rounded-[8px] cursor-pointer transition-colors ${
                    selectedTab === item.name ? 'bg-[#28509E] text-white' : 'hover:bg-[#28509E] hover:text-white'
                  }`}
                > 
                  <h2 className="text-[14px] mb-0 whitespace-nowrap">{item.name}</h2>
                </div>
            
            </div>
          ))}
        </div>
      </div>

      <MenuItems  dishes={dishes.length > 0 && dishes.filter(dish => selectedTab === 'All' || dish.categorie.name === selectedTab)} selectedTab={selectedTab}/>

    </div>
  );
}

export default Tab;
