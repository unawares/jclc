<template>
  <div class="backround" v-scroll="handleScroll">
    <img ref="image" src="@/assets/rsz_a-min.jpg" />
    <!-- <img ref="background2" src="@/assets/background2.svg" /> -->
    <!-- <img ref="background1" src="@/assets/background1.svg" /> -->
    <div class="overlay"></div>
  </div>
</template>

<script>

function func (event) {
  func.binding.value(event, func.element)
}

export default {
  name: 'ParallaxBackground',
  mounted () {
    this.invalidate()
  },
  methods: {
    invalidate () {
      let height = this.$el.offsetHeight
      let progress = Math.max(Math.min(window.scrollY / height, 1), 0)
      this.$refs.image.style.transform = `translateY(${progress * 160}px)`
    },
    handleScroll (event, element) {
      this.invalidate()
      // this.$refs.background2.style.transform = `translateY(${progress * 100}px)`
    }
  },
  directives: {
    scroll: {
      bind (element, binding) {
        func.element = element
        func.binding = binding
        window.addEventListener('scroll', func, false)
      },
      unbind (element, binding) {
        window.removeEventListener('scroll', func, false)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.backround
  position relative
  overflow hidden
  display flex
  position relative
  justify-content center

  > img, .overlay
    height 100%
    width 100%
    position absolute
    bottom 0
    min-width 800px
    max-width 100%
    object-fit cover
    object-position bottom

  > .overlay
    background-color white
    opacity 0.5
</style>
