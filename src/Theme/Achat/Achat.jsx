import React, { useState, useEffect } from 'react';
import { tabAchat } from './../constant/page';
import "./Achat.css"
function Achat({ cartCount, setCartCount }) {
  const [achatItems, setAchatItems] = useState(tabAchat);
  const [quantities, setQuantities] = useState({});
  // Définition de cartCount et setCartCount dans le composant parent

  // Charger les données sauvegardées lors du chargement du composant
  useEffect(() => {
    const savedQuantities = JSON.parse(localStorage.getItem('quantities'));
    if (savedQuantities) {
      setQuantities(savedQuantities);
    }
  }, []);

  // Mettre à jour les données sauvegardées chaque fois que quantities change
  useEffect(() => {
    localStorage.setItem('quantities', JSON.stringify(quantities));
  }, [quantities]);

  const updateQuantity = (id, type, quantity) => {
    const newQuantities = { ...quantities, [`${id}-${type}`]: quantity };
    setQuantities(newQuantities);
  };
  
  const deleteCarte = (id, type) => {
    const updatedAchatItems = achatItems.filter(item => item.id !== id || item.type !== type);
    setAchatItems(updatedAchatItems);
  
    const deletedQuantity = quantities[`${id}-${type}`] ||  1;
    console.log(deletedQuantity);
    setCartCount(cartCount - deletedQuantity);
    console.log(setCartCount);
  };
  

  const increaseQuantity = (id, type) => {
    const newQuantity = (quantities[`${id}-${type}`] || 1) + 1;
    updateQuantity(id, type, newQuantity);
    setCartCount(cartCount + 1);
  };

  const decreaseQuantity = (id, type) => {
    const newQuantity = Math.max((quantities[`${id}-${type}`] || 1) - 1, 0);
    updateQuantity(id, type, newQuantity);
    setCartCount(cartCount - 1);
  };
  console.log(tabAchat)
  return (
    <>
      {achatItems.length > 0 ? (
        achatItems.map((item) => (
          <div key={item.id} className="w-full ">
             <div className='md:max-w-3xl grid menu-item gap-4 items-center' style={{gridTemplateColumns: '.55fr 1fr'}}>
                
                <div className="md:h-auto overflow-hidden flex justify-center py-2">
                  <img src={item.image} className="max-h-40 w-auto bg-cover rounded-3xl" alt="burger" />
                </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-sm">{item.title}</h3>
                <p className="text-[.7rem] md:text-base text-neutral-300 ">
                  {item.description.length < 120 ? item.description : item.description.slice(0, 120) + '...'}
                </p>

                <div className="flex justify-between items-center text-xs md:text-sm lg:text-base xl:text-lg text-gray-500 pr-2">
                  <p className='mb-0.5 text-sm text-neutral-200'>{item.price}</p>
                  
                  <button onClick={() => deleteCarte(item.id, item.type)} className="text-xl cursor-pointer btn btn-danger py-0 rounded-md">
                    <svg className="h-6 w-6 hover:text-red-500 transition" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="white"></path>
                    </svg>
                  </button>
                  <div className="flex justify-between items-center ">
                    <button onClick={() => increaseQuantity(item.id, item.type)} className="text-xl cursor-pointer">
                      <svg className="w-[24px] h-[24px] fill-[#8e8e8e] pr-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"  fill="white"></path>
                      </svg>
                    </button>
                    <p className='mb-1.5 text-lg pr-2 text-neutral-200'>{quantities[`${item.id}-${item.type}`] || 1}</p>
                    <button onClick={() => decreaseQuantity(item.id, item.type)} className="text-xl cursor-pointer ">
                      <svg className="w-[19px] h-[19px] fill-[#8e8e8e] font-extrabold" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"  fill="white"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-full bg-white" />
          </div>
        ))
      ) : (
        
        <div className="message-box message-box-info">
        <svg className="w-[30px] h-[30px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
        </svg>
        <span className="message-text"><strong  >Info:</strong> Aucun élément à afficher. </span>
        <i className="fa fa-times fa-2x exit-button "></i>
      </div>
      )}
    </>
  );
}

export default Achat;
