import React from "react";

export default function page() {
  return (
    <>
      <section className="comonSection folioContentSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="folioTitle">Artwork Design</h3>
              <div className="row">
                <div className="col-lg-7">
                  <div className="pageContent">
                    <p className="mb14">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur excepteur.
                    </p>
                    <p className="mb22">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 folioMeta">
                  <div className="icon_box_01">
                    <i className="icon icon-User" />
                    <h3>Client</h3>
                    <p>John Doe</p>
                  </div>
                  <div className="icon_box_01">
                    <i className="icon icon-Calculator" />
                    <h3>Date</h3>
                    <p>20th March, 2021</p>
                  </div>
                  <div className="icon_box_01">
                    <i className="icon icon-Settings" />
                    <h3>Tools</h3>
                    <p>Photoshop, Netbeans</p>
                  </div>
                  <div className="icon_box_01">
                    <i className="icon icon-Settings" />
                    <h3>Category</h3>
                    <p>
                      <a href="portfolio.html">Graphic</a>,{"{"}
                      {"}"}
                      <a href="portfolio.html">Development</a>
                    </p>
                  </div>
                  <div className="fmfooter">
                    <a href="" className="btt_link">
                      <i className="icon icon-WorldWide" />
                      <span>View Project</span>
                    </a>
                    <div className="sicmr_social">
                      <a href="https://facebook.com/" target="_blank">
                        <i className="icofont-facebook" />
                      </a>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter" />
                      </a>
                      <a href="https://vimeo.com/" target="_blank">
                        <i className="icofont-vimeo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt52">
            <div className="col-lg-12">
              <h2 className="sectionTitle">The Challenges</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="icon_box_4">
                <i>01</i>
                <h3>Illustration</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="icon_box_4">
                <i>02</i>
                <h3>User Experience</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="icon_box_4">
                <i>03</i>
                <h3>Unit Test</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt52 mb30">
            <div className="col-lg-12">
              <h2 className="sectionTitle mb27">Client Review</h2>
            </div>
            <div className="col-lg-12">
              <div className="clientReview">
                <p>
                  I would recommendto anyone who wants to have a creative
                  portfolio sorting application, either design studio or
                  freelancer.
                </p>
                <cite>-- John Doe</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
