import React from "react";
import Button from "../../components/button/Button";
import { GoChevronRight } from "react-icons/go";
import './about.css';
import Slider from "./Slider";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <div className="container conmain col-lg-5 col-md-8 text-center">
        <h1>
          About Us
        </h1>

        <p className="text-light fs-6">
         Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
         </p>
        <Button content="Available For Hire" />
      </div>


      <div className="container-fluid mx-auto">
        <div className="row align-items-center justify-content-center col-12 mx-auto">
          <div className=" col-lg-3 col-md-5 mb-3">
            <img style={{width: '100%'}} src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/profile-img.jpg" alt="" />
          </div>

          <div className=" col-lg-4 col-md-7 mb-3">
            <h4 className="h4" >Professional Photographer from New York</h4>

            <p className="smpara"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>

            <div className="alllogos-baba row justify-content-between my-4">
              <div className="col-6 d-flex flex-column gap-2">
                
                <div className="alllogos d-flex align-items-center gap-1">
                  <GoChevronRight className="chevron"/>
                  <p><span>Birthday: </span>20 March 2003</p>
                </div>

                <div className="alllogos d-flex align-items-center gap-1">
                  <GoChevronRight className="chevron"/>
                  <p><span>Website: </span>www.photofolio.com</p>
                </div>

                <div className="alllogos d-flex align-items-center gap-1">
                  <GoChevronRight className="chevron"/>
                  <p><span>Phone: </span>+92 3054313910</p>
                </div>

                <div className="alllogos d-flex align-items-center gap-1">
                  <GoChevronRight className="chevron"/>
                  <p><span>City: </span>Lahore</p>
                </div>
              </div>
              <div className="col-6 d-flex flex-column gap-2">
                
                <div className="alllogos d-flex align-items-center gap-1">
                  <GoChevronRight className="chevron"/>
                  <p><span>Age: </span>21</p>
                </div>

                <div className="alllogos d-flex align-items-center gap-1">
                  <GoChevronRight className="chevron"/>
                  <p><span>Degree: </span>Bachelors</p>
                </div>

                <div className="alllogos d-flex align-items-center gap-1">
                  <GoChevronRight className="chevron"/>
                  <p><span>Email: </span>meet@gmail.com</p>
                </div>

                <div className="alllogos d-flex align-items-center gap-1">
                  <GoChevronRight className="chevron"/>
                  <p><span>Freelance: </span>Available</p>
                </div>
              </div>
            </div>

            <p className="para">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>

            <p className="para">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui.</p>
          </div>
        </div>
      </div>

      <div className="container my-5">
      <div className="test d-flex align-items-center">
        <h4>Testimonials</h4>
        <div className="hrr"></div>
      </div>
      <h1><i>What they are saying</i></h1>
      </div>

      <div className="container">
      <Slider/>

      </div>

      <Footer/>
    </>
  );
};

export default About;
