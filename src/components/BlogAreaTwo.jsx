"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogAreaTwo = () => {
  return (
    <section className="contact-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Blog</span>
              <h2 className="sec-title">
              Under the Hood: Expert Insights & Tips
              </h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".testimonialOne-button-next",
              prevEl: ".testimonialOne-button-prev",
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_1.png" alt="Fixturbo" />
                    <div className="blog-date">
                      <Link href="/blog">
                        <span>17</span>Oct
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="/blog">
                        <i className="fas fa-user" />
                        By admin
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/7-easy-car-maintenance">
                      7 Easy Car Maintenance Tasks You Can Do at Home
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/7-easy-car-maintenance">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_2.png" alt="Fixturbo" />
                    <div className="blog-date">
                      <Link href="/blog">
                        <span>15</span>Nov
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="/blog">
                        <i className="fas fa-user" />
                        By admin
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/how-to-spot">
                      How to Spot Warning Signs Before a Major Breakdown
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/how-to-spot">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_3.png" alt="Fixturbo" />
                    <div className="blog-date">
                      <Link href="/blog">
                        <span>12</span>Dec
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="/blog">
                        <i className="fas fa-user" />
                        By admin
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/seasonal-prep">
                      Getting Your Car Ready for Extreme Weather
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/seasonal-prep">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
