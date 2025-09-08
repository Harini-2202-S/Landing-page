import React, { useState } from "react"; 
import { FaCheckCircle } from "react-icons/fa";
import corporateLife from "../images/corporate-life.avif";
import pic from "../images/pic-3.png";
import logo from "../images/final-vit-logo.png";
import video from "../images/vit-video.mp4";
import "./LandingPage.css";
import {
  FaClock,
  FaChalkboardTeacher,
  FaIndustry,
  FaAward,
  FaUniversity,
  FaGlobe,
  FaUsers,
  FaLightbulb, 
  FaBookOpen, 
  FaFlask, 
  FaHandshake,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";


const LandingPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null); 
  const [showPopup, setShowPopup] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    const data = { name, phone, email, city, message };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyvdg5775KToqCO9pgKRyZbPeItS2FYc6P5hpu1KTy0Y0Fds7fFL9MJ2sSGuQiypW6ZpQ/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();
      if (result.status === "success") {
        setResponseMsg({ type: "success", text: "Form submitted successfully!" });
        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setMessage("");
        setShowPopup(true); 
      } else {
        setResponseMsg({ type: "error", text: "Error submitting form: " + result.message });
        setShowPopup(true); 
      }
    } catch (err) {
      setResponseMsg({ type: "error", text: "Network error: " + err.message });
      setShowPopup(true);
    }

    setLoading(false);
  };

  return (
    <div className="landing-page">
      {/* Page Title */}
      <div className="page-title">
        <img
          src={logo}
          alt="VIT Logo"
          className="logo"
        />
        <div className="title-text">
          <h1>VIT – CORPORATE PROGRAMS</h1>
          <p><i>Empowering working professionals with world-class engineering education</i>
           
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <h2>B.Tech Mechanical Engineering for Working Professionals</h2>
              <p>
                Advance your career with a flexible, industry-aligned program
                from VIT Chennai – designed to help working professionals
                enhance their technical expertise while balancing career and
                education.
              </p>
            </div>

            {/* Right Content */}
            <div className="hero-register">
              <button
                className="register-btn"
                onClick={() =>
                  document
                    .getElementById("enquiry-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <div className="btn-text">
                  <strong>Register Now</strong>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="highlights">
        <h2>Program Highlights</h2>
        <div className="card-grid">
          <div className="card">
            <FaIndustry className="icon" />
            <h3>Corporate Focused</h3>
            <p>
              Exclusively designed for working professionals from corporate
              organizations, ensuring career progression without disruptions.
            </p>
          </div>
          <div className="card">
            <FaClock className="icon" />
            <h3>Flexible Duration</h3>
            <p>
              Weekend and evening schedules tailored to balance work and study
              commitments effectively.
            </p>
          </div>
          <div className="card">
            <FaChalkboardTeacher className="icon" />
            <h3>Practical Learning</h3>
            <p>
              Industry-relevant curriculum with hands-on training and
              case-study-based teaching.
            </p>
          </div>
          <div className="card">
            <FaAward className="icon" />
            <h3>Recognized Degree</h3>
            <p>
              Earn a VIT Chennai degree, highly valued by top employers and
              professional bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Why VIT Chennai */}
      <section className="why-vit">
        <h2>Why Choose VIT Chennai?</h2>
        <div className="card-grid">
          <div className="card">
            <FaUniversity className="icon" />
            <h3>Ranked Excellence</h3>
            <p>
              NAAC Accreditation: Awarded A++ grade with a score of 3.66 out of
              4 in the 4th cycle (2021).
            </p>
          </div>
          <div className="card">
            <FaGlobe className="icon" />
            <h3>Global Recognition</h3>
            <p>Shanghai Ranking 2024: Placed in the 501–600 band worldwide.</p>
          </div>
          <div className="card">
            <FaIndustry className="icon" />
            <h3>QS World University Rankings 2025</h3>
            <p>
              QS World University Rankings 2025: Ranked in the 719–800 band
              globally and 23rd best in India.
            </p>
          </div>
          <div className="card">
            <FaUsers className="icon" />
            <h3>National Excellence Ranking</h3>
            <p>NIRF 2025 Rankings (India): 14th best university overall in India.</p>
          </div>          
          <div className="card">
            <FaLightbulb className="icon" />
            <h3>Top in Engineering & Innovation</h3>
            <p>Ranked among India’s top institutions for engineering and innovation.</p>
          </div>
          <div className="card">
            <FaBookOpen className="icon" />
            <h3>Academic Excellence Worldwide</h3>
            <p>Accredited programs with international recognition and academic collaborations.</p>
          </div>
          <div className="card">
            <FaFlask className="icon" />
            <h3>Hands-On Innovation & Projects</h3>
            <p>Access to advanced laboratories, research hubs, and corporate projects.</p>
          </div>
          <div className="card">
            <FaHandshake className="icon" />
            <h3>Alumni & Industry Network</h3>
            <p>Strong alumni network and collaborations with global industries for real-world exposure.</p>
          </div>
        </div>
      </section>      

      <section className="strength">
        <div className="strength-content">
          <div className="strength-image">
            <img src={pic} alt="Transformation at VIT" />
          </div>
          <div className="strength-text">
            <h2>The Strength of Redefining Possibilities</h2>
            <p>
              At VIT, education is more than academics—it is a journey of
              transformation. We prepare professionals to move forward with
              confidence, creativity, and purpose.
            </p>
            <p>
              For over three decades, VIT has championed academic excellence and
              innovation, blending deep knowledge with real-world application. Our
              commitment is to equip individuals with the skills to adapt, innovate,
              and lead in a rapidly changing global landscape.
            </p>
            <p>
              VIT graduates are recognized not just for their technical competence,
              but also for their problem-solving abilities, collaborative spirit, and
              leadership qualities—enabling them to thrive in diverse industries and
              contribute meaningfully to society.
            </p>
            <p>
              Our offerings span B.Tech., M.Tech., MBA, and Professional
              Certificate Programmes, carefully designed to strengthen expertise,
              accelerate career growth, and open new opportunities without pausing
              professional commitments.
            </p>
          </div>
        </div>
      </section>

      <section className="pedagogy">
        <div className="pedagogy-content">
          <div className="pedagogy-text">
            <h2>Learning Pedagogy</h2>
            <p>
              Our teaching methodology ensures that working professionals gain
              both theoretical knowledge and practical expertise:
            </p>
            <ul>
              <li>
                <FaCheckCircle className="bullet-icon" /> Live interactive
                lectures by expert faculty
              </li>
              <li>
                <FaCheckCircle className="bullet-icon" /> Hands-on projects with
                real-world industry problems
              </li>
              <li>
                <FaCheckCircle className="bullet-icon" /> Case studies from
                global engineering practices
              </li>
              <li>
                <FaCheckCircle className="bullet-icon" /> Mentorship from
                industry professionals
              </li>
            </ul>
          </div>
          <div className="pedagogy-image">
            <img src={corporateLife} alt="Learning at VIT" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="program-video">
        <h2>Global Learning Environment at VIT</h2>
        <div className="video-container">
          <iframe
            src={video}
            title="Program Video"
            allow="autoplay"
          ></iframe>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="enquiry-form">
        <h2>Connect With Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City / Location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Message / Notes"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="form-consent"></div>

          {/* Responsive button */}
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
      </section>

      {/* Popup after submit */}
      {showPopup && responseMsg && (
        <div className="popup-overlay">
          <div className={`popup ${responseMsg.type}`}>
            <h3>{responseMsg.type === "success" ? "Success" : "Error"}</h3>
            <p>{responseMsg.text}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h4>VIT Chennai</h4>
            <p>© 2025 VIT Chennai | All Rights Reserved</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><FaEnvelope className="footer-icon" />deancc.sponresearch@vit.ac.in</p>            
            <p><FaPhone className="footer-icon" />+91 73587 82571</p>
            <p className="footer-address">
              <FaMapMarkerAlt className="footer-icon" />
              <span>
                Vellore Institute of Technology University,<br />
                Vandalur Kelambakkam Road,<br />
                Keelakotaiyur,<br />
                Chennai, Tamil Nadu – 600 127
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
