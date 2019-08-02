<template>
  <div class="courses-page">
    <div class="courses-info main">
      <img src="@/assets/bk2.jpg" alt="">
      <div class="course-wrapper container">
        <div class="japanese">
          <div ref="frontik" class="front">
            <button ref="btn" class="btn" v-on:click="togglee">Подробнее</button>
          <img src="@/assets/japanbk.jpg" alt="">
          <div class="border" ><h3>Японский язык</h3></div>
          </div>
          <div ref="backik" class="backjp">
            <span class="btnx" type="button" v-on:click="back"><i class="material-icons">
keyboard_backspace
</i></span>
            <img src="@/assets/mask1.jpg" alt="">
            <div class="border"><div class="descr">
            Пн-Пт
            <br>
            <br>
            10:00 - 11:30
            <br>
            11:30 - 13:00
            <br>
            14:30 - 16:00
            <br>
            16:00 - 17:30
            <br>
            19:00 - 20:30
            <br>
            <br>
            20,000 тг/мес (групповое)
            <br>
            <br>
            3,000 тг/час (индивидуально)</div></div>
          </div>
        </div>
        <div  class="chinese">
          <div ref="frontik1" class="frontch">
          <button ref="btn" class="btn" v-on:click="togglee1">Подробнее</button>
          <img src="@/assets/dragon1.jpg" alt="">
          <div class="border"><h3>Китайский язык</h3></div></div>
          <div ref="backik1" class="backch">
            <span class="btnx" type="button" v-on:click="back1"><i class="material-icons">
keyboard_backspace
</i></span>
            <img src="@/assets/pagoda3.jpg" alt="">
            <div class="border"><div class="descr">
            Пн-Пт
            <br>
            <br>
            10:00 - 11:30
            <br>
            11:30 - 13:00
            <br>
            14:30 - 16:00
            <br>
            16:00 - 17:30
            <br>
            19:00 - 20:30
            <br>
            <br>
            20,000 тг/мес (групповое)
            <br>
            <br>
            3,000 тг/час (индивидуально)</div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="level-test">
      <div class="level-wrapper main">
        <div class="level-container container">
          <h2>Попробуй пройти наш онлайн тест</h2>
          <p>Вы можете определить свой приблизительный уровень японского или китайского языка пройдя тест</p>
          <button type="button"><span> Перейти в тест</span></button>
        </div>
      </div>
      <img src="@/assets/bk1.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursesPage',
  methods: {
    togglee: function (event) {
      this.$refs.frontik.classList.add('nonactiv')
      this.$refs.backik.classList.add('active')
    },
    back: function (event) {
      this.$refs.frontik.classList.remove('nonactiv')
      this.$refs.backik.classList.remove('active')
    },
    togglee1: function (event) {
      this.$refs.frontik1.classList.add('nonactiv')
      this.$refs.backik1.classList.add('active')
    },
    back1: function (event) {
      this.$refs.frontik1.classList.remove('nonactiv')
      this.$refs.backik1.classList.remove('active')
    }
  }
}
</script>

<style lang="stylus" scoped>
.courses-page
  overflow-x hidden
  box-sizing border-box
  position relative
  .level-test
    position relative
    min-height 100%
    max-height 400px
    img
      position absolute
      object-fit cover
      object-position center
      width 100vw
      height 100%
    display flex
    justify-content center
    .level-wrapper
      position relative
      width 60%
      z-index 5
      .level-container
        margin-bottom 20px
        position relative
        color #1C3656
        font-family 'IBM Plex Sans',sans-serif
        h2
          font-size 30px
          font-weight bold
          margin-bottom 10px
        p
          font-size 18px
          max-width 70%
        button
            color #fff !important
            border none
            text-decoration none
            background #1C3656
            padding 10px
            display inline-block
            width 150px
            border-radius 36px
            position relative
            span
              position relative
              top 1px
              font-size 15px
              
            &:hover
              color #1C3656 !important
              background #fff
  .courses-info
    position relative
    min-height 550px
    img
      position absolute
      height 100%
      width 100vw
      object-fit cover
  .course-wrapper
    display flex
    justify-content center
    align-items center
    .japanese,.chinese
      position relative
      height 70%
      margin 0 5%
      min-width 240px
      max-width 400px
      min-height 320px
      max-height 420px
      .border
        box-sizing border-box
        width 80%
        height 88%
        border 2px solid white
        z-index 3
        position absolute
        left 10%
        top 6%
        text-align center
        display flex
        justify-content center
        align-items center
        font-family 'Comfortaa',Arial,sans-serif
        color white
        .descr
          color white
          width 80%
          height 80%
      img
        position absolute
        width 100%
        height 100%
        z-index 0
        border-radius 4px
        box-shadow 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
