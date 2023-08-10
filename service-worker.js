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
    "revision": "06dc081ff573fdf8f687fed8dd6bbdaf"
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
    "url": "assets/js/11.8f01eeae.js",
    "revision": "186f6fd8a365ea647735ec9f2ad6369c"
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
    "url": "assets/js/16.c9f7d9d3.js",
    "revision": "c8fa988aa53816b9e30635a94a3c7cec"
  },
  {
    "url": "assets/js/17.0b2f2664.js",
    "revision": "252f6a060006d8dff168aad2b9a67890"
  },
  {
    "url": "assets/js/18.f10822ba.js",
    "revision": "be49078270a911569434a6e0290b8c33"
  },
  {
    "url": "assets/js/19.ccc3ed81.js",
    "revision": "3e96b02183ec005ea63e3f0023595e25"
  },
  {
    "url": "assets/js/20.3e392d83.js",
    "revision": "d1021c805944aef4661b31ff2bf5841c"
  },
  {
    "url": "assets/js/21.b99bef94.js",
    "revision": "d3590627e7d0cde26be35e18c6532222"
  },
  {
    "url": "assets/js/22.d5ad1f46.js",
    "revision": "d8000d7f61b5ed892849a1a648033bc7"
  },
  {
    "url": "assets/js/23.2af50a32.js",
    "revision": "fae2b769d37f24abd2f8a5f1a7a10d22"
  },
  {
    "url": "assets/js/24.470b6986.js",
    "revision": "6c044372fd6aab709ac38b9ffab82fb6"
  },
  {
    "url": "assets/js/25.db664a57.js",
    "revision": "076b8e4d0519b2996c9957f35b6b2cdd"
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
    "url": "assets/js/app.1533fce9.js",
    "revision": "e6c6ca344c3bf791158a1790c71fdfbe"
  },
  {
    "url": "assets/js/vendors~flowchart.30922f4e.js",
    "revision": "902cd4e5677b110836ef334a267e3c0a"
  },
  {
    "url": "banan.html",
    "revision": "7a6a82c8221d7891eef7dab5ab4e11f9"
  },
  {
    "url": "beijing.gif",
    "revision": "ac72229c4e9d8c85ed4633af25c862e6"
  },
  {
    "url": "categories/ESB/index.html",
    "revision": "fc16880357615eaab1b78f11d3c8b590"
  },
  {
    "url": "categories/index.html",
    "revision": "f41f6f65ac2f9f8bf0e2a0e300dfcf1f"
  },
  {
    "url": "categories/IOT/index.html",
    "revision": "743a0a614350e7ccbb63da19798e98e5"
  },
  {
    "url": "categories/pyqt5/index.html",
    "revision": "3fb44bbdf9710c1a4f92854bcd486d66"
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
    "url": "esb1.html",
    "revision": "a89395c753a5173bd569dafc34f6c032"
  },
  {
    "url": "esb3.html",
    "revision": "532542573bf8bcece2d156ddb361a56d"
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
    "revision": "dea9fdf2a0755783b058303a9292f0f4"
  },
  {
    "url": "iot1.html",
    "revision": "87c0da185716e1fa3c57caf21aa68081"
  },
  {
    "url": "iot2.html",
    "revision": "debec74447afb818a95b9569155fd860"
  },
  {
    "url": "iot3.html",
    "revision": "ee2b857179510b4ae1266bbe538af1b7"
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
    "revision": "e0d95ee99460d1e85ea24dfb4fc7e822"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "muchang.html",
    "revision": "ebb2536d619d6cde5c58b0b3a462875a"
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
    "revision": "03ed5beb4d39c434b6e4861a237a1872"
  },
  {
    "url": "tag/index.html",
    "revision": "2bdcaa0f09f4c48b942ef759ead45f70"
  },
  {
    "url": "tag/使用场景/index.html",
    "revision": "7ee3cc80efef9c108afb1fdf184c309a"
  },
  {
    "url": "tag/全文检索/index.html",
    "revision": "d17f2e29f72775af0c0dce3e8a831add"
  },
  {
    "url": "tag/办案流程/index.html",
    "revision": "966ae93182dc6960f49b6e8a1c85beb5"
  },
  {
    "url": "tag/学生用电管理/index.html",
    "revision": "f831c5a1c8c566db0e4fe215aa8fbe27"
  },
  {
    "url": "tag/应用开发/index.html",
    "revision": "f51e4567f2a2fb4552a4ce42ee082e42"
  },
  {
    "url": "tag/牧场系统/index.html",
    "revision": "c6d04ab77e614936a76ace956ec6e7d8"
  },
  {
    "url": "tag/系统集成/index.html",
    "revision": "27046be6f1d770539e437979737df644"
  },
  {
    "url": "tag/设备接入/index.html",
    "revision": "51153cc90c390506849d0fe0ca13867f"
  },
  {
    "url": "tag/错字识别/index.html",
    "revision": "163777b723f0d9ba9f4d3a7e6c549082"
  },
  {
    "url": "timeline/index.html",
    "revision": "1bb3b5070018a98fcdfe9c00e2c139ee"
  },
  {
    "url": "wangluo-search.html",
    "revision": "f6e8e677d3c930b910ce624886522b01"
  },
  {
    "url": "yongdian.html",
    "revision": "4218468d948b87e3e32844498a72901c"
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
