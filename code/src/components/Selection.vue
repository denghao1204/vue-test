<template>
  <div class="selection-component">
    <div class="selection-show">
      <span>{{checkedId}}</span>
      <div class="arrow" @click="toggle">
      </div>
    </div>
    <div class="selection-list" v-if="isShow">
      <div class="selection-list-item" v-for="(item,index) in selections">
        <span class="icon-bottom">
        <img :src="item.src">
        </span>
        <input type="checkbox" :id="item.title" :value="item.title" v-model.number="checkedId">
        <label :for="item.title">{{item.title}}</label>
      </div>

    </div>
    <div class="selection-component-icon">
      <ul>
        <li v-for="item in checkedId">{{item}}</li>
      </ul>
    </div>

  </div>
</template>
<script>
  import {eventBus} from '../event'
  export default {
    data(){
      return {
        isShow:false,
        nowIndex:0,
        checkedId:[]
      }
    },
    methods:{
      toggle(event){
        event.stopPropagation()
        this.isShow=!this.isShow
        this.nowIndex=index
        this.$emit('on-change',this.selections[this.nowIndex])
      }
    },
    watch:{

    },
    mounted(){
      eventBus.$on('reset',()=> {
        this.isShow=false
      })
    },
    props:{
      selections: {
        type: Array,
        default: [{
          label: '基础',
          id: 0,
          src:''
        }]
      }
    }
  }
</script>
<style scoped>
  .selection-component {
    position: relative;
    display: inline-block;
  }
  .selection-show {
    position: relative;
    width: 226px;
    border: 2px solid #e5e5e5;
    padding: 10px 0px 10px 10px;
  }
  span {
    font-size:14px;
    color: #000;
    font-weight: bold;
  }
  .selection-show .arrow {
    cursor: pointer;
    width: 30px;
    height: 20px;
    display: block;
    position: absolute;
    right: 20px;
    top:10px;
    background: url("../assets/image/arrows1-icon.png") no-repeat center;
  }
  .selection-component-icon {
    margin-top: 8px;
  }
  .selection-component-icon ul li {
    display: inline-block;
    width: 40px;
    height: 20px;
    background: #e6e6e6;
    border-radius: 2px;
    font-size:12px;
    color: #3a4989;
    line-height: 20px;
    text-align: center;
    margin-right: 5px;
  }
  .selection-list {
    display:inline-block;
    position:absolute;
    width: 220px;
    height: 100%;
    background-color: #ffffff;
    border-color: #ffffff;
    padding-top: 10px;
    padding-left: 20px;

  }
  .selection-list-item {
    position: relative;
    width: 240px;
    clear: both;
  }
  input,label,.icon-bottom {
    display: inline-block;
    float: left;
  }
  .icon-bottom {
    padding-top: 3px;
  }
  input {
    margin-left: 8px;
    height: 14px;
    width: 14px;
  }
  label {
    margin-left: 10px;
    font-size:14px;
    color: #000;
    margin-top: 3px;
  }
</style>
