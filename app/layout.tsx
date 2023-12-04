import type { Metadata } from "next";

import "./globals.css";
import "../public/assets/css/theme.css";
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/stroke-gap-icons.css";
import "../public/assets/css/responsive.css";
import "../public/assets/css/preset.css";
import "../public/assets/css/Interest.css";
import "../public/assets/css/ignoreforwp.css";
import "../public/assets/css/icofont.css";
import "../public/assets/css/light.css";
import "../public/assets/css/flaticon.css";
import "../public/assets/css/jquery.mCustomScrollbar.css";
import "../public/assets/css/lightslider.css";
import "../public/assets/css/owl.theme.default.min.css";
import Nav from "@/components/Nav/page";
import SideBar from "@/components/SideBar/page";
import Footer from "@/components/Footer/page";
import ProfileSidebar from "@/components/ProfileSidebar/page";

import fetch, { Headers } from "node-fetch";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark">
        <div className="container ">
          <div className="row">
            <ProfileSidebar />
            <div className="col-lg-8 contentColumn">
              <Nav />
              {/* <SideBar /> */}
              <div className="bodyContent">
                <div className="pageCointainer">
                  <section className="comonSection aboutSection">
                    <div className="container-fluid">{children}</div>
                  </section>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
