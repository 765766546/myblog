/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ae926b4930e9b75b011eccfd285dbb3d"
  },
  {
    "url": "assets/css/0.styles.3a649ab1.css",
    "revision": "407dc0c94bb0530b95d040401b3882c4"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.107812a5.js",
    "revision": "346c1edced48ca243d934471b6ed9e2b"
  },
  {
    "url": "assets/js/10.6321c4bf.js",
    "revision": "49b10852bb8250f1f420ae9d53ec81f0"
  },
  {
    "url": "assets/js/11.a624b9a2.js",
    "revision": "d96b381a6e9a19217e754c600890ac77"
  },
  {
    "url": "assets/js/12.79599ba2.js",
    "revision": "0bd38656b8732b700f424398e5df153e"
  },
  {
    "url": "assets/js/13.f1abff24.js",
    "revision": "2aeec4892ff94701e94afab1873162ec"
  },
  {
    "url": "assets/js/14.bbec1436.js",
    "revision": "c776a7d3073583c4641dbd2f0277422a"
  },
  {
    "url": "assets/js/15.d0ba2e41.js",
    "revision": "3b64abb23a83a4192e25ede9f876fb70"
  },
  {
    "url": "assets/js/16.a9208306.js",
    "revision": "0ef8596e5dfdfd2d1b0d9a931a22b311"
  },
  {
    "url": "assets/js/17.2168478b.js",
    "revision": "c4714ea7b0520534f78eb1b50049de1b"
  },
  {
    "url": "assets/js/18.0f4e8ab0.js",
    "revision": "bc5a44baf47bc040a79d48c7d5abf2e1"
  },
  {
    "url": "assets/js/19.e1d49627.js",
    "revision": "bee402cc9d4a5653569e21f6dbe19f50"
  },
  {
    "url": "assets/js/20.3e395dd0.js",
    "revision": "d302c70ccbbcbcf7768da38a8a178648"
  },
  {
    "url": "assets/js/21.09c5e7ec.js",
    "revision": "d8b3471e43dd3053dcd9d5c3bc6814e9"
  },
  {
    "url": "assets/js/22.d86b16ad.js",
    "revision": "2fa3aa98b7c1e25f96dde3f63034a4f2"
  },
  {
    "url": "assets/js/23.8b8e0dd1.js",
    "revision": "c046fc49c6a2f81bbe26e151e05cf279"
  },
  {
    "url": "assets/js/24.5c58c7a5.js",
    "revision": "9e443b2a1b58604ac9c1fd41664d2afe"
  },
  {
    "url": "assets/js/25.52ee0e43.js",
    "revision": "5c1d54394573ee762acc87529c0f09a2"
  },
  {
    "url": "assets/js/26.b45d7eae.js",
    "revision": "66fe5783254d3e503f8ab31090cb0d9d"
  },
  {
    "url": "assets/js/4.d3de53b4.js",
    "revision": "dcc4e4ae5d036df0f0d6c86f23465ea3"
  },
  {
    "url": "assets/js/5.119c6d3e.js",
    "revision": "b45e3678b300c8a82e1ef413e94733e3"
  },
  {
    "url": "assets/js/6.84baa971.js",
    "revision": "18452371556cc5a2bbf541dad78fe63f"
  },
  {
    "url": "assets/js/7.257d057b.js",
    "revision": "1a875601946abc93d0502a2350af1784"
  },
  {
    "url": "assets/js/8.066417f3.js",
    "revision": "e55193e4caab477fa7ce3aa6c88dd603"
  },
  {
    "url": "assets/js/9.1a167b5e.js",
    "revision": "78a0a8ea6042fb02c635f7aab7eb1c44"
  },
  {
    "url": "assets/js/app.48d46608.js",
    "revision": "1b54fd758bf9e53bbb4fe6b2ed2ae35f"
  },
  {
    "url": "assets/js/vendors~flowchart.30922f4e.js",
    "revision": "902cd4e5677b110836ef334a267e3c0a"
  },
  {
    "url": "banan.html",
    "revision": "841208840b28101550c0a38d39f71b5f"
  },
  {
    "url": "beijing.gif",
    "revision": "ac72229c4e9d8c85ed4633af25c862e6"
  },
  {
    "url": "categories/ESB/index.html",
    "revision": "6ae70229a676bd55b4b55e191f0e0709"
  },
  {
    "url": "categories/index.html",
    "revision": "389f27aca64a3e7a78f01e9d69dc7c14"
  },
  {
    "url": "categories/IOT/index.html",
    "revision": "49857ac26665d39dfe754a8080240109"
  },
  {
    "url": "categories/pyqt5/index.html",
    "revision": "5246b66d423b822b64e60f6b40df17e5"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "ebf63b350e5e60906b31caa76cee68e7"
  },
  {
    "url": "chongqing/cq1.png",
    "revision": "915a8aa6078d21a9ad7eae30b9fb3b73"
  },
  {
    "url": "chongqing/cq2.png",
    "revision": "7f10be2cea7409c11ce475783eab3ddf"
  },
  {
    "url": "chongqing/jiefangbei.png",
    "revision": "4880afb04d6930df7873d77c63b469ba"
  },
  {
    "url": "chunyou1.jpg",
    "revision": "21d26b0ccab487f521bb7a949849d047"
  },
  {
    "url": "chunyou2.jpg",
    "revision": "acbe6d0668a6deb58f4e7cb6c932ed27"
  },
  {
    "url": "chunyou3.jpg",
    "revision": "38cd0a1f5b552a788a725cc6892ad484"
  },
  {
    "url": "chunyou5.jpg",
    "revision": "ece6f8e44870faaf0497e23743a390e6"
  },
  {
    "url": "chunyou6.jpg",
    "revision": "58b298edb34ecb6bb2b1e6c61f0fa7c3"
  },
  {
    "url": "chunyou7.jpg",
    "revision": "f3bef1abd2bd0bfed23296944886d058"
  },
  {
    "url": "cxy.jpg",
    "revision": "fa003c4562baa8108f9c785bf43cd30d"
  },
  {
    "url": "dongtaiguihua.html",
    "revision": "27ad07fd423c69fed5ffec10e599cb2b"
  },
  {
    "url": "esb1.html",
    "revision": "4422af58eea0817ba870078cec2b8469"
  },
  {
    "url": "esb3.html",
    "revision": "df28e3a837a7f960c04af48ee7e1443a"
  },
  {
    "url": "friend.jpg",
    "revision": "95447d879af2d91219e97914ce6b358f"
  },
  {
    "url": "friend1.jpg",
    "revision": "0bb1a26c543fa54100348332b6c4fe98"
  },
  {
    "url": "friend2.jpg",
    "revision": "58c8038ad56334d0dce6213e74ab5fd4"
  },
  {
    "url": "friend3.jpg",
    "revision": "73914be4528a7253a1590140a241284a"
  },
  {
    "url": "index.html",
    "revision": "a52fdedfc2658d5512541ad0697d3dbb"
  },
  {
    "url": "iot1.html",
    "revision": "b155147cfaa7193596222a94f43593fd"
  },
  {
    "url": "iot2.html",
    "revision": "c8e16cc2d23629d795e96f7809a8ce34"
  },
  {
    "url": "iot3.html",
    "revision": "ee7ac5b09f8635f51a81d129cf0bd853"
  },
  {
    "url": "lanlan-haitan.jpg",
    "revision": "5d1de0bd5f7e1a59dbdced9353777f41"
  },
  {
    "url": "lanlan-haitan.png",
    "revision": "0a9c282df84db1e367d1365aacca73c7"
  },
  {
    "url": "lanlan-haitan1.jpg",
    "revision": "b221a9d8968e8e7f81e1e77f4bac3e15"
  },
  {
    "url": "lanlan-haitan1(1).jpg",
    "revision": "4d1337aa26a87975884453bc83da0fb0"
  },
  {
    "url": "lanlanyiyi.jpg",
    "revision": "b5a946b86dbc00981ce22eb4e69f0ad8"
  },
  {
    "url": "lianhuashan1.jpg",
    "revision": "cb19a62d220c5bf931df1b50e0714f0d"
  },
  {
    "url": "lianhuashan2.jpg",
    "revision": "a0ce038b838a0a774d8f52c3845629ee"
  },
  {
    "url": "lianhuashan3.jpg",
    "revision": "520b74ba20fb524a827b90b20c8b6ce1"
  },
  {
    "url": "lianhuashan4.jpg",
    "revision": "5291e445fe7e3684fdb4f249cc3dabad"
  },
  {
    "url": "liucheng.html",
    "revision": "582fb71b1ec12f4adcbbf0ed149e58e5"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "muchang.html",
    "revision": "c9220e79cb73df60bc551d74c26b23a4"
  },
  {
    "url": "myweixin-small.jpg",
    "revision": "43bc7a2565cac7c07f8007988c5f2dcd"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/ESB技术/index.html",
    "revision": "ae636103933d9fa4d60516b3bcd582ae"
  },
  {
    "url": "tag/index.html",
    "revision": "0cb326e3b24d6faee0a4ba0bce3afdcb"
  },
  {
    "url": "tag/使用场景/index.html",
    "revision": "4912f681847170231548a3f627aa3ac7"
  },
  {
    "url": "tag/全文检索/index.html",
    "revision": "038b892cfba33710bb071c96b5ed11eb"
  },
  {
    "url": "tag/办案流程/index.html",
    "revision": "ab273d767c6e9d9601ca77d15f0636a3"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "31fa24018baf04b3313cc8deaddf1ef7"
  },
  {
    "url": "tag/学生用电管理/index.html",
    "revision": "50143fc1a8b3eac562289f68ed44811e"
  },
  {
    "url": "tag/应用开发/index.html",
    "revision": "0010706c4dcd5bc5b9ed910fb1375aec"
  },
  {
    "url": "tag/牧场系统/index.html",
    "revision": "b084f15207f2e0898c1a7f7f9fbd2d89"
  },
  {
    "url": "tag/系统集成/index.html",
    "revision": "cd22221ceb5f1700e3ba4640c60eda11"
  },
  {
    "url": "tag/设备接入/index.html",
    "revision": "86eab59a5bf60982e534b8a6d9960cc3"
  },
  {
    "url": "tag/错字识别/index.html",
    "revision": "99deb4875da15fc932183318448dc1d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "577c510f7f81ad81ddb8b4b4f5e60007"
  },
  {
    "url": "wangluo-search.html",
    "revision": "ef548331ae02d94be9eefff5bafbf446"
  },
  {
    "url": "yongdian.html",
    "revision": "7206f4331fc5b318f9d895c4fe9b618a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
