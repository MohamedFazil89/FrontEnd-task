import React from "react";
import MobileLayout from "../assets/iphone13-Layout.png";
import Video from '../assets/Ad-Video.mp4';
import Styles from "../Styles/Mobile.module.css";


export default function Mobile(){
    return(
        <div className={Styles.Mobile}>

            <img src={MobileLayout} alt="Mobile" className={Styles.Layout} />
            <video src={Video}  autoPlay muted  loop className={Styles.Video}  />

        </div>
    )
}