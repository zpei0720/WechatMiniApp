// 文章详情页面

var postList = [{
  avatar: "/images/avatar/Flower.png",
  date: "Jun 6 2019",
  title: "《爱宠大机密2》发布全新预告 啾啾变身“傲娇猫咪”",
  postImg: "/images/post/post01.jpg",
  content: "将于7月5日登陆国内各大院线的《爱宠大机密2》今日发布全新预告，上一部中美丽可爱的啾啾萌力回归，显示出与柔弱外表强烈不同的战斗力，是生活...",
  author:"那些花儿",
  dateTime:"",
  detail: ["主人不在家时宠物都会干什么？身为正宗博美犬的啾啾竟选择变身猫咪！《爱宠大机密2》最新预告中，前作里温柔可爱的啾啾突破自我，化身为高冷傲娇、唯我独尊的猫咪，可盐可甜的形象让人不禁大爱，而异想天开的狗扮猫情节也充满喜感。博美啾啾为何戏精上身变身猫王？是什么让萌妹子战斗力爆表？表面甜炸了、实际A爆了的啾啾又将有怎样的冒险？电影《爱宠大机密2》将于7月5日上映，欢迎大小朋友前往影院寻找答案。"],
  postId:1,

  likeNum: 100,
  likeStatus: true,
  commentNum: 50,
  viewNum: 150,
  collectionNum: 10,
  collectionStatus: true,

comments:[

  {
    username:'青石',
    avatar:'/images/avatar/BlueFlower.png',
    create_time:'1559825340',
    content:{
      txt:'今年最期待电影之一',
      img: ["/images/post/meme01.jpg", "/images/post/meme02.jpg"],
      audio:null
    }
  },
  {
    username: '水清',
    avatar: '/images/avatar/PinkFlower.png',
    create_time: '1559898541',
    content: {
      txt: '掌声欢迎，我们阔爱的小兔几回归，自行脑补卡姿兰大眼睛',
      img: ["/images/post/meme03.jpg"],
      audio: null
    }
  },
  {
    username: '赤墨',
    avatar: '/images/avatar/RedFlower.png',
    create_time: '1559752680',
    content: {
      txt: '暖心搞笑的爱宠又要一起搞事情了！我只希望能早日看到那只又萌又坏的小白兔！',
      img: [],
      audio: null
    }
  },
  {
    username: '林白',
    avatar: '/images/avatar/Flower.png',
    create_time: '1559875860',
    content: {
      txt: '',
      img: [],
      audio:{url:"http://123",timeLen:8},
    }
  },

]
},
{
  avatar: "/images/avatar/Galaxy.png",
  date: "Jun 6 2019",
  title: "满满差评！《X战警：黑凤凰》烂番茄新鲜度仅15%",
  postImg: "/images/post/post02.jpg",
  content: "今日，《X战警：黑凤凰》外媒口碑正式解禁！影片目前在烂番茄网站上的新鲜度非常低，只有15%，在41个媒体评价中仅获得6个好评，而MTC评分只有43分，5个...",
  author: "光年之外",
  dateTime: "",
  detail: "今日，《X战警：黑凤凰》外媒口碑正式解禁！影片目前在烂番茄网站上的新鲜度非常低，只有15%，在41个媒体评价中仅获得6个好评，而MTC评分只有43分，5个好评，15个中等评价以及6个差评。系列前作《X战警：天启》在2016年上映后口碑也不甚理想，烂番茄新鲜度47%，MTC56分，但分数都要比这部高。",
  postId: 2,

  likeNum: 100,
  likeStatus: false,
  commentNum: 50,
  viewNum: 150,
  collectionNum: 10,
  collectionStatus: true,

  comments: []
},
{
  avatar: "/images/avatar/Galaxy.png",
  date: "Jun 6 2019",
  title: "锤哥女武神出击 《黑衣人：全球追缉》曝终极预告",
  postImg: "/images/post/post03.jpg",
  content: "《黑衣人：全球追缉》近日曝光“星际对决”版终极预告，黑衣人火力全开勇挫银河系最强入侵。再度合作的“锤哥”克里斯·海姆斯沃斯与“女武神...",
  author: "光年之外",
  dateTime: "",
  detail: "《黑衣人：全球追缉》近日曝光“星际对决”版终极预告，黑衣人火力全开勇挫银河系最强入侵。再度合作的“锤哥”克里斯·海姆斯沃斯与“女武神”泰莎·汤普森炫酷登场，携手迎战神秘外星人。而“王牌探员”与“机敏新秀”首次搭档任务就遭遇“蜂兽”入侵和黑衣人组织前所未有的巨大危机，银河系危在旦夕，黑衣人大战旋即爆发。探员H和M将如何化解危机？他们能不能绝境逢生？",
  postId: 3,

  likeNum: 100,
  likeStatus: false,
  commentNum: 50,
  viewNum: 150,
  collectionNum: 10,
  collectionStatus: true,

  comments: []
},
{
  avatar: "/images/avatar/PinkPower.png",
  date: "Jun 2 2019",
  title: "《X战警：黑凤凰》新预告曝光 X战警燃战凤凰之力",
  postImg: "/images/post/post04.jpg",
  content: "《X战警：黑凤凰》由美国二十世纪福斯公司出品，美国漫威影业公司联合出品。今日，片方发布“一触即发”版预告，危机降临，X战警全面集结，场面超燃。同时，影片在海外社交媒体上...",
  author: "都是泡沫",
  dateTime: "",
  detail: "《X战警：黑凤凰》作为《X战警》的谢幕之作，是系列20年来的集大成之作，也是变种人20年传奇的史诗绝唱，将为影迷带来最紧张、最黑暗、最高潮的虐心故事。谈及这部电影，X教授的饰演者詹姆斯·麦卡沃伊表示：“这部影片是一个很不错的结局，作为告别之作令人满意。”野兽的饰演者尼古拉斯·霍尔特也在采访中直言：“这部影片真正触及了X战警的本质，展现他们与其他超级英雄不同之处以及社会对待他们的态度，同时也烘托了家庭氛围，展现人们如何团结在一起，处理和应对各种问题。”而观众也在走出影院后大呼“永远大爱X战警”“会忍不住在角色高光时刻喊出卡司的名字！”甚至有人表示“它是我今年看过的最棒超英电影！”《X战警：黑凤凰》将于6月6日上映，影片由美国二十世纪福斯公司和美国漫威影业公司联合出品，将以3D/中国巨幕3D/4D全制式登陆全国院线。",
  postId: 4,

  likeNum: 100,
  likeStatus: false,
  commentNum: 50,
  viewNum: 150,
  collectionNum: 10,
  collectionStatus: true,

  comments: []
},
{
  avatar: "/images/avatar/Flower.png",
  date: "Jun 2 2019",
  title: "为高考生加油！《最好的我们》曝张平的最后一课",
  postImg: "/images/post/post05.jpg",
  content: "距离2019年高考还剩四天，今日电影《最好的我们》发布了“高考嘱托”正片片段。片段中，振华中学的张平老师细致认真地叮嘱，振华师生朴实真挚的...",
  author: "那些花儿",
  dateTime: "",
  detail: "电影《最好的我们》6月6日正式上映，在上映前一天片方曝光了一支正片的片段，这支片段正是电影中振华中学的老师张平，给带了三年的五班学生上最后一课的情节。片段中，张平不厌其烦地为高三五班的同学们强调了高考应试时的注意事项：“考号条形码特别重要；准备一个透明带封条的整理袋；低血糖的同学准备一瓶含糖的水......”这一段张平老师的叮嘱，也让众多网友倍感熟悉，仿佛一下子回到了高中时代，直呼和自己当年高考前的最后一课相似度99%。电影《最好的我们》根据八月长安同名青春小说改编，影片将于6月6日正式上映。",
  postId: 5,

  likeNum: 100,
  likeStatus: false,
  commentNum: 50,
  viewNum: 150,
  collectionNum: 10,
  collectionStatus: true,

  comments: []
}]

module.exports={
  postList:postList
}