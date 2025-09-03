import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import corporateLife from "../images/corporate-life.avif";
import "./LandingPage.css";
import {
  FaClock,
  FaChalkboardTeacher,
  FaIndustry,
  FaAward,
  FaUniversity,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Page Title */}
      <div class="page-title">
        <img src="https://vit.ac.in/wp-content/uploads/2023/06/VIT-40-logo-Combo-white.png" alt="VIT Logo" class="logo"></img>
        <div class="title-text">
          <h1>VIT – CORPORATE PROGRAMS</h1>
          <p>Empowering professionals with world-class engineering education</p>
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
                Advance your career with a flexible, industry-aligned program from
                VIT Chennai – designed to help working professionals enhance their 
                technical expertise while balancing career and education.
              </p>
            </div>

            {/* Right Content */}
            <div className="hero-register">
              <button
                className="register-btn"
                onClick={() =>
                  document.getElementById("enquiry-form").scrollIntoView({ behavior: "smooth" })
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
              Ranked among India’s top institutions for engineering and
              innovation.
            </p>
          </div>
          <div className="card">
            <FaGlobe className="icon" />
            <h3>Global Recognition</h3>
            <p>
              Accredited programs with international recognition and academic
              collaborations.
            </p>
          </div>
          <div className="card">
            <FaIndustry className="icon" />
            <h3>Cutting-edge Facilities</h3>
            <p>
              Access to advanced laboratories, research hubs, and corporate
              projects.
            </p>
          </div>
          <div className="card">
            <FaUsers className="icon" />
            <h3>Industry Connect</h3>
            <p>
              Strong alumni network and collaborations with global industries
              for real-world exposure.
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
              <li><FaCheckCircle className="bullet-icon" /> Live interactive lectures by expert faculty</li>
              <li><FaCheckCircle className="bullet-icon" /> Hands-on projects with real-world industry problems</li>
              <li><FaCheckCircle className="bullet-icon" /> Case studies from global engineering practices</li>
              <li><FaCheckCircle className="bullet-icon" /> Mentorship from industry professionals</li>
            </ul>
          </div>
          <div className="pedagogy-image">
            <img src={corporateLife} alt="Learning at VIT" />
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="faculty">
        <h2>Meet Our Faculty</h2>
        <p className="faculty-intro">
          Our faculty team comprises industry veterans and accomplished
          researchers committed to guiding working professionals.
        </p>
        <div className="faculty-grid">
          <div className="faculty-card">
            <img src="/images/faculty1.jpg" alt="Faculty 1" />
            <h3>Dr. Name</h3>
            <p>Expert in Robotics & Automation</p>
          </div>
          <div className="faculty-card">
            <img src="/images/faculty2.jpg" alt="Faculty 2" />
            <h3>Dr. Name</h3>
            <p>Specialist in Thermal Engineering</p>
          </div>
          <div className="faculty-card">
            <img src="/images/faculty3.jpg" alt="Faculty 3" />
            <h3>Dr. Name</h3>
            <p>Researcher in Smart Manufacturing</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="program-video">
        <h2>Program Overview Video</h2>
        <div className="video-container">
          <iframe
            src="https://drive.google.com/file/d/1LsYTas4_HEebAEchcdze55XPinJWDYw5/preview"
            title="Program Video"
            allow="autoplay"
          ></iframe>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="enquiry-form">
        <h2>Connect With Us</h2>
        <form>
          <div class="form-row">
            <input type="text" placeholder="Full Name *" required />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div class="form-row">
            <input type="email" placeholder="Email Address *" required />
            <input type="text" placeholder="City / Location" />
          </div>
          <div class="form-row">
            
            <input type="text" placeholder="Message / Notes" />
          </div>
          
          <div class="form-consent">
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h4>VIT Chennai</h4>
            <p>© 2025 VIT Chennai | All Rights Reserved</p>
          </div>
          <div>
            <h4>Connect</h4>
            <p>Follow us on LinkedIn | Twitter</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
