import { boot } from 'quasar/wrappers'
import { VuePlugin } from 'vuera'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
