import React, { useEffect} from "react";
import './App.css';

function Time(){
    return(

        <>
            <div class="container">
                <div class="clock">
                    <div id="day">Date</div>
                    <div class="clock-wrapper">
                        <div id="time">00:00:00</div>
                        <div id="midday">XX</div>
                    </div>
                </div>
            </div>
        </>

    );
;}

export default Time