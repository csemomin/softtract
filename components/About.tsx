'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3>About Us</h3>
          <p>Softtract is redefining the future of business with intelligent, technology-driven solutions tailored to your success.</p>
        </header>

        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <p>
              At Softtract, we empower businesses to grow, adapt, and thrive in a digital world. Specializing in ERP, CRM, Chatbot development, Website creation, and AWS services, we deliver comprehensive solutions that streamline operations and enhance customer experiences.
            </p>

            <div className="icon-box wow fadeInUp">
              <div className="icon"><i className="fa fa-cogs"></i></div>
              <h4 className="title"><a href="">Custom ERP Solutions</a></h4>
              <p className="description">Our ERP systems are designed to integrate seamlessly into your business processes, optimizing efficiency and productivity at every level.</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon"><i className="fa fa-comments"></i></div>
              <h4 className="title"><a href="">AI-Powered Chatbots</a></h4>
              <p className="description">We create intelligent chatbots that automate customer interactions, providing 24/7 support and improving engagement across multiple platforms.</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon"><i className="fa fa-cloud"></i></div>
              <h4 className="title"><a href="">Cloud & AWS Services</a></h4>
              <p className="description">Leverage the power of the cloud with our AWS services, enabling scalable, secure, and cost-effective infrastructure for your business.</p>
            </div>
          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <Image 
              src="/allfiles/img/about-img.svg" 
              alt="Custom ERP and Business Solutions Consulting" 
              width={500} 
              height={400}
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp">
            <Image 
              src="/allfiles/img/about-extra-1.svg" 
              alt="Our Mission" 
              width={500} 
              height={400}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Our Mission</h4>
            <p>
              Our mission is to drive business transformation by delivering innovative solutions that empower our clients to achieve more with less. We're dedicated to creating technology that works for you, automating processes, and fostering growth.
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <Image 
              src="/allfiles/img/about-extra-2.svg" 
              alt="Why Choose Us" 
              width={500} 
              height={400}
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Why Choose Softtract?</h4>
            <p>
              We're more than just a software company – we're your partner in innovation. With a team of experts and a commitment to excellence, we offer solutions that are not only technologically advanced but also tailored to meet your unique business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 