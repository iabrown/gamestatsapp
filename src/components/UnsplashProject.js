import React from 'react';
import '../assets/css/Unsplash.css'

const UnsplashProject = () => {

  const onAppStart = () => {
    //Hide the project description
    document.getElementById('description').style.transition = "3s";
    document.getElementById('description').style.opacity = "0%";
    setTimeout(()=>{document.getElementById('description').style.display="none"}, 3000);

    //Show the project application
    document.getElementById('projectApplication').style.display="grid";
    document.getElementById('projectApplication').style.position="inherit";
    document.getElementById('projectApplication').style.transition="3s";
    setTimeout(()=> {document.getElementById('projectApplication').style.opacity="100%"}, 3000);

}

  const onAppReset = () => {
    //Reset the project Application
    document.getElementById('projectApplication').style.opacity="0";
    document.getElementById('projectApplication').style.transition = "3s";

    //Reset the project description portion of ths page
    setTimeout(()=>{
      document.getElementById('description').style.display="";
      document.getElementById('description').style.transition = "3s";
      setTimeout(()=>{document.getElementById('description').style.opacity="100"}, 5);

    }, 3000);



  }


  return (
    <div>
    <div id="wrapper" className="customWrapper">
    <a href='projects'>
      <button>
        Return to Projects
      </button>
    </a><br /><br />
    <div id="customButtons">
    <button onClick={onAppStart} >Start the application</button>
    <button onClick={onAppReset} >Reset the Application</button><br />
    </div>

    <section id="description">
      <header>
        <h2><a href='projects'>Unsplash Pictures</a></h2>
      </header>
      <div className="content">
      <p><strong>Within this application, I utilize the Unsplash.com API to obtain images using a keyword in a search query.</strong> This project is built using React.js, Axios for the API calls, and is hosted on my main portfolio using AWS Amplify. Use the link below to start the application. <br /><br /></p>





      </div>
    </section>
    </div>

    <br /><br />

    <div id="projectApplication">
      <header>
        <h2>Project Application</h2>
      </header>
      <div className="content">
      <p><strong>Within this application, I utilize the Unsplash.com API to obtain images using a keyword in a search query.</strong> This project is built using React.js, Axios for the API calls, and is hosted on my main portfolio using AWS Amplify. Use the link below to start the application. <br /><br /></p>





      </div>
    </div>


    </div>
  )
}


export default UnsplashProject;
