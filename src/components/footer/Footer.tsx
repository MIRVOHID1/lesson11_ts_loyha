import './Footer.scss'
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer' id='footer'>
      <div className="container">
        <div className='footer__wrapper'>
          <div className='footer__top'>
            <ul>
              <li style={{ color: "#767676" }}>Buy</li>
              <li style={{ color: "#767676" }}>Registration</li>
              <li style={{ color: "#767676" }}>eBay Money Back Guarantee</li>
              <li style={{ color: "#767676" }}>Grand Complications</li>
              <li style={{ color: "#767676" }}>Complications</li>
              <li style={{ color: "#767676" }}>Calatrava</li>
              <li style={{ color: "#767676" }}>Gondolo</li>
              <li style={{ color: "#767676" }}>Golden Ellipse</li>
            </ul>
            <ul>
              <li style={{ color: "#767676" }}>Sell</li>
              <li style={{ color: "#767676" }}>Pocket Watches</li>
              <li style={{ color: "#767676" }}>Rare Handcrafts</li>
              <li style={{ color: "#767676" }}>Rare Handcrafts</li>
              <li style={{ color: "#767676" }}>Rare Handcrafts</li>
              <li style={{ color: "#767676" }}>Tools & apps</li>
              <li style={{ color: "#767676" }}>Savoir-Faire</li>
              <li style={{ color: "#767676" }}>Savoir-Faire</li>
              <li style={{ color: "#767676" }}>The Manufacture</li>
            </ul>
            <ul>
              <li style={{ color: "#767676" }}>Stay connected</li>
              <li style={{ color: "#767676" }}><ImFacebook2/>Facebook</li>
              <li style={{ color: "#767676" }}><FaTwitterSquare/>Twitter</li>
            </ul>
            <ul>
              <li style={{ color: "#767676" }}>About eBay</li>
              <li style={{ color: "#767676" }}>Contact</li>
              <li style={{ color: "#767676" }}>Careers</li>
              <li style={{ color: "#767676" }}>Press</li>
              <li style={{ color: "#767676" }}>follow</li>
              <li style={{ color: "#767676" }}>Press Releases</li>
              <li style={{ color: "#767676" }}>sddvs</li>
              <li style={{ color: "#767676" }}>SITE MAP</li>
              <li style={{ color: "#767676" }}>SITE MAP</li>
              <li style={{ color: "#767676" }}>SITE MAP</li>
              <li style={{ color: "#767676" }}>SITE MAP</li>
            </ul>
            <ul>
              <li style={{ color: "#767676" }}>Help & Contact</li>
              <li style={{ color: "#767676" }}>Contact</li>
              <li style={{ color: "#767676" }}>Careers</li>
              <li style={{ color: "#767676" }}>Press</li>
              <li style={{ color: "#767676" }}>FOLLOW US</li>
              <li style={{ color: "#767676" }}>Press Releases</li>
              <li style={{ color: "#767676" }}></li>
              <li style={{ color: "#767676" }}>SITE MAP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer