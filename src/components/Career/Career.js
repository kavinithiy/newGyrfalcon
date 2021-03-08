import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import responsive from '../../assets/images/responsive-web-design-ellsworth-wi.jpg';
import fb from '../../assets/images/facebook_32.png';
import tw from '../../assets/images/twitter_32.png';
import ln from '../../assets/images/linkedin_32.png';
import styles from './Career.module.scss';

const Career = () => (
  <div className={styles.Career}>
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
      </div>
      <div className={styles.clearfix}></div>
      <div className={styles.body}>
      <div className={styles.opentitle}>Openings</div>
        <div className={styles.jobdet}>
            <div className={styles.gyftfontbold}>Android / IOS developer</div>
            <div>We are looking for a candidate with the following skill set</div>
            <div className={styles.jobcritra}>&#8226; Experience / Freshers expertice in Android / Ios app development.</div>
            <div className={styles.jobcritra}>&#8226; Experience in DB development using SQL server</div>
            <div className={styles.jobcritra}>&#8226; Experience in using Infragestics or DevExpress controls</div>
            <div className={styles.jobcritra}>&#8226; Experience in using HTML</div>
            <div className={styles.jobcritra}>&#8226; Knowledge of Java is a big plus</div>            
        </div>
        <div className={styles.jobdet}>
            <div className={styles.gyftfontbold}>ReactJs developer</div>
            <div>We are looking for a candidate with the following skill set</div>
            <div className={styles.jobcritra}>&#8226; Experience / Freshers expertice in ReactJs app development.</div>
            <div className={styles.jobcritra}>&#8226; Experience in DB development using SQL server</div>
            <div className={styles.jobcritra}>&#8226; Experience in Javascript and Typescript</div>
            <div className={styles.jobcritra}>&#8226; Experience in using Html, Css, Scss</div>
            <div className={styles.jobcritra}>&#8226; Knowledge of Java is a big plus</div>            
        </div>
        <div className={styles.jobdet}>
            <div className={styles.gyftfontbold}>Content Writer</div>
            <div>We are looking for a candidate with the following skill set</div>
            <div className={styles.jobcritra}>&#8226; Good Experience in content writing with 1+ year</div>
            <div className={styles.jobcritra}>&#8226; Good knowledge in English.</div>
            <div className={styles.jobcritra}>&#8226; should have communication skill</div>
            <div className={styles.jobcritra}>&#8226; Easy to understand the project material</div>                      
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

Career.propTypes = {};

Career.defaultProps = {};

export default Career;
