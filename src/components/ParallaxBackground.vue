<template>
  <div class="backround" v-scroll="handleScroll">
    <img ref="image" src="@/assets/b.jpg" />
    <!-- <img ref="background2" src="@/assets/background2.svg" /> -->
    <!-- <img ref="background1" src="@/assets/background1.svg" /> -->
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
  overflow hidden
  display flex
  position relative
  justify-content center
  opacity 0.6

  > img
    position absolute
    bottom 0
    min-width 800px
    max-width 100%
</style>
