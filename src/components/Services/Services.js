import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import responsive from '../../assets/images/responsive-web-design-ellsworth-wi.jpg';
import fb from '../../assets/images/facebook_32.png';
import tw from '../../assets/images/twitter_32.png';
import ln from '../../assets/images/linkedin_32.png';
import srvcBanr from '../../assets/images/serviceBannner.jpg';
import srvcBx from '../../assets/images/srvcBox.jpg';
import resBx from '../../assets/images/resIcon.png';
import appBx from '../../assets/images/gearIcon.png';
import trngBx from '../../assets/images/training.png';
import busnman from '../../assets/images/businesswoman.jpg';
import city from '../../assets/images/city.jpg';
import styles from './Services.module.scss';

const Services = () => (
  <div className={styles.Services}>
    <div className={styles.header}>
      <div className={styles.gftlogo}></div>
      <div className={styles.logo}>
        <img src={logo}></img>
      </div>
      <div className={styles.gfthmmenu, styles.hiddenxs}>
          <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Contact Us</a></li> 
          </ul>
      </div>  
    <div className={styles.gfthbmimg} onclick="openNav()"></div>
    <div className={styles.clearfix}></div>
		<div id="mySidenav" className={styles.sidenav}>
		  <a href="javascript:void(0)" className={styles.closebtn} onclick="closeNav()"><span className={closebtn}>&times;</span></a>
		  <a href="">Home</a>
		  <a href="">About Us</a>
		  <a href="">Services</a>
		  <a href="">Careers</a>
		  <a href="">Contact Us</a>
		</div>
    </div>         
    </div>
    <div className={styles.srvcbnr}>
      <img src={city}/>
      <div className={styles.bnrtxt}>Software development capabilities positions GyrFalcon as your preferred digital conversion partner.</div>
      <div className={styles.fnemore}>
        <button type="button">Find Out More..</button>
      </div>
    </div>
      <div className={styles.clearfix}></div>
      <div className={styles.body}>
      <div className={styles.srvceDesc}>
      Over the years GyrFalcon Technologies has in place excellent infrastructure combined with years of experience in the digital arena and a systematic approach for up-dating cutting-edge-technology knowledge base.
We provide exhaustive consultation prior to implementation of assignments and knowledgeable managers to support digitization requirements. Clients around the world depend on us to deliver completed projects of all levels of complexity and volume, reaffirming our proven expertise in full project lifecycle of project conceptualization to meticulous technical design and successful execution.
      </div>
      <div className={styles.srvcBanr}>
        <img src={srvcBanr}/>
        <div className={styles.bnrdesc}>
        Gyrfalcon Technologies was founded with the vision of producing innovative and affordable IT Enabled solutions to enable humanity to explore the opportunities and services we provide. 
        </div>
      </div>
      <div className={styles.clearfix}></div>
      <div className={styles.detDesc}>
      we will continually communicate with, and learn from our Customers, in order to improve our products and services. And, we will keep tune with the technology, no matter how fast it moves, to ensure our Customers always have the best service available to them. Our VISION is "To be the leading provider of Superior, Secure, and Swift all Services"."Our VALUES are Integrity, Teamwork, Enthusiasm, Can-do and will-do attitude, Taking initiatives, Leadership and Creativity.
      </div>
      <div className={styles.srvcBox}>
        <div className={styles.srvcBoxDetail}>
          <div className={styles.srvcBoxDesc}>
            <img src={srvcBx}/>    
            <img src={appBx}/>        
            <div className={styles.srvcDetails}>
            We have a great team to develop Android and Ios applocation. App development services that cover the entire development cycle. Design, Development, QA & more.
            </div>
          </div>
        </div>
        <div className={styles.srvcBoxDetail}>
          <div className={styles.srvcBoxDesc}>
            <img src={srvcBx}/>
            <img src={resBx}/>
            <div className={styles.srvcDetails}>
            We create stunning, professional, user-friendly, affordable website that fits your needs.you eliminate the need for multiple codes for separate webpages and sites for different computers, smartphones and tablets.
            </div>
          </div>
        </div>
        <div className={styles.srvcBoxDetail}>
          <div className={styles.srvcBoxDesc}>
            <img src={srvcBx}/>
            <img src={trngBx}/>
            <div className={styles.srvcDetails}>
            Win in the interview after our one-on-one coaching. Capitalize on your opportunities by making sure you have your job interview answers ready and you are prepared for what the hiring manager will ask you.
            </div>
          </div>
        </div>   
      </div>
      <div className={styles.clearfix}></div>
      <div className={styles.mt}></div>
      <div className={styles.mreinfo}>
      We provide exhaustive consultation prior to implementation of assignments and knowledgeable managers to support digitization requirements. Clients around the world depend on us to deliver completed projects of all levels of complexity and volume, reaffirming our proven expertise in full project lifecycle of project conceptualization to meticulous technical design and successful execution.
      </div>
      <div className={styles.mreinfo}>
        <div className={styles.tmsupport}>
          <img src={busnman}/>
        </div>
      Team GyrFalcon is fully equipped to convert all types of information-printed and word processing, typesetting, document formats to virtually every target structured or unstructured format, including custom and highly specialized DTDs and schemas. Our expertise with highly complex technical documentation warrants that no project is beyond our capabilities.
      </div>
      <div className={styles.mreinfo}>
      This world-class combination of skill, customer centric service and software development capabilities positions GyrFalcon as your preferred digital conversion partner.
      </div>
      </div>  
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
              <div>Gyrfalcon Technologies</div> <div>3b2 Iswarya Nagar,</div> <div>2nd street, R.V.Complex,</div> <div>Udumalpet Tirupur  642154,</div> <div>Phone no: 9715645558,</div> <span className="mainnme">hr@gyrfalcontechnologies.com</span>
            </div>
          </div>
          <div className={styles.abtaddr}>
            <div className={styles.footerabtus}>About Us</div>            
              <div>Gyrfalcon Technologies is a fast growing IT Industry, provides simple, efficient, costeffective and quality service provider to businesses. The success of the solutions provided has resulted into an exponential growth opportunity for the company. Our data entry accuracy is better than 98.5% and the turnaround time is 10 to 12 hours for standard data entry service... <span className="strong">More</span></div>
          </div>                  
        </div>
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

Services.propTypes = {};

Services.defaultProps = {};

export default Services;
