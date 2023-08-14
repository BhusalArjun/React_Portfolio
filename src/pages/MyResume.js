import React from "react";

// const MyResumePage = () => {
//     return (
//         <section className="content">
//             <div className="container">
//                 <div className="content__container">

//                      <h2>My Resume</h2>
//                     <div className="page_title_bar"></div>
//                     <link rel="resume" href="assets/images/resume.jpg" />

//                     {/* <h4>Where can I get some?</h4>
//                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//                     <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>  */}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default MyResumePage;
// import React from "./ProfileTabPanel";

const Profile = () => {

    // const profileImageUrl = process.env.PUBLIC_URL + '/assets/images/about-us-img-one.jpg';
    const profileImageUrl = process.env.PUBLIC_URL + '/assets/images/resume.jpg';

    return (
        <section className="profile">
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-6">
                        <div className="resume__thumbnail">
                            <img src={profileImageUrl} alt="Bhusal Arjun" loading="lazy" />
                            {/* <div className="profile__experience">
                                <h4>
                                    <span>6 Years</span>
                                    <span>Of Experience</span>
                                </h4>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="col-sm-6">
                        <div className="profile__content">
                            <div className="section__heading">
                                <h4>I'm a Developer</h4>
                                <h2>I Develop Ideas <span>That Help People</span></h2>
                                <p>Sed aliqut quis diam sit amet blandit. Suspendsiss agitts magna et efficitur agets. Inter laoreet ligual eu ultrices gravida.</p>
                            </div>
                            <div className="section__body">
                                <ProfileTabPanel />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Profile;