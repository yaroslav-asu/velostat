import { boot } from "quasar/wrappers";
import { useQuasar } from 'quasar'


export default boot(({ app }) => {
  app.config.globalProperties.$q = useQuasar()
});