.japanese
  .front
    z-index 4
    backface-visibility hidden
    transform perspective(600px) rotateY(0deg)
    position absolute
    width 100%
    height 100%
    transition .7s cubic-bezier(0.34, 1.41, 1, 1.01)
    img
      object-position 0%
      opacity 1
  .backjp
    transform perspective(600px) rotateY(180deg)
    backface-visibility hidden
    transition .7s cubic-bezier(0.34, 1.41, 1, 1.01)
    position absolute
    width 100%
    height 100% !important
    img
      position absolute
      top 0
      object-position 30%
      opacity 0.9

.btn
  display none
  background #32B9B5 !important
  font-family cursive
.btnx
  display none
  border-radius 50%
.chinese
  .frontch
    z-index 4
    backface-visibility hidden
    transform perspective(600px) rotateY(0deg)
    position absolute
    width 100%
    height 100%
    transition .7s cubic-bezier(0.34, 1.41, 1, 1.01)
  .backch
    transform perspective(600px) rotateY(180deg)
    backface-visibility hidden
    position absolute
    transition .7s cubic-bezier(0.34, 1.41, 1, 1.01)
    width 100%
    height 100%
    img
      position absolute
      top 0
.backjp
    img
      opacity 0.7!important
.backch
  img
    opacity 1!important
  display flex
  justify-content center
  
      
        // border: none;
        // background #1C3656
        // color #ffffff !important
        // font-weight 100
        // padding 7px
        // text-transform uppercase
        // border-radius 6px
        // display inline-block
        // width 150px
        // &:hover
        //   color #404040 !important
        //   font-weight 700 !important
        //   letter-spacing 1px
        //   background none
        //   -webkit-box-shadow 0px 5px 40px -10px rgba(0,0,0,0.57)
        //   -moz-box-shadow 0px 5px 40px -10px rgba(0,0,0,0.57)
        //   transition all 0.3s ease 0s
        //   transition all 0.3s ease 0s
        
        
@media screen and (min-width: 575px)
  .chinese:hover > .frontch
    transform perspective(600px) rotateY(-180deg)
  .chinese:hover > .backch
    transform perspective(600px) rotateY(0deg)
  .japanese:hover > .front
    transform perspective(600px) rotateY(-180deg)
  .japanese:hover > .backjp
    transform perspective(600px) rotateY(0deg)

@media screen and (max-width: 575px)
  .courses-page
    box-sizing border-box
    overflow hidden
    .courses-info
      img
      .course-wrapper
        flex-direction column
        .japanese,.chinese
          height auto
          margin 30px
          max-width 80vw
          min-width 70vw
          min-height 110vw
          max-height 120vw
        .japanese,.chinese
          .btn
            z-index 5
            position absolute
            bottom 8%
            width 55%
            margin-left 22.5%
            display block
            color white
            border-radius 8px
            border 0px
            font-family sans-serif
            font-size 5vw
            font-weight bold
            min-padding 6px
            max-padding 8px
          .btnx
            z-index 5
            position absolute
            display block
            border 0
            min-width 3px
            min-height 3px
            max-height 7px
            max-height 7px
            border-radius 50%
            background transparent !important
  .backjp
    img
      border-top-left-radius:15px !important
  .backch
    img
      border-top-left-radius:15px !important
  .material-icons
    color #333
    background white
    border-radius 50%
  .border
    font-size 5vw
  .descr
    font-size 5vw
  .level-test
    box-sizing border-box
    height 100% !important
    img
      height 100% !important
      object-fit cover
      object-position 40% 40%
    .level-wrapper
      .level-container
        h2
          font-size 7vw !important
        p
          font-size 4vw !important
        button
          span
            font-size 4vw !important
          width 38vw !important
          padding 2vw !important
  .active
    transform perspective(600px) rotateY(0deg) !important
  .nonactiv
    transform perspective(600px) rotateY(-180deg) !important
</style>
