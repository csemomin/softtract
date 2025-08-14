'use client'

import { useTranslations } from '@/hooks/useTranslations'

export default function Footer() {
  const { t } = useTranslations()

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 footer-info">
              <h3>Softtract</h3>
              <p>
                {t('footer.description')}
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-contact">
              <h4>{t('contact.title')}</h4>
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
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
} 