import { useCallback } from "react";
import "./Index1.css";

const Index1 = () => {
  const onUserIconClick = useCallback(() => {
    // Please sync "dashboard" to the project
  }, []);

  return (
    <div className="index">
      <header className="content">
        <img className="background-icon" alt="" src="/background@2x.png" />
        <div className="west-street-image">
          <div className="background" />
          <div className="west-st-email">
            <img className="image-icon" alt="" src="/image@2x.png" />
            <div className="address">
              <div className="west-21th-st">
                198 West 21th Street, Suite 721 New York NY 10016
              </div>
            </div>
          </div>
          <div className="west-st-email1">
            <img className="image-icon1" alt="" src="/image-1@2x.png" />
            <div className="youremailemail-wrapper">
              <div className="youremailemail">youremail@email.com</div>
            </div>
          </div>
          <div className="image-grid">
            <div className="first-row">
              <img className="image-icon2" alt="" src="/image-2@2x.png" />
              <img className="image-icon3" alt="" src="/image-3@2x.png" />
            </div>
            <div className="description">
              <a className="a">1235 2355 98</a>
            </div>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="header">
            <div className="title">
              <a className="kiddos">Kiddos</a>
            </div>
            <div className="navigation">
              <div className="nav-links">
                <a className="home">Home</a>
              </div>
              <div className="nav-links1">
                <a className="about">About</a>
              </div>
              <div className="nav-links2">
                <b className="teacher">Teacher</b>
              </div>
              <div className="nav-links3">
                <a className="courses">Courses</a>
              </div>
              <div className="nav-links4">
                <a className="pricing">Pricing</a>
              </div>
              <div className="nav-links5">
                <a className="blog">Blog</a>
              </div>
              <div className="nav-links6">
                <a className="contact">Login</a>
              </div>
              <img
                className="user-icon"
                alt=""
                src="/user.svg"
                onClick={onUserIconClick}
              />
            </div>
          </div>
        </div>
      </header>
      <div className="background1" />
      <div className="background2" />
      <div className="background3" />
      <div className="background4" />
      <div className="background5" />
      <div className="background6" />
      <div className="background7" />
      <section className="hero">
        <div className="hero-content">
          <h3 className="perfect-learned">
            <p className="perfect-learned1">Perfect Learned</p>
            <p className="for-your-child">For Your Child</p>
          </h3>
          <div className="read-more-button">
            <button className="read-more">
              <div className="background8" />
              <a className="read-more1">Read More</a>
            </button>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="testimonial-content">
          <div className="testimonial-details">
            <div className="testimonial-bullets">
              <img
                className="testimonial-bullets-child"
                alt=""
                src="/group-34.svg"
              />
              <img
                className="testimonial-bullets-item"
                alt=""
                src="/group-34.svg"
              />
            </div>
            <div className="lorem-ipsum-is-simply">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              surviveding, remaining essentially unchanged.
            </div>
          </div>
          <div className="testimonial-quote">
            <img
              className="testimonial-quote-child"
              alt=""
              src="/group-36.svg"
            />
            <div className="background-parent">
              <img
                className="background-icon1"
                alt=""
                src="/background-1@2x.png"
              />
              <div className="rectangle-parent">
                <div className="frame-child" />
                <div className="lorem-ipsum-is-simply1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy surviveding, remaining essentially unchanged.
                </div>
              </div>
              <div className="second-teacher-icon">
                <div className="second-teacher-icon-child" />
                <img
                  className="fluent-emoji-high-contrasttea-icon"
                  loading="lazy"
                  alt=""
                  src="/fluentemojihighcontrastteacher.svg"
                />
              </div>
            </div>
          </div>
          <div className="testimonial-list">
            <div className="first-bullet">
              <div className="div">●</div>
            </div>
            <div className="rectangle-group">
              <div className="frame-item" />
              <div className="lorem-ipsum-is-simply2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                surviveding, remaining essentially unchanged.
              </div>
            </div>
            <div className="second-bullet">
              <div className="second-bullet-child" />
              <img
                className="fluent-emoji-high-contrasttea-icon1"
                loading="lazy"
                alt=""
                src="/fluentemojihighcontrastteacher.svg"
              />
            </div>
          </div>
          <div className="testimonial-quote1">
            <div className="fluentemojihighcontrastteacher-wrapper">
              <div className="fluentemojihighcontrastteacher">
                <div className="fluentemojihighcontrastteacher-child" />
                <img
                  className="fluent-emoji-high-contrasttea-icon2"
                  loading="lazy"
                  alt=""
                  src="/fluentemojihighcontrastteacher-2.svg"
                />
              </div>
            </div>
            <div className="rectangle-container">
              <div className="frame-inner" />
              <div className="lorem-ipsum-is-simply3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                surviveding, remaining essentially unchanged.
              </div>
            </div>
          </div>
        </div>
        <div className="offer">
          <div className="offer-content">
            <div className="offer-header">
              <div className="offer-title">
                <div className="offer-description">
                  <div className="what-we-offer-parent">
                    <div className="what-we-offer">What We Offer</div>
                    <div className="offer-paragraph">
                      <div className="on-her-way-container">
                        <p className="on-her-way">
                          On her way she met a copy. The copy warned the Little
                          Blind Text, that where it came
                        </p>
                        <p className="from-it-would">
                          from it would have been rewritten a thousand times and
                          everything that was left from
                        </p>
                        <p className="its-origin-would">
                          its origin would be the word.
                        </p>
                      </div>
                      <div className="class-cards">
                        <div className="first-row-cards">
                          <div className="first-card">
                            <div className="safety-image">
                              <img
                                className="image-icon4"
                                loading="lazy"
                                alt=""
                                src="/image-4@2x.png"
                              />
                            </div>
                            <div className="safety-description">
                              <div className="safety-first">Safety First</div>
                              <div className="far-far-away-container">
                                <p className="far-far-away">
                                  Far far away, behind the word
                                </p>
                                <p className="mountains-far-from">
                                  mountains, far from the
                                </p>
                                <p className="countries-vokalia">
                                  countries Vokalia.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="first-card1">
                            <div className="image-wrapper">
                              <img
                                className="image-icon5"
                                loading="lazy"
                                alt=""
                                src="/image-5@2x.png"
                              />
                            </div>
                            <div className="regular-classes-parent">
                              <div className="regular-classes">
                                Regular Classes
                              </div>
                              <div className="far-far-away-container1">
                                <p className="far-far-away1">
                                  Far far away, behind the word
                                </p>
                                <p className="mountains-far-from1">
                                  mountains, far from the
                                </p>
                                <p className="countries-vokalia1">
                                  countries Vokalia.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-row-cards">
                  <div className="second-card">
                    <div className="certified-image">
                      <img
                        className="image-icon6"
                        loading="lazy"
                        alt=""
                        src="/image-6@2x.png"
                      />
                    </div>
                    <div className="certified-description">
                      <div className="certified-teache">Certified Teachers</div>
                      <div className="far-far-away-container2">
                        <p className="far-far-away2">
                          Far far away, behind the word
                        </p>
                        <p className="mountains-far-from2">
                          mountains, far from the
                        </p>
                        <p className="countries-vokalia2">countries Vokalia.</p>
                      </div>
                    </div>
                  </div>
                  <div className="second-card1">
                    <div className="image-container">
                      <img
                        className="image-icon7"
                        loading="lazy"
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                    <div className="sufficient-class-parent">
                      <div className="sufficient-class">
                        Sufficient Classrooms
                      </div>
                      <div className="far-far-away-container3">
                        <p className="far-far-away3">
                          Far far away, behind the word
                        </p>
                        <p className="mountains-far-from3">
                          mountains, far from the
                        </p>
                        <p className="countries-vokalia3">countries Vokalia.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="welcome">
                <div className="welcome-content">
                  <div className="welcome-message">
                    <div className="welcome-to-kiddo-container">
                      <p className="welcome-to-kiddos">Welcome to Kiddos</p>
                      <p className="learning-school">Learning School</p>
                    </div>
                  </div>
                  <div className="welcome-description">
                    <div className="welcome-paragraph">
                      <div className="on-her-way-container1">
                        <p className="on-her-way1">
                          On her way she met a copy. The copy warned the Little
                        </p>
                        <p className="blind-text-that">
                          Blind Text, that where it came from it would have been
                        </p>
                        <p className="rewritten-a-thousand">
                          rewritten a thousand times and everything that was
                        </p>
                        <p className="left-from-its">
                          left from its origin would be the word.
                        </p>
                      </div>
                    </div>
                    <div className="separated-they-l-wrapper">
                      <div className="separated-they-l-container">
                        <p className="separated-they-live">
                          Separated they live in Bookmarksgrove right at the
                        </p>
                        <p className="coast-of-the">
                          coast of the Semantics, a large language ocean. A
                        </p>
                        <p className="small-river-named">
                          small river named Duden flows by their place and
                        </p>
                        <p className="supplies-it-with">
                          supplies it with the necessary regelialia. And if she
                        </p>
                        <p className="hasnt-been-rewritten">
                          hasn't been rewritten, then they are still using her.
                        </p>
                      </div>
                    </div>
                    <button className="welcome-button">
                      <div className="background9" />
                      <a className="read-more2">Read More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="features">
              <div className="feature-cards">
                <div className="first-feature-row">
                  <div className="creative-lessons-card">
                    <img
                      className="image-icon8"
                      loading="lazy"
                      alt=""
                      src="/image-8@2x.png"
                    />
                  </div>
                  <div className="creative-description">
                    <div className="creative-lessons-wrapper">
                      <div className="creative-lessons">Creative Lessons</div>
                    </div>
                    <div className="far-far-away-container4">
                      <p className="far-far-away4">
                        Far far away, behind the word
                      </p>
                      <p className="mountains-far-from4">
                        mountains, far from the
                      </p>
                      <p className="countries-vokalia4">countries Vokalia.</p>
                    </div>
                  </div>
                </div>
                <div className="sports-card">
                  <div className="sports-icon">
                    <img
                      className="image-icon9"
                      loading="lazy"
                      alt=""
                      src="/image-9@2x.png"
                    />
                  </div>
                  <div className="sports-description">
                    <div className="sports-facilitie">Sports Facilities</div>
                    <div className="far-far-away-container5">
                      <p className="far-far-away5">
                        Far far away, behind the word
                      </p>
                      <p className="mountains-far-from5">
                        mountains, far from the
                      </p>
                      <p className="countries-vokalia5">countries Vokalia.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-parent">
        <img
          className="image-icon10"
          loading="lazy"
          alt=""
          src="/image-10@2x.png"
        />
        <div className="teacher-content">
          <div className="teaching-title">
            <div className="teaching-your-ch">
              Teaching Your Child Some Good Manners
            </div>
            <div className="river-name">
              <div className="small-river-name-container">
                <p className="small-river-named1">
                  small river named Duden flows by their place and supplies it
                  with the necessary regelialia, It is a paradisematic
                </p>
                <p className="country-in-which">
                  country, in which roasted parts of sentences fly into your
                  mouth.
                </p>
              </div>
            </div>
          </div>
          <div className="course-button">
            <button className="take-course">
              <div className="background10" />
              <div className="take-a-course">Take a Course</div>
            </button>
          </div>
        </div>
      </section>
      <section className="images">
        <img className="image-icon11" alt="" src="/image-11@2x.png" />
        <img
          className="image-icon12"
          loading="lazy"
          alt=""
          src="/image-12@2x.png"
        />
      </section>
      <section className="course-title-wrapper">
        <div className="course-title">
          <div className="our-courses-title">
            <div className="our-courses-wrapper">
              <div className="our-courses">
                <div className="our">Certifited</div>
                <div className="courses1">Teachers</div>
              </div>
            </div>
            <div className="background11" />
          </div>
          <div className="teacher-carousel">
            <div className="carousel-item">
              <div className="teacher-info">
                <div className="separated-they-l-container1">
                  <span className="separated-they-l-container2">
                    <p className="separated-they-live1">
                      Separated they live in. A small river named Duden flows by
                      their place and supplies it with the
                    </p>
                    <p className="necessary-regelialia-it">
                      necessary regelialia. It is a paradisematic country
                    </p>
                  </span>
                </div>
              </div>
              <div className="teacher-details">
                <div className="teacher-cards">
                  <img
                    className="image-icon13"
                    loading="lazy"
                    alt=""
                    src="/image-13@2x.png"
                  />
                  <div className="teacher-names">
                    <div className="bianca-wilson-parent">
                      <div className="bianca-wilson">Bianca Wilson</div>
                      <div className="teacher-types">
                        <div className="teacher1">TEACHER</div>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-descriptions">
                    <div className="i-am-an-container">
                      <p className="i-am-an">
                        I am an ambitious workaholic, but
                      </p>
                      <p className="apart-from-that">
                        apart from that, pretty simple
                      </p>
                      <p className="person">person.</p>
                    </div>
                  </div>
                </div>
                <div className="mitch-card">
                  <img
                    className="image-icon14"
                    loading="lazy"
                    alt=""
                    src="/image-14@2x.png"
                  />
                  <div className="mitch-info">
                    <div className="mitch-name-type">
                      <div className="mitch-name">
                        <div className="mitch-parker">Mitch Parker</div>
                      </div>
                      <div className="english-teacher">ENGLISH TEACHER</div>
                    </div>
                  </div>
                  <div className="mitch-description">
                    <div className="i-am-an-container1">
                      <p className="i-am-an1">
                        I am an ambitious workaholic, but
                      </p>
                      <p className="apart-from-that1">
                        apart from that, pretty simple
                      </p>
                      <p className="person1">person.</p>
                    </div>
                  </div>
                </div>
                <div className="teacher-cards1">
                  <img
                    className="image-icon15"
                    loading="lazy"
                    alt=""
                    src="/image-15@2x.png"
                  />
                  <div className="teacher-cards-inner">
                    <div className="stella-smith-parent">
                      <div className="stella-smith">Stella Smith</div>
                      <div className="art-teacher-wrapper">
                        <div className="art-teacher">ART TEACHER</div>
                      </div>
                    </div>
                  </div>
                  <div className="i-am-an-ambitiou-wrapper">
                    <div className="i-am-an-container2">
                      <p className="i-am-an2">
                        I am an ambitious workaholic, but
                      </p>
                      <p className="apart-from-that2">
                        apart from that, pretty simple
                      </p>
                      <p className="person2">person.</p>
                    </div>
                  </div>
                </div>
                <div className="teacher-cards2">
                  <img
                    className="image-icon16"
                    loading="lazy"
                    alt=""
                    src="/image-16@2x.png"
                  />
                  <div className="teacher-cards-child">
                    <div className="monshe-henderson-parent">
                      <div className="monshe-henderson">Monshe Henderson</div>
                      <div className="science-teacher-wrapper">
                        <div className="science-teacher">SCIENCE TEACHER</div>
                      </div>
                    </div>
                  </div>
                  <div className="i-am-an-ambitiou-container">
                    <div className="i-am-an-container3">
                      <p className="i-am-an3">
                        I am an ambitious workaholic, but
                      </p>
                      <p className="apart-from-that3">
                        apart from that, pretty simple
                      </p>
                      <p className="person3">person.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="course-outro">
        <div className="course-outro-title">
          <div className="outro-our-courses-title">
            <div className="outro-our-courses-parent">
              <div className="outro-our-courses">
                <div className="outro-our-courses-words">
                  <div className="our1">Our</div>
                  <div className="courses2">Courses</div>
                </div>
              </div>
              <div className="separated-they-l-container3">
                <p className="separated-they-live2">
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the
                </p>
                <p className="necessary-regelialia-it1">
                  necessary regelialia. It is a paradisematic country
                </p>
              </div>
            </div>
          </div>
          <div className="groups-parent">
            <div className="groups">
              <img
                className="image-icon17"
                loading="lazy"
                alt=""
                src="/image-17@2x.png"
              />
            </div>
            <div className="arts-info">
              <div className="arts-title">
                <div className="arts-lesson-container">
                  <div className="arts-lesson-details">
                    <div className="arts-lesson-name-time">
                      <div className="background12" />
                      <div className="arts-lesson-content">
                        <div className="arts-lesson">Arts Lesson</div>
                        <div className="arts-time">
                          <div className="class-time">Class time:</div>
                          <div className="am-10am">9:00am - 10am</div>
                        </div>
                      </div>
                      <div className="separated-they-l-container4">
                        <span className="separated-they-l-container5">
                          <p className="separated-they-live3">
                            Separated they live in. A small river
                          </p>
                          <p className="named-duden-flows">
                            named Duden flows by their place
                          </p>
                          <p className="and-supplies-it">
                            and supplies it with the necessary
                          </p>
                          <p className="regelialia-it-is">
                            regelialia. It is a paradisematic
                          </p>
                          <p className="country">country</p>
                        </span>
                      </div>
                    </div>
                    <div className="music-title-wrapper">
                      <div className="music-title">
                        <div className="background13" />
                        <div className="music-lesson-container">
                          <div className="music-lesson">Music Lesson</div>
                        </div>
                        <div className="music-lesson-name">
                          <div className="music-lesson1">
                            <div className="class-time1">Class time:</div>
                            <div className="am-10am1">9:00am - 10am</div>
                          </div>
                          <div className="separated-they-l-container6">
                            <p className="separated-they-live4">
                              Separated they live in. A small river
                            </p>
                            <p className="named-duden-flows1">
                              named Duden flows by their place
                            </p>
                            <p className="and-supplies-it1">
                              and supplies it with the necessary
                            </p>
                            <p className="regelialia-it-is1">
                              regelialia. It is a paradisematic
                            </p>
                            <p className="country1">country</p>
                          </div>
                        </div>
                        <img
                          className="groups-icon"
                          loading="lazy"
                          alt=""
                          src="/groups@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent">
                  <div className="language-title-wrapper">
                    <div className="language-title">
                      <img
                        className="background-icon2"
                        alt=""
                        src="/background-2@2x.png"
                      />
                      <div className="language-info">
                        <div className="background14" />
                        <div className="language-lesson-container">
                          <div className="language-lesson-details">
                            <div className="language-lesson">
                              Language Lesson
                            </div>
                          </div>
                          <div className="language-lesson1">
                            <div className="class-time2">Class time:</div>
                            <div className="am-10am2">9:00am - 10am</div>
                          </div>
                        </div>
                        <div className="separated-they-l-container7">
                          <span className="separated-they-l-container8">
                            <p className="separated-they-live5">
                              Separated they live in. A small river
                            </p>
                            <p className="named-duden-flows2">
                              named Duden flows by their place
                            </p>
                            <p className="and-supplies-it2">
                              and supplies it with the necessary
                            </p>
                            <p className="regelialia-it-is2">
                              regelialia. It is a paradisematic
                            </p>
                            <p className="country2">country</p>
                          </span>
                        </div>
                      </div>
                      <img
                        className="image-icon18"
                        loading="lazy"
                        alt=""
                        src="/image-18@2x.png"
                      />
                    </div>
                  </div>
                  <div className="language-image">
                    <div className="groups-wrapper">
                      <div className="groups1">
                        <img
                          className="image-icon19"
                          loading="lazy"
                          alt=""
                          src="/image-19@2x.png"
                        />
                      </div>
                    </div>
                    <div className="sports-info">
                      <div className="background15" />
                      <div className="sports-time">
                        <div className="class-time3">Class time:</div>
                        <div className="am-10am3">9:00am - 10am</div>
                      </div>
                      <div className="separated-they-l-container9">
                        <span className="separated-they-l-container10">
                          <p className="separated-they-live6">
                            Separated they live in. A small river
                          </p>
                          <p className="named-duden-flows3">
                            named Duden flows by their place
                          </p>
                          <p className="and-supplies-it3">
                            and supplies it with the necessary
                          </p>
                          <p className="regelialia-it-is3">
                            regelialia. It is a paradisematic
                          </p>
                          <p className="country3">country</p>
                        </span>
                      </div>
                      <div className="sports-lesson">Sports Lesson</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="groups2">
        <img
          className="image-icon20"
          loading="lazy"
          alt=""
          src="/image-20@2x.png"
        />
        <div className="awards-won">Awards Won</div>
        <div className="successful-kids">Successful Kids</div>
        <div className="certified-teache1">Certified Teachers</div>
        <div className="navigation-items">300</div>
        <div className="happy-parents">Happy Parents</div>
        <div className="navigation-items1">564</div>
        <div className="navigation-items2">351</div>
        <div className="navigation-items3">18</div>
        <div className="separated-they-l-container11">
          <span className="separated-they-l-container12">
            <p className="separated-they-live7">
              Separated they live in. A smallriver named Duden flows by their
              place and supplies it with the
            </p>
            <p className="necessary-regelialia-it2">
              necessary regelialia. It is a paradisematic countr
            </p>
          </span>
        </div>
        <div className="experience">Experience</div>
        <div className="years-of">20 Years of</div>
      </section>
      <section className="pricing-container-wrapper">
        <div className="pricing-container">
          <div className="pricing-content">
            <div className="pricing-header">
              <div className="pricing-title">
                <div className="pricing-keyword-parent">
                  <div className="pricing-keyword">
                    <div className="our2">Our</div>
                  </div>
                  <div className="pricing1">Pricing</div>
                </div>
              </div>
              <div className="separated-they-l-container13">
                <p className="separated-they-live8">
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the
                </p>
                <p className="necessary-regelialia-it3">
                  necessary regelialia. It is a paradisematic country
                </p>
              </div>
            </div>
          </div>
          <div className="pricing-options">
            <div className="basic-plan">
              <div className="basic-content">
                <div className="background16" />
                <div className="basic-details">
                  <div className="basic">Basic</div>
                </div>
                <div className="basic-price">
                  <div className="basic-amount">$24.50</div>
                  <div className="basic-duration">
                    <div className="mos">/5mos</div>
                  </div>
                </div>
              </div>
              <img
                className="image-icon21"
                loading="lazy"
                alt=""
                src="/image-21@2x.png"
              />
              <div className="basic-features">
                <div className="background17" />
                <div className="far-far-away-container6">
                  <p className="far-far-away6">Far far away, behind the</p>
                  <p className="word-mountains-far">word mountains, far from</p>
                  <p className="the-countries-vokalia">
                    the countries Vokalia and
                  </p>
                  <p className="consonantia-there-live">
                    Consonantia, there live the
                  </p>
                  <p className="blind-texts">blind texts.</p>
                </div>
                <div className="basic-action">
                  <button className="basic-button">
                    <div className="background18" />
                    <div className="take-a-course1">Take A Course</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="standard-plan">
              <div className="standard-content">
                <div className="background19" />
                <div className="standard-details">
                  <div className="standard">Standard</div>
                </div>
                <div className="standard-price">
                  <div className="standard-amount">
                    <div className="standard-value">$34.50</div>
                    <div className="standard-duration">
                      <div className="mos1">/5mos</div>
                    </div>
                  </div>
                </div>
                <img
                  className="image-icon22"
                  loading="lazy"
                  alt=""
                  src="/image-22@2x.png"
                />
              </div>
              <div className="standard-features">
                <div className="background20" />
                <div className="far-far-away-container7">
                  <p className="far-far-away7">Far far away, behind the</p>
                  <p className="word-mountains-far1">
                    word mountains, far from
                  </p>
                  <p className="the-countries-vokalia1">
                    the countries Vokalia and
                  </p>
                  <p className="consonantia-there-live1">
                    Consonantia, there live the
                  </p>
                  <p className="blind-texts1">blind texts.</p>
                </div>
                <div className="standard-action">
                  <button className="standard-button">
                    <div className="background21" />
                    <div className="take-a-course2">Take A Course</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="premium-plan">
              <div className="premium-content">
                <div className="background22" />
                <div className="premium-details">
                  <div className="premium">Premium</div>
                </div>
                <div className="premium-price">
                  <div className="premium-amount">$54.50</div>
                  <div className="premium-duration">
                    <div className="mos2">/5mos</div>
                  </div>
                </div>
              </div>
              <div className="premium-image">
                <img
                  className="image-icon23"
                  loading="lazy"
                  alt=""
                  src="/image-23@2x.png"
                />
              </div>
              <div className="premium-features">
                <div className="background23" />
                <div className="far-far-away-container8">
                  <p className="far-far-away8">Far far away, behind the</p>
                  <p className="word-mountains-far2">
                    word mountains, far from
                  </p>
                  <p className="the-countries-vokalia2">
                    the countries Vokalia and
                  </p>
                  <p className="consonantia-there-live2">
                    Consonantia, there live the
                  </p>
                  <p className="blind-texts2">blind texts.</p>
                </div>
                <div className="premium-action">
                  <button className="premium-button">
                    <div className="background24" />
                    <div className="take-a-course3">Take A Course</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="platinum-plan">
              <div className="platinum-content">
                <div className="platinum-details">
                  <div className="platinum">Platinum</div>
                </div>
                <div className="platinum-price">
                  <div className="platinum-amount">
                    <div className="platinum-value">
                      <div className="platinum-number">$89.50</div>
                      <div className="platinum-duration">
                        <div className="mos3">/5mos</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="background-icon3"
                    loading="lazy"
                    alt=""
                    src="/background-3@2x.png"
                  />
                </div>
                <div className="platinum-features">
                  <div className="far-far-away-container9">
                    <p className="far-far-away9">Far far away, behind the</p>
                    <p className="word-mountains-far3">
                      word mountains, far from
                    </p>
                    <p className="the-countries-vokalia3">
                      the countries Vokalia and
                    </p>
                    <p className="consonantia-there-live3">
                      Consonantia, there live the
                    </p>
                    <p className="blind-texts3">blind texts.</p>
                  </div>
                </div>
                <div className="platinum-action">
                  <button className="platinum-button">
                    <div className="background25" />
                    <div className="take-a-course4">Take A Course</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="background-group">
        <footer className="background26" />
        <div className="questions-container">
          <div className="questions-content">
            <div className="have-a-questions">Have a Questions?</div>
          </div>
          <div className="contact-details">
            <div className="address-details">
              <div className="address1">
                <img className="image-icon24" alt="" src="/image-24@2x.png" />
                <div className="image-group">
                  <img
                    className="image-icon25"
                    loading="lazy"
                    alt=""
                    src="/image-25@2x.png"
                  />
                  <img
                    className="image-icon26"
                    loading="lazy"
                    alt=""
                    src="/image-26@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="contact-information">
              <div className="address-container">
                <div className="fake-st-mou-wrapper">
                  <div className="fake-st-mou-container">
                    <p className="fake-st-mountain">
                      203 Fake St. Mountain View, San
                    </p>
                    <p className="francisco-california-usa">
                      Francisco, California, USA
                    </p>
                  </div>
                </div>
                <div className="separator">+2 392 3929 210</div>
              </div>
              <div className="email-details">
                <div className="infoyourdomain">info@yourdomain.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-footer">
          <div className="footer-content">
            <div className="footer-columns-wrapper">
              <div className="footer-columns">
                <div className="blog-column">
                  <div className="recent-blog">Recent Blog</div>
                </div>
                <div className="links-column">
                  <div className="links">Links</div>
                </div>
                <div className="subscribe-us">Subscribe Us!</div>
              </div>
            </div>
            <div className="blog-links">
              <div className="links-container">
                <div className="links-item">
                  <img
                    className="image-icon27"
                    loading="lazy"
                    alt=""
                    src="/image-27@2x.png"
                  />
                  <div className="links-content">
                    <div className="links-title-container">
                      <div className="even-the-all-pow-container">
                        <p className="even-the-all-powerful">
                          Even the all-powerful
                        </p>
                        <p className="pointing-has-no">Pointing has no</p>
                        <p className="control-about">control about</p>
                      </div>
                      <div className="links-meta">
                        <div className="links-author">
                          <div className="author-info">
                            <img
                              className="image-icon28"
                              alt=""
                              src="/image-28@2x.png"
                            />
                          </div>
                          <div className="dec-252018admin">
                            Dec 25,2018Admin
                          </div>
                        </div>
                        <div className="links-date">
                          <div className="date-container">
                            <img
                              className="image-icon29"
                              alt=""
                              src="/image-29@2x.png"
                            />
                            <div className="wrapper">
                              <div className="div1">19</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-navigation">
                  <div className="navigation-container">
                    <div className="navigation-links">
                      <div className="home-link">
                        <img
                          className="image-icon30"
                          alt=""
                          src="/image-30@2x.png"
                        />
                      </div>
                      <div className="home1">Home</div>
                    </div>
                    <div className="about1">About</div>
                    <div className="services-links">
                      <div className="services-container">
                        <div className="services-icons">
                          <img
                            className="image-icon31"
                            alt=""
                            src="/image-31@2x.png"
                          />
                          <img
                            className="image-icon32"
                            alt=""
                            src="/image-30@2x.png"
                          />
                          <img
                            className="image-icon33"
                            alt=""
                            src="/image-31@2x.png"
                          />
                        </div>
                      </div>
                      <div className="services-content">
                        <div className="services">Services</div>
                        <div className="departments-link">
                          <div className="deparments">Deparments</div>
                        </div>
                        <div className="contact-link">
                          <div className="contact1">Contact</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subscription">
                <div className="subscription-form">
                  <div className="subscription-fields">
                    <div className="background27" />
                    <div className="enter-email-addr">Enter email address</div>
                  </div>
                  <button className="subscription-fields1">
                    <div className="background28" />
                    <div className="subscribe">Subscribe</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="latest-post">
              <div className="latest-post-container">
                <div className="post-item">
                  <img
                    className="image-icon34"
                    loading="lazy"
                    alt=""
                    src="/image-34@2x.png"
                  />
                  <div className="post-content">
                    <div className="post-title-container">
                      <div className="even-the-all-pow-container1">
                        <p className="even-the-all-powerful1">
                          Even the all-powerful
                        </p>
                        <p className="pointing-has-no1">Pointing has no</p>
                        <p className="control-about1">control about</p>
                      </div>
                      <div className="post-meta">
                        <div className="post-author">
                          <img
                            className="image-icon35"
                            alt=""
                            src="/image-28@2x.png"
                          />
                        </div>
                        <div className="dec-252018admin1">Dec 25,2018Admin</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social">
                  <div className="social-container">
                    <div className="connect-with-us">Connect With Us</div>
                    <div className="social-icons">
                      <div className="icons-container">
                        <img
                          className="image-icon36"
                          loading="lazy"
                          alt=""
                          src="/image-36@2x.png"
                        />
                        <div className="social-link">
                          <div className="background29" />
                          <div className="f">f</div>
                        </div>
                        <img
                          className="image-icon37"
                          loading="lazy"
                          alt=""
                          src="/image-37@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-image-container">
                <div className="image-wrapper1">
                  <img className="image-icon38" alt="" src="/image-38@2x.png" />
                  <div className="image-overlay">
                    <div className="div2">19</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="copyright-info">
              <div className="copyright-2o24-wrapper">
                <div className="copyright-2o24">
                  Copyright ©2o24 All rights reserved | This template is made
                  with
                </div>
              </div>
              <img className="image-icon39" alt="" src="/image-39@2x.png" />
              <div className="by-colorlib-wrapper">
                <div className="by-colorlib">by Colorlib</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
