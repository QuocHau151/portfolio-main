import React from "react";

export default function Blog() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="sectionTitle">Latest Posts</h2>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-6">
            <div className="blogItem text-left">
              <div className="biThumb">
                <img src="assets/images/blog/1.jpg" alt />
                <div className="biMeta">
                  <a href="blog.html">Bellamy</a>
                  <a href="blog.html">02 Apr, 2021</a>
                </div>
              </div>
              <div className="biDetails">
                <h3>
                  <a href="single_blog.html">10 Tell-Tale Signs You Need to Get New Technology</a>
                </h3>
                <p>
                  Morbi ullamcorper vel nunc quis venenatis. Ut auctor dapibus dignissim. Sed
                  tincidunt non odio id dignissim donec.
                </p>
                <a href="single_blog.html" className="btt_link">
                  <span>Read More</span>
                </a>
                <span className="blogCount">01</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blogItem text-left">
              <div className="biThumb">
                <img src="assets/images/blog/2.jpg" alt />
                <div className="biMeta">
                  <a href="blog.html">Bellamy</a>
                  <a href="blog.html">02 Apr, 2021</a>
                </div>
              </div>
              <div className="biDetails">
                <h3>
                  <a href="single_blog.html">A Technology Success Story You'll Never Believe</a>
                </h3>
                <p>
                  Morbi ullamcorper vel nunc quis venenatis. Ut auctor dapibus dignissim. Sed
                  tincidunt non odio id dignissim donec.
                </p>
                <a href="single_blog.html" className="btt_link">
                  <span>Read More</span>
                </a>
                <span className="blogCount">02</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blogItem text-left">
              <div className="biThumb">
                <img src="assets/images/blog/3.jpg" alt />
                <div className="biMeta">
                  <a href="blog.html">Bellamy</a>
                  <a href="blog.html">02 Apr, 2021</a>
                </div>
              </div>
              <div className="biDetails">
                <h3>
                  <a href="single_blog.html">The Worst Videos of All Time About Technology</a>
                </h3>
                <p>
                  Morbi ullamcorper vel nunc quis venenatis. Ut auctor dapibus dignissim. Sed
                  tincidunt non odio id dignissim donec.
                </p>
                <a href="single_blog.html" className="btt_link">
                  <span>Read More</span>
                </a>
                <span className="blogCount">03</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blogItem text-left">
              <div className="biThumb">
                <img src="assets/images/blog/4.jpg" alt />
                <div className="biMeta">
                  <a href="blog.html">Bellamy</a>
                  <a href="blog.html">02 Apr, 2021</a>
                </div>
              </div>
              <div className="biDetails">
                <h3>
                  <a href="single_blog.html">20 Resources That'll Make You Better at Technology</a>
                </h3>
                <p>
                  Morbi ullamcorper vel nunc quis venenatis. Ut auctor dapibus dignissim. Sed
                  tincidunt non odio id dignissim donec.
                </p>
                <a href="single_blog.html" className="btt_link">
                  <span>Read More</span>
                </a>
                <span className="blogCount">04</span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row mt30 mb30">
          <div className="col-lg-12">
            <div className="btt_pagination">
              <a href="blog.html">
                <i className="icon icon-Arrow rotateHorizonaly" />
              </a>
              <span className="current">01</span>
              <a href="blog.html">02</a>
              <a href="blog.html">03</a>
              <span className="blanks">...</span>
              <a href="blog.html">10</a>
              <a href="blog.html">
                <i className="icon icon-Arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
