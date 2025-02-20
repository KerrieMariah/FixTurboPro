import Link from "next/link";

const BlogAreaList = () => {
  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img 
                  src="assets/img/blog/blog_s1_1.png" 
                  alt="Fixturbo" 
                  style={{ width: '850px', height: '450px', objectFit: 'cover' }}
                />
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
                    Services
                  </Link>
                </h3>
                <p className="blog-text">
                Simple steps anyone can handle to keep their vehicle running smoothly.{" "}
                </p>
                <Link href="/7-easy-car-maintenance"className="btn style-border2">
                  {" "}
                  READ MORE <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link href="/blog">
                    <span>17</span>Feb
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img 
                  src="assets/img/blog/blog_s1_2.png" 
                  alt="Fixturbo" 
                  style={{ width: '850px', height: '450px', objectFit: 'cover' }}
                />
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
                <p className="blog-text">
                Early indicators, from unusual noises to dashboard lights, that help you prevent costly repairs{" "}
                </p>
                <Link href="/how-to-spot" className="btn style-border2">
                  {" "}
                  READ MORE <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link href="/blog">
                    <span>17</span>Feb
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img 
                  src="assets/img/blog/blog_s1_3.png" 
                  alt="Fixturbo" 
                  style={{ width: '850px', height: '450px', objectFit: 'cover' }}
                />
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
                  Seasonal Prep: Getting Your Car Ready for Extreme Weather
                  </Link>
                </h3>
                <p className="blog-text">
                Tips for adjusting tire pressure, fluid types, and routine checkups for both hot summers and icy winters.{" "}
                </p>
                <Link href="/seasonal-prep" className="btn style-border2">
                  {" "}
                  READ MORE <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link href="/blog">
                    <span>17</span>Feb
                  </Link>
                </div>
              </div>
            </div>
            <div className="pagination justify-content-center">
              <ul>
                <li>
                  <Link href="/blog">1</Link>
                </li>
                <li>
                  <Link href="/blog">2</Link>
                </li>
                <li>
                  <Link href="/blog">3</Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className="fas fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <h3 className="widget_title">Search</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Category</h3>
                <ul>
                  <li>
                    <Link href="/blog">
                      Precision Auto Works <span>(4)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Mobile Car Repair <span>(5)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Elite Automotive Service <span>(8)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Pro Auto Fix <span>(4)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Drive-In Garage <span>(3)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h3 className="widget_title">Popular post</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Quick Fix Motors
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/blog">Sep 15, 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link href="/blog-details">
                        <img
                          src="assets/img/blog/recent-post1.png"
                          alt="Fixturbo"
                          style={{ objectFit: 'cover' }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Professional Service
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/blog">Jun 25, 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link href="/blog-details">
                        <img
                          src="assets/img/blog/recent-post2.png"
                          alt="Fixturbo"
                          style={{ objectFit: 'cover' }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Gear Wrench Auto
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/blog">Jun 25, 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link href="/blog-details">
                        <img
                          src="assets/img/blog/recent-post3.png"
                          alt="Fixturbo"
                          style={{ objectFit: 'cover' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  <Link href="/blog">Mechanic</Link>
                  <Link href="/blog">Auto Fixers</Link>
                  <Link href="/blog">Car Fix</Link>
                  <Link href="/blog">Pro Auto Fix</Link>
                  <Link href="/blog">Service</Link>
                  <Link href="/blog">Auto Fix</Link>
                  <Link href="/blog">Auto Repair</Link>
                  <Link href="/blog">Masters</Link>
                  <Link href="/blog">Automotive</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaList;
