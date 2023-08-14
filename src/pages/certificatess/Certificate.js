import React from "react";

const CertificatePage = () => {
  return (
    <section className="content">
      {/* <div className="container">
                <div className="content__container">
                    <h2>My Services</h2>
                    <div className="page_title_bar"></div>

                    <h4>Why do we use it?</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div> */}
      <div class="container">
        <h1 class="heading">My Certificate</h1>
        <p class="paragraph">Check to see the Certificate on these Language</p>

        <div class="box-container">
          <div class="box">
            <img src="/assets/images/icon-1.png" />
            <h3>HTML 5</h3>
            <p>
              Certificate on HTML5 consectetur adipisicing elit. Minus, commodi?
            </p>
            <a href="/hypertext" class="btn">
              Check
            </a>
          </div>

          <div class="box">
            <img src="/assets/images/icon-2.png" alt="" />
            <h3>CSS 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="/cascading" class="btn">
              Check
            </a>
          </div>

          <div class="box">
            <img src="/assets/images/icon-3.png" alt="" />
            <h3>JavaScript</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="#" class="btn">
              Check
            </a>
          </div>

          <div class="box">
            <img src="/assets/images/icon-6.png" alt="" />
            <h3>React.js</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="/reeact" class="btn">
              read more
            </a>
          </div>

          <div class="box">
            <img src="/assets/images/icon-4.png" alt="" />
            <h3>SASS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="#" class="btn">
              Check
            </a>
          </div>

          <div class="box">
            <img src="/assets/images/icon-5.png" alt="" />
            <h3>JQuery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="#" class="btn">
              Check
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatePage;
