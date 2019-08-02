<template>
  <div class="main-page">
    <div ref="main" class="main">
      <background class="parallax-background"></background>
      <div class="header-container">
        <h1>Японско-китайский языковой центр в АСТАНЕ</h1>
        <h3>Поможем выучить японский и китайский языки для жизни и работы, успешно сдать Норёку Сикен и HSK</h3>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import ParallaxBackground from '@/components/ParallaxBackground'

export default {
  name: 'MainPage',
  components: {
    background: ParallaxBackground
  },
  mounted () {
    this.$refs.main.style.height = `${window.innerHeight}px`
  }
}
</script>

<style lang="stylus" scoped>
.main-page
  height 1800px

  .main
    position relative
    height 100vh
    display flex
    align-items center
    justify-content center
    padding 36px
    box-sizing border-box
    min-height 560px
    max-height 120vw
    z-index -1

    .header-container
      display flex
      flex-direction column
      align-items flex-end
      text-align end
      width 700px
      max-width 100%

      h1
        margin 8px
        padding 0
        line-height 1.2em
        font-weight bold
        max-width 700px
        font-size 3.5em

      h3
        line-height 1.2em
        margin 8px
        padding 0
        font-weight normal
        max-width 800px
        font-size 2em

      @media only screen and (max-width 800px)

        h1
          font-size 2.4em
          max-width 400px

        h3
          font-size 1.2em
          max-width 450px

      @media only screen and (max-width 400px)

        h1
          font-size 1.8em
          max-width 300px

        h3
          font-size 1em
          max-width 360px

    .parallax-background
      position absolute
      width 100%
      height 100%
      z-index -1

  .line
    height 16px
    background-color black
</style>
