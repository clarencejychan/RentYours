import React, { Component } from 'react';
import TrashIcon from 'react-icons/lib/ti/trash';
import ShoppingCartIcon from 'react-icons/lib/ti/shopping-cart';
import LocationIcon from 'react-icons/lib/ti/location';

import './style.scss';

const Info = () => {
  return(
    <div className="homepage-info homepage-inner-container container">
      <div className="homepage-how-it-works-content">
        <h2 className="how-it-works-content-title">
          How It Works
        </h2>
      </div>
      <ul className="how-it-works-content-boxes">
        <li className="how-it-works-items">
          <TrashIcon size={'100px'} />
          <div className="how-it-works-items-text">
            <h3 className="how-it-works-items-text-title">
              List old items for rent.
            </h3>
            <p>
              Put up items that you dont use all the time for short or long term rental.
            </p>
          </div>
        </li>
        <li className="how-it-works-items">
          <ShoppingCartIcon size={'100px'} />
          <div className="how-it-works-items-text">
            <h3 className="how-it-works-items-text-title">
              Shop for the items you need.
            </h3>
            <p>
              Rent items you only need once, twice or seasonaly.
            </p>
          </div>
        </li>
        <li className="how-it-works-items">
          <LocationIcon size={'100px'} />
          <div className="how-it-works-items-text">
            <h3 className="how-it-works-items-text-title">
              Locate items near you for rent.
            </h3>
            <p>
              Items are location based for the renter/lister convenience.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Info;
