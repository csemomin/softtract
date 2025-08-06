'use client'

import Image from 'next/image'

export default function Portfolio() {
  const portfolioItems = [
    {
      image: '/allfiles/img/portfolio/bpc/dashboard.png',
      title: 'BPC',
      description: '',
      preview: '/allfiles/img/portfolio/bpc/dashboard.png',
      link: 'https://app.bpc-ai.com',
      category: 'app'
    },
    {
      image: '/allfiles/img/portfolio/solor/1.png',
      title: 'Solor',
      description: '',
      preview: '/allfiles/img/portfolio/solor/1.png',
      link: 'https://www.bcsolarpower.com/',
      category: 'card'
    },
    {
      image: '/allfiles/img/portfolio/vector-power/1.png',
      title: 'Vector Power',
      description: '',
      preview: '/allfiles/img/portfolio/vector-power/1.png',
      link: 'https://www.vectorpowerbd.com/',
      category: 'card'
    },
    {
      image: '/allfiles/img/portfolio/bpc-ai/1.png',
      title: 'BPC.ai',
      description: '',
      preview: '/allfiles/img/portfolio/bpc-ai/1.png',
      link: 'https://bpc-ai.com/',
      category: 'web'
    },
    {
      image: '/allfiles/img/portfolio/coaching/9.png',
      title: 'Coaching Management',
      description: '',
      preview: '/allfiles/img/portfolio/coaching/9.png',
      link: '',
      category: 'app'
    }
  ]

  return (
    <section id="portfolio" className="clearfix">
      <div className="container">
        <header className="section-header">
          <h3 className="section-title">Our Portfolio</h3>
        </header>

        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="row portfolio-container">
              {portfolioItems.slice(0, 4).map((item, index) => (
                <div key={index} className="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={400} 
                      height={300}
                      className="img-fluid"
                    />
                    <div className="portfolio-info">
                      <h4><a onClick={(e) => e.preventDefault()}>{item.title}</a></h4>
                      <p>{item.description}</p>
                      <div>
                        <a 
                          href={item.preview} 
                          data-lightbox="portfolio" 
                          data-title={item.title} 
                          className="link-preview" 
                          title="Preview"
                        >
                          <i className="ion ion-eye"></i>
                        </a>
                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            className="link-details" 
                            title="More Details"
                          >
                            <i className="ion ion-android-open"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="col-lg-12 col-md-12 portfolio-item filter-app" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <Image 
                    src={portfolioItems[4].image} 
                    alt={portfolioItems[4].title} 
                    width={400} 
                    height={300}
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <h4><a onClick={(e) => e.preventDefault()}>{portfolioItems[4].title}</a></h4>
                    <p>{portfolioItems[4].description}</p>
                    <div>
                      <a 
                        href={portfolioItems[4].preview} 
                        className="link-preview" 
                        data-lightbox="portfolio" 
                        data-title={portfolioItems[4].title} 
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 