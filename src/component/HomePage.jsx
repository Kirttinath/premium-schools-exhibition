import React from "react";
import ConfigButton from "./Buttons/ConfigButton";
import headerLogo from "../assets/headerLogo.png";
// Example logos & images (replace with your own assets)
import school1 from "../assets/school1.png";
import school2 from "../assets/school2.png";
import school3 from "../assets/school3.png";
import school4 from "../assets/school4.png";
import school5 from "../assets/school5.png";
import school6 from "../assets/school6.png";
// Example cards (replace with your own assets)
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import preSchoolImage from "../assets/Preschoolsection.png";
import instagramLogo from "../assets/instagramSvg.svg";
import callLogo from "../assets/callSvg.svg";
import locationSvg from "../assets/locationSvg.svg";
import youtubeSvg from "../assets/youtubeSvg.svg";
import facebookSvg from "../assets/facebookSvg.svg";
import img1 from "../assets/headerscroll1.png";
import img2 from "../assets/headerscroll2.png";
import img3 from "../assets/headerscroll3.png";
import img4 from "../assets/headerscroll4.png";
import img5 from "../assets/headerscroll5.png";
import img6 from "../assets/headerscroll6.png";

import {
  arrowSvg,
  counselingSvg,
  curriculumSvg,
  leftLeafSvg,
  offerSvg,
  personSvg,
  teacherSvg,
} from "./svg/configSvgs";
import InfiniteLogoScroll from "./InfiniteLogoScroll";
import VerticalImageScroller from "./VerticalImageScroller";

