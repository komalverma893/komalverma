//hello 
import React from "react";
function Project(){
   return(
    <>
    <title>tripma</title>
    {/*nav*/}
    <div>
    <div>Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.    </div>
<div>
    <div>TRIPMA</div>
    <div><ul>
      <li><a href="#">Flights</a></li>
      <li><a href="#">Hotels</a></li>
      <li><a href="#">Packages</a></li>
      <li><a href="#">Sign in</a></li>
    </ul>
    <button class="btn-signup">Sign up</button></div>
       

<div>
    <h1>It’s more than<br/>just a trip</h1>
    </div>


    <div >
      <input type="text" placeholder="From where?"></input>
      <input type="text" placeholder="Where to?"></input>
      <input type="text" placeholder="Depart - Return"></input>
      <select>
        <option>1 adult</option>
        <option>2 adults</option>
        <option>3 adults</option>
      </select>
      <button>Search</button>
    </div>
    </div>
</div>
 
    </>
   ) 
}
export default Project;