set names UTF8;
drop database if exists cake;
create database cake charset=UTF8;
use cake;

/*轮播图表*/
create table banner(
	bid int primary key auto_increment,
	banner varchar(100)
);
/*插入轮播数据*/
insert into banner values(null,'http://127.0.0.1:3000/public/img/banner/banner1.jpg');
insert into banner values(null,'http://127.0.0.1:3000/public/img/banner/banner2.jpg');
insert into banner values(null,'http://127.0.0.1:3000/public/img/banner/banner3.jpg');
insert into banner values(null,'http://127.0.0.1:3000/public/img/banner/banner4.jpg');
insert into banner values(null,'http://127.0.0.1:3000/public/img/banner/banner5.jpg');

/*用户表*/
create table ck_user(
	cid int primary key auto_increment,
	uname varchar(50),
	upwd varchar(50)
);
/*插入用户数据*/
insert into ck_user values(null,'15828529017','12345678');
insert into ck_user values(null,'17345819621','12345678');

/*
产品类型
*/
create table product_type(
	tid INT PRIMARY KEY AUTO_INCREMENT,
	tname varchar(128)
);

insert into product_type values
(null,'巧克力'),
(null,'咖啡'),
(null,'奶油');
/*产品列表*/

CREATE TABLE index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,  #编号
  title VARCHAR(64), #标题
  details VARCHAR(128),	#详情
	 price varchar(128),	#价格
  pic VARCHAR(128),	#图片
	img  VARCHAR(128), 
	type_id int unsigned,  #类型编号
  href VARCHAR(128)  #链接
);
insert into index_product values
(null,'巧克力松露 Chocolate truffle','口感细腻香醇、丝丝浓滑，带给你一场味觉的盛宴。','198','http://127.0.0.1:3000/public/img/index/cake001.jpg','http://127.0.0.1:3000/public/img/detail/cake0011.jpg',1,'1'),
(null,'奶香巧克力 chocolate cake','只留下奶香巧克力化也化不开的醇香。','198.00','http://127.0.0.1:3000/public/img/index/cake002.jpg','http://127.0.0.1:3000/public/img/detail/cake0021.jpg',3,'1'),
(null,'经典奶香 Classic Cream','记忆中的绵密口感，沁着浓郁奶香。','198.00','http://127.0.0.1:3000/public/img/index/cake003.jpg','http://127.0.0.1:3000/public/img/detail/cake0031.jpg',1,'1'),
(null,'卡布基诺 Cappuccino','美好在唇齿间化开，那是咖啡迷人的香气。','198.00','http://127.0.0.1:3000/public/img/index/cake004.jpg','http://127.0.0.1:3000/public/img/detail/cake0041.jpg',2,'1'),
(null,'豆之乳 Soy milk cake','微微的甜与柔，回味还有一股豆奶的香。','198.00','http://127.0.0.1:3000/public/img/index/cake005.jpg','http://127.0.0.1:3000/public/img/detail/cake0051.jpg',3,'1');
