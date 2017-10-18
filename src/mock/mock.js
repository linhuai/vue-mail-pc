// 引入mockjs
 
const Mock = require('mockjs');
 


const productlist = [
  {
    title: '单梁起重机',
    img: 'http://localhost:8090/src/assets/pro1-1.jpg'
  },
  {
    title: '双梁起重机',
    img: 'http://localhost:8090/src/assets/pro1-2.jpg'
  },
  {
    title: '电动葫芦',
    img: 'http://localhost:8090/src/assets/pro1-3.jpg'
  },
  {
    title: '门式起重机',
    img: 'http://localhost:8090/src/assets/pro1-4.jpg'
  },
  {
    title: '龙门起重机',
    img: 'http://localhost:8090/src/assets/pro1-5.jpg'
  }
];

const modules = {
  productlist
};

 
Mock.mock('/data/index', modules); 
