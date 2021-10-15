import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RoomIcon from '@mui/icons-material/Room';
import { IconFlagIN,} from 'material-ui-flags';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
          <Link to="/" >
          <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
          </Link>
              <div className="header--optionRoomicon">
              <RoomIcon /></div>

          <div className="header--option">
            <span className="header--optionLineOne">Hello</span>
            <span className="header--optionLineTwo">Select your adress</span>
            </div>
        
          <div className="header--search">
          <input className="header--searchInput" type="text" />
          {/* Material UI */}
          <SearchIcon className="header--searchIcon" />
          </div>
          <div classname="header--Flag">
           <IconFlagIN/>
           </div> 
 
          <div className="header--nav">

            <div className="header--option">
            <span className="header--optionLineOne">Hello,sign in</span>
            <span className="header--optionLineTwo">Account & Lists</span>
            </div>

            <div className="header--option">
            <span className="header--optionLineOne">Return</span>
            <span className="header--optionLineTwo">& Order</span>
            </div>

            <div className="header--option">
            <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo">Prime</span>
            </div>
          </div>  
           <Link to="/checkout">
          <div className="header--optionBasket">
          <ShoppingCartIcon />
          <span className="header--optionLineTwo header--basketCount">0</span>
          </div>
           </Link>


        </div>
    )
}

export default Header;
