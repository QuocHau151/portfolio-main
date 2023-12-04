import React from "react";

export default function ProfileSidebar() {
  return (
    <div className="col-lg-4 profileColumn">
      <div className="profileSidebar">
        <div className="psHeader">
          <svg preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0 20, 100 20, 0 100" opacity=".65" />
          </svg>
          <svg
            className="svg2"
            preserveAspectRatio="none"
            viewBox="0 0 100 120"
          >
            <polygon points="0 20, 100 20, 15 120" opacity=".8" />
          </svg>
          <div className="psContent">
            <h3>Tran Le Quoc Hau</h3>
            <span>FE Developer</span>
          </div>
        </div>
        <div className="psPhoto">
          <img src="/assets/images/home_01/avt.jpeg" />
          <div className="psSocial">
            <a
              href="https://facebook.com/quochau151"
              target="_blank"
              className="fac"
            >
              <i className="icofont-facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" className="twi">
              <i className="icofont-twitter" />
            </a>
            <a href="https://dribbble.com/" target="_blank" className="dri">
              <i className="icofont-dribbble" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="ins"
            >
              <i className="icofont-instagram" />
            </a>
          </div>
        </div>
        <div className="psSkills">
          <div className="pssBox" data-count={85}>
            <div className="pssbCount">70.</div>
            <h5>Frontend Development</h5>
            <div className="pssbBars">
              <div className="pssbBar" style={{ width: "70%" }} />
            </div>
          </div>
          <div className="pssBox" data-count={92}>
            <div className="pssbCount">50.</div>
            <h5>Backend Development</h5>
            <div className="pssbBars">
              <div className="pssbBar gr2" style={{ width: "50%" }} />
            </div>
          </div>
          <div className="pssBox" data-count={71}>
            <div className="pssbCount">70.</div>
            <h5>UI Design</h5>
            <div className="pssbBars">
              <div className="pssbBar gr3" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
        <div className="psFooter">
          <a href="" className="btt_btn only_icon btt_reverse">
            <span>
              <i className="icon icon-DownloadCloud" />
            </span>
          </a>
          <a href="/contact" className="btt_btn">
            <span>
              <i className="icon icon-Bag" /> Hire Me
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
