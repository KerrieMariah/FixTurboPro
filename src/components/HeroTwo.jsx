import Link from "next/link";
const HeroTwo = () => {
  return (
    <div
      className="hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1.png)" }}
    >
      <div className="hero-shape2-1">
        <span className="hero-shape2-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style2">
              <span className="sub-title text-white">Fix Turbo Pro</span>
              <h1 className="hero-title text-white">
                Crafting{" "}
                <span>
                  <img src="assets/img/hero/hero_shape_2.png" alt="Fixturbo" />
                  Automotive
                </span>{" "}
                Excellence One Repair At Time
              </h1>
              <p className="hero-text text-white">
              Our ASE-certified technicians are committed to delivering top-quality repairs and maintenance services every time. With state-of-the-art equipment, transparent communication, and a satisfaction guarantee, you’ll drive away feeling confident and secure.
              </p>
              <div className="btn-group">
                <Link href="/about" className="btn">
                  Learn More
                </Link>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/phone-1.svg" alt="Fixturbo" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">Call Us:</h6>
                    <h4 className="link">
                      <Link className="text-white" href="tel:6295550129">
                        (629) 555-0129
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
