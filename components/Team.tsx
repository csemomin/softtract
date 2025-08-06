'use client'

import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    {
      image: '/allfiles/img/axel.jpeg',
      name: 'Joris Axel DA MATHA',
      position: 'Project Manager',
      linkedin: ''
    },
    {
      image: '/allfiles/img/momin.jpeg',
      name: 'Abdul Momin Ali',
      position: 'Senior Software Engineer',
      linkedin: 'https://www.linkedin.com/in/mominali/'
    }
  ]

  return (
    <section id="team" style={{ display: 'none' }}>
      <div className="container">
        <div className="section-header">
          <h3>Team</h3>
          <p>Our expert team delivers innovative solutions, helping businesses thrive with cutting-edge technology and tailored services.</p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6"></div>
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
              <div className="member">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={300} 
                  height={300}
                  className="img-fluid"
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>{member.name}</h4>
                    <span>{member.position}</span>
                    <div className="social">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 