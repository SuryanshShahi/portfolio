import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import profile from "./suryansh.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Data } from "./Data";

function Home() {
  const [column, setColumn] = useState(false);
  const [data, setData] = useState(Data);
  const filterData = (categItem) => {
    const updatedItems = Data.filter((e) => {
      return e.category === categItem;
    });
    setData(updatedItems);
  };
  const changeBackground = () => {
    if (window.scrollY >= 75) {
      setColumn(true);
    } else {
      setColumn(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="row gx-0" style={{ background: "#1d1b19" }}>
      <div
        className={
          column
            ? "col-lg-8 col-12 px-lg-5 order-lg-first order-md-first order-last"
            : "col-lg-7 col-12 px-lg-5"
        }
        style={{ borderRight: "1px solid #888" }}
      >
        <div className="container px-lg-5" style={{ paddingTop: "100px" }}>
          <div
            style={{ color: "#987750", fontSize: "18px", fontWeight: "500" }}
          >
            INTRODUCTION
          </div>
          <h1
            className="py-5 text-white"
            style={{ fontWeight: "400", fontSize: "48px" }}
          >
            Web Developer
          </h1>
          <p
            className=""
            style={{ textAlign: "justify", color: "#888", fontSize: "25px" }}
          >
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        <div className="container px-lg-5" style={{ paddingTop: "100px" }}>
          <div
            style={{ color: "#987750", fontSize: "18px", fontWeight: "500" }}
          >
            ABOUT ME
          </div>
          <h1
            className="py-5  text-white"
            style={{ fontWeight: "400", fontSize: "48px" }}
          >
            Biography
          </h1>
          <p
            className=""
            style={{ textAlign: "justify", color: "#888", fontSize: "25px" }}
          >
            I'm a Freelancer Front-end Developer with over 12 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people are new experiences.
          </p>
          <div className="biography">
            <div className="">
              <div className="row" style={{ color: "#888", fontSize: "18px" }}>
                <div className="col-6 font-weight-bold pt-2">NAME</div>
                <div className="col-6 pt-2" style={{ color: "#ddd" }}>
                  Suryansh Shahi
                </div>
                <div className="col-6 font-weight-bold pt-2">BIRTHDAY</div>
                <div className="col-6 pt-2" style={{ color: "#ddd" }}>
                  06/03/2002
                </div>
                <div className="col-6 font-weight-bold pt-2">AGE</div>
                <div className="col-6 pt-2" style={{ color: "#ddd" }}>
                  22
                </div>
                <div className="col-6 font-weight-bold pt-2">ADDRESS</div>
                <div className="col-6 pt-2" style={{ color: "#ddd" }}>
                  ADDRESS
                </div>
                <div className="col-6 font-weight-bold pt-2">PHONE</div>
                <div className="col-6 pt-2" style={{ color: "#ddd" }}>
                  7376190196
                </div>
                <div className="col-6 font-weight-bold pt-2">EMAIL</div>
                <div
                  className="col-6 pt-2"
                  style={{ color: "#ddd", wordBreak: "break-word" }}
                >
                  suryansh5476@gmail.com
                </div>
              </div>
            </div>

            <div
              className="align-items-center justify-content-center d-flex ml-auto downloadBtn"
              style={{ border: "2px solid #8888", width: "100%" }}
            >
              <a
                href=""
                className="text-center text-decoration-none p-5"
                download
              >
                <span className="fa fa-download fa-4x"></span>
                <div
                  className="mt-3"
                  style={{ color: "rgb(136, 136, 136)", fontWeight: "500" }}
                >
                  DOWNLOAD CV
                </div>
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="container px-lg-5" style={{ paddingTop: "100px" }}>
          <div className="nav nav-tabs border-0 mb-4 justify-content-lg-start justify-content-md-start justify-content-center justify-content-sm-start d-flex">
            <li
              style={{ fontSize: "30px" }}
              className="tab active"
              href="#exp"
              data-toggle="tab"
              type="button"
            >
              Experience
              <span className="px-3" style={{ color: "rgba(255,255,255,.2)" }}>
                —
              </span>
            </li>
            <li
              style={{ fontSize: "30px" }}
              className="tab"
              href="#edu"
              data-toggle="tab"
              type="button"
            >
              Education
              <span className="px-3" style={{ color: "rgba(255,255,255,.2)" }}>
                —
              </span>
            </li>
            <li
              style={{ fontSize: "30px" }}
              className="tab"
              href="#skills"
              data-toggle="tab"
              type="button"
            >
              Skills
            </li>
          </div>
          <div className="tab-content">
            <div id="exp" className="active tab-pane">
              <div className="pb-5 text-white">
                <div
                  className="py-lg-5 py-3 px-lg-5 px-3 mb-3"
                  style={{ background: "#181715", border: "1px solid #151412" }}
                >
                  <div className="d-flex">
                    <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                      Quantum IT Innovation &nbsp;&nbsp;
                      <span style={{ color: "#888", fontStyle: "italic" }}>
                        ( 07/2022 — 10/2022 )
                      </span>
                    </div>
                  </div>
                  <h3 className="py-2">Frontend Web Developer Trainee</h3>
                  <p
                    className="pt-2"
                    style={{ fontSize: "18px", color: "#888" }}
                  >
                    Quantum IT Innovation is the leading Mobile App, Web
                    Development & Digital Marketing agency.
                    <li className="mt-2">Worked on 10+ live projects.</li>
                    <li>
                      Skills Used- Reactjs, Javascript, Bootstrap, Material UI,
                      Git, WordPress, Nextjs
                    </li>
                  </p>
                </div>
                <div
                  className="py-lg-5 py-3 px-lg-5 px-3 mb-3"
                  style={{ background: "#181715", border: "1px solid #151412" }}
                >
                  <div className="d-flex">
                    <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                      EPIC HOME SERVICE &nbsp;&nbsp;
                      <span style={{ color: "#888", fontStyle: "italic" }}>
                        ( 01/2022 — 07/2022 )
                      </span>
                    </div>
                  </div>
                  <h3 className="py-2">Frontend Developer (Part-time)</h3>
                  <p
                    className="pt-2"
                    style={{ fontSize: "18px", color: "#888" }}
                  >
                    Epic Vila / Epic Home Service is a service based startup
                    company which is dealing with all kinds of home repair &
                    maintanence services for the past 5 years.
                    <li className="mt-2">
                      I have worked as a frontend developer, working on real
                      live projects.{" "}
                    </li>
                    <li>
                      Also, developed a website for Sanskriti Vidya Mandir
                      School. Worked on multiple projects.{" "}
                    </li>
                    <li>
                      Skills Developed- Reactjs, Javascript, Material UI, PHP
                      etc
                    </li>
                  </p>
                </div>
                <div
                  className="py-lg-5 py-3 px-lg-5 px-3 mb-3"
                  style={{ background: "#181715", border: "1px solid #151412" }}
                >
                  <div className="d-flex">
                    <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                      EPIC HOME SERVICE &nbsp;&nbsp;
                      <span style={{ color: "#888", fontStyle: "italic" }}>
                        ( 08/2021 — 01/2022 )
                      </span>
                    </div>
                  </div>
                  <h3 className="py-2">Frontend Developer Intern </h3>
                  <p
                    className="pt-2"
                    style={{ fontSize: "18px", color: "#888" }}
                  >
                    Epic Vila / Epic Home Service is a service based startup
                    company which is dealing with all kinds of home repair &
                    maintanence services for the past 5 years.
                    <li className="mt-2">
                      I have worked as a frontend developer, working on the
                      company's live website.{" "}
                    </li>
                    <li>
                      Skills Developed- Reactjs, Material UI, Bootstrap etc.
                    </li>
                  </p>
                </div>
                <div
                  className="py-lg-5 py-3 px-lg-5 px-3"
                  style={{ background: "#181715", border: "1px solid #151412" }}
                >
                  <div className="d-flex">
                    <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                      The Sparks Foundation &nbsp;&nbsp;
                      <span style={{ color: "#888", fontStyle: "italic" }}>
                        ( 01/2021 — 02/2021 )
                      </span>
                    </div>
                  </div>
                  <h3 className="py-2">Web Developer Intern </h3>
                  <p
                    className="pt-2"
                    style={{ fontSize: "18px", color: "#888" }}
                  >
                    <li>
                      The task was to create a simple website where payment
                      gateway is integrated.
                    </li>
                    <li>
                      Also, after a successful transaction, an confirmation mail
                      will be sent to the receiver
                    </li>
                    <li>Skills developed- HTML, CSS, Javascript & Nodejs</li>
                  </p>
                </div>
              </div>
            </div>
            <div id="edu" className="tab-pane fade">
              <div className="pb-5 text-white">
                <div
                  className="py-lg-5 py-3 px-lg-5 px-3 mb-3"
                  style={{ background: "#181715", border: "1px solid #151412" }}
                >
                  <div className="d-flex">
                    <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                      Gautam Buddha University &nbsp;&nbsp;
                      <span style={{ color: "#888" }}>( 2019 — 2023 )</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="py-2">
                      {" "}
                      B.Tech (Computer Science & Engineering)
                    </h3>
                    <h3
                      className="py-2 ml-auto"
                      style={{ fontSize: "17px", color: "#888" }}
                    >
                      8.57 CGPA
                    </h3>
                  </div>
                  <p
                    className="pt-2"
                    style={{ fontSize: "18px", color: "#888" }}
                  >
                    Projects:
                    <li>
                      A collaborative project with biotech. Helped in
                      implementing a research paper based on gene calculation,
                      working on the frontend part.
                    </li>
                  </p>
                </div>
                <div
                  className="py-lg-5 py-3 px-lg-5 px-3 mb-3"
                  style={{ background: "#181715", border: "1px solid #151412" }}
                >
                  <div className="d-flex">
                    <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                      Don Bosco Senior Secondary School &nbsp;&nbsp;
                      <span style={{ color: "#888" }}>( 2018 — 2019 )</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="py-2">12th (CBSE)</h3>
                    <h3
                      className="py-2 ml-auto"
                      style={{ fontSize: "17px", color: "#888" }}
                    >
                      78.4%
                    </h3>
                  </div>
                  <p
                    className="pt-2"
                    style={{ fontSize: "18px", color: "#888" }}
                  ></p>
                </div>
                <div
                  className="py-lg-5 py-3 px-lg-5 px-3"
                  style={{ background: "#181715", border: "1px solid #151412" }}
                >
                  <div className="d-flex">
                    <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                      Reliance Academy &nbsp;&nbsp;
                      <span style={{ color: "#888" }}>( 2016 — 2017 )</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="py-2">10th (CBSE)</h3>
                    <h3
                      className="py-2 ml-auto"
                      style={{ fontSize: "17px", color: "#888" }}
                    >
                      9.4 CGPA
                    </h3>
                  </div>
                  <p
                    className="pt-2"
                    style={{ fontSize: "18px", color: "#888" }}
                  ></p>
                </div>
              </div>
            </div>
            <div
              id="skills"
              style={{ color: "#888" }}
              className="tab-pane fade"
            >
              <div className="d-inline">
                <div className="pb-2">ReactJS</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    92%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "92%", background: "#987750" }}
                  ></div>
                </div>
              </div>
              <div className="d-inline">
                <div className="pb-2">Web3JS</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    95%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "95%", background: "#987750" }}
                  ></div>
                </div>
              </div>
              <div className="d-inline">
                <div className="pb-2">Blockchain</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    80%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%", background: "#987750" }}
                  ></div>
                </div>
              </div>
              <div className="d-inline">
                <div className="pb-2">Nextjs</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">Truffle</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">NodeJS</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">MongoDB</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">ExpressJS</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">JAVA</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">SQL</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">Git</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">Javascript</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <div className="d-inline">
                <div className="pb-2">DBMS</div>
                <div className="float-right text-dark">
                  <span
                    className="px-1 mb-1 position-absolute"
                    style={{
                      background: "#e5e5e5",
                      fontSize: "12px",
                      margin: " -20px -32px",
                    }}
                  >
                    85%
                  </span>
                </div>

                <div className="progress mb-4" style={{ height: "2px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", background: "#987750" }}
                  ></div>
                </div>
              </div>

              <p className="" style={{ color: "#888" }}>
                A freelance creative designer with a love for minimal design,
                clean typography and well-written code, located in San
                Francisco. Provide high quality and cost effective offshore web
                and software development services. Wide range of web and
                software development services across the world.
              </p>
            </div>
          </div>
        </div>

        <div className="container px-lg-5" style={{ paddingTop: "100px" }}>
          <div
            style={{ color: "#987750", fontSize: "18px", fontWeight: "500" }}
          >
            PORTFOLIO
          </div>
          <h1 className="py-5 text-white">Featured Projects</h1>
          <p className="" style={{ textAlign: "justify" }}></p>
          <div
            className="nav nav-tabs text-white border-0 mb-3"
            style={{ fontSize: "18px" }}
          >
            <li
              className="tab active"
              style={{ fontSize: "30px" }}
              onClick={() => setData(Data)}
              type="button"
              data-toggle="tab"
            >
              All
              <span className="px-3" style={{ color: "rgba(255,255,255,.2)" }}>
                —
              </span>
            </li>
            <li
              className="tab"
              type="button"
              data-toggle="tab"
              style={{ fontSize: "30px" }}
              onClick={() => filterData("personal")}
            >
              Personal Projects
              <span className="px-3" style={{ color: "rgba(255,255,255,.2)" }}>
                —
              </span>
            </li>
            <li
              className="tab"
              type="button"
              data-toggle="tab"
              style={{ fontSize: "30px" }}
              onClick={() => filterData("internship")}
            >
              Internships
            </li>
          </div>
          <div className="row text-center">
            {data.map((e) => {
              return (
                <div className="col-6 mb-3">
                  <div className="projectCard position-relative">
                    <img
                      src={e.image}
                      className="img-fluid"
                      style={{ height: "270px" }}
                    />
                    <div className="details">
                      <div className="justify-content-center align-items-center d-flex">
                        <div className="p-3">
                          <div className="text-white content">{e.text}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white mt-2" style={{ fontSize: "18px" }}>
                    {e.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container px-lg-5" style={{ paddingTop: "100px" }}>
          <div
            style={{ color: "#987750", fontSize: "18px", fontWeight: "500" }}
          >
            SERVICES
          </div>
          <h1 className="py-5 text-white">What I Do</h1>
          <p className="text-white" style={{ textAlign: "justify" }}>
            I help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers
            and growing overall sales.
          </p>

          <div className="container pb-5 text-white">
            <div
              className="py-lg-5 py-3 pl-lg-5 mb-3 row"
              style={{ background: "#181715", border: "1px solid #151412" }}
            >
              <div className="col-9" style={{ borderRight: "1px solid red" }}>
                <div className="d-flex">
                  <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                    FRENIFY LLC &nbsp;&nbsp;
                    <span style={{ color: "#888" }}>( 2018 — Today )</span>
                  </div>
                </div>
                <h3 className="py-2">Sr. Front-end Engineer</h3>
                <p className="pt-2" style={{ fontSize: "18px", color: "#888" }}>
                  Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  Starts from <h4>$599</h4>
                </div>
              </div>
            </div>

            <div
              className="py-lg-5 py-3 pl-lg-5 mb-3 row"
              style={{ background: "#181715", border: "1px solid #151412" }}
            >
              <div className="col-9" style={{ borderRight: "1px solid red" }}>
                <div className="d-flex">
                  <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                    FRENIFY LLC &nbsp;&nbsp;
                    <span style={{ color: "#888" }}>( 2018 — Today )</span>
                  </div>
                </div>
                <h3 className="py-2">Sr. Front-end Engineer</h3>
                <p className="pt-2" style={{ fontSize: "18px", color: "#888" }}>
                  Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  Starts from <h4>$599</h4>
                </div>
              </div>
            </div>

            <div
              className="py-lg-5 py-3 pl-lg-5 mb-3 row"
              style={{ background: "#181715", border: "1px solid #151412" }}
            >
              <div className="col-9" style={{ borderRight: "1px solid red" }}>
                <div className="d-flex">
                  <div style={{ fontSize: "18px" }} className="pr-3 pb-2">
                    FRENIFY LLC &nbsp;&nbsp;
                    <span style={{ color: "#888" }}>( 2018 — Today )</span>
                  </div>
                </div>
                <h3 className="py-2">Sr. Front-end Engineer</h3>
                <p className="pt-2" style={{ fontSize: "18px", color: "#888" }}>
                  Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  Starts from <h4>$599</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-lg-5" style={{ paddingTop: "100px" }}>
          <div
            style={{ color: "#987750", fontSize: "18px", fontWeight: "500" }}
          >
            CUSTOMERS
          </div>
          <h1 className="py-5 text-white">HAPPY PEOPLE</h1>

          <div className="bd-example">
            <div
              id="carouselExampleCaptions"
              className="carousel slide pb-5 pt-4"
              data-ride="carousel"
              style={{
                background: "#181715",
                border: "1px solid #151412",
                borderRadius: "40px",
                boxShadow: "1px 2px 3px 1px #4b4a4a",
              }}
            >
              <div
                className="carousel-inner text-dark text-center mx-auto"
                style={{ height: "40vh", overflowY: "scroll" }}
              >
                <div className="carousel-item active">
                  <div className="d-flex text-white align-items-center mx-auto w-75">
                    <div className="text-center">
                      <div
                        className="bg-primary mx-auto d-flex align-items-center justify-content-center"
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div className="mt-3">
                        <div style={{ fontSize: "17px", fontWeight: "500" }}>
                          Nikunj Kishore Tiwari
                        </div>
                      </div>
                      <p className="my-4">
                        <span className="fa fa-quote-left"></span>&nbsp;He is
                        very much fine in work ...Good knowledge in React js
                        able to create diffrent kind of responsive designs..
                        communication skill wise is is perfectly fine ...overall
                        Good knowledge in frontend domain.&nbsp;
                        <span className="fa fa-quote-right"></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex text-white align-items-center mx-auto w-75">
                    <div className="text-center">
                      <div
                        className="bg-primary mx-auto d-flex align-items-center justify-content-center"
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div className="mt-3">
                        <div style={{ fontSize: "17px", fontWeight: "500" }}>
                          Manish Kumar
                        </div>
                      </div>
                      <p className="my-4">
                        <span className="fa fa-quote-left"></span>&nbsp;
                        Suryansh is very good In frontend designing. He was an
                        inspiration to the rest of us as he always went the
                        extra mile and found great ways to quickly solve
                        problems. I’d definitely work with Suryansh again.
                        &nbsp;
                        <span className="fa fa-quote-right"></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex text-white align-items-center mx-auto w-75">
                    <div className="text-center">
                      <div
                        className="bg-primary mx-auto d-flex align-items-center justify-content-center"
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div className="mt-3">
                        <div style={{ fontSize: "17px", fontWeight: "500" }}>
                          Anuradha Bhardwaj
                        </div>
                      </div>
                      <p className="my-4">
                        <span className="fa fa-quote-left"></span>&nbsp;Suryansh
                        has worked as a front-end developer for our website. His
                        knowledge of frontend website development was very
                        helpful to our team. He has a very good knowledge of
                        html, css & javascript. During the development of the
                        website he solved various issues very quickly. He is
                        very hard working, has good communication skills. His
                        willingness to learn and take on new responsibilities is
                        something to be desired in any professional. It has been
                        a pleasure to work with you !&nbsp;
                        <span className="fa fa-quote-right"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
              </ol>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </div>

        <div className="container px-lg-5" style={{ paddingTop: "100px" }}>
          <div
            style={{ color: "#987750", fontSize: "18px", fontWeight: "500" }}
          >
            CONTACT
          </div>
          <h1 className="py-5 text-white">Get In Touch</h1>
          <p
            className=""
            style={{ textAlign: "justify", color: "#888", fontSize: "25px" }}
          >
            If you have any suggestion, project or even you want to say “hello”,
            please fill out the form below and I will reply you shortly.
          </p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
          >
            <div className="row text-white">
              <div className="col-6 py-2 pr-2">
                <TextField
                  required
                  id="name"
                  label="Name"
                  type={"text"}
                  variant="filled"
                  sx={{
                    width: "100%",
                    color: "white",
                  }}
                  color="warning"
                />
              </div>
              <div className="col-6 py-2 pl-2">
                {" "}
                <TextField
                  required
                  id="email"
                  label="Email"
                  variant="filled"
                  type={"Email"}
                  sx={{
                    width: "100%",
                  }}
                  color="warning"
                />
              </div>
              <div className="col-12 py-2">
                <TextField
                  required
                  id="phone"
                  variant="filled"
                  type={"phone"}
                  label="Phone"
                  sx={{
                    width: "100%",
                  }}
                  color="warning"
                />
              </div>
              <div className="col-12 py-2">
                <TextField
                  required
                  type="text"
                  id="message"
                  label="Message"
                  variant="filled"
                  multiline
                  rows={4}
                  sx={{
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  color="warning"
                />
              </div>

              <div className="justify-content-center d-flex align-items-center py-2">
                <input
                  type="submit"
                  className="bg-transparent py-3 font-weight-bold text-white"
                  style={{ width: "100%" }}
                  id="send_message"
                  value="SEND MESSAGE"
                />
              </div>
            </div>
          </Box>
        </div>
        <div
          className="container px-lg-5 text-white"
          style={{ paddingTop: "100px" }}
        >
          <div className="pb-5">
            <span className="" style={{ fontSize: "14px", color: "#987750" }}>
              ADDRESS
            </span>
            <hr style={{ width: "30px", height: "2px" }} className="m-0"></hr>
            <div
              className="pt-2"
              style={{ fontSize: "25px", fontWeight: "500" }}
            >
              Gautam Buddha University,<br></br> Greater Noida
            </div>
          </div>
          <div>
            <span className="" style={{ fontSize: "14px", color: "#987750" }}>
              PHONE
            </span>
            <hr style={{ width: "30px", height: "2px" }} className="m-0"></hr>
            <div
              className="pt-2"
              style={{ fontSize: "17px", fontWeight: "500" }}
            >
              <a href="tel:+91 7376190196" className="text-decoration-none">
                +91 7376190196
              </a>
            </div>

            <div className="py-5">
              <span className="" style={{ fontSize: "14px", color: "#987750" }}>
                EMAIL
              </span>
              <hr style={{ width: "30px", height: "2px" }} className="m-0"></hr>
              <div
                className="pt-2"
                style={{ fontSize: "17px", fontWeight: "500" }}
              >
                <a
                  href="mailto:+91 7376190196"
                  className="text-decoration-none"
                >
                  suryansh5476@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-100" style={{ color: "white" }}></hr>
        <div className="px-lg-5 container py-5 text-white">
          Copyright © 2022. All rights reserved.<br></br> Developed by Suryansh
        </div>
      </div>

      <div
        className={
          column
            ? "col-lg-4 col-12 px-lg-5 px-3 position-relative"
            : "col-lg-5 col-12 px-lg-5 px-3 position-relative  order-lg-last order-md-last order-first"
        }
      >
        <div className="container position-sticky mt-5" style={{ top: "45px" }}>
          <div
            className="position-relative"
            style={{
              padding: "38px 41px",
              width: "100%",
              marginBottom: "30px",
              zIndex: 5,
            }}
          >
            <div
              id="imgD1"
              className="position-absolute"
              style={{
                zIndex: 1,
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: "2px",
                transition: "all .3s ease",
                left: 0,
                bottom: "20px",
                right: 0,
                top: "20px",
              }}
            ></div>

            <div
              id="imgD2"
              className="position-absolute"
              style={{
                left: "20px",
                bottom: 0,
                right: "20px",
                top: 0,
                zIndex: 1,
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: "2px",
                transition: " all .3s ease",
              }}
            ></div>
            <div>
              <div className="d-flex justify-content-center">
                <img
                  src={profile}
                  className="img-fluid pt-2"
                  style={{ minWidth: "100%" }}
                />
              </div>
              <div
                style={{ fontSize: "20px", color: "#999" }}
                className="text-center py-3"
              >
                HI THERE! I AM
              </div>
            </div>

            <div
              style={{ fontSize: "30px" }}
              className="justify-content-center align-items-center d-flex"
            >
              <span className="blink-bg mr-auto">[</span>
              <div className="text-center text-white">
                <Typewriter
                  words={[
                    "Suryansh Shahi",
                    "Web Developer",
                    "Blockchain Developer",
                    "Freelancer",
                  ]}
                  loop={false}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
              <span className="blink-bg ml-auto">]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// <div>
// <div>
//   <img src={profile} className="img-fluid pt-4" />
//   <div
//     style={{ fontSize: "20px", color: "#999" }}
//     className="text-center py-3"
//   >
//     HI THERE! I AM
//   </div>
// </div>
// <div
//   style={{ fontSize: "20px" }}
//   className="text-success text-center"
// >
//   [
//   <Typewriter
//     words={[
//       "WEB DEVELOPER",
//       "BLOCKCHAIN",
//       "FREELANCER",
//       "Repeat!",
//     ]}
//     loop={5}
//     typeSpeed={70}
//     deleteSpeed={50}
//     delaySpeed={1000}
//     // onLoopDone={handleDone}
//     // onType={handleType}
//   />
//   ]
// </div>
// </div>
