import Link from "next/link";


const ServiceAreaOne_multi_img = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Auto Fixers</Link>
                </h4>
                <p className="service-card_text">
                Dedicated experts delivering swift, reliable solutions to keep your ride running smoothly.{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Mechanic Masters</Link>
                </h4>
                <p className="service-card_text">
                Highly trained professionals who handle every automotive challenge with precision and care.{" "}
                </p>

              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Drive-In Garage</Link>
                </h4>
                <p className="service-card_text">
                Convenient, friendly service that welcomes you to roll right in and roll out with peace of mind.{" "}
                </p>
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-4.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Car Care Clinic</Link>
                </h4>
                <p className="service-card_text">
                A comprehensive, customer-focused service center where your vehicle’s health comes first.{" "}
                </p>
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-5.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Car Repair Services</Link>
                </h4>
                <p className="service-card_text">
                Meticulous craftsmanship and advanced diagnostics keep your vehicle performing at its absolute best.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-6.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Repair Solutions</Link>
                </h4>
                <p className="service-card_text">
                Rapid, efficient maintenance that never compromises on quality, ensuring you’re back on the road fast.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne_multi_img;
