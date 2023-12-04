"use client";
import clsx from "clsx";
import React, { useState } from "react";
const resumeexp = [
  {
    id: 4,
    title: "Content & Designer.",
    year: "2020 - 2022",
    grade: "CLB Kỹ Năng UEL",
    description:
      "Lên kế hoạch truyền thông cho Fanpage CLB Kỹ Năng UEL. Sáng tạo nội dung và design hình ảnh cho bài đăng. Làm photographer và chạy kỹ thuật cho các sự kiện lớn của CLB..",
  },
  {
    id: 5,
    title: "Freelancer Photographer.",
    year: "2020 - 2022",
    grade: "Kỷ yếu Sài Gòn, Kỷ yếu Đồng Nai",
    description:
      "Được các Studio thuê để chụp ảnh kỷ yếu cho học sinh cấp 1,2,3 và sinh viên các trường Đại học trong khu vực Thành phố Hồ Chí Minh và Đồng Nai. Sử dụng các phần mềm như Photoshop, Lightroom, Premiere để chỉnh sửa hình ảnh và video.",
  },
  {
    id: 5,
    title: "Kinh doanh quán ăn.",
    year: "2021 - 2022",
    grade: "KTX Khu B",
    description:
      "Cùng chị ruột mở quán Bún đậu mắm tôm ở Làng Đại học TPHCM. Đảm nhiệm công việc quản lý nhân viên và thu ngân của quán. Quảng bá sản phẩm đến khách hàng trên nền tảng Facebook và Tiktok. Tài trợ cho Câu lạc bộ của các trường Đại học để tăng độ nhận diện của quán ăn đến nhiều sinh viên hơn.",
  },
  {
    id: 5,
    title: "Kinh doanh Shoppe.",
    year: "2021 - 2023",
    grade: "Mỹ Phẩm",
    description:
      " Mở gian hàng trên Shoppe và website Skinvibes.vn để bán mỹ phẩm độc quyền tại Việt Nam của hãng Regimen Lab. Quảng bá sản phẩm trên kênh Facebook Da mình ảo thật đấy, chạy quảng cáo trên Facebook. Đảm nhiệm công việc quản lý đơn hàng và giao hàng cho khách hàng.",
  },
];
export default function Experience() {
  const [isClick, setIsClick] = useState(0);
  const handleClick = (index: any) => {
    if (isClick === index) {
      return setIsClick(0);
    }
    setIsClick(index);
  };
  return (
    <>
      <div className="col-lg-6">
        <h2 className="sectionTitle">Experience</h2>
        <div className="kr-accordion" id="exps_accordion">
          {resumeexp.map((item, id) => (
            <>
              <div
                className="card"
                onClick={() => {
                  handleClick(id);
                }}
              >
                <div className="card-header">
                  <h2 className="mb-0">
                    <a className={id === isClick ? "" : "collapsed"}>
                      <i className="icon icon-Medal" />
                      <span>{item.title}</span>
                    </a>
                    <i
                      className={clsx(
                        id === isClick ? "icofont-plus " : "icofont-arrow-down",
                        "float-right"
                      )}
                    ></i>
                  </h2>
                </div>
                <div
                  id="ea_col_01"
                  className={id === isClick ? "collapsed" : "collapse"}
                >
                  <div className="card-body ">
                    <div className="ac_meta">
                      <span>{item.year}</span>
                      <span>{item.grade}</span>
                    </div>
                    {item.description}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
