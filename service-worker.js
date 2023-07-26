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
    "revision": "40f0ac6be2519dbe9677b204199fae92"
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
    "url": "assets/js/1.6020a465.js",
    "revision": "07e4ad92154dc5f68ab9fdeb92dda255"
  },
  {
    "url": "assets/js/10.8d0c4068.js",
    "revision": "837c4322e703be9dc9d80f7e2bdedfd6"
  },
  {
    "url": "assets/js/11.7b5a445f.js",
    "revision": "18d1ab517d2dcc2a825f839588be29f1"
  },
  {
    "url": "assets/js/12.da0f24ae.js",
    "revision": "59c4cf48a51605c2d6c0728e7014b426"
  },
  {
    "url": "assets/js/13.64e1249c.js",
    "revision": "caa77d9cbbe8de1c053f61c95a695a05"
  },
  {
    "url": "assets/js/14.d2df82f3.js",
    "revision": "529678bfc743a372f64dc076eb3c29bc"
  },
  {
    "url": "assets/js/15.ab429e28.js",
    "revision": "9b7b7c8891c49905be2fa4f69b78656d"
  },
  {
    "url": "assets/js/16.fe1d8a90.js",
    "revision": "391dfb53a8621fd4c8c46685e78a1a6c"
  },
  {
    "url": "assets/js/17.e7fb82ac.js",
    "revision": "08cf4fec8e0de5707f9ac0a2cca1fb5a"
  },
  {
    "url": "assets/js/18.84199270.js",
    "revision": "dd08b571d9cdaf0561ae3a38ce2301d9"
  },
  {
    "url": "assets/js/19.a666f6a0.js",
    "revision": "8640305052a5cd540ed13cb3686a38b3"
  },
  {
    "url": "assets/js/4.8776fcac.js",
    "revision": "57a61232b16f4c8c1c30e8bc706a7ae7"
  },
  {
    "url": "assets/js/5.6364d498.js",
    "revision": "5c0968940b5ac06c9331cee49f2774f3"
  },
  {
    "url": "assets/js/6.843fd3a2.js",
    "revision": "fa5bbc145e5c57c334a2b74eb5a69e82"
  },
  {
    "url": "assets/js/7.9ddbae3e.js",
    "revision": "ea507d03d525fed7b9f947a30d9813ef"
  },
  {
    "url": "assets/js/8.abaded6c.js",
    "revision": "566cd203b3ea07d9d9e5f4004c4cb255"
  },
  {
    "url": "assets/js/9.fd1be184.js",
    "revision": "418a64cf3f7f4868fb7f43ad2593b70b"
  },
  {
    "url": "assets/js/app.c3fee612.js",
    "revision": "b2b68400c19dfa3e449547765a1666a5"
  },
  {
    "url": "assets/js/vendors~flowchart.f5be73c9.js",
    "revision": "4404ea06afceb99627de31b3944cb863"
  },
  {
    "url": "categories/index.html",
    "revision": "7aa3ae78536f8b6a2a4e04c989d2d688"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "5cabfd03853b1cb0da27c9ce1233eb45"
  },
  {
    "url": "chunyou.html",
    "revision": "f8d2c6855bea1a5b51d4773923b12be8"
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
    "revision": "e348673a53db51098c2ff85855210cc6"
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
    "revision": "036a9e25dd8fb198a81b08a8b95a1731"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "9a041c61e054155d63f66bbfed0ec109"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/index.html",
    "revision": "f93f0df777d6c6c3dad7bf6612e7fcb6"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "4cff53db4021767567cb8872fa464274"
  },
  {
    "url": "timeline/index.html",
    "revision": "6910d8444f5502c460ce6cbed32eaa84"
  },
  {
    "url": "wodexinqing.html",
    "revision": "f63ea881e05270e0b143bf4b3eb61784"
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
