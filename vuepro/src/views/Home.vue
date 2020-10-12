<template>
  <div class="home">
  <div class="block">
    <el-carousel trigger="click" height="680px">
      <el-carousel-item v-for="(v,i) in banner" :key="i">
        <img :src="v.banner" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
    <!-- 一楼开始 -->
    <div class="entry">
      <div class="discount"></div>
      <div class="inbox"></div>
      <div class="strawberry"></div>
      <div class="card"></div>
      <div class="ranking"></div>
    </div>
    <!-- 一楼结束 -->
    <!-- 当季热卖开始 -->
    <div class="season">
      <!-- 标题 -->
      <div class="title">
        <p class="cn">当季热卖</p>
        <p class="en">BEST CHOICE</p>
      </div>
      <!-- 商品 -->
      <div class="section">
        <!-- 单个商品 -->
        <div class="product" v-for="(v,i) of list" :key="i">
          <router-link :to="`/detail/${v.pid}`"><img :src="v.pic" alt=""></router-link>
          <div class="text">
            <div class="desc my_text">{{v.details}}</div>
            <div class="name my_text">{{v.title}}</div>
            <div class="price">
              ¥{{v.price}}/
              <span class="my_font">500g</span>
              <div class="cart"><img src="../assets/index/cart.png" alt=""></div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
    <!-- 当季热卖结束 -->
  </div>
</template>
<style scoped>
/* 轮播图 */

  /* 一楼 */
  .entry{
    width: 940px;
    margin: 0 auto;
    padding: 100px 0;
  }
  .discount{
    width: 500px; height: 294px;
    margin: 0 30px 30px 0;
    background-image: url('../assets/index/entry_szone001.jpg');
    float: left;
  }
  .inbox{
    width: 410px; height: 294px;
    margin-bottom: 30px;
    background-image: url('../assets/index/entry_inbox001.jpg');
    float: left;
  }
  .strawberry,.card,.ranking{
     width: 294px; height: 294px;
    float: left;
  }
  .strawberry{
   margin-right: 29px;
    background-image: url('../assets/index/entry_strawberry.jpg');
  }
  .card{
    margin-right: 29px;
    background-image: url('../assets/index/entry_card.jpg');
  }
  .ranking{
    background-image: url('../assets/index/entry_ranking.jpg');
  }
  .entry:after,.section:after {
    display: block;
    content: "";
    clear: both;
  }
  .entry div{
    box-shadow: 0 0 10px 5px #fdf3f5;
  }
  .entry div:hover{
    box-shadow: 0 0 15px 6px #fabdc9;
  }
  /* 当季热卖 */
  .season{
    margin: 0 auto;
  }
  .title{
    margin: 0 auto;
    width: 270px;
    height: 172px;
    background-image: url('../assets/index/section_title_bg.png');
  }
  .title p{
    color: #e9546b;
    text-align: center;
  }
  .title .cn{
    height: 26px;
    padding-top: 68px;
    line-height: 26px;
    font-size: 26px
  }
  .title .en{
    height: 18px;
    margin-top: 20px;
    line-height: 18px;
    font-size: 18px;
  }
  /**商品 */
  .section{
    width: 1200px;
    margin: 80px auto 0;
  }
  /* 单个商品 */
  .product{
    width: 291px; height: 400px;
    float: left;
    font-size: 14px;
    margin: 0 10px 10px 0;
    position: relative;
  }
  .product:hover{
    outline: 1px solid #e9546b;
  }
  .text .desc{
    padding: 14px 0 11px;
    color: #b5b5b5;
  }
  .text .name{
        color: #635859;
  }
  .text .price{
    color: #e9546b;
  }
  .my_font{
    font-size: 12px;
  }
  .cart img{
    width: 28px; height: 28px;
    display: block;
    position: absolute;
    right: 20px;
    bottom: 15px;
    z-index: 50;
    /* background-image: url("../assets/index/cart.png"); */
  }
  /*文字超出范围成省略号 */
  .my_text{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
<script>
export default {
  data(){
    return{
      banner:[],
      list:{}
    }
  },
  mounted(){
    // 轮播图发送请求
    this.axios.get("/banner").then(res=>{
      this.banner=res.data.result;
    });
    // 当季热卖发送请求
    this.axios.get('/index_product').then(res=>{
      this.list=res.data.result;
    })
  }
}
</script>


