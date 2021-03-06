import React from 'react';
import PropTypes from 'prop-types';
import banner from '../../assets/images/banner.jpg';
import bannermb from '../../assets/images/banner-mb.png';
import logo from '../../assets/images/logo.png';
import rountImg from '../../assets/images/rountImg.png';
import curve from '../../assets/images/wavedesign.png';
import device from '../../assets/images/devices.png';
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";
import fb from '../../assets/images/facebook_32.png';
import tw from '../../assets/images/twitter_32.png';
import ln from '../../assets/images/linkedin_32.png';
import './HomePage.css';

function HomePage() {
  return (
    <div className="gyr-container">
      <header className="banner-header">
        <img src={banner}/>
        <div className="menu">
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Career</a></li>
            <li><a>Conatct us</a></li>
          </ul>
        </div>
        <div className="banner-txt">
          Place your App in place store to make popular with people
        </div>
        <div className="banner-s-txt">
          Design based on the user compatablity that reach high level
        </div>
        <div className="logo">
          <img src={logo}></img>
        </div>        
        <div className="banner-mobile">
          <img src={bannermb}/>
        </div>
      </header>
      <body>
        <div className="service-topic">
          <div className="firstservice">          
          <div className="fst-service shadow1">
            <div class="icon-web"> <FaEdit /> </div>
            <div className="srvc-title">Mobile and trending design</div>
            <div className="srvc-info">
              Design although using 3d elements in mobile application is not a new trend as such it was for a long time games. New mobile trends for end users. The best apps are the ones that are more engaging, customized for required functionality, simple-to-use.<span className="more">More...</span>
            </div>
          </div>
          </div>
          <div className="firstservice">
          <div className="zoombx1"></div>
          <div className="fst-service">
            <div class="icon-web"> <FaMobileAlt /> </div>
            <div className="srvc-title">Cross platform application</div>
            <div className="srvc-info">
            Our Cross-Platform App Development Services. We specialize in services such as UI UX design, web-based and AI integrated development, and wearable apps. It is also having a cloud service, which allows testing any number of devices.<span className="more">More...</span>
            </div>
          </div>
          </div>
          <div className="firstservice">
          <div className="zoombx1"></div>
          <div className="fst-service">
            <div class="icon-web"> <FaConnectdevelop /> </div>
            <div className="srvc-title">Connect with play store & apple store</div>
            <div className="srvc-info">New features, and services, from within your app by entering in-app purchase details in App Store Connect. The App Store gives people around the world a safe and trusted place to discover. That the apps we offer the highest standards for security and content.
            
<span className="more">More...</span>
            </div>
          </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="web-session">
          <div className="web-service">
            <div className="session-title">Web application development</div>
            <div className="web-info">
              Our Cross-Platform App Development Services. We specialize in services such as UI UX design, web-based and AI integrated development, and wearable apps. Having highly skilled and experienced data entry experts and software developer who are knowledgeable in all areas of data entry, we can guarantee you with superior and completely accurate and of legal quality data entry work. We ensure 100% security and confidentiality of your documents.
            </div>
            <div className="Learn-more">
              View more...
            </div>
          </div>
          <div className="web-note">
            <img src={rountImg}/>
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
          </div>
          <div className="curveImg">
            <img src={curve}/>
          </div>
          <div className="deviceImg">
            <img className="devices" src={device}/>
          </div>          
        </div>
        <div className="clearfix"></div>  
        <div className="app-sec">
          <div className="rect6"></div>
          <div className="serveDetail">
            <div className="serv1">
              <div className="serveInfo">
                <div className="servicesbrief">
                  <div className="servname">Mobile app development</div>
                  <div className="servebrief">We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch.</div>
                </div>
              </div>
            </div>
            <div className="serv2">
              <div className="serveInfo">
                <div className="servicesbrief">
                  <div className="servname">Web app development</div>
                  <div className="servebrief">We are convinced that a professionally developed single-page web app can offer impressive and secure web experience. We ensure responsiveness and cross-browser compatibility, high expectations in agility and performance.</div>
                </div>
              </div>
            </div>
            <div className="serv3">
              <div className="serveInfo">
                <div className="servicesbrief">
                  <div className="servname">Interview training</div>
                  <div className="servebrief">Prepare for your next job interview with professional interview coaching, mock interview or interview preparation session with Employment BOOST Career.</div>
                </div>
              </div>
            </div>
          </div>
        </div>       
        <div className="clearfix"></div>
        <div className="app-sec app-hgt">
          <div className="rect5">
            <div className="start-abstct">
              Start using Abstarct app now!
            </div>
            <div className="gyr-app">
              <div>Get Gyrfalcon appin your mobile that make easy to connect with us</div>
            </div>
            <div className="app-download">
              <button>Download app</button>
            </div>            
          </div>          
        </div>    
        <div className="end-border"></div>
        <div className="bottom-menu">
          <div className="pg-nme">
            <div className="pg-title">Page</div>
            <div className="pg-name">
              <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Career</a></li>
                <li><a>Conatct us</a></li>
              </ul>
            </div>
          </div>
          <div className="office-addr">
            <div className="addr-nme">Office Address</div>
            <div className="addr">
              <div>Gyrfalcon Technologies</div> <div>3b2 Iswarya Nagar,</div> <div>2nd street, R.V.Complex,</div> <div>Udumalpet Tirupur - 642154,</div> <div>Phone no: 9715645558,</div> <span className="main-nme">hr@gyrfalcontechnologies.com</span>
            </div>
          </div>
          <div className="abt-addr">
            <div className="footer-abtus">About Us</div>            
              <div>Gyrfalcon Technologies is a fast growing IT Industry, provides simple, efficient, cost-effective and quality service provider to businesses. The success of the solutions provided has resulted into an exponential growth opportunity for the company. Our data entry accuracy is better than 98.5% and the turnaround time is 10 to 12 hours for standard data entry service... <span className="strong">More</span></div>
          </div>                  
        </div>
        <div className="clearfix"></div>
        <div className="footer">
          <div className="cpy-rgt">
            <div className="footer-cpy-rgt">Copyright © 2012 Gyrfalcon Technologies All Rights Reserved</div>
            <div className="gyr-pwrdby">This site is Powered By GyrFalcon Technologies</div>
          </div>
          <div className="scl-media-link">
             <ul>
                <li class=""><img src={fb} className="gft-sm-icons" alt=""/><a href="#home"></a></li>
                <li class=""><img src={tw} className="gft-sm-icons" alt=""/><a href="#news"></a></li>
                <li class=""><img src={ln} className="gft-sm-icons" alt=""/><a href="#about"></a></li>
              </ul>
          </div>
        </div>
      </body>
    </div>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;








