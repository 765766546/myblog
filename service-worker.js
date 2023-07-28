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
    "revision": "92a72b40c62538dc5ec049f85e9a1757"
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
    "url": "assets/js/1.6e7f2495.js",
    "revision": "4c2613c2fd68288f95214a4a8b34ca34"
  },
  {
    "url": "assets/js/10.bc2b6f5b.js",
    "revision": "206b33a9e647c55f6ce78efb20c8851c"
  },
  {
    "url": "assets/js/11.2721aa6b.js",
    "revision": "36eb8ee2ba3ae8a336be0a42d9454e52"
  },
  {
    "url": "assets/js/12.27f0aedc.js",
    "revision": "c781fcb052c5fc38786ec4aa61a587ed"
  },
  {
    "url": "assets/js/13.44c49369.js",
    "revision": "0f50284d5fcd4d32e444a970e7d27196"
  },
  {
    "url": "assets/js/14.60883fab.js",
    "revision": "9bf1d100e19b03245d9428a6aa0b52b5"
  },
  {
    "url": "assets/js/15.129fc3de.js",
    "revision": "475c3a86bc7b123e5625c9b2dd539993"
  },
  {
    "url": "assets/js/16.4bf3e3fd.js",
    "revision": "1f8238bd4fea0b64745ccfea11df4db9"
  },
  {
    "url": "assets/js/17.b50b979a.js",
    "revision": "e034636494a471fe83f7260a194236e9"
  },
  {
    "url": "assets/js/18.011f382d.js",
    "revision": "7388f18d43a6c659e31e7c2ac4b47ed9"
  },
  {
    "url": "assets/js/19.16550723.js",
    "revision": "12d38fbe8834e431c1712452ae537cac"
  },
  {
    "url": "assets/js/20.d87344ea.js",
    "revision": "307ef35b6c0b0efefe257b24f816f8af"
  },
  {
    "url": "assets/js/21.55403106.js",
    "revision": "5b337cfdd5acbc1bf9916efce5be179c"
  },
  {
    "url": "assets/js/4.54b6eb1f.js",
    "revision": "022e51264f032022280af6e316d800ac"
  },
  {
    "url": "assets/js/5.16d3d7c6.js",
    "revision": "62d75219f16827e3de3365ed80fac618"
  },
  {
    "url": "assets/js/6.d1a973cc.js",
    "revision": "7031793c6e6acaa0e7679c16dce14344"
  },
  {
    "url": "assets/js/7.497855c4.js",
    "revision": "9572934d015508dc1c9513137f55fbbc"
  },
  {
    "url": "assets/js/8.a9ce801b.js",
    "revision": "17dd1574bbac9a47f322c20e6c06177a"
  },
  {
    "url": "assets/js/9.fb592600.js",
    "revision": "5eb70a9d4043cbdc7470d794d841e973"
  },
  {
    "url": "assets/js/app.2332bc50.js",
    "revision": "feaa601336f0fdc9ee10d74b703d4222"
  },
  {
    "url": "assets/js/vendors~flowchart.6a12f377.js",
    "revision": "0945d73d9e58092e3e51b91c560cdf08"
  },
  {
    "url": "beijing.gif",
    "revision": "ac72229c4e9d8c85ed4633af25c862e6"
  },
  {
    "url": "categories/index.html",
    "revision": "9e5f5d401c34b27f207894401926d76d"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "1b6b1c2288a07bd8838992eb75f03902"
  },
  {
    "url": "categories/旅游/index.html",
    "revision": "40d1a0e4f1e4ad2d437f4ecbf79dde32"
  },
  {
    "url": "chongqing-lygl.html",
    "revision": "b4d8e7ce8efcfa3fda082d6b5f9f52c2"
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
    "revision": "d2cb94e358ae42906b20b44c07006e29"
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
    "revision": "34413cdcbf8e5a5b3cb4a0208e9b5968"
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
    "revision": "a9196cde77f20497ae3b6e925f230a38"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "6d385480054bd750e52866b31c0e77f5"
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
    "revision": "7c0d6944e3da27d127855d738e35e279"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "8fb66db13491d01368c349ede954db60"
  },
  {
    "url": "tag/攻略/index.html",
    "revision": "ae2c7927004ce2b979117b77b41f9179"
  },
  {
    "url": "timeline/index.html",
    "revision": "19840cd562bc2074625e34db5d39ea08"
  },
  {
    "url": "wodexinqing.html",
    "revision": "706b0140c2949ed502edbfc2a4cb3466"
  },
  {
    "url": "xizang-lygl.html",
    "revision": "02bcac5cb31b6c6ba3dc46735162e164"
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
