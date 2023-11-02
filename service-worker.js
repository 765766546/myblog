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
    "revision": "10b7de3a8b4db4ea9d21792ad46a739c"
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
    "url": "assets/js/app.b52c2275.js",
    "revision": "5d5646190e6534e19c1e67d2fcf0ca36"
  },
  {
    "url": "assets/js/vendors~flowchart.30922f4e.js",
    "revision": "902cd4e5677b110836ef334a267e3c0a"
  },
  {
    "url": "banan.html",
    "revision": "d7da9710b8d793f655767c25c5ee7871"
  },
  {
    "url": "beijing.gif",
    "revision": "ac72229c4e9d8c85ed4633af25c862e6"
  },
  {
    "url": "categories/ESB/index.html",
    "revision": "767b805515d6d532a98145ce4b8a7891"
  },
  {
    "url": "categories/index.html",
    "revision": "54c836e72a72cb8b4fa9d357883b1fde"
  },
  {
    "url": "categories/IOT/index.html",
    "revision": "25e4d74d88a1434cd1109dfc582d7156"
  },
  {
    "url": "categories/pyqt5/index.html",
    "revision": "af964f09ea628446ae8cd4004bcfefc6"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "d5cc95628d5f5fd2c8adbf6deaa810c1"
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
    "revision": "a40740c7fdf59c767b4ba12d3ff43ec5"
  },
  {
    "url": "esb1.html",
    "revision": "85a8de411729e21726c6fb6476fc16d3"
  },
  {
    "url": "esb3.html",
    "revision": "a5e0e12984121a2332ad61df82fe8de8"
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
    "revision": "8a647c107462c3a8af3d8b992b6b075e"
  },
  {
    "url": "iot1.html",
    "revision": "eafa66b6b4545a0aa6cc7edc52bdf9df"
  },
  {
    "url": "iot2.html",
    "revision": "395d45eacc47679cff1ed843914e616b"
  },
  {
    "url": "iot3.html",
    "revision": "f1bd69f39719c7494a161f3423a3f52c"
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
    "revision": "5c90f592fb2a7a1c8e1550201e11f60c"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "muchang.html",
    "revision": "1a0387a7d1d113b0da9efcccfad00ec6"
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
    "revision": "55b72fefd739217bb1d0147fb12ec8e5"
  },
  {
    "url": "tag/index.html",
    "revision": "1e56eb111f2a23214a7f5ff9be2fd943"
  },
  {
    "url": "tag/使用场景/index.html",
    "revision": "8c73b405761a2b5db1ea6cebc2b10e09"
  },
  {
    "url": "tag/全文检索/index.html",
    "revision": "8b2d1828b6e81eb8d4577afe23e7f775"
  },
  {
    "url": "tag/办案流程/index.html",
    "revision": "02016db961789a88c59f82812ffc1fd3"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "88faf06b34f9d1f39318247222b33945"
  },
  {
    "url": "tag/学生用电管理/index.html",
    "revision": "d0078ca7a4379f544f5e08288ca98263"
  },
  {
    "url": "tag/应用开发/index.html",
    "revision": "96d8930d84b3ff30fa57d3e294d97858"
  },
  {
    "url": "tag/牧场系统/index.html",
    "revision": "5c7f5503f2d45a5d43f275754131d6a2"
  },
  {
    "url": "tag/系统集成/index.html",
    "revision": "50d4a09a8e7b7701005a7e5d1814d966"
  },
  {
    "url": "tag/设备接入/index.html",
    "revision": "b0453d74764bb78f5ef46e0474194835"
  },
  {
    "url": "tag/错字识别/index.html",
    "revision": "ea7b65be7079ae4c3a6fe6cdbb8078ba"
  },
  {
    "url": "timeline/index.html",
    "revision": "c84e89ba071d13859acabb959ba89170"
  },
  {
    "url": "wangluo-search.html",
    "revision": "aed3c1eb9b235590fa68822773cbcc14"
  },
  {
    "url": "yongdian.html",
    "revision": "5174769bad53b6546fc6c1769e0c3467"
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
