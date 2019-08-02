<template>
  <div class="header top" v-scroll="handleScroll" v-resize="handleResize">
    <div class="desktop main">
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

function scroll (event) {
  scroll.binding.value(event, scroll.element)
}

function resize (event) {
  resize.binding.value(event, resize.element)
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
  mounted () {
    this.invalidate()
  },
  methods: {
    handleScroll (event, element) {
      this.invalidate()
    },
    handleResize (event, element) {
      this.invalidate()
    },
    invalidate () {
      let element = this.$el
      let scrollY = (window.scrollY > 0) ? window.scrollY : 0
      const elementHeight = element.offsetHeight
      const offset = elementHeight
      this.lastScrollY = Math.max(this.lastScrollY, elementHeight)
      let progress = Math.max(Math.min((this.lastScrollY - scrollY) / elementHeight, 1), 0)
      if (scrollY - elementHeight > this.lastScrollY) {
        this.lastScrollY = scrollY - elementHeight
      }
      if (scrollY + elementHeight < this.lastScrollY) {
        this.lastScrollY = scrollY + elementHeight
      }
      element.style.top = `-${elementHeight * (1 - progress)}px`
      if (scrollY < elementHeight + offset) {
        element.classList.add('top')
        element.classList.remove('shadow')
      } else {
        element.classList.remove('top')
        if (progress > 0) {
          element.classList.add('shadow')
        } else {
          element.classList.remove('shadow')
        }
      }
      let p = 1 - Math.min(scrollY / offset, 1)
      let media = window.matchMedia('(max-width: 1000px)')
      p = (media.matches) ? 0 : p
      element.style.marginTop = `${p * 36}px`
    }
  },
  directives: {
    scroll: {
      bind (element, binding) {
        scroll.element = element
        scroll.binding = binding
        window.addEventListener('scroll', scroll, false)
      },
      unbind (element, binding) {
        window.removeEventListener('scroll', scroll, false)
      }
    },
    resize: {
      bind (element, binding) {
        resize.element = element
        resize.binding = binding
        window.addEventListener('resize', resize, false)
      },
      unbind (element, binding) {
        window.removeEventListener('resize', resize, false)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

mobile-max-width = 1000px
shadow = 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)

.header
  position fixed
  left 0
  top 0
  right 0
  z-index 100
  margin-top 36px

  .mobile
    display none

    .container
      width 100%

    .menu
      height 54px
      width 54px
      display inline-flex
      align-items center
      justify-content center

  &.shadow
    box-shadow shadow

  @media only screen and (max-width: mobile-max-width)

    background-color black

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

  @media only screen and (min-width: mobile-max-width + 1)

    .container

      .tabs
        position relative
        display flex
        justify-content space-around
        list-style-type none
        margin 0
        padding 8px 0

        .tab
          box-sizing border-box
          display inline-flex
          justify-content center
          align-items center
          width 128px
          height 36px
          font-size 16
          font-weight 600
          color black
          text-align center
          text-decoration none

          &.router-link-active
            border solid 2px black
            border-radius 16px

    &:not(.top)

      background-color black

      .tab
        color white !important

        &.router-link-active
          border solid 2px white !important

</style>
