import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./Home.css";

function Home() {
  const linkedinUsername = "jay-prajapati-482803227";
  const instagramUsername = "prajapatijay2703";
  const githubUsername = "JrP12345";
  const emailAddress = "prajapatijay2703@gmail.com";
  const phoneNumber = "1234567890";
  const handleDownload = () => {
    const pdfUrl = "RESUME(JAY PRAJAPATI).pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Jay_Prajapati_Resume.pdf"; // Set the desired filename for the downloaded file
    link.target = "_blank";
    link.click();
  };

  return (
    <>
      <div className="container">
        <div className="contactcon">
          <h4>CONTACT ME</h4>

          <div className="items">
            <i class="fa-brands fa-linkedin"></i>
            <h6>
              {" "}
              <Link
                className="contact-link "
                to={`https://www.linkedin.com/in/${linkedinUsername}`}
                target="_blank"
              >
                LinkedIn
              </Link>
            </h6>
          </div>
          <div className="items">
            <i class="fa-brands fa-instagram"></i>
            <h6>
              {" "}
              <Link
                className="contact-link "
                to={`https://www.instagram.com/${instagramUsername}`}
                target="_blank"
              >
                Instagram
              </Link>
            </h6>
          </div>
          <div className="items">
            <i class="fa-brands fa-github"></i>
            <h6>
              {" "}
              <Link
                className="contact-link "
                to={`https://github.com/${githubUsername}`}
                target="_blank"
              >
                GitHub
              </Link>
            </h6>
          </div>
          <div className="items">
            <i class="fa-solid fa-envelope"></i>
            <h6>
              {" "}
              <Link className="contact-link " to={`mailto:${emailAddress}`}>
                Email
              </Link>
            </h6>
          </div>
          <div className="items">
            <i class="fa-solid fa-phone"></i>
            <h6>
              {" "}
              <Link className="contact-link " to={`tel:${phoneNumber}`}>
                Call
              </Link>
            </h6>
          </div>
        </div>
        <div className="imagecon">
          <Image src="portfolioimg.jpeg" className="portpic" alt="Image" />
        </div>
        <div className="introcon">
          <h2>
            Hey there! I'm Jay Prajapati, a third-year student and aspiring website
            and application developer.
          </h2>
          <button className="cvbtn" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
