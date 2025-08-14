module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de', 'pt', 'it'],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
