import Link from "next/link";

const BlogDetails = () => {
  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-details-card">
              <div className="blog-thumb">
                <img src="assets/img/blog/blog_details1_1.png" alt="Fixturbo" />
                <div className="blog-meta">
                  <Link href="/blog">
                    <i className="far fa-user" />
                    By admin
                  </Link>
                </div>
                <Link href="/blog-details" className="blog-date">
                  15 DEC
                </Link>
              </div>
              <div className="blog-content">
                <h2 className="blog-title h3">
                7 Easy Car Maintenance Tasks You Can Do at Home{" "}
                </h2>
                <p className="mb-15">
                Keeping your car in great shape doesn’t have to mean an expensive trip to the auto shop every time you hear a strange noise.
                </p>
                <p>
                While some jobs are best left to professionals, there are plenty of simple maintenance tasks you can tackle right in your own driveway. 
                </p>
                <blockquote>
                  <p>
                  With just a few tools and a little know-how, you’ll be able to extend your car’s lifespan, improve performance, and save money.
                  </p>
                </blockquote>
                <p className="mb-40">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when thr looking at its
                  layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal the a distribution of letters, as opposed
                  to using 'Content her the design made by man who is jenius
                </p>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="blog-thumb mb-sm-0 mb-30">
                      <img
                        src="assets/img/blog/mechanic.png"
                        alt="Fixturbo"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-details-single-card bg-title">
                      <h4 className="text-white">
                        Reach Out to Us for Repairs{" "}
                      </h4>
                      <p className="text-white">
                      These seven easy maintenance tasks are just the beginning. By getting comfortable with the basics, you’ll build confidence and a better understanding of your vehicle’s needs. 
                      </p>
                    </div>
                  </div>
                </div>
                <br>
                </br>
                <h4>1. Check and Top Off Fluids</h4>
                <p className="mt-40">
                Your car relies on a variety of fluids—from engine oil to coolant, brake fluid, and windshield washer fluid. Regularly checking these levels is simple and can prevent major mechanical issues down the road. Consult your owner’s manual for fluid types and levels, then use the provided dipsticks or reservoirs to inspect. If anything’s low, top it off with the recommended fluid. Just make sure to do this when the engine is cool to ensure accurate readings and your own safety.{" "}
                </p>
                <h4>2. Inspect Your Tires</h4>
                <p className="mt-40">
                Tire upkeep is essential for your safety and fuel economy. Start by using a tire pressure gauge to make sure each tire matches the recommended PSI found in your manual or on the driver’s side door jamb. Low pressure reduces fuel efficiency and can cause uneven wear. Also, check the tread depth—if it’s getting shallow, it may be time to rotate or replace the tires. While you’re at it, give each tire a visual inspection for cracks, bulges, or nails that may have punctured the rubber.
                </p>
                <h4>3. Replace Your Windshield Wipers</h4>
                <p className="mt-40">
                If your wipers leave streaks, skip across the glass, or fail to clear rain and grime, it’s time for a change. Replacing wipers is surprisingly easy—most simply snap into place. Just make sure you purchase blades that match your car’s make and model. Fresh wipers ensure clear visibility and safer driving in all weather conditions.
                </p>
                <h4>4. Change the Air Filter</h4>
                <p className="mt-40">
                Your engine’s air filter keeps dirt and debris out of the combustion chamber, helping it run efficiently. Over time, the filter can become clogged and restrict airflow. Replacing it is often as simple as popping open the airbox under your hood, sliding out the old filter, and inserting a new one. A clean air filter improves performance, boosts fuel economy, and helps maintain your engine’s health.
                </p>
              </div>
              <div className="share-links clearfix ">
                <span className="share-links-title">Tags:</span>
                <div className="tagcloud">
                  <Link href="/blog">All Project</Link>
                  <Link href="/blog">Car Repair</Link>
                  <Link href="/blog">Repair Services</Link>
                </div>
              </div>
            </div>
            <div className="comments-wrap">
              {/* Comment Form */}
              <h3 className="blog-inner-title"> Leave a comment</h3>
              <div className="comment-form bg-smoke mb-30">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <select
                      name="subject"
                      id="subject"
                      className="form-select style-white"
                      defaultValue={"Choose"}
                    >
                      <option value="Choose" >
                        Select Subject*
                      </option>
                      <option value="Construction">Auto Repair</option>
                      <option value="Real Estate">Car Repair</option>
                      <option value="Industry">Automotive</option>
                    </select>
                    <i className="fas fa-angle-down" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Message here.."
                      className="form-control style-white"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="btn style2">Send now</button>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Comment end */}
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
                  <Link href="/blog">Car Fix</Link>
                  <Link href="/blog">Auto Fixers</Link>
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

export default BlogDetails;
