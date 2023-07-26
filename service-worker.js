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
    "revision": "c88bbc833c4247416935c5e43c969857"
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
    "url": "assets/js/1.1a1255b8.js",
    "revision": "8effb3daeca088568764989b20ad607a"
  },
  {
    "url": "assets/js/10.fa521950.js",
    "revision": "837c4322e703be9dc9d80f7e2bdedfd6"
  },
  {
    "url": "assets/js/11.7b5a445f.js",
    "revision": "18d1ab517d2dcc2a825f839588be29f1"
  },
  {
    "url": "assets/js/12.bc140687.js",
    "revision": "2e9a8dd0205cfaf388f39cba39dbface"
  },
  {
    "url": "assets/js/13.cea99b52.js",
    "revision": "03ea7ccccac42e980e2a5dc62cc899c9"
  },
  {
    "url": "assets/js/14.61783d23.js",
    "revision": "529678bfc743a372f64dc076eb3c29bc"
  },
  {
    "url": "assets/js/15.4b677090.js",
    "revision": "bdb6f5c1c03ec053ef8de892cea6a8de"
  },
  {
    "url": "assets/js/16.26f9e242.js",
    "revision": "9094a090a403f3470b28ece427d9b94e"
  },
  {
    "url": "assets/js/17.ae95ecd8.js",
    "revision": "2add8d5c1d2882586c8626a4c2710a2f"
  },
  {
    "url": "assets/js/18.fe08e25c.js",
    "revision": "b5a426061d4e4c4935643c74b9350c53"
  },
  {
    "url": "assets/js/19.a666f6a0.js",
    "revision": "8640305052a5cd540ed13cb3686a38b3"
  },
  {
    "url": "assets/js/4.7fef610e.js",
    "revision": "7e91261eda6f9909d933bcccf18c30d3"
  },
  {
    "url": "assets/js/5.83de1615.js",
    "revision": "e668e7de5ee1927d86926d4d757f4cea"
  },
  {
    "url": "assets/js/6.a95f949d.js",
    "revision": "e3dc8eb73c2c09fbb2d69098bab78e6e"
  },
  {
    "url": "assets/js/7.82e19c7e.js",
    "revision": "56350e10025f436b2d4a69a17f68eb28"
  },
  {
    "url": "assets/js/8.eece0b26.js",
    "revision": "5843de2b963c37bc3f252242e80b61de"
  },
  {
    "url": "assets/js/9.d48d5b36.js",
    "revision": "418a64cf3f7f4868fb7f43ad2593b70b"
  },
  {
    "url": "assets/js/app.6d27a18f.js",
    "revision": "e38da1b2446ed9f803152596e7f03abe"
  },
  {
    "url": "assets/js/vendors~flowchart.f5be73c9.js",
    "revision": "4404ea06afceb99627de31b3944cb863"
  },
  {
    "url": "categories/index.html",
    "revision": "67c9c4c5e974f9cd0b749dd3b6979b68"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "5ded231f56092f934601300dd4f260b9"
  },
  {
    "url": "chunyou.html",
    "revision": "cd5c5b4eeeb7a0a5ea174713e7fe293b"
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
    "revision": "425d0d7d9106983a9f10ee7a4be4d2d1"
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
    "revision": "29a192a5e484431a96c47c63acc4cbed"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "d0ab7246aaaa0aee21e9a00d132308a0"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/index.html",
    "revision": "90d417f22a834f872a27b56110f86d58"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "b238d0533866fc5f16d208cbcb649460"
  },
  {
    "url": "timeline/index.html",
    "revision": "b60a8f991492301cdbd9663cb14e8f11"
  },
  {
    "url": "wodexinqing.html",
    "revision": "4da1ba9aa12763f26ad1b60ec2d1b698"
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
