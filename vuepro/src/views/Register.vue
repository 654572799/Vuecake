<template>
  <div class="my-login">
    <div class="left"></div>
    <div class="right">

     <ul>
       <li>REGISTER</li>
       <li>
         <input type="text" v-model="uname" @blur="checkUname" @focus="fcUname" placeholder="请输入用户名/手机号" maxlength="11" >
       </li>
       <li>
         <div class="msg">
          <span>{{uname_msg}}</span>
         </div>
       </li>
       <li class="dong">
         <input type="text"  placeholder="请输入动态密码" maxlength="6" >
         <button>获取动态密码</button>
       </li>
       <li>
         <div class="msg">
           <span></span>
         </div>
       </li>
        <li>
         <input type="password" v-model="pwd1" @blur="checkPwd1" @focus="fcPwd1" placeholder="请输入密码" maxlength="20" >
       </li>
       <li>
         <div class="msg">
           <span>{{pwd1_msg}}</span>
         </div>
       </li>
       <li>
         <input type="password" v-model="pwd2" @blur="checkPwd2" @focus="fcPwd2" placeholder="请输入确认密码" maxlength="20" >
       </li>
       <li>
         <div class="msg">
          <span>{{pwd2_msg}}</span>
         </div>
       </li>
       <li class="login">
         <button @click="res" >注 册</button>
       </li>
       <li>
        已有账号
         <router-link to="/login">登录</router-link>
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
.dong input{
  width: 260px;
}
.dong button{
  width: 122px;
  height: 52px;
  margin-left: 3px;
  border-radius: 4px;
  background-color: #929eab;
  border: 0;
  color: #fff;
  font-size: 16px;
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
      uname:"",
      // dong:"",
      uname_msg:"",
      // dong_msg:"",
      pwd1:"",
      pwd1_msg:'',
      pwd2:'',
      pwd2_msg:''
    }
  },
  methods:{
    fcUname(){
      this.uname_msg="用户名为11位的手机号"
    },
    fcPwd1(){
      this.pwd1_msg="密码格式为8-20位的数字+字母"
    },
    fcPwd2(){
      this.pwd2_msg="请在输入一次密码"
    },
    checkUname(){
      var unameRegExp = /^1[3-9][0-9]{9}$/;
      if(this.uname==""){
        this.uname_msg="用户不能空"
      }else if(!unameRegExp.test(this.uname)){
        this.uname_msg="用户名格式不正确"
      }else{
        this.uname_msg="√"
      }
      if(this.uname!==""){
        this.axios.get("/select/"+this.uname).then(res=>{
          let data=res.data;
          if(data=="1"){
            this.uname_msg="用户名已被注册，请请重新输入"
          }
        })
      }
      
    },
    // checkDong(){
    //   if(this.dong==""){
    //     this.dong_msg="555"
    //   }
    // },
    
    checkPwd1(){
      let pwdRegExp=/^[0-9a-zA-Z]{8,20}$/;
      if(this.pwd1==""){
        this.pwd1_msg="密码不能为空"
      }else if(!pwdRegExp.test(this.pwd1)){
        this.pwd1_msg="密码格式不正确"
      }else{
        this.pwd1_msg="√"
      }
    },
    
    checkPwd2(){
      if(this.pwd2==""){
        this.pwd2_msg="确认密码不能为空"
      }else if(this.pwd1!==this.pwd2){
        this.pwd2_msg="两次输入的密码不一致"
      }else{
        this.pwd2_msg="√"
      }
    },
    res(){
      if(this.uname_msg=="√" && this.pwd1_msg=="√" && this.pwd2_msg=="√"){
        this.axios.post("/reg","uname="+this.uname+"&upwd="+this.pwd1).then(res=>{
          if(res.data=="1"){
            this.$router.push("/login")
          }else{
            alert("注册失败，请从新注册")
          }
        })
      }
    } 
  },
  mounted(){
    
  }
}
</script>


