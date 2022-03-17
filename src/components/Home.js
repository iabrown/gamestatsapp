import React from 'react';
import selfImage from '../images/2022_0203_self.jpg';


function Home () {
  return (
    <div id="wrapper">
      <section className="intro">
        <header>
          <h1>Hi, my name is Ian Brown</h1>
          <h2>Welcome to my portfolio!</h2>
          <p>Here in my portfolio I showcase my abilities and understanding for computer programming in a variety of languages. Currently I am working independently as IAB Designs while aiming to develop my career in Engineering as a Front-End Developer and to become a Full Stack Developer. <br /><br /> I am also Certified AWS Cloud Practitioner! <br /><br />I have studied Computer Science and Graphic Design while attending California Baptist University in Riverside, CA. <br /><br />I look forward to working on projects while incorporating my many unique experiences and talents from my extensive IT and Project Management background. </p>
{/*


          <ul className="actions">
            <li><a href="#about" className="arrow scrolly"><span className="label">Next</span></a></li>
          </ul>

*/}
        </header>
        <div className="content">
          <span className="image fill" data-position="center"><img src={selfImage} alt="Ian Brown Portrait Image" /></span>
        </div>
      </section>

      <section id="">
        <header>
          <h2><a href='about'>About my background</a></h2>
        </header>
        <div className="content">
          <p><strong>In pursuance of establishing a technology driven career involving Computer Science, </strong>I have worked to obtain my Amazon Web Service (AWS) Cloud Practitioner certification. My certification can be verified publicly by using my verification code of " S3FH147LGNQE1KSG " with the <strong><a href="https://aw.certmetrics.com/amazon/public/verification.aspx">link provided here</a></strong>. I am excited to continue onwards with my efforts to earn more ceritifications for the AWS Cloud Computing. Upcoming I anticipate obtaining my AWS Certified Developer - Associate Certification sometime in the Summer of 2022. </p>
          <p><a href='/about'>To read a little more about my background you can follow this link.</a></p>
          <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
        </div>
      </section>


      <section id="projects">
        <header>
          <h2><a href='projects'>Projects</a></h2>
        </header>
        <div className="content">
          <p>Throughout my career I have been able to work on various projects involving Information Technology, Web Development, Graphic Design, and also Project Management.</p>
          <p><a href="/projects"><strong>Details of various project information can be found here.</strong></a></p>
        </div>
      </section>

      <section>
        <header>
          <h2><a href='contact'>Get in touch</a></h2>
        </header>
        <div className="content">
          <p>Please feel free to get in contact with me regarding opportunities and project discussions by using the contact information listed on this page here. I am looking forward to hearing from you!</p>
          <ul className="items">
            <li>
              <h3>Email</h3>
              <a href="#">brown.iananthony@gmail.com</a>
            </li>
            <li>
              <h3>Phone</h3>
              <a href="#">(951) 229-8554</a>
            </li>
            <li>
              <h3>Elsewhere</h3>
              <ul className="icons">
                <li><a href="https://www.instagram.com/bengs_one/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/iabrown" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <div className="copyright">&copy;All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>





    </div>

  );

}

export default Home;
