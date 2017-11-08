<template>
  <div class="Statistics">
    <div class="container">
      <canvas id="test-demo" width="400" height="240"></canvas>
      <div class="container-content">
        <span><i class="i1"></i>|类内容</span>
        <span><i class="i2"></i>||类内容</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        canvasGo:''
      }

    },
    mounted(){
      var that = this
      this.canvasGo= new operatCanvas()
    }
  }
  function operatCanvas () {
    var canvas =document.getElementById('test-demo');
    var ctx = canvas.getContext('2d');

    ctx.arc(200,120,80,274*Math.PI/180,45*Math.PI/180,)

    ctx.lineWidth=20
    ctx.strokeStyle = '#4f8fe3'
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(200,120,80,50*Math.PI/180,269*Math.PI/180,)
    ctx.lineWidth=20
    ctx.strokeStyle = '#fc9d03'
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(135,90);
    ctx.lineTo(110,70);
    ctx.lineTo(50,70);
    ctx.lineWidth=1
    ctx.font = '20px 微软雅黑';
    ctx.fillStyle = '#fc9d03';
    ctx.fillText("335", 20, 78);
    ctx.strokeStyle = '#fc9d03'
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(270,80);
    ctx.lineTo(280,60);
    ctx.lineTo(340,60);
    ctx.lineWidth=1
    ctx.font = '20px 微软雅黑';
    ctx.fillStyle = '#4f8fe3';
    ctx.fillText("211", 340, 68);
    ctx.strokeStyle = '#4f8fe3'
    ctx.stroke();

    ctx.beginPath();
    ctx.font = '28px 微软雅黑';
    ctx.fillStyle = '#333';
    ctx.fillText("546", 175, 120);

    ctx.beginPath();
    ctx.font = '14px 微软雅黑';
    ctx.fillStyle = '#666';
    ctx.fillText("合计", 183, 135);

  }

</script>
<style scoped>
  .Statistics {
    height: 100%;
    width: 100%;
    background: #f7f8f8;
  }
  .container {
    height: 560px;
  }
  canvas {
    margin-top: 80px;
    margin-left: 35%;

  }
  .container-content {
    text-align: center;
  }
  span {
    display: inline-block;
    width: 100px;
    position: relative;
    font-size:14px;
    color: #666;
  }
  .i1 {
    position: absolute;
    top: 4px;
    left: 5px;
    width: 10px;
    height: 10px;
    background: url("../assets/image/markI.png") no-repeat;
  }
  .i2 {
    position: absolute;
    top: 4px;
    left: 5px;
    width: 10px;
    height: 10px;
    background: url("../assets/image/markII.png") no-repeat;
  }
</style>
