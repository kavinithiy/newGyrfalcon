import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import banner from '../../assets/images/banner.jpg';
import bannermb from '../../assets/images/banner-mb.png';
import logo from '../../assets/images/logo.png';
import rountImg from '../../assets/images/rountImg.png';
import curve from '../../assets/images/wavedesign.png';
import device from '../../assets/images/devices.png';
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fb from '../../assets/images/facebook_32.png';
import tw from '../../assets/images/twitter_32.png';
import ln from '../../assets/images/linkedin_32.png';
import styles from './HomePage.module.scss';

function HomePage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={styles.gyrcontainer}>
      <div className={styles.bannerheader}>
        <img src={banner}/>
        <div className={styles.menu}>
          <ul>
            <li><a><Link to="/About">Home</Link></a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Career</a></li>
            <li><a>Conatct us</a></li>
          </ul>
        </div>
        <div className={styles.gfthbmimg} onClick={openNav}></div>      
        <div id="mySidenav" className={styles.sidenav}>
          <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}><span className={styles.closebtn}>&times;</span></a>
          <a><link to="/About">Home</link></a>
          <a href="aboutus.html">About Us</a>
          <a href="services.html">Services</a>
          <a href="careers.html">Careers</a>
          <a href="contact.html">Contact Us</a>
        </div>     
        <div className={styles.bannertxt}>
          Place your App in place store to make popular with people
        </div>
        <div className={styles.bannerstxt}>
          Design based on the user compatablity that reach high level
        </div>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>        
        <div className={styles.bannermobile}>
          <img src={bannermb}/>
        </div>
      </div>
      <div className={styles.clearfix}></div>
      <body>
        <div className={styles.servicetopic}>
          <div className={styles.firstservice}>          
          <div className={`${styles.fstservice} ${styles.shadow1}`}>            
            <div className={styles.iconweb}> <FaEdit /> </div>
            <div className={styles.srvctitle}>Mobile and trending design</div>
            <div className={styles.srvcinfo}>
              Design although using 3d elements in mobile application is not a new trend as such it was for a long time games. New mobile trends for end users. The best apps are the ones that are more engaging, customized for required functionality, simple-to-use.<span className={styles.more}>More...</span>
            </div>            
          </div>
          </div>
          <div className={styles.firstservice}>
          <div className={styles.zoombx1}></div>
          <div className={styles.fstservice}>
            <div className={styles.iconweb}> <FaMobileAlt /> </div>
            <div className={styles.srvctitle}>Cross platform application</div>
            <div className={styles.srvcinfo}>
            Our Cross-Platform App Development Services. We specialize in services such as UI UX design, web-based and AI integrated development, and wearable apps. It is also having a cloud service, which allows testing any number of devices.<span className={styles.more}>More...</span>
            </div>
          </div>
          </div>
          <div className={styles.firstservice}>
          <div className={styles.zoombx1}></div>
          <div className={styles.fstservice}>
            <div className={styles.iconweb}> <FaConnectdevelop /> </div>
            <div className={styles.srvctitle}>Connect with play store & apple store</div>
            <div className={styles.srvcinfo}>New features, and services, from within your app by entering in-app purchase details in App Store Connect. The App Store gives people around the world a safe and trusted place to discover. That the apps we offer the highest standards for security and content.
                <span className={styles.more}>More...</span>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.clearfix}></div>
        <div className={styles.websession}>
          <div className={styles.webservice}>
            <div className={styles.sessiontitle}>Web application development</div>
            <div className={styles.webinfo}>
              Our Cross-Platform App Development Services. We specialize in services such as UI UX design, web-based and AI integrated development, and wearable apps. Having highly skilled and experienced data entry experts and software developer who are knowledgeable in all areas of data entry, we can guarantee you with superior and completely accurate and of legal quality data entry work. We ensure 100% security and confidentiality of your documents.
            </div>
            <div className={styles.Learnmore}>
              View more...
            </div>
          </div>         
          <div className={styles.webnote}>
            <img src={rountImg}/>
            <div className={styles.rect1}></div>
            <div className={styles.rect2}></div>
            <div className={styles.rect3}></div>
            <div className={styles.rect4}></div>
          </div>
          <div className={styles.curveImg}>
            <img src={curve}/>
          </div>
          <div className={styles.deviceImg}>
            <img className={styles.devices} src={device}/>
          </div>          
        </div>
        <div className={styles.clearfix}></div>  
        <div className={styles.appsec}>
          <div className={styles.rect6}></div>
          <div className={styles.serveDetail}>
          <Slider {...settings}>
            <div className={styles.serv1}>
              <div className={styles.serveInfo}>
                <div className={styles.servicesbrief}>
                  <div className={styles.servname}>Mobile app development</div>
                  <div className={styles.servebrief}>We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch.</div>
                </div>
              </div>
            </div>
            <div className={styles.serv2}>
              <div className={styles.serveInfo}>
                <div className={styles.servicesbrief}>
                  <div className={styles.servname}>Web app development</div>
                  <div className={styles.servebrief}>We are convinced that a professionally developed single-page web app can offer impressive and secure web experience. We ensure responsiveness and cross-browser compatibility, high expectations in agility and performance.</div>
                </div>
              </div>
            </div>
            <div className={styles.serv3}>
              <div className={styles.serveInfo}>
                <div className={styles.servicesbrief}>
                  <div className={styles.servname}>Interview training</div>
                  <div className={styles.servebrief}>Prepare for your next job interview with professional interview coaching, mock interview or interview preparation session with Employment BOOST Career.</div>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>       
        <div className={styles.clearfix}></div>
        <div className={styles.appsec, styles.apphgt}>
          <div className={styles.rect5}>
            <div className={styles.startabstct}>
              Start using Abstarct app now!
            </div>
            <div className={styles.gyrapp}>
              <div>Get Gyrfalcon appin your mobile that make easy to connect with us</div>
            </div>
            <div className={styles.appdownload}>
              <button>Download app</button>
            </div>            
          </div>          
        </div>  
      </body>  
      <div className={styles.clearfix}></div>
        <div className={styles.endborder}></div>
        <div className={styles.bottommenu}>
          <div className={styles.pgnme}>
            <div className={styles.pgtitle}>Page</div>
            <div className={styles.pgname}>
              <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Career</a></li>
                <li><a>Conatct us</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.officeaddr}>
            <div className={styles.addrnme}>Office Address</div>
            <div className={styles.addr}>
              <div>Gyrfalcon Technologies</div> <div>3b2 Iswarya Nagar,</div> <div>2nd street, R.V.Complex,</div> <div>Udumalpet Tirupur - 642154,</div> <div>Phone no: 9715645558,</div> <span className={styles.mainnme}>hr@gyrfalcontechnologies.com</span>
            </div>
          </div>
          <div className={styles.abtaddr}>
            <div className={styles.footerabtus}>About Us</div>            
              <div>Gyrfalcon Technologies is a fast growing IT Industry, provides simple, efficient, cost-effective and quality service provider to businesses. The success of the solutions provided has resulted into an exponential growth opportunity for the company. Our data entry accuracy is better than 98.5% and the turnaround time is 10 to 12 hours for standard data entry service... <span className={styles.strong}>More</span></div>
          </div>                  
        </div>
        <div className={styles.clearfix}></div>       
          <div className={styles.footer}>
          <div className={styles.cpyrgt}>
            <div className={styles.footercpyrgt}>Copyright © 2012 Gyrfalcon Technologies All Rights Reserved</div>
            <div className={styles.gyrpwrdby}>This site is Powered By GyrFalcon Technologies</div>
          </div>
          <div className={styles.sclmedialink}>
             <ul>
                <li><img src={fb} className={styles.gftsmicons}/><a href=""></a></li>
                <li><img src={tw} className={styles.gftsmicons}/><a href=""></a></li>
                <li><img src={ln} className={styles.gftsmicons}/><a href=""></a></li>
              </ul>
          </div>
        </div>
      </div>   
  );
}
function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;








