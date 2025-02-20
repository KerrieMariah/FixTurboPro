
import Link from "next/link";

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Trusted Car Repair by the Professionals{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-1.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-1.svg"
                      alt="Fixturbo"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">Mechanic Masters</Link>
                  </h4>
                  <p className="service-card_text">
                  Unrivaled expertise and dependable service for all your automotive needs.{" "}
                  </p>
                </div>
              </div>
              <Link href="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-2.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-2.svg"
                      alt="Fixturbo"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">Speedy Auto Repair</Link>
                  </h4>
                  <p className="service-card_text">
                  Rapid, reliable repairs that get you safely back on the road, sooner.{" "}
                  </p>
                </div>
              </div>
              <Link href="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-3.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-3.svg"
                      alt="Fixturbo"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">Precision Auto Works</Link>
                  </h4>
                  <p className="service-card_text">
                  Fine-tuned craftsmanship and meticulous attention to detail in every fix.{" "}
                  </p>
                </div>
              </div>
              <Link href="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;
