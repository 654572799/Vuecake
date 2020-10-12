<template>
  <div class="my-login">
    <div class="left"></div>
    <div class="right">

     <ul>
       <li>LOGIN</li>
       <li>
         <input type="text" v-model="uname" @blur="checkUname" @focus="fcUname" placeholder="请输入用户名/手机号" maxlength="11" >
       </li>
       <li>
         <div class="msg">
          <span>{{uname_msg}}</span>
         </div>
       </li>
       
       <li>
         <div class="msg">
           <span></span>
         </div>
       </li>
        <li>
         <input type="password" v-model="upwd" @blur="checkPwd" @focus="fcPwd" placeholder="请输入密码" maxlength="20" >
       </li>
       <li>
         <div class="msg">
           <span>{{upwd_msg}}</span>
         </div>
       </li>
       
       <li class="login">
         <button @click="login" >登 录</button>
       </li>
       <li>
        还不是会员？
         <router-link to="/register">手机号注册登录</router-link>
       </li> 
       
     </ul>
    </div>
  </div>
</template>


<style  scoped>
*{margin: 0; padding: 0;}
.msg{
  width: 300px; height: 20px;
}
span{
  color: #e9546b;
  font-weight: bold;
  
}
a {
  text-decoration: none;
  color: #1478be;
}
a:hover {
  text-decoration: underline;
}
.my-login {
  width: 1200px;
  height: 520px;
  padding: 80px 0 160px;
  margin: 0 auto;
}
.my-login .left {
  float: left;
  width: 572px;
  height: 348px;
  background: url(../assets/login/login-slogan.png) no-repeat;
  margin: 86px 0 0 48px;
}
.my-login .right {
  float: left;
  width: 579px;
  height: 520px;
  position: relative;
  border-left: 1px solid #c8c8c8;
  
}
.my-login ul {
  list-style-type:none;
  width: 392px;
  padding: 20px 0 0 98px;
  font-size: 14px;
}
ul > li:first-child {
  font-size: 40px;
  color: #c8c8c8;
  text-align: center;
  margin-bottom: 10px;
}
ul > li input {
  width: 390px;
  height: 50px;
  border: 0;
  outline: 0;
  background-color: #fcfcfc;
  border: 1px solid #929eab;
  border-radius: 4px;
  /* margin-top: 18px; */
  font-size: 18px;
  text-indent: 16px;
}

.login button{
  border: 0;
  width: 100%;
  height: 50px;
  border: 1px solid #45515e;
  background-color: #45515e;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  margin: 18px 0 5px;
}

</style>

<script>
export default {
  data(){
    return{
      uname:'',
      upwd:'',
      uname_msg:'',
      upwd_msg:''
    }
  },
  methods:{
     fcUname(){
      this.uname_msg="用户名为11位的手机号"
    },
    fcPwd(){
      this.upwd_msg="密码格式为8-20位的数字+字母"
    },
    checkUname(){
      if(this.uname==""){
        this.uname_msg="用户不能空"
      }else{
        this.uname_msg="√"
      }
    },
    checkPwd(){
      if(this.upwd==""){
        this.upwd_msg="密码不能为空"
      }else{
        this.upwd_msg="√"
      }
    },
    login(){
      if(this.uname!=="" && this.upwd!==""){
        this.axios.get("/login/"+this.uname+"&"+this.upwd).then(res=>{
          if(res.data=="1"){
            this.$router.push("/")
          }else{
            alert("登录失败,用户名或者密码错误")
          }
        })
      }
    }
  }
}
</script>

