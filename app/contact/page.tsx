import React from "react";

export default function Contact() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="sectionTitle">Contact Me</h2>
          </div>
        </div>
        <div className="row mb30">
          <div className="col-lg-8">
            <div className="contact_form">
              <form method="post" action="#" id="contactForm">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="required"
                      name="full_name"
                      placeholder="Full Name *"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="required"
                      name="email"
                      placeholder="Email *"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="required"
                      name="sjubject"
                      placeholder="Subject *"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      className="required"
                      placeholder="Message *"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btt_btn">
                      <span>
                        <i className="icon icon-Mail" />
                        Send Message
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon_box_01">
              <i className="icon icon-Mail" />
              <h3 className="pb-2 ">Email </h3>
              <p>Tranlequochau.blc@gmail.com</p>
            </div>
            <div className="icon_box_01">
              <i className="icon icon-Phone" />
              <h3 className="pb-2">Phone </h3>
              <p>0399603123</p>
            </div>
            <div className="icon_box_01 addrBox">
              <i className="icon icon-Pointer" />
              <h3 className="pb-2">Address</h3>
              <p>51 Street 6 , Linh Xuan Ward , Thu Duc District </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
