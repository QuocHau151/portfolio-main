import React from "react";

export default function Bio() {
  return (
    <>
      <div>
        <div className="row mt30">
          <div className="col-lg-12">
            <h2 className="sectionTitle mb22">Short Bio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="abContent">
              <p>
                Hello, {"I'm"} Tran Le Quoc Hau, a creative and passionate web
                developer with over 1 year of experience in web programming.
                Throughout my career, {"I've"} had the opportunity to work on
                diverse projects, ranging from personal websites to complex
                content management systems. My expertise lies in Front-End
                development, particularly with the ReactJS framework. I am eager
                to contribute my skills and energy to collaborative projects.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="abContent">
              <p className="mb27">
                My future goal is to become a full-stack developer within the
                next year. With a strong passion for technology and a keen
                desire for continuous learning, I aspire to work in a dynamic
                and innovative environment. I am eager to expand my skill set
                and explore additional programming languages such as PostgreSQL,
                ReactNative, NestJS, and more.
              </p>
              <img className="signImg" src="assets/images/home_01/3.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
