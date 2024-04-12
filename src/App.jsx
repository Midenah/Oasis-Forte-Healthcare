import { useState } from "react";
import Lg from "./assets/logo01.png";
import intro from "./assets/image 2.png";
import hero from "./assets/image 3.png";
import reach from "./assets/Rectangle 2.png";
import domiciliary from "./assets/Rectangle 3.png";
import live from "./assets/Rectangle 4.png";
import support from "./assets/Rectangle 5.png";
import ellipse from "./assets/Ellipse 4.png";
import charity from "./assets/Rectangle 7.png";
import footer from "./assets/logo specs 03.png";
import footerul from "./assets/image 4.png";
import underline from "./assets/path2987.png";
import vision from "./assets/Future.png";
import mission from "./assets/heart.png";
import value from "./assets/love.png";
import call from "./assets/Group 3.png";
import house from "./assets/Group 4.png";
import list from "./assets/Group 5.png";

import {
  PiWhatsappLogoFill,
  PiInstagramLogoFill,
  PiFacebookLogoBold,
  PiTwitterLogoFill,
} from "react-icons/pi";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <input type="text" placeholder="Search" />
        <p>Call Us Today: 073 9000 000</p>
      </header>
      <div className="main">
        <nav className="main-nav">
          <img src={Lg} alt="" />
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Our Service</a>
            </li>
            <li>
              <a href="">Conditions we support</a>
            </li>
            <li>
              <a href="">Cost of Care</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="introduction">
          <div className="introduction-text">
            <h2>Welcome To</h2>
            <div className="text-between">
              <div className="intro-img">
                <p>
                  Oasis <i>Forte</i>
                </p>
                <img src={underline} alt="" />
              </div>
              <h2>Healthcare</h2>
            </div>
            <p>We Provide The Right Care When You Need It Most</p>
            <button src="">Find Out More</button>
          </div>
          <img src={intro} alt="jkk" />
        </div>
        <div className="hero">
          <img src={hero} alt="" />
          <div>
            <h2>We Are A Fully Regulated Service</h2>
            <p>
              Closely Monitored By An External Regulatory Body <a>See How</a>
            </p>
          </div>
        </div>
        <div className="about">
          <h1>What We Do</h1>
          <p>
            At Oasis Forte Healthcare, based in Huddersfield, our focus is on
            putting the client first. We aim to provide an affordable, reliable,
            and flexible service that enables individuals to live well in their
            own homes. Our approach involves tailoring care packages to meet the
            unique needs of each client or their loved ones, promoting
            independence both at home and in the community.{" "}
            <p>
              {" "}
              We offer short or long-term home care support for a variety of
              conditions and disabilities. Our highly trained team is dedicated
              to discussing and creating a care package that suits your needs,
              ensuring quality care and support.
            </p>
            <p>
              Oasis Forte Healthcare is a new home care company in Huddersfield,
              founded by individuals with years of experience in social care. We
              launched this venture to uphold the standard of care we would want
              for ourselves or our loved ones.
            </p>{" "}
            <p>
              Our home visits are always at least 50 minutes long, allowing our
              caregivers to provide quality care and meaningful interactions. We
              prioritize fair compensation and a supportive work environment for
              our caregivers, ensuring they can deliver excellent care in
              clients' homes.
              <p>
                Inspired by the success of oasis of Home Care, founded team, we
                strive to provide compassionate, client-centered care as an
                alternative toresidential care.{" "}
              </p>
            </p>
          </p>
        </div>
        <div className="statement">
          <div className="Vision">
            <img src={vision} alt="" />
            <h2>Our Vision</h2>
            <p>
              Oasis Forte Healthcare Ltd is envision a future where healthcare
              is not just a service but a deeply personalized experience. We are
              committed to redefine the care standards by blending the best
              practices from the private and public health sectors. Through this
              approach, we aim to empower individuals to live healthier, happier
              lives while we expand into multiple zones in a
              short period of time.
            </p>
          </div>
          <div className="Mission">
            <img src={mission} alt="" />
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide comprehensive healthcare solutions that
              meet clients need which is why we are offering multiple range of
              services that can be tailored to individual needs and preferences.
              This ranges from domiciliary care to supported living, our
              approach is to ensures that everyone needing support receives the
              attention and support they deserve irrespective of their aae
              and circumstances.
            </p>
          </div>
          <div className="Values">
            <img src={value} alt="" />
            <h2>Our Values</h2>
            <p>
              Our core values are compassion, integrity and excellence. We
              believe in putting the needs of our clients first, delivering
              services with the utmost professionalism by hiring the best hands
              to provide the care and support our clients require. We are driven
              by excellence to enable us continually adapt with the qualities
              required to thrive so as to remain at the forefront of the
              healthcare industrv.
            </p>
          </div>
        </div>
        <div className="reach-out">
          <div className="reach-text">
            <h2>Why Choose Us</h2>
            <p>
              We can provide you with all the care you need and this includes
              live in care, personal care, companionship, sit in service,
              respite, day care, working night, medication, housekeeping and
              shopping, our staff are enriched with wealth of experience in the
              care sector and we have picked out the best of them to provide you
              with the adequate care and support you need.
            </p>
            <button type="submit">Reach Out Today</button>
          </div>
          <img src={reach} alt="" />
        </div>
        <div className="services">
          <h1>Services We Offer</h1>
          <div className="services-type">
            <div>
              <img src={domiciliary} alt="" />
              <h2>Domiciliary Care</h2>
              <p>
                Receive compassionate support and assistance in the comfort of
                your own home with our comprehensive domiciliary care services.
                Our caregivers are committed to helping you maintain your
                independence while providing assistance with personal care,
                medication management, household tasks. and companionship.
              </p>
            </div>
            <div>
              <img src={live} alt="" />
              <h2>Live-In-Care</h2>
              <p>
                Enjoy around-the-clock care and companionship from our dedicated
                caregivers, allowing you to remain in the comfort and
                familiarity of your home. Our live-in care services provide
                personalized support tailored to your specific needs, ensuring
                your safety. comfort. and well-beina at all times.
              </p>
            </div>
            <div>
              <img src={support} alt="" />
              <h2>Supported Living</h2>
              <p>
                Experience independent living with our supportive staff to
                assist you in your daily activities and promote community
                inclusion. Whether you prefer to live in your own home or in
                shared accommodation, our team is here to provide personalized
                support and encouradement.
              </p>
            </div>
          </div>
          <p>
            At Oasis Forte Healthcare, we are dedicated to providing
            compassionate, reliable, and high-quality care services that enable
            individuals to live with dignity, independence, and fulfilment. To
            learn more about how we can support you or your loved one on the
            journey to optimal health and well-being and the best care
            package for you,
          </p>
          <button type="button">Click Here To Learn More</button>
        </div>
        <div className="steps">
          <h2>How To Get Started With Us</h2>
          <p>
            Discover a Path to Personalized Care and Support by Embarking on a
            journey of compassionate care and support with Oasis Forte
            Healthcare. We understand that navigating the world of care services
            can be overwhelming, which is why our dedicated team is here to walk
            alongside you every step of the way.
          </p>
          <div className="todo">
            <div>
            <img src={call} alt="" />
              <h3>1. Speak To Our Team</h3>
              <p>
                Reach out to our team of experts to talk through your options
                and any questions you may have regarding your care and
                prospective plan.
              </p>
            </div>
            <div>
              <img src={house} alt="" />
              <h3>2. Free Homecare Assessment</h3>
              <p>
                Our professional and supportive manager will visit you to
                discuss your requirements and learn about the type of care you
                are looking for and best fits.
              </p>
            </div>
            <div>
              <img src={list} alt="" />
              <h3>3. Create A Befitting Care Plan</h3>
              <p>
                We will then ensure you have the right care and support in place
                that fits around your needs and preferences with the help of
                our amazina staff.
              </p>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="about-team">
            <h2>Our Team</h2>
            <p>
              Meet Our Exceptional Team at Oasis Forte Healthcare: Your
              Trusted Care Partners!
            </p>
            <p>
              At Oasis Forte Healthcare, our exceptional team is your unwavering
              support system. With hearts full of compassion and hands ready to
              serve, we're not just good; were the best. Trust in our CQC
              registration for peace of mind, knowing you're in the safest
              hands. Choose Oasis Forte Healthcare for heartfelt care that
              surpasses expectations. Your well-being is our top priority.
            </p>
            <div className="team-design">
              <div>
                <img src={ellipse} alt="" />
                <h3>Anthony Banderas</h3>
                <p>Nominated Director</p>
              </div>
              <div>
                <img src={ellipse} alt="" />
                <h3>Georgio Armani</h3>
                <p>CQC Registered manager</p>
              </div>
              <div>
                <img src={ellipse} alt="" />
                <h3>Luis Vitton Bag</h3>
                <p>Team Lead</p>
              </div>
            </div>
          </div>
          <div className="team-review">
            <div>
              <i>4.7</i>
              <h3>23 jan 2023: Ivan Jeanne</h3>
              <p>
                Proin Bibendum Adipiscing Ut Making Live Better Uada. Brilliant
                Service Let Music Take The Way We Provide More Yoi here
              </p>
            </div>
            <hr></hr>
            <div>
              <i>4.7</i>
              <h3>23 jan 2023: Ivan Jeanne</h3>
              <p>
                Proin Bibendum Adipiscing Ut Making Live Better Uada. Brilliant
                Service Let Music Take The Way We Provide More Yoi here
              </p>
            </div>
            <hr></hr>
            <div>
              <i>4.7</i>
              <h3>23 jan 2023: Ivan Jeanne</h3>
              <p>
                Proin Bibendum Adipiscing Ut Making Live Better Uada. Brilliant
                Service Let Music Take The Way We Provide More Yoi here
              </p>
            </div>
            <a href="">Read More Reviews</a>
            <div className="btn">
              <button type="button">Write A Review</button>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="map">
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Unit%202-3%20Ramsden%20House,%20Hudderstield%20HD1%C2%A02UU+(Oasis%20Forte%20Healthcare)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
          <div className="contact-info">
            <h2>Oasis Forte Healthcare</h2>
            <p>
              Unit 2-3 Ramsden House,
              <br /> Hudderstield
              <br /> HD1 2UU
            </p>
            <p>Tel: 03330 9092</p>
            <p> Fax: 03330 9092</p>
            <a href="http://">info@Oasisfortehealthcare.Co.Uk</a>
          </div>
        </div>
        <div className="charities">
          <h2>Charities In View</h2>
          <div className="charity-images">
            <div>
              <img src={charity} alt="" />
            </div>
            <div>
              <img src={charity} alt="" />
            </div>
            <div>
              <img src={charity} alt="" />
            </div>
            <div>
              <img src={charity} alt="" />
            </div>
            <div>
              <img src={charity} alt="" />
            </div>
          </div>
        </div>
        <footer>
          <nav>
            <ul>
              <li className="span">
                <img src={footer} alt="" />
                <p>
                  Oasis Forte <br />
                  Healthcare LTD
                </p>
              </li>
              <li>@2023 All Right Reserved</li>
              <li>Unit 2-3 Ramsden House, Hudderstield HD1 2UU</li>
              <li>TEL: 0343 330 9092</li>
              <li>Social Links</li>
              <li className="icons">
                <i>
                  <PiWhatsappLogoFill />
                </i>
                <i>
                  <PiInstagramLogoFill />
                </i>
                <i>
                  <PiFacebookLogoBold />
                </i>
                <i>
                  <PiTwitterLogoFill />
                </i>
              </li>
            </ul>
            <ul>
              <h4>Quick Links</h4>
              <li>About Us</li>
              <li>Services</li>
              <li>Why Choose Oasis</li>
              <li>Apply For A Job</li>
              <li>Compliments & Complaints</li>
            </ul>
            <ul>
              <h4>Policies And Reports</h4>
              <li>Modern Slavery Statements</li>
              <li>Gender Pay Gap Report</li>
              <li>Terms And Conditions</li>
              <li>Privacy Policy</li>
              <li>PRivacy Statement For Family And Friends</li>
              <li>Cookies Policy</li>
            </ul>
            <ul>
              <div>
                <img src={footerul} alt="" />
              </div>

              <li>
                At Oasis Forte Healthcare. We Prioritize Transparency And
                Quality In All Aspects Of Our Services. Rest Assured. We Are
                Fully Regulated And Rated By The Care Quality Commission (CQC).
                Ensuring That Our Care Meets The Highest Standards Of
                Safety And Excellence.
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default App;
