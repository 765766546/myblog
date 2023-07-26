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
    "revision": "1fcf41784e1a8e879afadc89ed89916a"
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
    "url": "assets/js/15.03357242.js",
    "revision": "9b7b7c8891c49905be2fa4f69b78656d"
  },
  {
    "url": "assets/js/16.978b39be.js",
    "revision": "1e3a7f27ef1b24a2f050714f075ac9d8"
  },
  {
    "url": "assets/js/17.5ed84bbb.js",
    "revision": "25b3233f4ecb1aa9a1488abfcd5e6b89"
  },
  {
    "url": "assets/js/18.791d9b2f.js",
    "revision": "dd08b571d9cdaf0561ae3a38ce2301d9"
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
    "url": "assets/js/8.1bb29d1b.js",
    "revision": "d474b40f560de68fd373e2661fa58008"
  },
  {
    "url": "assets/js/9.d48d5b36.js",
    "revision": "418a64cf3f7f4868fb7f43ad2593b70b"
  },
  {
    "url": "assets/js/app.2442260d.js",
    "revision": "60e0ab5ee8307dfce2699fac86d9fb94"
  },
  {
    "url": "assets/js/vendors~flowchart.f5be73c9.js",
    "revision": "4404ea06afceb99627de31b3944cb863"
  },
  {
    "url": "categories/index.html",
    "revision": "5b1512a278d5d86028b09ddaf2ca276a"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "2d656d000b678e0e0ed8218c1570dbe0"
  },
  {
    "url": "chunyou.html",
    "revision": "c21294b03b384b5cc9d345743299d1d0"
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
    "revision": "a690afcc9edc39227fe7123fb2eb1ab7"
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
    "revision": "f1a02440f064aabb35eacd9e47fc19d8"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "188e9027ead33b64b0146efd128c8db0"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/index.html",
    "revision": "8145d23b381c98b25cae4f47222aaede"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "40864044a85e9f9439b27cf54e10c62b"
  },
  {
    "url": "timeline/index.html",
    "revision": "b4e772dd81ea3a4e91ddab26ac0c537b"
  },
  {
    "url": "wodexinqing.html",
    "revision": "0ab1f08bd27c62fe62a99fe213cce095"
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
