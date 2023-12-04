import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyRight  ">
              © 2023 All Rights Reserved By
              <Link className="pl-1" href="/" target="_blank">
                QuocHau
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
