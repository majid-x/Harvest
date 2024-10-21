import "./../CSS/contact.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Contact() {
    return (
        <div className="parent">
            <div className="harvest">
                <h1 id="harvest">H  A  R  V  E  S  T</h1>
            </div>
            <div className="social-div">
                <div className="social-icons">
                    <FaFacebook className="icon" />
                    <FaInstagram className="icon" />
                    <FaTwitter className="icon" />
                </div>
                <div className="phone">
                    <h4 className="contact-number">Phone: (123) 456-7890</h4>
                </div>
            </div>
        </div>
    );
}
