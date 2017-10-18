// 引入mockjs
 
const Mock = require('mockjs');
 
// 获取 mock.Random 对象
 
const Random = Mock.Random;

const data = function() {
  let productlist = [];
  for (let i = 0; i < 8; i++) {
 
    let proudct = {
 
      title: Random.csentence(5, 20), // Random.csentence( min, max )
 
      thumbpic: Random.dataImage('500x375', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
 
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
 
    }
 
    productlist.push(proudct)
 
  }
 
  
 
  return {
 
    productlist
 
  }
 
}
 
  
 
// Mock.mock( url, post/get , 返回的数据)；
 
Mock.mock('/data/index', data); 
