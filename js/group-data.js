const groupsData = {
  exo: {
      name: "EXO",
      image: "../assets/images/exo.jpg",
      company: "sm",
      description: "EXO 是韓國 SM Entertainment 旗下著名男團，以強大的音樂和舞蹈實力著稱。",
      members: [
        {name: "Xiumin", image: "https://pbs.twimg.com/media/GW3bl3Ua8AcwjCF?format=jpg&name=4096x4096", description: "Xiumin 是 EXO 的主唱及舞者，他以甜美聲音及動感舞蹈聞名。"},
        {name: "Suho", image: "https://pbs.twimg.com/media/Ga0QKoKbMAIK4-i?format=jpg&name=4096x4096", description: "Suho 是 EXO 的隊長，他以領導力及迷人的嗓音深受粉絲喜愛。"},
        {name: "Lay", image: "https://pbs.twimg.com/media/GQCkyiSWAAASMrJ?format=jpg&name=large", description: "Lay 是來自中國的成員，他擅長作曲及舞蹈。"},
        {name: "Baekhyun", image: "../assets/images/baekhyun.jpg", description: "Baekhyun 是 EXO 的主唱，他以溫暖且穩定的嗓音廣受好評。"},
        {name: "Chen", image: "https://pbs.twimg.com/media/GeBpMVra0AQMWU9?format=jpg&name=4096x4096", description: "Chen 以高音著稱，是 EXO 中的主要主唱。"},          
        {name: "Chanyeol", image: "https://pbs.twimg.com/media/GfZ8C4YbAAASRZI?format=jpg&name=4096x4096", description: "Chanyeol 是 EXO 的饒舌與副主唱，他還擅長彈吉他。"},  
        {name: "D.O.", image: "https://bucket-image.inkmaginecms.com/cabinet/2023/10/3a0b6563-fe9e-4c5e-9323-e3681a3aaa5c.jpg", description: "D.O. 是 EXO 的主唱之一，他以感性且獨特的嗓音聞名。"},
        {name: "Kai", image: "https://pbs.twimg.com/media/GHIqT5sXAAEKqfN?format=jpg&name=large", description: "Kai 是 EXO 的主舞，他的舞蹈表現力讓人印象深刻。"},
        {name: "Sehun", image: "https://i.namu.wiki/i/JEF-tDBqWywMhQFAEk-qipPyM1hGcyEDwMnIwBIghm0IAdMISxt2vUpCaHJ3BIUUy_7lx8Q2I0vt04QSiOQmLg.webp", description: "Sehun 是 EXO 的最年輕成員，以舞蹈實力及外貌聞名。"},
      ],
    },

    nct127: {
      name: "NCT127",
      image: "../assets/images/nct127.jpg",
      company: "sm",
      description: "NCT127 是韓國 SM Entertainment 的子團體，以多樣的音樂風格著稱。",
      members: [
        {name: "Johnny", image: "https://pbs.twimg.com/media/E_sCidiVEAEQCNT?format=jpg&name=large", description: "Johnny 是 NCT127 的主舞和副主唱，來自芝加哥。"},          
        {name: "泰容", image: "https://pbs.twimg.com/media/Gfn1MLvXcAAvi8U?format=jpg&name=900x900", description: "泰容是 NCT127 的隊長，以精湛的舞蹈和饒舌著稱。"},          
        {name: "悠太", image: "https://pbs.twimg.com/media/GfpsmEEbsAAk0Xs?format=jpg&name=large", description: "悠太是來自日本的成員，以活潑性格及舞蹈實力著稱。"},  
        {name: "道英", image: "https://pbs.twimg.com/media/Gfck8LxakAA4NEi?format=jpg&name=large", description: "道英是 NCT127 的主唱，以柔和且穩定的聲音打動人心。"},          
        {name: "在玹", image: "https://pbs.twimg.com/media/FVn1VsQaAAAaSx2?format=jpg&name=large", description: "在玹是主唱及視覺，他的嗓音與外貌深受喜愛。"},
        {name: "昀昀", image: "https://pbs.twimg.com/media/FHRkgK_agAEcmGG?format=jpg&name=large", description: "昀昀是副主唱，以開朗個性聞名。目前暫停活動中"},          
        {name: "廷祐", image: "https://pbs.twimg.com/media/GfYNxx3bcAArN2H?format=jpg&name=4096x4096", description: "廷祐是 NCT127 的主唱之一，嗓音非常感性。"},          
        {name: "Mark", image: "https://pbs.twimg.com/media/GfQa2v8asAUvjdS?format=jpg&name=4096x4096", description: "Mark 是來自加拿大的饒舌擔當，以詞曲創作聞名。"},
        {name: "楷燦", image: "https://pbs.twimg.com/media/GPUXQOXbkAA6MK3?format=jpg&name=4096x4096", description: "楷燦是 NCT127 的主唱之一，聲音充滿感情。"},
      ],
    },

    aespa: {
      name: "aespa",
      image: "../assets/images/aespa.jpg",
      company:"sm",
      description: "aespa 是韓國 SM Entertainment 旗下女子團體，以 AI 和現實結合的概念聞名。",
      members: [
        {name: "Karina", image: "https://pbs.twimg.com/media/GfkaIIEbUAA7uCS?format=jpg&name=large", description: "Karina 是 aespa 的隊長與主舞之一。"},
        {name: "Giselle", image: "https://pbs.twimg.com/media/GfptsvrXcAA5i-U?format=jpg&name=large", description: "Giselle 是 aespa 的饒舌擔當。"},          
        {name: "Winter", image: "https://pbs.twimg.com/media/GffjbzWa0AAgRVO?format=jpg&name=large", description: "Winter 是主唱與舞蹈擔當。"},
        {name: "Ningning", image: "https://pbs.twimg.com/media/GfYXZ03bQAAQvt0?format=jpg&name=4096x4096", description: "Ningning 是主唱，以穩定的高音表現聞名。"},
      ],
    },

    blackpink: {
      name: "BLACKPINK",
      image: "../assets/images/blackpink.jpg",
      company: "yg",
      description: "BLACKPINK 是 YG Entertainment 旗下著名女子團體，擁有多首熱門歌曲。",
      members: [
        {name: "Jisoo", image: "https://pbs.twimg.com/media/Gfn_qr0a4AAkxEU?format=jpg&name=medium", description: "Jisoo 是 BLACKPINK 的主唱與形象大使。"},
        {name: "Jennie", image: "https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2023%2F11%2Fblackpinks-jennie-applied-to-trademark-of-jennie-ruby-jane-to-korea-intellectual-property-information-search-in-10-different-categories-1.jpg?q=75&w=800&cbr=1&fit=max", description: "Jennie 是主饒舌與主唱，以氣質與才華著稱。"},       
        {name: "Rosé", image: "https://pbs.twimg.com/media/GNWRLaYbsAAbMEx?format=jpg&name=900x900", description: "Rosé 是主唱，以獨特的嗓音和吉他表演著稱。"},          
        {name: "Lisa", image: "https://pbs.twimg.com/media/GfT0mepW4AAEXb3?format=jpg&name=small",description: "Lisa 是主舞與饒舌擔當，來自泰國。"},  
      ],
    },

    twice: {
      name: "TWICE",
      image: "../assets/images/twice.jpg",
      company: "jyp",
      description: "TWICE 是 JYP Entertainment 旗下著名女子團體，以活力和迷人的舞台表演著稱。",
      members: [
        {name: "Nayeon", image: "https://pbs.twimg.com/media/GfnIczaXkAAPsEG?format=jpg&name=small", description: "Nayeon 是 TWICE 的主唱與中心，充滿活力和親和力。"},
        {name: "Jeongyeon", image: "https://pbs.twimg.com/media/F36XalbWUAA_Bbf?format=jpg&name=large", description: "Jeongyeon 是副主唱，以穩定的嗓音和冷靜的氣質著稱。"},  
        {name: "Momo", image: "https://pbs.twimg.com/media/GfoeyMSXQAAutcW?format=jpg&name=large", description: "Momo 是主舞擔當，以精湛的舞技聞名。"},
        {name: "Sana", image: "https://pbs.twimg.com/media/GeoNj1fWgAAzt6-?format=jpg&name=small", description: "Sana 是副主唱，以甜美的嗓音和個性著稱。"},
        {name: "Jihyo", image: "https://pbs.twimg.com/media/GJcjDqAWsAA89wN?format=jpg&name=4096x4096", description: "Jihyo 是 TWICE 的隊長和主唱，以強大的嗓音和領導力聞名。"},
        {name: "Mina", image: "https://pbs.twimg.com/media/GfjnzYuWgAAt1PW?format=jpg&name=large", description: "Mina 是副主唱，以優雅的舞台風格著稱。"},
        {name: "Dahyun", image: "https://pbs.twimg.com/media/GGEJUlLagAAY5p5?format=jpg&name=large", description: "Dahyun 是饒舌擔當，以獨特的舞台表現力著稱。"},
        {name: "Chaeyoung", image: "https://pbs.twimg.com/media/Gfm4zPXXUAAycSa?format=jpg&name=small", description: "Chaeyoung 是主饒舌，以創意和詞曲創作聞名。"},
        {name: "Tzuyu", image: "https://pbs.twimg.com/media/Ge_--6sbwAAHQ9D?format=jpg&name=large", description: "Tzuyu 是 TWICE 的最年輕成員，以出眾的外貌和舞蹈實力著稱。"},
      ],
    },
    
    itzy: {
      name: "ITZY",
      image: "../assets/images/itzy.jpg",
      company: "jyp",
      description: "ITZY 是 JYP Entertainment 旗下女子團體，以強烈的概念和舞台表現著稱。",
      members: [
        {name: "禮志", image: "https://pbs.twimg.com/media/GfpWBW7W8AAxjjw?format=jpg&name=large", description: "禮志是 ITZY 的隊長與主舞，以強大的舞蹈實力聞名。"},
        {name: "Lia", image: "https://pbs.twimg.com/media/GfpWBWZasAAM3wj?format=jpg&name=large", description: "Lia 是主唱，以柔美的嗓音和舞台魅力著稱。"},
        {name: "留真", image: "https://pbs.twimg.com/media/GfpWN_3WkAAEpZf?format=jpg&name=large", description: "留真是主饒舌，以獨特的台風和強大的表現力聞名。"},
        {name: "彩領", image: "https://pbs.twimg.com/media/GfpWN_XbMAA05yz?format=jpg&name=large", description: "彩領是主舞與副唱，以優雅的舞蹈和甜美嗓音著稱。"},
        {name: "有娜", image: "https://pbs.twimg.com/media/GfpWZanbMAA0AOW?format=jpg&name=large", description: "有娜是 ITZY 的最年輕成員，以活力與舞台魅力聞名。"},
      ],
    },
    
    straykids: {
      name: "Stray Kids",
      image: "../assets/images/stray kids.jpg",
      company: "jyp",
      description: "Stray Kids 是 JYP Entertainment 旗下男子團體，以獨立製作的音樂與強大的舞台實力著稱。",
      members: [
        {name: "方燦",image: "https://pbs.twimg.com/media/GfIKc-JaIAEYLI0?format=jpg&name=large", description: "方燦是 Stray Kids 的隊長與製作人，創作才華突出。"},   
        {name: "Lee Know", image: "https://pbs.twimg.com/media/GffQSo_b0AAruHq?format=jpg&name=small", description: "Lee Know 是主舞擔當，以精準的舞蹈技術聞名。"},  
        {name: "彰彬", image: "https://pbs.twimg.com/media/GfIKc-cbQAA-qwT?format=jpg&name=4096x4096", description: "彰彬是主饒舌，詞曲創作能力強。"},  
        {name: "鉉辰", image: "https://pbs.twimg.com/media/GfoBAjhbwAA10ug?format=jpg&name=small", description: "鉉辰是 Stray Kids 的主舞，以華麗的舞姿著稱。"},
        {name: "HAN", image: "https://pbs.twimg.com/media/GfpkcaeaoAA6AsH?format=jpg&name=large", description: "HAN 是主饒舌與主唱，以多才多藝聞名。"},
        {name: "Felix", image: "https://pbs.twimg.com/media/GfpkcafbgAAElPe?format=jpg&name=large", description: "Felix 是副主唱，以低沉嗓音和舞台魅力著稱。"},
        {name: "昇玟", image: "https://pbs.twimg.com/media/GfpkcafbQAAZj-3?format=jpg&name=large", description: "昇玟是主唱，以穩定的聲音和清新的形象聞名。"},
        {name: "I.N", image: "https://pbs.twimg.com/media/Gfpkcafa0AAzRnc?format=jpg&name=large", description: "I.N 是 Stray Kids 的最年輕成員，以甜美的嗓音和親和力著稱。"}, 
      ],
    },
    
    bigbang: {
      name: "BIGBANG",
      image: "../assets/images/bigbang.jpg",
      company: "yg",
      description: "BIGBANG 是 YG Entertainment 旗下著名男子團體，被稱為韓流之王。",
      members: [
        {name: "G-Dragon", image: "https://pbs.twimg.com/media/GfehtJJagAA2aci?format=jpg&name=large", description: "G-Dragon 是 BIGBANG 的隊長與靈魂人物，以創作才華與領導力聞名。"},
        {name: "太陽", image: "https://vos.line-scdn.net/music-img/cms/Magazine/content/45419_04260152.jpg", description: "太陽是主唱，以獨特的嗓音和舞台表現力著稱。"},
        {name: "大聲", image: "https://s3-ap-northeast-1.amazonaws.com/tw.com.carture/images/1200/171230744205.jpg", description: "大聲是主唱，以溫暖的嗓音和幽默感深受粉絲喜愛。"},
        {name: "T.O.P", image: "https://pbs.twimg.com/media/Fxdut7AWcAMLLAC?format=jpg&name=small", description: "T.O.P 是主饒舌，以低沉嗓音和個性化的風格聞名。"},
      ],
    },
  
    bts: {
      name: "BTS",
      image: "../assets/images/bts.jpg",
      company: "hybe",
      description: "BTS 是 HYBE 旗下著名男子團體，以全球影響力和創新音樂風格著稱。",
      members: [
        {name: "RM", image: "https://pbs.twimg.com/media/Gc_B3igaUAAW26s?format=jpg&name=large", description: "RM 是 BTS 的隊長和主饒舌，以詞曲創作能力和領導力聞名。"},                  
        {name: "Jin", image: "https://pbs.twimg.com/media/GelfeXcbwAA_HxD?format=jpg&name=4096x4096", description: "Jin 是主唱，以穩定的聲音和幽默感深受粉絲喜愛。"},          
        {name: "Suga", image: "https://pbs.twimg.com/media/Gfq21lOW8AATGXS?format=jpg&name=medium", description: "Suga 是主饒舌，擅長音樂製作與作詞。"},                      
        {name: "J-Hope", image: "https://pbs.twimg.com/media/Gak4FDSbcAARjBA?format=jpg&name=small", description: "J-Hope 是主舞與饒舌，以陽光形象和舞蹈實力著稱。"},                                
        {name: "Jimin", image: "https://pbs.twimg.com/media/Gfo2a3tW4AEUGgj?format=jpg&name=large", description: "Jimin 是主唱與主舞，以獨特的嗓音和動感舞姿聞名。"},          
        {name: "V", image: "https://pbs.twimg.com/media/GdyE3M3aMAAcWRu?format=jpg&name=large", description: "V 是主唱，以低沉嗓音和多樣魅力吸引粉絲。"},        
        {name: "Jungkook", image: "https://pbs.twimg.com/media/GZc7ElUbQAAbD7E?format=jpg&name=large", description: "Jungkook 是 BTS 的主唱、主舞與中心，以全能實力著稱。"},  
      ],
    },
    
    seventeen: {
      name: "Seventeen",
      image: "../assets/images/seventeen.jpg",
      company: "hybe",
      description: "Seventeen 是 Pledis Entertainment 旗下男子團體，由13位成員組成，分為三個小分隊。",
      members: [
        { name: "S.Coups", image: "https://pbs.twimg.com/media/GYKyrKpa0AAHHs7?format=jpg&name=4096x4096", description: "S.Coups 是隊長，負責饒舌和領導整體活動。" },
        { name: "Jeonghan", image: "https://pbs.twimg.com/media/GTQ1bBcaYAALG4U?format=jpg&name=4096x4096", description: "Jeonghan 是主唱，以溫柔形象和嗓音著稱。" },
        { name: "Joshua", image: "https://pbs.twimg.com/media/GYKyk5pbcAE1wo1?format=jpg&name=4096x4096", description: "Joshua 是主唱，擅長吉他演奏與詞曲創作。" },
        { name: "Jun", image: "https://pbs.twimg.com/media/GYKyhltbcAELs6z?format=jpg&name=4096x4096", description: "Jun 是主舞之一，來自中國，以舞蹈聞名。" },
        { name: "Hoshi", image: "https://pbs.twimg.com/media/GMTkyNUa8AA09UD?format=jpg&name=large", description: "Hoshi 是主舞與副唱，舞蹈編排能力強。" },
        { name: "Wonwoo", image: "https://pbs.twimg.com/media/F5WcMNoXYAA5ZTv?format=jpg&name=4096x4096", description: "Wonwoo 是主饒舌，性格內向但台上表現出色。" },
        { name: "Woozi", image: "https://pbs.twimg.com/media/GTfuYJEakAABqkq?format=jpg&name=large", description: "Woozi 是主唱與製作人，負責大部分歌曲製作。" },
        { name: "The8", image: "https://pbs.twimg.com/media/GEmn8fEawAA92F1?format=jpg&name=large", description: "The8 是主舞，擅長中國傳統舞蹈和創意編排。" },
        { name: "Mingyu", image: "https://pbs.twimg.com/media/FtcNcoAaMAQwLj8?format=jpg&name=4096x4096", description: "Mingyu 是主饒舌與視覺擔當，外貌與實力兼具。" },
        { name: "DK", image: "https://pbs.twimg.com/media/GRaBvDXbQAEtdEd?format=jpg&name=large", description: "DK 是主唱，以明亮嗓音和熱情性格著稱。" },
        { name: "Seungkwan", image: "https://pbs.twimg.com/media/GScw-NdWMAAHynR?format=jpg&name=large", description: "Seungkwan 是主唱，以強大的舞台感染力聞名。" },
        { name: "Vernon", image: "https://pbs.twimg.com/media/GTfu4iYbUAAnUzG?format=jpg&name=large", description: "Vernon 是主饒舌，來自美國，以獨特風格著稱。" },
        { name: "Dino", image: "https://pbs.twimg.com/media/GTfu75aagAACMQW?format=jpg&name=large", description: "Dino 是最年輕成員，擅長舞蹈與舞台表現。" },
      ],
    },
    
    newjeans: {
      name: "NewJeans",
      image: "../assets/images/newjeans.jpg",
      company: "hybe",
      description: "NewJeans 是 HYBE 旗下女子團體，以青春活力和自然概念受到喜愛。",
      members: [
        { name: "Minji", image: "https://pbs.twimg.com/media/GQhe6mwbsAArwV6?format=jpg&name=large", description: "Minji 是隊長，以冷靜和大方的氣質聞名。" },
        { name: "Hanni", image: "https://pbs.twimg.com/media/GQhe6mtaoAEpX6m?format=jpg&name=large", description: "Hanni 是副主唱，以甜美的聲音與舞台表現著稱。" },
        { name: "Danielle", image: "https://pbs.twimg.com/media/GQhe6mybYAAOpWB?format=jpg&name=large", description: "Danielle 是雙國籍成員，擅長表演與歌唱。" },
        { name: "Haerin", image: "https://pbs.twimg.com/media/GOU0bc4aAAAk17n?format=jpg&name=large", description: "Haerin 是主唱，以清新嗓音和親和力深受喜愛。" },
        { name: "Hyein", image: "https://pbs.twimg.com/media/GMDgI_DasAAeVzS?format=jpg&name=large", description: "Hyein 是最年輕成員，以穩定的表演力出道。" },
      ],
    },
    
    ive: {
      name: "IVE",
      image: "../assets/images/ive.jpg",
      company: "others",
      description: "IVE 是 Starship Entertainment 旗下女子團體，以高顏值和強實力迅速走紅。",
      members: [
        { name: "Gaeul", image: "https://pbs.twimg.com/media/Gfn-BruWsAA7tLY?format=jpg&name=small", description: "Gaeul 是 IVE 的副唱與主舞，以溫柔舞台表現著稱。" },
        { name: "Yujin", image: "https://pbs.twimg.com/media/Gfn99-uXAAAB1sQ?format=jpg&name=900x900", description: "Yujin 是隊長與主唱，以強大的領導力聞名。" },
        { name: "Rei", image: "https://pbs.twimg.com/media/Gfn-GhkWAAAnbS4?format=jpg&name=small", description: "Rei 是來自日本的成員，以創意和饒舌著稱。" },
        { name: "Wonyoung", image: "https://pbs.twimg.com/media/Gfn-KIWXQAAkcWe?format=jpg&name=small", description: "Wonyoung 是中心成員，以模特般的身材和外貌聞名。" },
        { name: "Liz", image: "https://pbs.twimg.com/media/Gfn-O21WcAA0sOd?format=jpg&name=900x900", description: "Liz 是主唱之一，以甜美的嗓音深受喜愛。" },
        { name: "Leeseo", image: "https://pbs.twimg.com/media/GfoA_SlXUAAy2Gz?format=jpg&name=small", description: "Leeseo 是 IVE 的最年輕成員，以自然魅力吸引粉絲。" },
      ],
    },
    
    gidle: {
      name: "(G)I-DLE",
      image: "../assets/images/(g)i-dle.jpg",
      company: "others",
      description: "(G)I-DLE 是 CUBE Entertainment 旗下女子團體，以創作型女團著稱。",
      members: [
        { name: "薇娟", image: "https://pbs.twimg.com/media/GfkJsCUbYAAKp6b?format=jpg&name=small", description: "薇娟是主唱，以穩定的嗓音和優雅形象聞名。" },
        { name: "Minnie", image: "https://pbs.twimg.com/media/Gd75cbNaEAAMbwu?format=jpg&name=4096x4096", description: "Minnie 是主唱，擅長作曲和演奏鋼琴。" },
        { name: "小娟", image: "https://pbs.twimg.com/media/GfEjWazbUAAliVQ?format=jpg&name=large", description: "小娟是隊長與主饒舌，負責詞曲創作和編排。" },
        { name: "雨琦", image: "https://pbs.twimg.com/media/GfeuyyPagAAeLir?format=jpg&name=large", description: "雨琦是副主唱，以低沉嗓音和活潑性格著稱。" },
        { name: "舒華", image: "https://pbs.twimg.com/media/GfE0YrpbMAAQwnB?format=jpg&name=large", description: "舒華是副唱，以自然魅力和穩定成長聞名。" },
      ],
    },
    
    cnblue: {
      name: "CNBLUE",
      image: "../assets/images/cnblue.jpg",
      company: "others",
      description: "CNBLUE 是 FNC Entertainment 旗下樂團，以搖滾風格和高音樂素養著稱。",
      members: [
        { name: "鄭容和", image: "https://pbs.twimg.com/media/GfDIta6a4AAeGUu?format=jpg&name=small", description: "鄭容和是主唱和吉他手，負責大部分歌曲創作。" },
        { name: "姜敏赫", image: "https://pbs.twimg.com/media/GfDIta7bIAAu5am?format=jpg&name=4096x4096", description: "姜敏赫是鼓手，以穩定的節奏和個人魅力著稱。" },
        { name: "李正信", image: "https://pbs.twimg.com/media/GfDIta6bsAAhLq_?format=jpg&name=small", description: "李正信是貝斯手，負責樂團的低音部分和副唱。" },
      ],
    },
    
};
