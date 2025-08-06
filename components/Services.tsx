'use client'

export default function Services() {
  const services = [
    {
      icon: 'ion-ios-cog-outline',
      color: '#ff689b',
      title: 'Custom ERP Solutions',
      description: 'Streamline and integrate your business processes with tailored ERP systems designed to optimize efficiency and growth.'
    },
    {
      icon: 'ion-ios-bookmarks-outline',
      color: '#e9bf06',
      title: 'AI-Powered Chatbots',
      description: 'Automate customer interactions with intelligent, multi-platform chatbots for enhanced engagement and support.'
    },
    {
      icon: 'ion-ios-speedometer-outline',
      color: '#3fcdc7',
      title: 'CRM Solutions',
      description: 'Manage your customer relationships with dynamic CRM systems, boosting sales, service, and retention efforts.'
    },
    {
      icon: 'ion-ios-paper-outline',
      color: '#41cf2e',
      title: 'Website Development',
      description: 'Create modern, responsive, and user-friendly websites tailored to your brand, driving digital presence and growth.'
    },
    {
      icon: 'ion-ios-cloud-outline',
      color: '#d6ff22',
      title: 'Cloud & AWS Services',
      description: 'Leverage the scalability and security of cloud infrastructure with our AWS solutions, ensuring seamless operations.'
    },
    {
      icon: 'ion-ios-briefcase-outline',
      color: '#4680ff',
      title: 'Software Development',
      description: 'From custom applications to full-stack solutions, we deliver software that meets your business needs and drives innovation.'
    }
  ]

  return (
    <section id="services" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>Services</h3>
          <p>We offer a wide range of technology solutions to help your business thrive in a competitive landscape.</p>
        </header>

        <div className="row">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`col-md-6 col-lg-5 ${index % 2 === 0 ? 'offset-lg-1' : ''} wow bounceInUp`}
              data-wow-duration="1.4s"
              data-wow-delay={index > 1 ? '0.1s' : index > 3 ? '0.2s' : ''}
            >
              <div className="box">
                <div className="icon">
                  <i className={service.icon} style={{ color: service.color }}></i>
                </div>
                <h4 className="title">
                  <a href="" onClick={(e) => e.preventDefault()}>
                    {service.title}
                  </a>
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 