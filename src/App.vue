<template>
  <div id="app">
    <v-header :items="menuItems" />
    <router-view/>
  </div>
</template>

<script>
import {
  default as Header,
  MenuItem
} from '@/components/Header'

export default {
  name: 'App',
  data () {
    return {
      menuItems: [
        new MenuItem('Главная', 'main'),
        new MenuItem('Курсы', 'courses'),
        new MenuItem('О нас', 'about'),
        new MenuItem('Отзывы', 'feedbacks'),
        new MenuItem('Фотогалерея', 'gallery'),
        new MenuItem('Контакты', 'contacts')
      ]
    }
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus">
body
  margin 0
  padding 0

@font-face
  font-family 'Material Icons'
  font-style normal
  font-weight 400
  src local('Material Icons'), local('MaterialIcons-Regular')

.material-icons
  font-family 'Material Icons'
  font-weight normal
  font-style normal
  font-size 24px;  /* Preferred icon size */
  display inline-block
  line-height 1
  text-transform none
  letter-spacing normal
  word-wrap normal
  white-space nowrap
  direction ltr

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale

  /* Support for IE. */
  font-feature-settings: 'liga'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  // -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #293A56

.main
  display flex
  justify-content center

  .container
    max-width 900px
    flex 1
</style>
