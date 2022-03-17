import React from 'react';

function Contact(){
  return(
    <div id="wrapper">
    <a href='/'>
      <button>
        Home
      </button>
    </a>
      <section className="intro">
        <header>
          <h1>Feel free to contact me for projects</h1>
        </header>
      </section>

      <section id="first">
        <header>
          <h2>Contact Information</h2>
        </header>
        <div className="content">
        <p><strong>Email:</strong> brown.iananthony@gmail.com</p>
        <p><strong>Phone:</strong> (951)229-8554</p>
        <a href="https://github.com/iabrown" > <p className="icon brands fa-github"><strong> Github:</strong> Ian Brown Profile</p></a>
        <p><a href='/'><button><strong>HOME PAGE</strong></button></a></p>

        </div>
      </section>
    </div>

  )
}

export default Contact;
