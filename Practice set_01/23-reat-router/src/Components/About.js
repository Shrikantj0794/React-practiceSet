import React from 'react'

const About = (props) => {
  return (
    <>
        <h1 style={{color: 'red'}}>HI wellcome to {props.name} page</h1>
        <section className="about-section">
            <h2>Our Story</h2>
            <p>Welcome to [Your Business Name]! We started our journey in [year] with a vision to [briefly describe your mission or purpose]. Since then, we've been committed to [mention core values or principles].</p>
        </section>
        
        <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-member">
                <img src="team-member1.jpg" alt="Team Member 1"/>
                <h3>John Doe</h3>
                <p>Co-Founder & CEO</p>
            </div>
            <div className="team-member">
                <img src="team-member2.jpg" alt="Team Member 2"/>
                <h3>Jane Smith</h3>
                <p>Creative Director</p>
            </div>
        </section>

    </>
  )
}

export default About