const HomePage = () => {
  const logos = [school1, school2, school3, school4, school5, school6];
  const logosReversed = [...logos].reverse();
  return (
    <div className="w-100 overflow-hidden">
      {/* HEADER */}
      <header className="app-header">
        {/* Logo */}
        <div className="header-logo">
          <img src={headerLogo} alt="Logo" />
        </div>

        {/* Button */}
        <div className="header-btn">
          <ConfigButton label="REGISTER NOW" handleButtonClick={() => {}} />
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="w-100 d-flex align-items-center justify-content-center"
        style={{
          marginTop: "100px", // offset for fixed header
          minHeight: "calc(100vh - 100px)",
          background: "linear-gradient(90deg, #4a148c, #2a1459)",
          padding: "50px 0",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE TEXT */}
            <div className="col-md-4" style={{ color: "#FFCC81" }}>
              <h2
                className="heroText fw-bold"
                style={{ fontSize: "40px", lineHeight: "1.2" }}
              >
                Discover Gurugram’s <br />
                Top 30+ Schools
              </h2>
              <p className="mt-3" style={{ fontSize: "18px" }}>
                ALL IN ONE PLACE
              </p>

              {/* Event Info */}
              <div
                className="d-inline-block mt-4 rounded-pill"
                style={{
                  backgroundColor: "#f7d39a",
                  color: "#2A1459",
                  padding: "2px",
                }}
              >
                <div
                  className="rounded-pill px-3 py-1 d-flex align-items-center gap-2 px-2 py-3"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    border: "2px solid rgba(0, 0, 0, 0.13)",
                  }}
                >
                  <div className="d-flex flex-column align-items-center px-2">
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      <strong>Apparel House,</strong>
                    </div>
                    <div>Sec 44, Gurugram</div>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "50px",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }}
                  ></div>
                  <div className="d-flex flex-column align-items-center px-2">
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      <strong>2-3 August 2025</strong>
                    </div>
                    <div>Sat-Sun | 10AM - 6PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center gap-3">
              <VerticalImageScroller
                images={[img1, img2, img3, img4, img5]}
                duration={15}
              />
              <VerticalImageScroller
                images={[img2, img3, img4, img5, img1]}
                duration={18}
              />
              <VerticalImageScroller
                images={[img3, img4, img5, img1, img2]}
                duration={20}
              />
            </div>
            {/* RIGHT SIDE FORM */}
            <div className="col-md-5 mt-2">
              <div
                className="p-4 rounded"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                }}
              >
                <h4 className="text-white mb-4 fw-bold">Enquire Now</h4>
                <form>
                  <input
                    type="text"
                    placeholder="Parent’s Name"
                    className="form-control mb-3 white-placeholder"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      border: "none",
                      color: "#fff",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="form-control mb-3 white-placeholder"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      border: "none",
                      color: "#fff",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Which grade are you looking for?"
                    className="form-control mb-3 white-placeholder"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      border: "none",
                      color: "#fff",
                    }}
                  />

                  <ConfigButton label="SUBMIT" handleButtonClick={() => {}} />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLLING ANIMATION */}
        <style>
          {`
      @keyframes scrollUp {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
    `}
        </style>
      </section>

      {/* Stats Section */}
      <section className="w-100 py-5 text-center bg-white">
        <div className="d-flex align-items-center justify-content-center px-2">
          <div className="row g-3 d-flex align-items-center justify-content-center">
            {/* Reusable Stat Item */}
            {[
              "Trusted by 1 Million+ Parents",
              "22+ Years of Legacy",
              "500+ Participating Schools",
              "17 Cities Across the Globe",
            ].map((text, i) => (
              <div
                key={i}
                className="col-10 col-md-6 col-lg-3 col-sm-12 d-flex align-items-center justify-content-center"
              >
                {/* Left Leaf */}
                <div
                  style={{
                    transform: "scaleX(-1)",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                >
                  {leftLeafSvg()}
                </div>
                {/* Text */}
                <div
                  className="mx-2 fw-bold"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.3",
                  }}
                >
                  {text}
                </div>

                {/* Right Leaf */}
                <div
                  style={{
                    transform: "scaleX(1)",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {leftLeafSvg()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participating Schools */}
      <section className="w-100 py-5 bg-white text-center">
        <div className="container-fluid">
          <h3 className="fw-bold">Participating Schools</h3>
          <InfiniteLogoScroll logos={logos} />
          <InfiniteLogoScroll logos={logosReversed} />
        </div>
      </section>

      {/* School Categories */}
      <section className="w-100 py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold text-center mb-5">
            Choose the School That Fits You Best
          </h3>
          <div className="row g-2">
            {[
              {
                img: card1,
                title: "Pre Schools & Early Learning Centres",
                text: "Nurturing foundational skills for toddlers and pre-primary children.",
              },
              {
                img: card2,
                title: "K-12 CBSE Day Schools",
                text: "Reputed schools offering complete schooling from Kindergarten to Grade 12.",
              },
              {
                img: card3,
                title: "Heritage to New-Age Schools",
                text: "Time-tested schools to innovative pedagogies, tech-enabled, future-ready schools.",
              },
              {
                img: card4,
                title: "International Curriculum Schools",
                text: "Offering IB, Cambridge, British and other global curricula.",
              },
            ]?.map((card, i) => (
              <div className="col-md-3" key={i}>
                <div
                  className="card h-100 border-0 shadow-sm position-relative overflow-hidden"
                  style={{ borderRadius: "12px" }}
                >
                  {/* Background image */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="card-img"
                    style={{ height: "100%", objectFit: "cover" }}
                  />

                  {/* Overlay with gradient */}
                  <div
                    className="card-img-overlay d-flex flex-column justify-content-end"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                      borderRadius: "12px",
                    }}
                  >
                    <h5 className="card-title fw-bold text-white">
                      {card.title}
                    </h5>
                    <p className="card-text text-white small mb-0">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pre-schedule Section */}
      <section className="w-100 py-0">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-stretch flex-wrap">
            {/* LEFT SIDE (40%) */}
            <div
              className="col-lg-5 col-md-6 col-12 d-flex flex-column justify-content-center px-4 px-md-5 position-relative"
              style={{
                minHeight: "400px",
                flex: "0 0 40%",
                maxWidth: "40%",
              }}
            >
              {/* Gradient overlay (overlaps image side) */}
              <div
                className="gradient-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  right: "-45%",
                  background:
                    "linear-gradient(to right, #f5e9ff 0%, #e6d4f7 85%, rgba(230,212,247,0.1) 100%)",
                  zIndex: 1,
                }}
              ></div>

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <p
                  className="mb-2"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    color: "#6a1b9a",
                  }}
                >
                  <i>Exciting Opportunities for Parents!</i>
                </p>
                <h2
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "400",
                    color: "#2A1459",
                  }}
                >
                  Pre-schedule Your <br />
                  School Appointments
                </h2>
                <p
                  className="mb-2"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "400",
                    color: "#6a1b9a",
                  }}
                >
                  To Avoid Rush
                </p>
                <ConfigButton
                  label="PRE-SCHEDULE NOW"
                  handleButtonClick={() => {}}
                />
              </div>
            </div>

            {/* RIGHT SIDE IMAGE (60%) */}
            <div
              className="col-lg-7 col-md-6 col-12 p-0"
              style={{ flex: "0 0 60%", maxWidth: "60%" }}
            >
              <img
                src={preSchoolImage}
                alt="Pre-schedule"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Must-Visit Section */}
      <section
        className="w-100 py-5 text-white"
        style={{
          background: "linear-gradient(90deg, #4a148c, #2a1459)",
          position: "relative",
        }}
      >
        <div className="px-2">
          <h3 className="fw-bold text-center mb-5">
            What Makes This Exhibition a Must-Visit
          </h3>

          {/* Scrollable container */}
          <div
            className="row g-4 flex-nowrap overflow-auto px-2"
            style={{ scrollbarWidth: "none" }}
            id="mustVisitScroll"
          >
            {[
              {
                icon: personSvg(),
                title: "Interact Directly with School Heads",
                text: "Get answers straight from the experts",
              },
              {
                icon: curriculumSvg(),
                title: "Compare Curriculum & Pedagogy",
                text: "Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more",
              },
              {
                icon: offerSvg(),
                title: "Get Exclusive Fee Structures & Offers",
                text: "Access transparent information and avail offers",
              },
              {
                icon: teacherSvg(),
                title: "Explore Schools Offerings",
                text: "Preview infrastructure, co-curricular, teaching methodology and culture",
              },
              {
                icon: counselingSvg(),
                title: "On-the-spot Counselling",
                text: "Save time with direct application guidance from schools",
              },
            ].map((item, i) => (
              <div key={i} className="col-10 col-md-6 col-lg-3 flex-shrink-0">
                <div
                  className="p-4 h-100 d-flex flex-column"
                  style={{
                    background: "linear-gradient(180deg, #f5e9ff, #e6d4f7)",
                    color: "#2A1459",
                    borderRadius: "12px",
                    minHeight: "220px",
                  }}
                >
                  <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                  <h5 className="fw-bold mt-3">{item.title}</h5>
                  <p className="small mt-2 mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn bg-transparent rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "45px",
                height: "45px",
                border: "2px solid #fff",
              }}
              onClick={() => {
                const container = document.getElementById("mustVisitScroll");
                const card = container.querySelector(".col-10");
                container.scrollBy({
                  left: -card.offsetWidth,
                  behavior: "smooth",
                });
              }}
            >
              <span
                className="d-flex align-items-center justify-content-center"
                style={{
                  display: "inline-block",
                  transform: "rotate(-135deg)",
                }}
              >
                {arrowSvg({ color: "#FFF" })}
              </span>
            </button>

            <button
              className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "45px", height: "45px" }}
              onClick={() => {
                const container = document.getElementById("mustVisitScroll");
                const card = container.querySelector(".col-10");
                container.scrollBy({
                  left: card.offsetWidth,
                  behavior: "smooth",
                });
              }}
            >
              <span
                className="d-flex align-items-center justify-content-center"
                style={{ display: "inline-block", transform: "rotate(45deg)" }}
              >
                {arrowSvg({})}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white pt-5 w-100"
        style={{
          background: "linear-gradient(90deg, #2a1459, #4a148c)",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-start">
            {/* Logo - always left */}
            <div className="col-12 col-lg-3 mb-4 d-flex flex-column align-items-start">
              <img
                src={headerLogo}
                alt="Premier Schools Exhibition"
                style={{ width: "141px", height: "124px" }}
              />
            </div>

            {/* Right side: offices + contact + social */}
            <div className="col-12 col-lg-9">
              <div className="row">
                {/* Corporate Office */}
                <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex">
                  <div className="d-flex align-items-start gap-2">
                    <img
                      src={locationSvg}
                      alt="location"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="fw-bold mb-1" style={{ fontSize: "20px" }}>
                        Corporate Office:
                      </h6>
                      <p className="mb-0 small">
                        Suite B-5, Ballygunge Park Tower, <br />
                        67B Ballygunge Circular Road, <br />
                        Kolkata - 700019
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ahmedabad Office */}
                <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex">
                  <div className="d-flex align-items-start gap-2">
                    <img
                      src={locationSvg}
                      alt="location"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="fw-bold mb-1" style={{ fontSize: "20px" }}>
                        Ahmedabad Office:
                      </h6>
                      <p className="mb-0 small">
                        12/AA, Swastik Chambers, Near CU Shah College, <br />
                        Ashram Road, Ahmedabad - 380009
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call + Social */}
                <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex flex-column">
                  {/* Call */}
                  <div className="d-flex align-items-start gap-2 mb-3">
                    <img src={callLogo} alt="call" width="50" height="50" />
                    <div>
                      <h6 className="fw-bold mb-1" style={{ fontSize: "20px" }}>
                        Call us on
                      </h6>
                      <p className="mb-0 small">
                        9674805912 <br /> 9674585012
                      </p>
                    </div>
                  </div>

                  {/* Social */}
                  <h6 className="fw-bold mb-2" style={{ fontSize: "20px" }}>
                    Follow us on
                  </h6>
                  <div className="d-flex gap-2">
                    <a href="#ss">
                      <img
                        src={instagramLogo}
                        style={{ height: "50px", width: "50px" }}
                        alt="Instagram"
                      />
                    </a>
                    <a href="#dd">
                      <img
                        src={facebookSvg}
                        style={{ height: "50px", width: "50px" }}
                        alt="Facebook"
                      />
                    </a>
                    <a href="#aa">
                      <img
                        src={youtubeSvg}
                        style={{ height: "50px", width: "50px" }}
                        alt="YouTube"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div
          className="text-center small py-2"
          style={{ backgroundColor: "#fff", color: "#000" }}
        >
          Copyright © 2025 | All rights reserved. Premier Schools Exhibition
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
