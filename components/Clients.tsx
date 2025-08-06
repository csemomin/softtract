'use client'

import Image from 'next/image'

export default function Clients() {
  const clients = [
    '/allfiles/img/clients/c-1.png',
    '/allfiles/img/clients/logo.png.webp',
    '/allfiles/img/clients/client-3.png',
    '/allfiles/img/clients/client-4.png'
  ]

  return (
    <section id="clients" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3>Our Clients</h3>
          <p>We proudly partner with a diverse range of businesses, delivering tailored solutions that drive success and innovation.</p>
        </div>

        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
          {clients.map((client, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <Image 
                  src={client} 
                  alt={`Client ${index + 1}`} 
                  width={200} 
                  height={100}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 