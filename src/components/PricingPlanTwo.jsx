import Link from "next/link";

const PricingPlanTwo = () => {
  return (
    <div className="pricing-area-2 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">Pricing</span>
              <h2 className="sec-title">
                Showcasing Some of Our Cheap Pricing Options{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img
                    src="assets/img/icon/picing-icon_2-1.svg"
                    alt="Fixturbo"
                  />
                </div>
                <h4 className="pricing-card_title">Quick Car Check</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">$29</h3>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Visual inspection of brakes, belts, and hoses

                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Fluid level check and top-off (excluding oil)
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Tire pressure and tread assessment
                    </li>
                  </ul>
                </div>
                <Link className="btn" href="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2 pricing-card-active">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img
                    src="assets/img/icon/picing-icon_2-2.svg"
                    alt="Fixturbo"
                  />
                </div>
                <h4 className="pricing-card_title">Essential Care</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">$49</h3>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Basic diagnostic scan for error codes
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Battery health test and charging system check
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Wiper blade and light function inspection
                    </li>
                  </ul>
                </div>
                <Link className="btn" href="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img
                    src="assets/img/icon/picing-icon_2-3.svg"
                    alt="Fixturbo"
                  />
                </div>
                <h4 className="pricing-card_title">Complete Tune-Up</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">$99</h3>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Comprehensive diagnostic scan with written report
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Air filter replacement and spark plug check
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Brake pad wear measurement and alignment overview
                    </li>
                  </ul>
                </div>
                <Link className="btn" href="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanTwo;
