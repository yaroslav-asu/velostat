import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { russianPluralization } from 'src/i18n/pluralizationRules/russian'

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'ru',
    messages,
    pluralizationRules: {
      'ru-RU': russianPluralization,
      'ru': russianPluralization,
    }
  })

  // Set i18n instance on app
  app.use(i18n)
})
