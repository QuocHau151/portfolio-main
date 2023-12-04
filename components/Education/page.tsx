"use client";
import clsx from "clsx";
import React, { useState } from "react";
const resumeedu = [
  {
    id: 1,
    title: "University transportation HCM",
    year: "2019 - 2020",
    grade: "0",
    description: "Chuyên ngành Kinh doanh vận tải.",
  },
  {
    id: 2,
    title: "University of economics and law",
    year: "2020 - 2023",
    grade: "3.0",
    description: "Chuyên ngành Kinh tế quản lý công",
  },
  {
    id: 3,
    title: "Master FrontEnd - CFD Studio",
    year: "2021 - 2022",
    grade: "",
    description:
      "Hoàn thành 2 dự án lớn của khoá học FrontEnd Master. Thành thạo cơ bản HTML, CSS, Javascript, ReactJS. Tham gia vào quá trình làm việc nhóm tốt và tự học và tìm hiểu các công nghệ mới. Học sử dụng các phần mềm như Photoshop, Lightroom, Premiere để chỉnh sửa hình ảnh và video.",
  },
];
export default function Education() {
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
        <h2 className="sectionTitle">Education</h2>
        <div className="kr-accordion">
          {resumeedu.map((item, index) => (
            <>
              <div
                className="card"
                onClick={() => {
                  handleClick(index);
                }}
              >
                <div className="card-header">
                  <h2 className="mb-0">
                    <a className={index === isClick ? "" : "collapsed"}>
                      <i className="icon icon-Medal" />
                      <span>{item.title}</span>
                    </a>
                    <i
                      className={clsx(
                        index === isClick
                          ? "icofont-plus "
                          : "icofont-arrow-down",
                        "float-right"
                      )}
                    ></i>
                  </h2>
                </div>
                <div
                  id="ea_col_01"
                  className={index === isClick ? "collapsed" : "collapse"}
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
