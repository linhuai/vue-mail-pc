// 引入mockjs
 
const Mock = require('mockjs');
 


const productlist = [
  {
    title: '单梁起重机',
    img: 'http://localhost:8090/src/assets/pro1-1.jpg',
    price: 88988,
    desc: '单梁起重机通常是指单梁桥式起重机， 单梁起重机桥架的主梁多采用工字型钢或钢型与钢板的组合截面。起重小车常为手拉葫芦、电动葫芦或用葫芦作为起升机构部件装配而成。'
  },
  {
    title: '双梁起重机',
    img: 'http://localhost:8090/src/assets/pro1-2.jpg',
    price: 243342,
    desc: '双梁起重机一般指双梁桥式起重机， 双梁起重机一般由机械、电气和金属结构三大部分组成。桥式起重机外形象一个两端支承在平行的两条架空轨道上 平移运行的单跨平板桥。双梁起重机在室内外工矿企业、钢铁化工、铁路交通、港口码头以及物流周转等部门和场所均得到广泛的运用'
  },
  {
    title: '电动葫芦',
    img: 'http://localhost:8090/src/assets/pro1-3.jpg',
    price: 324523,
    desc: '电动葫芦是一种特种起重设备，安装在天车、龙门吊之上，电动葫芦具有体积小，自重轻，操作简单，使用方便等特点，用于工矿企业，仓储，码头等场所'
  },
  {
    title: '门式起重机',
    img: 'http://localhost:8090/src/assets/pro1-4.jpg',
    price: 76756,
    desc: '门式起重机是桥式起重机的一种变形，又叫龙门吊。主要用于室外的货场、料场货、散货的装卸作业。门式起重机具有场地利用率高、作业范围大、适应面广、通用性强等特点，在港口货场得到广泛使用'
  },
  {
    title: '龙门起重机',
    img: 'http://localhost:8090/src/assets/pro1-5.jpg',
    price: 53643,
    desc: '门式起重机是桥式起重机的一种变形，又叫龙门吊。主要用于室外的货场、料场货、散货的装卸作业。门式起重机具有场地利用率高、作业范围大、适应面广、通用性强等特点，在港口货场得到广泛使用'
  },
  {
    title: '电动葫芦',
    img: 'http://localhost:8090/src/assets/pro1-3.jpg',
    price: 324523,
    desc: '电动葫芦是一种特种起重设备，安装在天车、龙门吊之上，电动葫芦具有体积小，自重轻，操作简单，使用方便等特点，用于工矿企业，仓储，码头等场所'
  }
];

const modules = {
  productlist
};

 
Mock.mock('/data/index', modules); 
