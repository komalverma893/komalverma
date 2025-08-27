//hello 
import React from "react";
 import Image from './image.jsx';
 import PassengerDialog from "./passengerDialog.jsx";
 import { FaTwitter } from 'react-icons/fa';
 import { FaSquareInstagram } from 'react-icons/fa6';
 import { FaFacebookSquare } from 'react-icons/fa';
import './project.css';
function Project(){
    

   return(
  <>   
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
        <select class="div2">
          <option>From where </option> 
          <option> SFO </option>  
            <option> ATL  </option>  
            <option> LAX </option>  
            <option> PVG </option>  
            <option> MSP</option>   
            <option> JFK</option> 
            <option> CDG </option>  
            <option> DXB</option>   
             
        </select>
        <select class="div2">
        <option> To where </option> 
       <option> NRT </option>  
            <option> PVG  </option>  
            <option> STL </option>  
            <option> ATL </option>  
            <option> MSP</option>   
            <option> SFO</option> 
            <option> IFK </option>  
            <option> LAX</option>   
             
            </select>
      <input type="text" placeholder="Depart - Return" class="div2" ></input>
       <select class="div2" >
         <option>adult</option>
      </select>  
         
         
      <button class="btn">Search</button>
    </div>
    </div>
    <div class="layout">
      <div class="smalldiv">
      <div class="text">Find your next adventure with these flight deals</div>
      <div>
       <a href="">All →</a>
            </div>
      </div>
    <div class="whole"> {/*whole*/}
      <div>
        <Image imag="https://tse4.mm.bing.net/th/id/OIP.y5lVjVprazQrfFLfUv4XnwHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" msg="uzbekistan" />
      </div>
      <div>
        <Image imag=" https://www.thetopvillas.com/blog/wp-content/uploads/2020/01/shutterstock_380725909-1-1140x760.jpg" msg="Pura Ulun Danu Bratan
(Temple in Bali)" />
      </div>
      <div>
        <Image imag=" https://tse4.mm.bing.net/th/id/OIP.-qYY_otP4-aA9f8DJ4MsSgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" msg="Andaman and Nicobar islands in India" />
      </div> 
    </div>
     <div class="whole">
      <div>
        <Image imag="  https://wp.scoopwhoop.com/wp-content/uploads/2015/03/5677335d6e510a6f3a75ab97_15.jpg" msg="Flower valley in India" />
      </div> 
      <div>
        <Image imag="https://www.homeexchange.com/blog/content/images/2023/09/most-visited-tourist-attraction-world-unviersal-sydney-opera-house.png  " msg="Sydney Opera house"  />
      </div> 
      <div>
        <Image imag="https://www.planetware.com/wpimages/2021/10/world-tourist-attractions-eiffel-tower-flowers-spring.jpg " msg="Eiffel Tower(France)" />
      </div> 
      </div>
      <div class="whole">
      <div>
        <Image imag=" https://tse4.mm.bing.net/th/id/OIP.Xn9064Jrt_wUOulEcgddSgHaE4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" msg="Louvre pyramid (building in paris)" />
      </div> 
      <div>
        <Image imag="https://tse4.mm.bing.net/th/id/OIP.9Ghmcr3QV0LN2eLyj6EiiwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3   " msg="London Eye"  />
      </div> 
      <div>
        <Image imag="https://3.bp.blogspot.com/-lmqoa17Cixk/VHgXKX9LIiI/AAAAAAAAASw/hwlknCII1Tg/s1600/7-Most-Popular-Tourist-Attractions-Around-the-World5.jpg  " msg="Taj Mahal(India)" />
      </div> 
      </div>
      <div>
        <button class="btn align">Explore More stays</button>
      </div>
      <div class="layout2">
        <div class="text2">What Tripma users are saying</div>
        <div class="layout3">
          <div class="profile2">
      <div><img src="https://www.bing.com/th/id/OIP.Ss6jOVNBI5zMRvYPMpcudwHaKi?w=175&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="profile" class="profile"/></div>
            <div >
              <b>Anne marie</b><br/> Seoul, South Korea | April 2019
              <div>What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me </div>
          </div>
        </div>
        <div class="profile2">
      <div><img src=" https://th.bing.com/th/id/OIP.ZP-E8ZFH11wb1XSm0dn-5wHaJQ?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="profile" class="profile"/></div>
            <div >
              <b>John</b><br/> Berlin, Germany | April 2019
              <div>What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me</div>
          </div>
        </div>
        <div class="profile2">
      <div><img src=" https://th.bing.com/th/id/R.0301819f445a8855c4a577a6763fb62d?rik=TT%2fgaYZuz1YEig&riu=http%3a%2f%2fanhede.se%2fwp-content%2fuploads%2f2014%2f01%2f130221-2528.jpg&ehk=LToqkipED3KxGj7CVuMoQrvi487RY2HN6IPZ59FCWNQ%3d&risl=&pid=ImgRaw&r=0" alt="profile" class="profile"/></div>
            <div >
              <b>Robert</b><br/> Honolulu, Hawaii | February 2017| 
              <div>What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me </div>
          </div>
        </div>
        
             </div>
             <div class="layout dis">
          <div class="tri"> TRIPMA</div>
          <div class="sd2"><ul class="ul2">
            <li><b>ABOUT</b></li>
            <li>About TRIPMA</li>
            <li>How it works</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Press</li>
              </ul></div>
              <div class="sd2"><ul class="ul2">
            <li><b>PARTNER WITH US</b></li>
            <li>Partnership programs</li>
            <li>Affiliate program</li>
            <li>Connectivity</li>
            <li>Integrations</li>
            <li>Community</li>
              </ul></div>
              <div class="sd2"><ul class="ul2">
            <li><b>SUPPORT</b></li>
            <li>Helo Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Trust and Safety</li>
              </ul></div>
              <div class="sd2"><ul class="ul2">
            <li><b>GET THE APP</b></li>
            <li>Tripma</li>
            <li>Tripma for IOS</li>
            <li>Mobile Site </li>
            <li><img src="https://img.freepik.com/premium-vector/available-app-store-get-it-google-play-buttons-go-app-stores-white-background-logotype-logo-ios-android-applications-download-install-user-editorial_661108-8070.jpg?w=2000" class="image2"/></li>
            <li></li>
              </ul></div>
        </div><hr></hr>
        <div class="layout4">
          <div class="dis2">
          <div ><FaTwitter /></div>
          <div><FaSquareInstagram/></div>
          <div> <FaFacebookSquare/></div>
          </div>
          <div>© 2020 Tripma incorporated</div>
        </div>
        <hr></hr>
    </div>
        </div> 
  </div> 
  </>
    )
    }
export default Project;