import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import selfImage from './images/2022_0203_self.jpg';

function App() {
  return (
    <div className="App">


  <div id="wrapper">
    <section className="intro">
      <header>
        <h1>Hi, my name is Ian Brown</h1>
        <h2>Welcome to my portfolio!</h2>
        <p>I have studied Computer Science while attending California Baptist University in Riverside, CA. <br /><br />I look forward to working on and projects while incorporating my many unique experiences and talents from my extensive IT and Construction Project Management background. </p>
        <ul className="actions">
          <li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill" data-position="center"><img src={selfImage} alt="Ian Brown Portrait Image" /></span>
      </div>
    </section>

    <section id="first">
      <header>
        <h2>About my background</h2>
      </header>
      <div className="content">
        <p><strong>In 2011 I graduated high school</strong> and began attending California Baptist University (CBU) in Riverside, CA to study Graphic Design and Digital Media. While attending University I began working in Information Technology (IT) in 2011 which lead to full-time employment in 2014 as a Client Support Specialist where I worked with merchants to provide them the technical expertise they needed to for setting up credit card transactions along with any assistance needed moving forward. </p>
        <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
      </div>
    </section>

    <section id="first">
      <header></header>
      <div className="content">
        <p><strong>In 2015, I began working as a Corporate IT Technician for a Property Management Company, Sares Regis Group (SRG),</strong> where I provide both on-premise and remote  IT Technical Support to the company end users. At the time of my employment, SRG was a mid-sized company that reached 750-800, reportedly generates $100-500 million annually in sales, has developed and acquired more than $7 billion in commercial and residential assets, and manages multi-family, commercial, and industrial properties located in California, Washington, Oregon, Colorado, and Arizona for a portfolio of 93 communities combining in a total of 21,700 units. While working here, I provided technical assistance in ways of integrating a property to the existing company network during property acquisitions, managing the customer active directory, providing network support, printer support, and computer support.</p>
        <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
      </div>
    </section>

    <section id="first">
      <header></header>
      <div className="content">
        <p><strong>In November 2017, </strong>I was able to transition into the SRG General Contractor construction division where I began working as Project Engineer in Multi-Family Construction. Here I was able to coordinate and work with a wide range of companies to design and build our projects. Coordinating with the building development teams that consisted of Civil Engineers, Electrical Engineers, Mechanical Engineers, Structural Engineers, Architectural Engineers, Interior Designers, and along with City Inspectors and Building Departments. As the Project Engineer I worked alongside with the Assistant Project Manager and Project Managers to provide support to our Superintendents and their field team members within our company and also coordinated with the Sub-Contractors on each of the building projects. The sub-contractors consisted of a wide variety of disciplines including: landscaping, civil, plumbing, electrical, painting, concrete, wood framers, structural steel, finish steel, flooring, artwork, millwork, tiling, appliance vendors, and many more individual trades.</p>
        <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
      </div>
    </section>

    <section id="first">
      <header></header>
      <div className="content">
        <p><strong>Working as Project Engineer was a very exciting and enjoyable experience </strong> where I was continuously challenged which allowed me to grow exponentially in many ways professionally. I wish to continue down the path of creating/building new projects and ideas in any way possible, especially in the spectrum involving technology.</p>
        <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
      </div>
    </section>

    <section id="first">
      <header></header>
      <div className="content">
        <p><strong>Through the works of my career, </strong>I have become an instrumental engineer with an accumulated 10 years of experience achieving ambitious goals in challenging project management, engineering, and technical environments. Diligent, forward-thinking, and adaptable to dynamic companies, clients, and project needs. I am successful at motivating teams to meet demanding timelines. Leveraging technology, science, mathematics, engineering, analytical and critical thinking to provide accurate, timely, and cost effective solutions in competitive multidisciplinary environments. </p>
        <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
      </div>
    </section>

    <section id="first">
      <header></header>
      <div className="content">
        <p><strong>At the time of Fall 2021 </strong>I was able to get back into school once again at California Baptist University (CBU) to begin my program of obtaining my Bachelor’s Degree in Computer Science. Here I am able to learn more about computer science in ways of data science, data structures, discrete structures, computer programming, software engineering, and also many other engineering concepts and applications using science and mathematical approaches through the College of Engineering at California Baptist University. My expected graduation will be rapidly approaching in 2025. </p>
        <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
      </div>
    </section>

    <section id="first">
      <header></header>
      <div className="content">
        <p><strong>In pursuance of establishing a technology driven career involving Computer Science, </strong>I have worked to obtain my Amazon Web Service (AWS) Cloud Practitioner certification. Verification on my certification is available to the public by using my verification code of " S3FH147LGNQE1KSH " when looking up my AWS Certification. I am excited to continue onwards with my efforts to earn more ceritifications for the AWS Cloud. Upcoming I anticipate obtaining my AWS Certified Developer - Associate Certification in the Summer of 2022. </p>
        <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
      </div>
    </section>

    <section>
      <header>
        <h2>Projects</h2>
      </header>
      <div className="content">
        <p><strong>As a Project Engineer in Construction Management, </strong>I have been able to assist in the work to build Multi-Family Residential Apartments located in Irvine, Corona, and Long Beach within California. Totaling in <strong>1,174 apartment units</strong> for families living in California.</p>
        <ul className="feature-icons">
          <li className="icon solid fa-hammer">4th & Linden <br/>49 Units <br/>Downtown Long Beach, CA.</li>
          <li className="icon solid fa-ruler-combined">The Monterey <br/>442 Units <br/>Corona, CA.</li>
          <li className="icon solid fa-toolbox">The Pacific <br/>163 Units <br/>Downtown Long Beach, CA.</li>
          <li className="icon solid fa-hard-hat">The Royce <br/>520 Units <br/>Irvine, CA.</li>
        </ul>

        <p>Regarding coding for <strong>web development and software engineering projects</strong> I have been able to write out programs for the projects listed below. The code repositories are listed and available for viewing <a href="www.github.com/iabrown">on my github profile, click here.</a></p>

        <ul className="feature-icons">
          <li className="icon solid fa-laptop-code">Age Game</li>
          <li className="icon solid fa-robot">Tic Tak Toe</li>
        </ul>
      </div>
    </section>

    <section>
      <header>
        <h2>Computer Science/Engineering</h2>
      </header>
      <div className="content">
        <p><strong>Amazon Web Service (AWS) Certified Cloud Practitioner</strong><br/>
        Verification Code: " S3FH147LGNQE1KSH "<br/>
        Valid until January 2025.<br/>
        Demonstrated foundational knowledge and cloud fluency of the AWS platform pertaining to IT services, security concepts, practices, and how cloud impacts businesses.
        </p>
        <p><strong>Bachelor of Science in Computer Science</strong><br/>
        Completion of Degree in May 2025.
        </p>
        <p><strong>Vice President of National Society of Black Engineers (NSBE) at California Baptist University (CBU).</strong><br/>
          First generation of Black Engineers within CBU University history, established in Fall 2021.
        </p>
      </div>
    </section>

    <section>
      <header>
        <h2>Information Technology</h2>
      </header>
      <div className="content">
        <p><strong>I aim to continue to grow my experiences in Information Technology as my career develops.</strong> I have accumulated 10 years of experiences that involve Information Technology and working with technology and I aim to continue down this path to develop new projects that will bring fruitfulness to people's lives. <br/><br/>
        I have become very familiar with skillsets involving: User Administration, Security Groups, Group Policies, SQL, Git, Hardware/Software Support, Network Administration, Remote Support, Business takeover, training, and support, Printer/Copier Support, Merchant Credit Card Processing involving eCommerce, Terminal Support, Graphic Design, and an array of programming languages.<br/><br/>
        Programming languages include HTML, CSS, Javascript, C++, PHP, MySQL. </p>
      </div>
    </section>

    <section>
      <header>
        <h2>Construction Project Management</h2>
      </header>
      <div className="content">
        <p><strong>As a Project Engineer in Multi-Family construction,</strong> I was abled to obtain specialized knowledge in the construction of podium-deck multi-family apartment buildings.<br/><br/>
        I have obtained knowledge in utilizing software systems such as Procore, BlueBeam, and PlanGrid for tasks involving document control, specification and drawing reviews, Request-For-Information (RFI), Submittal Processing, Meeting Minutes and Coordination, and also Change Order review/processing as the project develops and approaches completion.<br/><br/>
        The experiences I have gained through the work as Project Engineer was astonishing. One of the greatest feeling of performing this job was knowing that the work I performed was going towards building numerous homes for families that will be starting and developing their lives to create memories and enjoy a greater quality of live.</p>
      </div>
    </section>

    <section>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p><strong>I am available for employment and projects.</strong> Please feel free to get in contact with me regarding employment opportunities and project discussions by using the contact information listed on this page here. I am looking forward to hearing from you!</p>
      </div>
      <footer>
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
      </footer>
    </section>

    <div className="copyright">&copy;All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>





  </div>

  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/jquery.scrolly.min.js"></script>
  <script src="assets/js/browser.min.js"></script>
  <script src="assets/js/breakpoints.min.js"></script>
  <script src="assets/js/util.js"></script>
  <script src="assets/js/main.js"></script>

    </div>

  );
}

export default App;
// export default App;
