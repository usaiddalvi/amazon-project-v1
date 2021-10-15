import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

            <div className="home--row">
            <Product
               id="01"
               title="See U in C by Ali Karim Sayed (Author)" 
               price={4450}
               image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
              />
              <Product
               id="02"
               title="Maxima Max Pro Smartwatch with SpO2,Upto 15 Day Battery life" 
               price={2550}
               image="https://m.media-amazon.com/images/I/61yP79pHj-S._UL1250_.jpg"
               />
               <Product
               id="03"
               title="Puma BMW MMS A3EROCAT Mid White-Strong B" 
               price={100}
               image="https://m.media-amazon.com/images/I/51wpJqNoncL._UL1200_.jpg"
               />

            </div>
            <div className="home--row">
            <Product
               id="01"
               title="SKAFA MDF; Wood Wall Mounted Shelf,Glossy Finish,Set Of 1,Black" 
               price={4500}
               image="https://m.media-amazon.com/images/I/51meh8qllwL._SL1024_.jpg"
               />
               <Product
               id="02"
               title="Samsung 253 L 3 Star Digital Inverter Frost Free Double Door Refrigerator" 
               price={5899}
               image="https://m.media-amazon.com/images/I/61OCuQBUbIL._SL1500_.jpg"
               />
            </div>
            <div className="home--row">
            <Product
               id="01"
               title="AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)" 
               price={899}
               image="https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg"
               />
            </div>

          </div>  
        </div>
    )
}

export default Home
