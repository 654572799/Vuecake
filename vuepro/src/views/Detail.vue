<template>
  <div class="detail">
    <div class="details">
      <div class="left">
        <div class="zoom">
          <!-- <img :src="list.img" alt=""> -->
          <my-glass :img="list.img"></my-glass>
          <div>
            
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">{{list.title}}</div>
        <div class="desc">{{list.details}}</div>
        <!-- ............................. -->
        <div class="section">
          <div class="content">
            <div class="my_font">规格：</div>
            <div>
              <span class="active">510g</span>
              <span>900g</span>
              <span>1.4kg</span>
              <span>2.3kg</span>
            </div>
          </div>
          <div class="fund">
            <div class="my_font">款项:</div>
            <div class="price">
              <span class="old">¥{{list.price}}</span>
              <span class="special">¥128</span>
              <span class="txt">常规款</span>
            </div>
          </div>
        </div>
        <!-- ............................. -->
        <ul class="dage">
          <li>蛋糕可切分9块</li>
          <li>蛋糕可切分9块</li>
          <li>蛋糕可切分9块</li>
          <li>蛋糕可切分9块</li>
        </ul>
        <!-- ......................... -->
        <div class="count">
          <div class="my_font">数量:</div>
          <button @click="minus">-</button>
          <input type="text" v-model="n">
          <button @click="add">+</button>
        </div>
        <div class="buy">
          <span class="img"></span>
          <span>喜欢</span>
          <el-button type="danger">放入购物车</el-button>
          <el-button type="danger">立即购买</el-button>
        </div>
      </div>
    </div>
    
  </div>
</template>



<style scoped>
*{margin: 0; padding: 0;}
.detail:after,.fund::after,.dage::after {
    display: block;
    content: "";
    clear: both;
  }
  /* 放大镜 */
.glass{
  z-index: 2;
}
.detail{
  width: 1200px;
  margin:40px auto 40px ;
}
.detail .details{
  margin: 0 auto;
}
.zoom{
  width: 540px; height: 540px;
  /* background-color: #aaa; */
}
.detail .left{
  float: left;
  margin-right: 50px;
}
.detail .right{
  float: left;
  width: 560px;
  
}
.detail .title{
  line-height: 40px;
    font-size: 24px;
    color: #45515e;
}
.detail .desc{
  padding: 8px 0 24px;
    color: #b5b5b5;
    border-bottom: 1px dotted #b3a3a3;
}
.detail .section{
  padding-top: 24px;
    border-bottom: 1px dotted #b3a3a3;
}

 .detail .my_font{
  width: 50px;
  float: left;
    
    color: #505050;
}
.detail .content>div:last-child{
  
      float: left;
    width: 510px;
}
.detail .content>div:last-child span{
display: block;
    float: left;
    width: 123px;
    height: 45px;
    margin-bottom: 1px;
    line-height: 45px;
    text-align: center;
    border-left: 1px solid #fff;
    font-size: 16px;
    background-color: #f5f5f5;
    
}
.detail .content>div:last-child span:hover{
  position: relative;
    color: #e9546b;
}
.detail .content>div:last-child span:hover:after{
  position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    content: "";
    background-color: #e9546b
}
.detail .content>div:last-child span.active{
  position: relative;
    color: #e9546b;
}
.detail .content>div:last-child span.active:after{
  position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    content: "";
    background-color: #e9546b
}
.detail .fund{
  margin:70px 0 30px;
} 
.detail .price{
  float: right;
  width: 495px;
    height: 45px;
    line-height: 45px;
    color: #fff;
    background-color: #e9546b;
}
.detail .price .old{
      margin-top: 6px;
    margin-left: 45px;
    margin-right: -15px;
    font-size: 18px;
    text-decoration: line-through;
}
.detail .price .special{
  margin-left: 45px;
    font-size: 28px
}
.detail .price .txt{
      margin-left: 180px;
    font-size: 16px;
}
.detail .dage{
  width: 100%;
    padding: 10px 0;
    margin-left: 20px;
    border-bottom: 1px dotted #b3a3a3;
}
.detail .dage li{
  position: relative;
    float: left;
    width: 270px;
    line-height: 30px;
    color: #b3b3b3;
}
.detail .count{
  margin-top: 20px;
}
.detail .count button{
  border: none; outline: none;
  width: 33px; height: 33px;
  font-size: 40px;
  line-height: 33px;
  border-radius: 50%;
  margin: 0 5px;
}
.detail .count input{
  border: none;
    outline: none;
    width: 138px;
    height: 33px;
    border: 1px solid #000;
    line-height: 33px;
    text-align: center;
}

</style>

<script>
export default {
  //获得地址栏中的商品编号
  // props:["pid"],
  data(){
    return{
      list:{},
      n:1
    }
  },
  methods:{
    add(){
      this.n++;
    },
    minus(){
      if(this.n>1){
        this.n--;
      }
    }
  },
  mounted(){
    //1.获取地址栏中的ID
        let id = this.$route.params.id;
    this.axios.get('/detail?pid='+id).then(res=>{
      
      this.list=res.data.result[0];
      console.log(this.list);
    })
      
    
  }
}
</script>