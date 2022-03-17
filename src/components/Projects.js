import React from 'react';

function Projects() {
  return (
    <div id="wrapper">
    <a href='/'>
      <button>
        Home
      </button>
    </a>

    <section id="projects">
      <header>
        <h2><a href='projects'>Projects</a></h2>
      </header>
      <div className="content">
      <p><strong>For web development and coding projects,</strong> below are some examples of coding projects that I have worked on. I have been working diligently to expand my horizon on coding new projects. The code repositories are available for viewing <a href="https://www.github.com/iabrown">on my github profile.</a><br /></p>

      <ul className="feature-icons">
        <li className="icon solid fa-laptop-code"><a href="https://github.com/iabrown/AgeGame">Age Game</a></li>
        <li className="icon solid fa-robot">Tic Tak Toe</li>
      </ul>

      <p><a href="https://www.github.com/iabrown"><button>Expand to view more of projects.</button></a></p>

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
        <p><strong>I have served as a Project Engineer in Multi-Family construction,</strong> I was abled to obtain specialized knowledge in the construction of podium-deck multi-family apartment buildings.<br/><br/>
        I have obtained knowledge in utilizing software systems such as Procore, BlueBeam, and PlanGrid for tasks involving document control, specification and drawing reviews, Request-For-Information (RFI), Submittal Processing, Meeting Minutes and Coordination, and also Change Order review/processing as the project develops and approaches completion.<br/><br/>
        The experiences I have gained through the work as Project Engineer was astonishing. One of the greatest feeling of performing this job was knowing that the work I performed was going towards building numerous homes for families that will be starting and developing their lives to create memories and enjoy a greater quality of live.</p>
        <p><strong>As a Project Engineer in Construction Management, </strong>I have been able to assist in succession of building Multi-Family Residential Apartments located in Irvine, Corona, and Long Beach within California. Totaling in <strong>1,174 apartment units</strong> for families living in California.</p>
        <ul className="feature-icons">
          <li className="icon solid fa-hammer">4th & Linden <br/>49 Units <br/>Downtown Long Beach, CA.</li>
          <li className="icon solid fa-ruler-combined">The Monterey <br/>442 Units <br/>Corona, CA.</li>
          <li className="icon solid fa-toolbox">The Pacific <br/>163 Units <br/>Downtown Long Beach, CA.</li>
          <li className="icon solid fa-hard-hat">The Royce <br/>520 Units <br/>Irvine, CA.</li>
        </ul>

        <p><a href='/'><button><strong>HOME PAGE</strong></button></a></p>

      </div>
    </section>
    </div>
  )
}


export default Projects;
