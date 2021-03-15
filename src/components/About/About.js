import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import responsive from '../../assets/images/responsive-web-design-ellsworth-wi.jpg';
import fb from '../../assets/images/facebook_32.png';
import tw from '../../assets/images/twitter_32.png';
import ln from '../../assets/images/linkedin_32.png';
import city2 from '../../assets/images/city2.jpg';
import styles from './About.module.scss';

const About = () => (
  <div className={styles.About}>
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
        <div className={styles.gfthbmimg} onClick={openNav}></div>      
        <div id="mySidenav" className={styles.sidenav}>
          <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}><span className={styles.closebtn}>&times;</span></a>
          <a href="index.html">Home</a>
          <a href="aboutus.html">About Us</a>
          <a href="services.html">Services</a>
          <a href="careers.html">Careers</a>
          <a href="contact.html">Contact Us</a>
        </div>                
      </div>
      <div className={styles.clearfix}></div>
      <div className={styles.homecontainer}>
      <div className={styles.colmd12}>
          <div className={styles.gfthptitle}>About GyrFalcon Technologies!</div>
          <div className={styles.glyphiconokcircle}>Gyrfalcon Technologies is located in southern part of India (Udumalpet,Tiruppur Dist,Tamilnadu), is well established as an Information Technology Enabled Service provider Company. The Company has established in the industry by its highly dedicated Professionals to provide total IT enabled solutions services under one roof. We possess with the latest technology to deliver excellent quality with turn around time. With having nearly 3 years of experience and its operations, has increased its business by acquiring some major domestic projects. We honor our customers with respect to ensure customer satisfaction by rewarding quality work on right time and in a right manner.</div>
          <div className={styles.resimg}><img src={responsive} className={styles.gftaboutusimage} alt=""/></div>
          <div className={styles.indend}>Gyrfalcon Technologies is a fast growing IT Industry, provides simple, efficient, costeffective and quality service provider to businesses. The success of the solutions provided has resulted into an exponential growth opportunity for the company.We are doing Web applications (Responsive web designing), Hybrid mobile applications(Android, ios and windows), ePublications also we offer fine quality data entry service product at competitive rates. Our data entry accuracy is better than 98.5% and the turnaround time is 10 to 12 hours for standard data entry service. Our experienced data entry operators are knowledgeable in all areas of data management and have an average of 3+ years' experience. Our data entry work is superior and completely accurate and of legal quality.</div>
          <div className={styles.indend}>Our SERVICES we aim at providing stateoftheart paperless Office Management Services including but not limiting to Data Entry. We will transmit finished reports to you by secure email, fax, and hard copy delivery. We meet and exceed international rules and regulations. We can provide good quality data entry in the specified TAT. Kindly help with your suggestions and references if any. We will look forward for your cooperation.</div>
          <div className={styles.gfthptitle}>GyrFalcon Technologies Advantages:</div>
          <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> 100 machines available for work 24*7, 365 days (if required). By the end of DECEMBER 2015 we are expanding by another 100 machines in our two more premises at Udumalpet,Tiruppur Dist,Tamilnadu.</div>
          <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> Employees are constantly trained in our training center</div>
          <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> We can provide any turnaround time requirements.</div>
          <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> Dedicated IT department.
              Having highly skilled and experienced data entry experts and software developer who are knowledgeable in all areas of data entry, we can guarantee you with superior and completely accurate and of legal quality data entry work. We ensure 100% security and confidentiality of your documents.</div>
              <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> We have 24 X 7 security personnel manning our office.</div>
          <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> None of our data entry work leaves our office and we don't have any subcontractors and hence the client information does not leave our office.</div>
      </div>    
        <div className={styles.city2bnr}>
          <div className={styles.uniqweb}>Let’s Create Your Unique Websites.</div>
          <div className={styles.webdesn}>Affordable web service make good reputation</div>
          <img src={city2}/>
        </div>  
          <div className={styles.clearfix}></div>
      <div className={styles.colmd12}>
          <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> All the external drives including Pen drive, CD, DVD drives are disabled on each computer.</div>
              <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> No personnel are allowed to bring in or take out any paper or any written documents</div>

                  <div className={styles.gftmarginTop}><span className={styles.glyphicons,styles.glyphiconchevronleft}></span> No person is allowed to bring in any electronic devices including laptops, PDA.</div>
                      <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> All our Employees sign a confidentiality and nondisclosure agreement.</div>
                          <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> We maintain uptodate contractual agreements with all business parties.</div>
                              <div className={styles.gftmarginTop}><span className={styles.glyphicons, styles.glyphiconokcircle}></span> We have instituted security measures to protect the security and integrity of protected information according to guidelines.</div>
                                  <div className={styles.gftmarginTop}><span className={styles.glyphicons,styles.glyphiconokcircle}></span> Every employee is checked on entering and leaving the premises. We also have instituted a system where there is random checking on a regular basis.</div>

          <div className={styles.noindend}>Responsive web designingSpread your website to the world. Publics expect instant, reliable, secure access to their needs through online from any devices. The use of mobile devices to surf the web is growing at an astronomical pace, but unfortunately much of the web isn't optimized for those mobile devices.</div>
          
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
function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
About.propTypes = {};

About.defaultProps = {};

export default About;
