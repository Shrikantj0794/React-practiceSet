import React from 'react'

const About = () => {
  return (
    <>
        <section class="about-section">
            <h2>Our Story</h2>
            <p>Welcome to [Your Business Name]! We started our journey in [year] with a vision to [briefly describe your mission or purpose]. Since then, we've been committed to [mention core values or principles].</p>
        </section>
        
        <section class="team-section">
            <h2>Meet Our Team</h2>
            <div class="team-member">
                <img src="team-member1.jpg" alt="Team Member 1"/>
                <h3>John Doe</h3>
                <p>Co-Founder & CEO</p>
            </div>
            <div class="team-member">
                <img src="team-member2.jpg" alt="Team Member 2"/>
                <h3>Jane Smith</h3>
                <p>Creative Director</p>
            </div>
        </section>
    </>
  )
}

export default About
