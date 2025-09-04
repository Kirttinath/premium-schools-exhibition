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
import { leftLeafSvg } from "./svg/configSvgs";
import InfiniteLogoScroll from "./InfiniteLogoScroll";

const HomePage = () => {
  const logos = [school1, school2, school3, school4, school5, school6];
  const logosReversed = [...logos].reverse();
  return (
    <div className="w-100">
      {/* HEADER */}
      <header
        className="position-fixed top-0 w-100 d-flex align-items-center justify-content-between bg-white"
        style={{
          height: "100px",
          paddingRight: "30px",
          zIndex: 100,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div className="position-relative">
          <div
            className="position-absolute"
            style={{ top: -30, left: 30, height: "50px", width: "50px" }}
          >
            <img src={headerLogo} alt="Logo" />
          </div>
        </div>
        <ConfigButton label="REGISTER NOW" handleButtonClick={() => {}} />
      </header>

      {/* HERO SECTION */}
      <section
        className="w-100 d-flex align-items-center justify-content-center"
        style={{
          marginTop: "100px", // offset for fixed header
          background: "linear-gradient(90deg, #4a148c, #2a1459)",
          padding: "50px 0",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE TEXT */}
            <div className="col-md-6" style={{ color: "#FFCC81" }}>
              <h2
                className="fw-bold mt-2"
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

            {/* RIGHT SIDE FORM */}
            <div className="col-md-5 offset-md-1 mt-2">
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

                  {/* Submit Button (using your ConfigButton) */}
                  <ConfigButton label="SUBMIT" handleButtonClick={() => {}} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* === NEW SECTION === */}
      {/* Stats */}
      {/* Stats Section */}
      <section className="py-5 text-center bg-white">
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
      <section className="py-5 bg-white text-center">
        <div className="container-fluid">
          <h3 className="fw-bold">Participating Schools</h3>
          <InfiniteLogoScroll logos={logos} />
          <InfiniteLogoScroll logos={logosReversed} />
        </div>
      </section>

      {/* School Categories */}
      <section className="py-5 bg-white">
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
      <section className="py-0">
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
                  className="mb-4"
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
    </div>
  );
};

export default HomePage;
