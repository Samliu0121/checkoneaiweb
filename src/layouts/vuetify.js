/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
import '@/styles/scss/style.scss'

// Composables
import { createVuetify } from 'vuetify'
// import { VDataTableServer, VDataTable, VDataTableVirtual } from 'vuetify/labs/VDataTable'
import { fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

import { VDateInput } from 'vuetify/labs/components'
import { VNumberInput } from 'vuetify/labs/VNumberInput'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  components: {
    VDateInput,
    VNumberInput,
  }
  // components: {
  //   VDataTableServer,
  //   VDataTable,
  //   VDataTableVirtual
  // },
  // icons: {
  //   defaultSet: 'mdi',
  //   sets: {
  //     mdi,
  //     fa
  //   }
  // }
})
