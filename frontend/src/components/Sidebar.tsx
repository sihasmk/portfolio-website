// React icons
import { GiPlateClaw } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaBirthdayCake } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/mamun.jpg" alt="" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name">Sihas Kumarasingha</h1>
          <p className="title">Aspiring Software Engineer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiPlateClaw />
        </button>
      </div>

      {/* Contact Info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                className="contact-link"
                href="mailto:sihaskumarasingha@gmail.com"
              >
                sihaskumarasingha@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaGithub />
            </div>
            <div className="contact-info">
              <p className="contact-title">Github</p>
              <a className="contact-link" href="https://github.com/sihasmk">
                https://github.com/sihasmk
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/sihas-kumarasingha-5064a5310/"
              >
                https://www.linkedin.com/in/sihas-kumarasingha-5064a5310/
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a className="contact-link" href="tel:+94775380370">
                +94 77 538 0370
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaBirthdayCake />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2004-10-19" className="contact-link">
                19 Oct, 2004
              </time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaLocationDot />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Pitakotte, Colombo, Sri Lanka</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
