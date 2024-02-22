import React from "react";
import Apple from "../assets/Apple.png";
import Dell from "../assets/Dell.png";
import LG from "../assets/LG.png";
import MI from "../assets/MI.png";
import Realme from "../assets/Realme.png";
import Samsung from "../assets/Samsung.png";
import Sony from "../assets/Sony.png";

function Logos() {
  return (
    <div className="pl-36 pr-36 pb-10">
      <h1 className="pb-5 text-4xl font-poppins font-bold">Top Brands</h1>
      <div className="flex gap-[5rem]">
        <a href="https://www.apple.com/in/store?afid=p238%7CsNTzoJYWL-dc_mtid_187079nc38483_pcrid_680861337287_pgrid_112258962187_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-brand--slid---product-">
          <img src={Apple} alt="logo" className="h-[5rem]" />
        </a>
        <a href="https://www.dell.com/en-in">
          <img src={Dell} alt="logo" className="h-[5rem]" />
        </a>
        <a href="https://www.lg.com/in/promotions/appliances/?utm_source=google&utm_medium=cpc&utm_campaign={campaign.id}&utm_adgroup={adgroup.id}&utm_ad={creative.id}&utm_placement=&utm_device=c&utm_matchtype=&utm_adposition=&utm_network=x&gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqqUqtCq7ybO80o4umMyxA8wXMqgzc4X7pKfbyf3eFstx94WKCmQFCBoCq04QAvD_BwE">
          <img src={LG} alt="logo" className="h-[5rem]" />
        </a>
        <a href="https://www.mi.com/in/">
          <img src={MI} alt="logo" className="h-[5rem]" />
        </a>
        <a href="https://www.realme.com/in/">
          <img src={Realme} alt="logo" className="h-[5rem]" />
        </a>
        <a href="https://www.samsung.com/in/smartphones/galaxy-s24-ultra/buy/?cid=in_pd_ppc_google_im-mobile-smartphones-s24-dtc_sales_samsung-s24-all-2024_eshop-pmax-pla_18Jan2024-na_1ur-503209l-2024-eshop-bau-performancemax-cpc_pfm--20911521305------x--&gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqiGvXJQbklfsIhtjhGq6LXSoY3gLqJtNBfPg6hz4MlDsoWFfvikxzhoCIP8QAvD_BwE">
          <img src={Samsung} alt="logo" className="h-[5rem]" />
        </a>
        <a href="https://www.sony.co.in/homepage">
          <img src={Sony} alt="logo" className="h-[5rem]" />
        </a>
      </div>
    </div>
  );
}

export default Logos;
