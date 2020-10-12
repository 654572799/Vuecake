<template>
    <div>
        <div class="section">
        <!-- 单个商品 -->
        <div class="product" v-for="(v,i) of list" :key="i">
          <router-link :to="`/detail/${v.pid}`"><img :src="v.pic" alt=""></router-link>
          <div class="text">
            <div class="desc my_text">{{v.details}}</div>
            <div class="name my_text">{{v.title}}</div>
            <div class="price">
              ¥{{v.price.toFixed(2)}}/
              <span class="my_font">500g</span>
              <div class="cart"><img src="../assets/index/cart.png" alt=""></div>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style  scoped>
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
  .section:after {
    display: block;
    content: "";
    clear: both;
  }
</style>

<script>
export default {
  data(){
    return{
      list:{price:0}
    }
  },
  mounted(){
    //类型请求
    this.axios.get()
    // 当季热卖发送请求
    this.axios.get('/index_product').then(res=>{
      this.list=res.data.result;
    })
  }
}
</script>

