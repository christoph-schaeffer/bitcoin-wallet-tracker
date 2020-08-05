module.exports = {
  publicPath: process.env.BASE_URL,

  transpileDependencies: [
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'en',
      localeDir: 'locales',
    },
  },
};
