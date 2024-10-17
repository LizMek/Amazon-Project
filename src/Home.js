import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone"
            price={449}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81jqUPkIVRL._AC_UL165_SR165,165_.jpg"
          />
          <Product
            id="12321342"
            title="Stanley Quencher H2.0 FlowState Stainless Steel Vacuum Insulated Tumbler with Lid and Straw for Water, Iced Tea or Coffee, Smoothie and More, Lilac, 30oz"
            price={35.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51zaCVh6SIL._AC_UL254_SR254,254_.jpg"
          />
          <Product
            id="12321343"
            title="Stanley Cup Accessories Set Including 6 Pcs Silicone Spill Proof Stopper, 2 Pcs Straw Cover Cap for 9-10 mm Straws, 1 Pcs Silicone Boot for Stanley Cup"
            price={15}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61ThG6kNvwL._AC_UL254_SR254,254_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12321344"
            title="Apple AirPods Pro 2 Wireless Earbuds, Bluetooth Headphones, Active Noise Cancellation, Hearing Aid Feature, Transparency, Personalized Spatial Audio"
            price={199}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61SUj2aKoEL._AC_UL254_SR254,254_.jpg"
          />
          <Product
            id="12321345"
            title="Amazon Fire TV Stick, HD, sharp picture quality, fast streaming, free & live TV, Alexa Voice Remote with TV controls"
            price={24}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51TjJOTfslL._AC_UL254_SR254,254_.jpg"
          />
          <Product
            id="12321346"
            title="Good Energy: The Surprising Connection Between Metabolism and Limitless Health"
            price={15}
            rating={5}
            image="	https://images-na.ssl-images-amazon.com/images/I/71KTwO53SnL._AC_UL254_SR254,254_.jpg"
          />
          <Product
            id="12321347"
            title="Beats Fit Pro - True Wireless Noise Cancelling Earbuds - Apple H1 Headphone Chip, Compatible with Apple & Android, Class 1 Bluetooth, Built-in Microphone, 6 Hours of Listening Time - Beats Black"
            price={159}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/5118KKFLhaL._AC_UL165_SR165,165_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12321348"
            title="The Dragon's Prophecy: Israel, the Dark Resurrection, and the End of Days"
            price={35}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91qcLbAh3pL._AC_UL254_SR254,254_.jpg"
          />
          <Product
            id="12321349"
            title="Tell Me Everything: Oprah's Book Club: A Novel, OPRAH’S BOOK CLUB PICK."
            price={40}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71XX7KlB7HL._AC_UL165_SR165,165_.jpg"
          />
          <Product
            id="12321350"
            title="STAR WARS Micro Galaxy Squadron Phantom II - 5-Inch Vehicle with Two 1-Inch Micro Figure Accessories"
            price={14}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71whYjIclhL._AC_UL254_SR254,254_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12321351"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={(1090)}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
