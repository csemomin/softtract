'use client'

export default function Services() {
  const services = [
    {
      icon: 'ion-ios-paper-outline',
      color: '#41cf2e',
      gradient: 'from-green-400 to-green-600',
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies to enhance your digital presence and drive business growth.'
    },
    {
      icon: 'ion-ios-briefcase-outline',
      color: '#4680ff',
      gradient: 'from-blue-400 to-blue-600',
      title: 'Software Development',
      description: 'End-to-end software solutions tailored to your business requirements, from web applications to enterprise systems.'
    },
    {
      icon: 'ion-ios-cog-outline',
      color: '#ff689b',
      gradient: 'from-pink-400 to-pink-600',
      title: 'Custom ERP Solutions',
      description: 'Integrated ERP systems designed to streamline operations, improve efficiency, and provide real-time business insights.'
    },
    {
      icon: 'ion-ios-speedometer-outline',
      color: '#3fcdc7',
      gradient: 'from-teal-400 to-teal-600',
      title: 'CRM Solutions',
      description: 'Comprehensive customer relationship management systems to optimize sales processes and enhance customer engagement.'
    },
    {
      icon: 'ion-ios-bookmarks-outline',
      color: '#e9bf06',
      gradient: 'from-yellow-400 to-yellow-600',
      title: 'AI Integration',
      description: 'Intelligent automation solutions including chatbots, data analytics, and AI-powered business process optimization.'
    },
    {
      icon: 'ion-ios-cloud-outline',
      color: '#d6ff22',
      gradient: 'from-lime-400 to-lime-600',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure solutions with AWS expertise, ensuring security, performance, and cost optimization.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of technology solutions to help your business thrive in today's competitive landscape.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-8 relative z-10 text-center">
                {/* Icon with gradient background - centered */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>
                
                {/* Title */}
                <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h4>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h4>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how our services can help you achieve your goals
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 