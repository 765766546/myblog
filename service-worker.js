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
    "revision": "1374a7efaba8135e71e652059dbd4fa1"
  },
  {
    "url": "assets/css/0.styles.3a9b2f53.css",
    "revision": "e3b5e196aeeb2bd884c6c02a9af7336d"
  },
  {
    "url": "assets/img/1690354592516.21d26b0c.png",
    "revision": "21d26b0ccab487f521bb7a949849d047"
  },
  {
    "url": "assets/img/1690354854809.38cd0a1f.png",
    "revision": "38cd0a1f5b552a788a725cc6892ad484"
  },
  {
    "url": "assets/img/1690354885965.acbe6d06.png",
    "revision": "acbe6d0668a6deb58f4e7cb6c932ed27"
  },
  {
    "url": "assets/img/1690354938435.ece6f8e4.png",
    "revision": "ece6f8e44870faaf0497e23743a390e6"
  },
  {
    "url": "assets/img/1690354967970.f3bef1ab.png",
    "revision": "f3bef1abd2bd0bfed23296944886d058"
  },
  {
    "url": "assets/img/1690471432463.915a8aa6.png",
    "revision": "915a8aa6078d21a9ad7eae30b9fb3b73"
  },
  {
    "url": "assets/img/1690474536395.edc10d82.png",
    "revision": "edc10d82166e84a85892c24ee4f622ad"
  },
  {
    "url": "assets/img/1690511584621.48068676.png",
    "revision": "480686761d66c19a7742475513569581"
  },
  {
    "url": "assets/img/1690527500738.e0c7bd08.png",
    "revision": "e0c7bd08cb2aac3aab25b31ed156639d"
  },
  {
    "url": "assets/img/1690533243505.54b74bb5.png",
    "revision": "54b74bb56d928ca3916449bd50efaf1c"
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
    "url": "assets/js/1.69dfa4e7.js",
    "revision": "856fa3e7698312c0ef320c2d97dba491"
  },
  {
    "url": "assets/js/10.b033c3c3.js",
    "revision": "efe951f9432f5e3f906f704b2a6f36b7"
  },
  {
    "url": "assets/js/11.381e0c71.js",
    "revision": "a5084bba030acb9257536b79a0e4d9c4"
  },
  {
    "url": "assets/js/12.6b3da204.js",
    "revision": "68b8e6a1a26fe796cfc528ed5412a033"
  },
  {
    "url": "assets/js/13.50e1f6e8.js",
    "revision": "1e71a6f7e75a1eab06d609be6a58fa6b"
  },
  {
    "url": "assets/js/14.fae61133.js",
    "revision": "d4a0442bce816c2227b18701e05790b7"
  },
  {
    "url": "assets/js/15.c751542e.js",
    "revision": "1fe2fdd0a3790f4d57e31f233ecce0bc"
  },
  {
    "url": "assets/js/16.5a7be411.js",
    "revision": "93c032e9bc13ce6a1093ad1943c2dfd4"
  },
  {
    "url": "assets/js/17.0b6294de.js",
    "revision": "7f4bfb32e4b8dfc77ffe6f176b0477e3"
  },
  {
    "url": "assets/js/18.98349f46.js",
    "revision": "323501142c1d8e378ec3c62a65521a5c"
  },
  {
    "url": "assets/js/19.58c39e0a.js",
    "revision": "59694f599935cd84134b4c29739f3c79"
  },
  {
    "url": "assets/js/20.e0ee0b02.js",
    "revision": "f8bea2fa68fdb6af2c9781a58a15ac53"
  },
  {
    "url": "assets/js/21.3a3ebbf5.js",
    "revision": "ab51c2ee078e19cbb3bfee6e81787b39"
  },
  {
    "url": "assets/js/4.69a0f438.js",
    "revision": "debfee88aa5fb60ab320941f212d9591"
  },
  {
    "url": "assets/js/5.1b4cffcb.js",
    "revision": "8a29371fd8026fe2cb7a4cb7fadc0c0c"
  },
  {
    "url": "assets/js/6.4b4a1e2f.js",
    "revision": "d227edd23e3002a2a2fbb96d5b75bd9f"
  },
  {
    "url": "assets/js/7.ba186cc3.js",
    "revision": "e743ed6cd7fc90663244e8104a05accc"
  },
  {
    "url": "assets/js/8.52911633.js",
    "revision": "bfb09311d3c7dfc83b9e7df683671abd"
  },
  {
    "url": "assets/js/9.3f6e7f2e.js",
    "revision": "9bc84f09a45f278bc7ec5b412b8af485"
  },
  {
    "url": "assets/js/app.8c283061.js",
    "revision": "460f8b12e945065889bb8d633abb0066"
  },
  {
    "url": "assets/js/vendors~flowchart.ee237abd.js",
    "revision": "de8bcef07395f9fab569f43a0c8e2f54"
  },
  {
    "url": "beijing.gif",
    "revision": "ac72229c4e9d8c85ed4633af25c862e6"
  },
  {
    "url": "categories/index.html",
    "revision": "3f510443cd1f7b0cdfd69a067d6e7444"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "d502d6ee3fa3bda215653356881e1552"
  },
  {
    "url": "categories/旅游/index.html",
    "revision": "d458d5969b85953cdba0c6455278daa1"
  },
  {
    "url": "chongqing-lygl.html",
    "revision": "ce7ef502229f61895ba4fb1c9ac23dde"
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
    "url": "chunyou.html",
    "revision": "caaa66a0a0fa33dcf37cc6a6d5ce34a6"
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
    "revision": "5d98e31036d4b7b81a9817d22e538b61"
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
    "url": "lianhuashanyouwan.html",
    "revision": "76b346d289939ea163cd3cc27233df31"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "f08a52799a7289b0d1301b85a16933de"
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
    "url": "tag/index.html",
    "revision": "df0c53d98ff8d877b41d7fd5939323b0"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "5892285a827c7812aba18f20a76a119e"
  },
  {
    "url": "tag/攻略/index.html",
    "revision": "3d97547b4ccb13c9e418418adf60175d"
  },
  {
    "url": "timeline/index.html",
    "revision": "abb7d5d7517618a1c474a611d3a697f0"
  },
  {
    "url": "wodexinqing.html",
    "revision": "46a40feb332b0040a387fb5f1bfac3af"
  },
  {
    "url": "xizang-lygl.html",
    "revision": "e763e6f0256d032625f8f391048fee94"
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
