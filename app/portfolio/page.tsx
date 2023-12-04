import Link from "next/link";
import React from "react";
const projects = [
  {
    id: 1,
    href: "/portfolio#",
    img: "assets/images/folio/1.jpg",
    title: " Design",
    category: "Development",
  },
];
export default function Portfolio() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="sectionTitle">Latest Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="filterUL">
              <li className="active filter" data-filter="all">
                All
              </li>
              <li className="filter" data-filter="dev">
                Development
              </li>
              <li className="filter" data-filter="graphic">
                Graphic
              </li>
              <li className="filter" data-filter="app">
                App
              </li>
              <li className="filter" data-filter="illustrtopm">
                Illustration
              </li>
            </ul>
          </div>
        </div>
        <div className="row" id="Grid">
          <div className="col-lg-4 folio_effect ">
            <div className="folio_item">
              {projects.map((item) => (
                <>
                  <Link href={item.href} className="folio_item_thumbs">
                    <div className="folio_stack">
                      <div className="folio_decoration" />
                      <div className="folio_decoration" />
                      <div className="folio_decoration" />
                      <div className="folio_decoration" />
                      <div className="folio_img_holder">
                        <img className="folio_img" src={item.img} alt="Image" />
                      </div>
                    </div>
                  </Link>
                  <div className="folio_content">
                    <h3 className="folio_title">
                      <a href="single_folio.html">{item.title}</a>
                    </h3>
                    <p className="folio_cat">
                      <a href="#">{item.category}</a>
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="row loadMoreRow mb22">
          <div className="col-lg-12 loadMoreCol text-center mt23">
            <a
              href="#"
              data-count={1}
              className="btt_btn bttb_dark loadMoreItem"
            >
              <span>
                <i className="icon icon-Restart" /> Load More
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
