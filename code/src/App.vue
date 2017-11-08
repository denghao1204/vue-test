<template>
  <div @click="reset">
    <div class="test">
      <div class="test-head">
        <div class="test-head-inner">
          <p class="test-head-content">前端能力测试Demo</p>
        </div>
      </div>
      <div class="test-container">
        <div class="test-container-width">
          <div class="test-container-left">
            <p class="test-container-left-content">内容管理</p>
            <Selection :selections="selectionList"></Selection>
          </div>
          <div class="test-container-center">
            <!--<div class="on-line" :class="{toggleClass}">-->
              <!--<router-link to="/onLine" tag="p" @click="toggle">已上线</router-link>-->
            <!--</div>-->
            <!--<div class="sold-out" :class="{toggleClass:isShow===true}">-->
              <!--<router-link to="/soldOut" tag="p" @click="toggle">已下架</router-link>-->
            <!--</div>-->
            <div class="toggleLine"
                 v-for="(item,index) in lineList"
                 :class="{activeLine:true,toggleClass:index===nowIndex}"
                 @click.stop="toggle(index)"
            >
              <router-link :to="item.toKey" >{{item.title}}</router-link>
            </div>
          </div>
          <div class="test-container-right">
            <div class="input">
              <input type="text" class="right-input">
              <span class="input-icon"></span>
            </div>
            <div class="button">
              创建内容
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  import {eventBus} from './event'
  import Selection from './components/Selection.vue'
export default {
  data(){
    return {
      nowIndex:1,
      lineList:[
        {title:'已上线',toKey:'/onLine'},
        {title:'已下架',toKey:'/soldOut'}
      ],
      selectionList:[
        {
          title:'基础',
          id:0,
          src: require('./assets/image/arrows1-icon.png')
        },
        {
          title:'综合',
          id:1,
          src: require('./assets/image/arrows2-icon.png')
        },
        {
          title:'专业',
          id:2,
          src: require('./assets/image/arrows2-icon.png')
        }
      ]
    }
  },
  methods:{
    toggle(index){
      this.nowIndex=index
    },
    reset(){
      eventBus.$emit('reset')
    }
  },
  components: {
    Selection
  }
}
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    font-family: "Microsoft YaHei";
  }
  .test-head {
    background-color: #3a4989;
    height: 70px;
    width: 100%;
  }
  .test-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .test-head-content {
    font-size:18px;
    font-weight:bold;
    color: #fff;
    line-height:70px;
    letter-spacing:1px;
  }
  .test-container {
    height: 110px;
    padding-top: 35px;
    background-color: #ffffff;
    width: 100%;
    border-bottom: 2px solid #e5e5e5;
  }
  .test-container-width {
    width: 1200px;
    margin: 0 auto;
  }
  .test-container-left {
    float: left;
  }
  .test-container-left-content {
    font-size:20px;
    font-weight:bold;
    color: #3a4989;
    margin-bottom:15px;
  }
  .test-container-center {
    height: 103px;
    line-height: 103px;
    display: inline-block;
    float: left;
    margin-left:20px;
  }
  .toggleLine {
    display: inline-block;
    width: 100px;
    height: 36px;
    text-align: center;
    line-height:36px;
    cursor: pointer;
  }
  .activeLine{
    font-size:14px;
    font-weight:bold;
    color: #999;
  }
  .toggleClass {
    color: #000;
    border-bottom:2px solid #4f8fe3;
  }
  .test-container-right {
    float: right;
    height: 103px;
    line-height: 103px;
  }
  .input,.button {
    display: inline-block;
  }
  .input {
    position: relative;
  }

  .right-input {
    width: 230px;
    height: 30px;
    padding-left: 10px;
    border: 2px solid #e5e5e5;
  }
  .input-icon {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 10px;
    top:45px;
    background: url("./assets/image/search-icon.png") no-repeat center;
  }
  .button {
    width: 120px;
    height: 32px;
    border-radius: 2px;
    cursor: pointer;
    line-height: 32px;
    text-align: center;
    font-size:14px;
    color: #fff;
    background-color: #4f8fe3;
    border: 2px solid #4b87a6;
    margin-left: 20px;
  }
</style>
