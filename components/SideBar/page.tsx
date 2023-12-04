import React from "react";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <a href="" className="widget_closer">
          <i className="icofont-close-line" />
        </a>
        <div className="widget widget-search">
          <h3 className="widget_title">Search</h3>
          <form method="post" action="#" className="search_form">
            <input type="text" name="s" placeholder="Enter Keword" />
            <button type="submit">
              <i className="icon icon-Search" />
            </button>
          </form>
        </div>
        <div className="widget widget-search">
          <h3 className="widget_title">Categories</h3>
          <ul>
            <li>
              <a href="blog.html">Web</a>(18)
            </li>
            <li>
              <a href="blog.html">Startup</a>(11)
            </li>
            <li>
              <a href="blog.html">Branding</a>(17)
            </li>
            <li>
              <a href="blog.html">UI UX</a>(23)
            </li>
            <li>
              <a href="blog.html">Agency</a>(19)
            </li>
          </ul>
        </div>
        <div className="widget">
          <h3 className="widget_title">Recent Posts</h3>
          <div className="singleRecent">
            <img src="assets/images/blog/7.jpg" />
            <span>01 Apr, 2021</span>
            <a href="single_blog.html"> Create your next web site with Unity. </a>
          </div>
          <div className="singleRecent">
            <img src="assets/images/blog/8.jpg" />
            <span>31 Mar, 2021</span>
            <a href="single_blog.html"> Truly unique hundreds of elements. </a>
          </div>
          <div className="singleRecent">
            <img src="assets/images/blog/9.jpg" />
            <span>26 Mar, 2021</span>
            <a href="single_blog.html"> Easily create unlimited amount of custom. </a>
          </div>
        </div>
        <div className="widget">
          <h3 className="widget_title">Tags</h3>
          <div className="tabclouds">
            <a href="blog.html">Web Design</a>
            <a href="blog.html">Development</a>
            <a href="blog.html">CSS</a>
            <a href="blog.html">Studio</a>
            <a href="blog.html">Award</a>
            <a href="blog.html">Mobile</a>
            <a href="blog.html">IOS</a>
            <a href="blog.html">IOS</a>
            <a href="blog.html">UI / UX</a>
            <a href="blog.html">Portfolio</a>
          </div>
        </div>
      </div>
      <div className="sidebarOverlay"></div>
    </>
  );
}
