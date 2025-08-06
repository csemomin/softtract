'use client'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 footer-info">
              <h3>Softtract</h3>
              <p>
                At Softtract, we provide innovative ERP, CRM, Chatbot, Website Development, and AWS solutions designed to streamline operations and drive business growth. We empower businesses to enhance efficiency, engage customers, and scale confidently with cutting-edge technology.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                <a style={{ color: 'white' }} href="tel:+8801880580217">+880 1880580217</a>
                <br />
                <a style={{ color: 'white' }} href="tel:+212(0)609014988">+212(0)609014988</a>
                <br />
                <a style={{ color: 'white' }} href="mailto:softtract@gmail.com">softtract@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          Copyright &copy; 2025 <strong>Softtract</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  )
} 