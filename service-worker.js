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
    "revision": "9ef6a25dd808b8967059f895db214b49"
  },
  {
    "url": "assets/css/0.styles.3a649ab1.css",
    "revision": "407dc0c94bb0530b95d040401b3882c4"
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
    "url": "assets/js/1.6e7f2495.js",
    "revision": "4c2613c2fd68288f95214a4a8b34ca34"
  },
  {
    "url": "assets/js/10.c3bcb804.js",
    "revision": "f4a4ef8b970eeb3cd44d7780755e4c4c"
  },
  {
    "url": "assets/js/11.94aaca6a.js",
    "revision": "f16a2a588daecd5b532990ac580d35cd"
  },
  {
    "url": "assets/js/12.038ef8a8.js",
    "revision": "30a90237ca2211b06f556e0a182928c3"
  },
  {
    "url": "assets/js/13.90b78680.js",
    "revision": "63fcd38087138220df931ca404ff136c"
  },
  {
    "url": "assets/js/14.332ce745.js",
    "revision": "bdc85efe7982183d3a87f9ee3840b557"
  },
  {
    "url": "assets/js/15.0933f440.js",
    "revision": "2e846ab634070a2bf37fd7fe103b00fb"
  },
  {
    "url": "assets/js/16.f9ec1d49.js",
    "revision": "e9569299a66890395ef1f7cda5dbcd8d"
  },
  {
    "url": "assets/js/17.03ccce88.js",
    "revision": "d9dd316e1ecaf7f7d3537e6adf12dcb4"
  },
  {
    "url": "assets/js/18.fac0f133.js",
    "revision": "172308b277b932b3f193d0a04355617e"
  },
  {
    "url": "assets/js/19.1efd9bf5.js",
    "revision": "59865939cd76c0893a1dd7230f56a270"
  },
  {
    "url": "assets/js/20.63d0bc30.js",
    "revision": "e8f218d67f416164dcd9a96b160d8c3a"
  },
  {
    "url": "assets/js/4.c9ab9d52.js",
    "revision": "4aea73aff7086ff4b9f4492eff2edac4"
  },
  {
    "url": "assets/js/5.bd253b1e.js",
    "revision": "2355bead9ea82182363fdd5ac2c97ddb"
  },
  {
    "url": "assets/js/6.201dffe6.js",
    "revision": "09f0c7bdb07ec80821564631642f5664"
  },
  {
    "url": "assets/js/7.cdd4378b.js",
    "revision": "37c1707c80db1e0e5f3fb27ff63b4ee0"
  },
  {
    "url": "assets/js/8.b7f51311.js",
    "revision": "fe58c49cf713d042a925e97e9561b4ec"
  },
  {
    "url": "assets/js/9.443bba09.js",
    "revision": "3f2677892ba591eaf3e791198d8479e2"
  },
  {
    "url": "assets/js/app.33d87b39.js",
    "revision": "40996435b1749143389ee798537c2b8a"
  },
  {
    "url": "assets/js/vendors~flowchart.75aeffec.js",
    "revision": "277d307eb70ab9ba5e27704fbdde3559"
  },
  {
    "url": "beijing.gif",
    "revision": "ac72229c4e9d8c85ed4633af25c862e6"
  },
  {
    "url": "categories/index.html",
    "revision": "90004f91bbe36794e256cbfea697e4e0"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "b7db8e41c82409dbe0b607e3c8f1074b"
  },
  {
    "url": "categories/旅游/index.html",
    "revision": "358831ce5bd1a6df025054b4555d84cc"
  },
  {
    "url": "chongqing-lygl.html",
    "revision": "52c0580c3ae9a493a172449e94669dcb"
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
    "revision": "33016e4875302432e31b9cfc91bc5cdd"
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
    "revision": "ff7067e427ef338cd4633f473340057b"
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
    "revision": "17462c556d2360e70a2736a90c91431f"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "2f2ec17ce77ddfee20ff73089966882d"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/index.html",
    "revision": "3a46c3d46f4dd3af0dc0ca1c3d6e6761"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "0f7375308048a12cf3b7c21221eaa919"
  },
  {
    "url": "tag/攻略/index.html",
    "revision": "30645df8eb5eea200a365336d0378f15"
  },
  {
    "url": "timeline/index.html",
    "revision": "e6827ccf4961f04ba29c30b9e042045c"
  },
  {
    "url": "wodexinqing.html",
    "revision": "43bb8797d326a3246c38066e41a99e4d"
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
