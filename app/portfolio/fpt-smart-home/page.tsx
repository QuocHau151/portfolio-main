import React from "react";

export default function page() {
  return (
    <>
      <section className="comonSection folioContentSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="folioTitle">Build Website FPT Smart Home</h3>
              <div className="row">
                <div className="col-lg-7">
                  <div className="pageContent">
                    <p className="mb14">
                      Fpt-smarthome.vn là dự án mà một mình tôi đã tham gia xây
                      dựng website để phục vụ cho các nhân viên kinh doanh sử
                      dụng để tối ưu hoá hiệu xuất công việc và dễ dàng trình
                      bày sản phẩm trực tiếp cho khách hàng thông qua website.
                      Bố trí các thông tin, video, hình ảnh theo kịch bản của
                      Seller đưa ra để cho khách hàng hiểu và tin mua sản phẩm.
                      Khách hàng cũng có thể mua hàng trực tiếp qua website.
                    </p>
                    <p className="mb22">
                      NextJS 14 là công nghệ chủ yếu mà tôi đã sử dụng để xây
                      dựng website. Nó giúp tôi build website chuẩn SEO hơn và
                      nhanh hơn so với khi build server NodeJs để call API vì
                      NextJS 14 sử dụng Server Action để call data trong chính
                      source code của nó giúp tôi phát triển dự án nhanh hơn.
                    </p>
                    <p>
                      SEO website là một phần quan trọng mà tôi đã làm được
                      trong thời gian thực tập tại Công ty. Sử dụng các công cụ
                      như Google Search Console, Google Analytics, Google Ads để
                      tối ưu hóa website và chạy quảng cáo Google Ads để tìm
                      kiếm khách hàng.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 folioMeta">
                  <div className="icon_box_01">
                    <i className="icon icon-User" />
                    <h3>1 People</h3>
                    <p>Me</p>
                  </div>
                  <div className="icon_box_01">
                    <i className="icon icon-Calculator" />
                    <h3>Date</h3>
                    <p>1 Month</p>
                  </div>
                  <div className="icon_box_01">
                    <i className="icon icon-Settings" />
                    <h3>Tools</h3>
                    <p>ReactJs/NextJS</p>
                  </div>
                  <div className="icon_box_01">
                    <i className="icon icon-Settings" />
                    <h3>Category</h3>
                    <p>
                      <span>Development</span>
                    </p>
                  </div>
                  <div className="fmfooter">
                    <a
                      href="https://www.fpt-smarthome.vn/"
                      className="btt_link"
                      target="black"
                    >
                      <i className="icon icon-WorldWide" />
                      <span className="text-[16px]">View Project</span>
                    </a>
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
                <h3>Build Website</h3>
                <p>
                  Học hỏi cách sử dụng NextJS để xây dựng website tốt hơn, các
                  hook của ReactJS, cách sử dụng TailwindCSS để tối ưu hóa giao
                  diện và package liên quan như React-query, Zustund,...
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="icon_box_4">
                <i>02</i>
                <h3>SEO Website</h3>
                <p>
                  Tối ưu SEO từ trong code và các function optimization của
                  NextJS, tối ưu hóa hình ảnh, video, tối ưu hóa các thẻ meta...
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="icon_box_4">
                <i>03</i>
                <h3>Google Ads</h3>
                <p>
                  Index các từ khoá quan trọng của ngành hàng FPT Smart Home lên
                  Google và học cách sử dụng Google Search Console, Google
                  Analytics, Google Ads để tối ưu hóa quảng cáo.
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
                  Tích cực học hỏi và tìm hiểu công nghệ mới, cố gắng hoàn thành
                  tốt công việc được giao. Có tinh thần trách nhiệm cao và sẵn
                  sàng hỗ trợ đồng nghiệp.
                </p>
                <cite>-- Trưởng Phòng. Lê Đức Vương FPT Smart Home</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
