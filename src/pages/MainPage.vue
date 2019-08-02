<template>
  <div class="main-page">
    <div ref="main" class="main">
      <background class="parallax-background"></background>
      <div class="container">
        <div class="header-container">
          <h1>Японско-китайский языковой центр в АСТАНЕ</h1>
          <h3>Поможем выучить японский и китайский языки для жизни и работы, успешно сдать Норёку Сикен и HSK</h3>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <courses class="courses" />
  </div>
</template>

<script>
import ParallaxBackground from '@/components/ParallaxBackground'
import CoursesSection from '@/components/CoursesSection'

export default {
  name: 'MainPage',
  components: {
    background: ParallaxBackground,
    courses: CoursesSection
  }
}
</script>

<style lang="stylus" scoped>
.main-page

  .main
    position relative
    height 600px
    display flex
    align-items center
    justify-content center
    box-sizing border-box
    min-height 560px
    max-height 120vw
    z-index -1
    flex-direction column

    .container

      width 100%
      display inline-flex
      align-items center
      justify-content flex-end

      .header-container
        margin 36px
        text-align end
        max-width 600px
        display inline-flex
        flex-direction column
        align-items flex-end
        justify-content center

        h1
          margin 8px
          padding 0
          line-height 1.2em
          font-weight bold
          max-width 600px
          font-size 3em

        h3
          line-height 1.2em
          margin 8px
          padding 0
          font-weight normal
          max-width 500px
          font-size 1.5em

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
    height 8px
    background-color black
    z-index 1
    position relative

  .courses
    position relative
</style>
