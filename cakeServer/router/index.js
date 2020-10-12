const express=require('express');
const pool=require('../pool.js');

const route=express.Router();
// 轮播图
route.get("/banner",(req,res)=>{
	var sql="select * from banner";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send({result:result});
	})
})
////http://127.0.0.1:8080/index/login/dingding&123456
//1.登录接口
route.get("/login/:uname&:upwd",(req,res)=>{
	var _uname=req.params.uname;
	var _upwd=req.params.upwd;
	var sql="select * from ck_user where uname=? and upwd=?";
	
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if(err) throw err;
		if (result.length>0) {
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//2..根据uname查询用户注册之前验证用户名是否存在，存在就不能注册
//导出路由对象

route.get("/select/:uname",(req,res)=>{
	var _uname=req.params.uname;
	var sql="select * from ck_user where uname=?"
	pool.query(sql,[_uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//3. 注册
route.post("/reg",(req,res)=>{
	console.log(req.body);
	var obj=req.body;
	var sql="insert into ck_user set ?";
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

// route.get("/reg",(req,res)=>{
// 	var obj=req.query;
// 	var sql="insert into ck_user set ?";
// 	pool.query(sql,[obj],(err,result)=>{
// 		if(err) throw err;
// 		//console.log(result);
// 		if(result.affectedRows>0){
// 			res.send("1");
// 		}else{
// 			res.send("0");
// 		}
// 	});
// });

//4.根据uname查询用户注册之前验证用户名是否存在，存在就不能注册
route.get("/select/:uname",(req,res)=>{
	var _uname=req.params.uname;
	var sql="select *from ck_user where uname=?";
	pool.query(sql,[_uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0")
		}
	})
})
// 5.查询所有产品列表
route.get("/index_product",(req,res)=>{
	var sql="select * from index_product";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send({result:result});
	})
})
// 6.根据id查找详情列表
route.get("/detail",(req,res)=>{
	 var _pid=req.query.pid;
	 var sql="select * from index_product where pid=?";
	 pool.query(sql,[_pid],(err,result)=>{
		 if(err) throw err;
		 console.log(result);
		 if(result.length>0){
			 res.json({result:result});
		 }else{
			 res.send("0");
		 }
	 });
});
module.exports=route;