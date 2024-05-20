import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaInfoCircle,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { APIURL } from "../../../lib/ApiKey";
function Banner({ items, infoRes }) {
  console.log("The Items => ", items);
  return (
    <>
      <div className="p-4">
        <div className="relative mx-auto h-[170px] max-w-md overflow-hidden rounded-[.5rem] bg-white shadow">
          <div className="bg-secondary-gray overflow-hidden">
            <img
              src={
                infoRes?.cover_image
                  ? `${APIURL}/storage/${infoRes.cover_image}`
                  : "/assets/menu-banner-3.jpgg"
              }
              loading="lazy"
              className="max-h-44 bg-secondary-gray object-cover w-full h-screen"
              alt={items.name}
            />
          </div>
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <div className="bottom-16 absolute inset-x-0 z-20 p-4 text-center">
            {/* <div className='bottom-0'> */}
            {/* <p className="text-md text-opacity-80 mb-1 text-white">Enjoy the great </p> */}
            <h3 className="text-xl font-medium text-white">{items.name}</h3>
            {/* </div> */}
          </div>
          <div className="absolute inset-x-0 bottom-0 z-20 flex justify-between p-4 text-center">
            <div className="flex gap-2">
              {infoRes.facebook != null && (
                <Link to={infoRes.facebook} target="_blank">
                  <FaFacebook color="white" />
                </Link>
              )}
              {infoRes.instgram != null && (
                <Link to={infoRes.instgram} target="_blank">
                  <FaInstagram color="white" />
                </Link>
              )}
              {infoRes.snapshat != null && (
                <Link to={infoRes.snapshat} target="_blank">
                  <FaSnapchat color="white" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
