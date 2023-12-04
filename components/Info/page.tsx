import React from "react";

export default function Info() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="sectionTitle">About Info</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="icon_box_01">
                  <i className="icon icon-User" />
                  <h3 className="pb-2">My Name</h3>
                  <p>Tran Le Quoc Hau</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="icon_box_01">
                  <i className="icon icon-Calculator" />
                  <h3 className="pb-2">Date Of Birth</h3>
                  <p>15/01/2001</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="icon_box_01">
                  <i className="icon icon-Mail" />
                  <h3 className="pb-2">Email</h3>
                  <p>tranlequochau.blc@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="icon_box_01">
                  <i className="icon icon-Phone" />
                  <h3 className="pb-2">Phone Number</h3>
                  <p>0399603123</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="icon_box_01">
                  <i className="icon icon-Pointer" />
                  <h3 className="pb-2">Address</h3>
                  <p>
                    <a>51 Street 6 , Linh Xuan Ward , Thu Duc District </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
