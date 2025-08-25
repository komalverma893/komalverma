//hello 
import React from "react";
import { RiFlightTakeoffFill } from 'react-icons/ri';
import './project.css';
function Project(){
   return(
    <>
    <title>tripma</title>
    {/*nav*/}
    <div>
    <div class="bar">Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.    </div>
<div class=" nav options ">
    <div className="logo div2">TRIPMA</div>
    <div class="options"><ul class="ul">
      <li><a href="#">Flights</a></li>
      <li><a href="#">Hotels</a></li>
      <li><a href="#">Packages</a></li>
      <li><a href="#">Sign in</a></li>
    </ul>
    <button class="btn">Sign up</button></div>
      </div> 
<div class="main">
<div>
    <h1>It’s more than<br/>just a trip</h1>
    </div>


    <div>
       < input type="text" placeholder="From where?" class="div2"></input>
      <input type="text" placeholder="Where to?" class="div2"></input>
      <input type="text" placeholder="Depart - Return" class="div2" ></input>
      <select class="div2">
        <option>1 adult</option>
        <option>2 adults</option>
        <option>3 adults</option>
      </select>
      <button class="btn">Search</button>
    </div>
    </div>
        </div>
    

 
    </>
   ) 
}
export default Project;