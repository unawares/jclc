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
  background-color #1C2026
  margin 0
  padding 0
  min-width 300px
  position relative
  display flex
  justify-content center

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
  -webkit-font-smoothing: antialiased
  text-rendering: optimizeLegibility
  -moz-osx-font-smoothing: grayscale
  font-feature-settings: 'liga'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  text-rendering: optimizeLegibility
  -moz-osx-font-smoothing: grayscale
  font-feature-settings: 'liga'
  color black
  max-width 1600px
  width 100vw

.main
  display flex
  justify-content center

  .container
    max-width 900px
    flex 1
</style>
