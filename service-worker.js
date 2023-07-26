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
    "revision": "f74d9de5dd9e3c67317be0a86c907761"
  },
  {
    "url": "assets/css/0.styles.109bf5e1.css",
    "revision": "a9e35946c4d1b54582e07f5bb7183a20"
  },
  {
    "url": "assets/img/1690354592516.21d26b0c.png",
    "revision": "21d26b0ccab487f521bb7a949849d047"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/e46f9dc2d0bc9e5f62ab688e1675b616.e46f9dc2.png",
    "revision": "e46f9dc2d0bc9e5f62ab688e1675b616"
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
    "url": "assets/js/1.1a1255b8.js",
    "revision": "8effb3daeca088568764989b20ad607a"
  },
  {
    "url": "assets/js/10.5e6a0664.js",
    "revision": "0b6cfaad11b5b708950485cd7e6f34a9"
  },
  {
    "url": "assets/js/11.df4aaf28.js",
    "revision": "c1ea3a6eb2043778fa5834444b1f64d9"
  },
  {
    "url": "assets/js/12.66703b15.js",
    "revision": "883560522b1436da20ab61aa77c3aac5"
  },
  {
    "url": "assets/js/13.268c7db7.js",
    "revision": "5ca92a18abc25c831e332c5e986e421d"
  },
  {
    "url": "assets/js/14.e51d510b.js",
    "revision": "073df93156315a216bafc2e4281fee66"
  },
  {
    "url": "assets/js/15.530b5ad0.js",
    "revision": "c03f920f761850f226ff49e8e3a2de7f"
  },
  {
    "url": "assets/js/16.fa836fe3.js",
    "revision": "6f5bdc83781c8605e74e06db10234dc8"
  },
  {
    "url": "assets/js/17.c43abd41.js",
    "revision": "969d6a9e1d1cbc16d7a4f15bf3808fb0"
  },
  {
    "url": "assets/js/18.5a9ca539.js",
    "revision": "87ab10e6debcfaca2a279196910cd440"
  },
  {
    "url": "assets/js/19.1aaaac94.js",
    "revision": "aca03cec6fa35019fd91b7af0da093ad"
  },
  {
    "url": "assets/js/4.0e320198.js",
    "revision": "93950efe2fe971360eb1f52b7ac5cef6"
  },
  {
    "url": "assets/js/5.78317521.js",
    "revision": "74274e3c9ff383f24b8aa79001cbcca7"
  },
  {
    "url": "assets/js/6.2bf5e6a2.js",
    "revision": "85fa58d217d408ccec7c74602523c4b7"
  },
  {
    "url": "assets/js/7.83a227ec.js",
    "revision": "c35a583e423e31a2c42325196929600e"
  },
  {
    "url": "assets/js/8.3bbfcfe5.js",
    "revision": "28e0578beed60d80842c0a14e3201351"
  },
  {
    "url": "assets/js/9.2ab260d8.js",
    "revision": "818b04a046c5fc6d777b2c16966a8251"
  },
  {
    "url": "assets/js/app.ef145ef9.js",
    "revision": "afd4192da7b9391d0be23e12bc95f758"
  },
  {
    "url": "assets/js/vendors~flowchart.1000ee0e.js",
    "revision": "298e92498b77a2c48929ed3c382d46c8"
  },
  {
    "url": "categories/index.html",
    "revision": "f36a04faafa545ed4cf98b6d674b61b9"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "3bc12be8c4ab28c9eade51f403c03a18"
  },
  {
    "url": "chunyou.html",
    "revision": "37ec262cb677057da21e28a2354ae679"
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
    "revision": "da92a6adc0231f1da751b6258370a825"
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
    "revision": "9201c225f3f5e81f21d606b6b63c970b"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "fd8f88e1d88b9b9fc9c3ba36f08f38fe"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/index.html",
    "revision": "7801d26370f24fa34db25efe7e102350"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "191c49c405053f1c61746c63f96d9673"
  },
  {
    "url": "timeline/index.html",
    "revision": "b6ee9ac00f9b01c62001589feb1499ff"
  },
  {
    "url": "wodexinqing.html",
    "revision": "409d6e4278b0c2697227835438b17795"
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
