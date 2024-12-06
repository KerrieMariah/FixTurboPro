import Link from "next/link";

const ProcessAreaTwo = () => {
  return (
    <div
      className="process-area-2 space-top"
      style={{ backgroundImage: "url(assets/img/bg/process2-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <h3 className="sub-title"> work process</h3>
              <h2 className="sec-title text-white">
                Miles Of Smiles, One Repair A Time{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape2.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 gx-90 justify-content-center">
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 1</div>
              <h4 className="process-card-title">Assess & Diagnose</h4>
              <p className="process-card-text">
              We thoroughly inspect your vehicle to pinpoint the root cause of the issue. With our advanced diagnostic tools and professional expertise, we ensure an accurate and transparent evaluation.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 2</div>
              <h4 className="process-card-title">Fix & Restore</h4>
              <p className="process-card-text">
              Once we’ve identified the problem, we make the necessary repairs using high-quality parts and proven techniques. Every step is carried out with precision, ensuring reliable, long-lasting results.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 3</div>
              <h4 className="process-card-title">Test & Deliver</h4>
              <p className="process-card-text">
              After completing the repairs, we perform comprehensive tests to confirm your vehicle is operating at peak performance. We hand the keys back to you so you can hit the road worry-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAreaTwo;
