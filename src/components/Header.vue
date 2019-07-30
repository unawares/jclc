<template>
  <div class="main header mini top" v-scroll="handleScroll">
    <div class="desktop">
      <div class="container">
        <div class="tabs">
          <router-link v-for="(item, index) in items" :key="index"
            class="tab" :to="item.value">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="container">
        <div class="wrapper">
          <span class="menu">
            <i class="material-icons">menu</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export class MenuItem {
  constructor (title, value) {
    this.title = title
    this.value = value
  }
}

export default {
  name: 'Header',
  props: {
    items: Array
  },
  data () {
    return {
      lastScrollY: window.scrollY
    }
  },
  methods: {
    handleScroll: function (event, element) {
      const HEIGHT = 50
      const elementHeight = element.offsetHeight
      let progress = Math.max(Math.min((this.lastScrollY - window.scrollY) / HEIGHT, 1), 0)
      if (window.scrollY - HEIGHT > this.lastScrollY) {
        this.lastScrollY = window.scrollY - HEIGHT
      }
      if (window.scrollY + HEIGHT < this.lastScrollY) {
        this.lastScrollY = window.scrollY + HEIGHT
      }
      element.style.top = `-${elementHeight * (1 - progress)}px`
      if (window.scrollY < elementHeight) {
        element.classList.add('top')
      } else {
        element.classList.remove('top')
      }
    }
  },
  directives: {
    scroll: {
      inserted: function (element, binding) {
        let func = function (event) {
          if (binding.value(event, element)) {
            window.removeEventListener('scroll', func)
          }
        }
        window.addEventListener('scroll', func)
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
dark-blue = #293A56

.header
  position fixed
  left 0
  top 0
  right 0
  transition-duration 100ms
  transition-timing-function cubic-bezier(0.16, 0.39, 0.26, 1.22)

  .mobile
    display none

    .menu
      height 54px
      width 54px
      display inline-flex
      align-items center
      justify-content center

  @media only screen and (max-width: 800px)

    background-color #405177
    box-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)

    .mobile
      position relative
      display flex
      justify-content center
      width 100%
      height 100%

      .container

        .wrapper
          display flex
          justify-content flex-end

          .menu
            color white

    .desktop
      display none

  @media only screen and (min-width: 800px)

    .container
      position relative
      display flex
      justify-content center

      .tabs
        list-style-type none
        margin 0
        padding 8px 0

        .tab
          box-sizing border-box
          display inline-flex
          justify-content center
          align-items center
          width 120px
          height 36px
          font-size 0.9em
          color dark-blue
          text-align center
          text-decoration none

          &.router-link-active
            border solid 2px dark-blue
            border-radius 8px

    &:not(.top)
      background-color #405177
      box-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)

      .tab
        color white !important

        &.router-link-active
          border solid 2px white !important

</style>
