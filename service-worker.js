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
    "revision": "c0e8f08287275fd86b2b6e13e9cf0606"
  },
  {
    "url": "assets/css/0.styles.109bf5e1.css",
    "revision": "a9e35946c4d1b54582e07f5bb7183a20"
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
    "url": "assets/js/10.e82b554d.js",
    "revision": "38d991a61617336b43f5ade461f447aa"
  },
  {
    "url": "assets/js/11.0b7ca327.js",
    "revision": "0cb9c7d8c2d6197a8d1be3a7d58a976a"
  },
  {
    "url": "assets/js/12.25306526.js",
    "revision": "789e630b8370ccfa435abde3e29d4fc0"
  },
  {
    "url": "assets/js/13.db693730.js",
    "revision": "15c7f21a63b62c3f80d6d967b44bae9f"
  },
  {
    "url": "assets/js/14.0eeba60d.js",
    "revision": "b058aa2aaddc185b32a8e45cddbd4c8a"
  },
  {
    "url": "assets/js/15.6d23ae91.js",
    "revision": "81a039080b351633a8683d2d75b9ad26"
  },
  {
    "url": "assets/js/16.736b99cf.js",
    "revision": "60c987601899c60cb530d10409bd09ac"
  },
  {
    "url": "assets/js/17.f785e3d8.js",
    "revision": "2ae6cc3aa215f61ca319a62f3e5f36bf"
  },
  {
    "url": "assets/js/18.4099982e.js",
    "revision": "a04f64d5ef297c33de2b69bc3ed68d0b"
  },
  {
    "url": "assets/js/19.42850edc.js",
    "revision": "fe1c8daff958b6f911e39f0b77b1333e"
  },
  {
    "url": "assets/js/4.215f4ac8.js",
    "revision": "9b406947125d13b79932a62027c6a2e5"
  },
  {
    "url": "assets/js/5.a055731a.js",
    "revision": "f208fd3b216ef2ccfac6da46140f7476"
  },
  {
    "url": "assets/js/6.9348ca5c.js",
    "revision": "fb8e7f5fe3c3c644601cfe8dcb865f6e"
  },
  {
    "url": "assets/js/7.b357afd0.js",
    "revision": "80cfcbee66fce37719eca7a57a82cb83"
  },
  {
    "url": "assets/js/8.ce5eab32.js",
    "revision": "3142beb49a0b9d5e5543adf68edc51cf"
  },
  {
    "url": "assets/js/9.3112b9ec.js",
    "revision": "eb4bad96dbb75984dd066cb1810d8349"
  },
  {
    "url": "assets/js/app.f8d58181.js",
    "revision": "0b07375f17fa993954b02f2b376c14f0"
  },
  {
    "url": "assets/js/vendors~flowchart.ad7e78af.js",
    "revision": "cd161ca0342764dda2e9669e3d059959"
  },
  {
    "url": "categories/index.html",
    "revision": "f4be9533ecdf761fa9a0637de4bf3921"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "ac0d5d9358a908bc9517b0c4db3c400c"
  },
  {
    "url": "chunyou.html",
    "revision": "e733b3c24450e56efc11c95a7ae39350"
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
    "revision": "4438752543dc4d5396ca2044b29419a1"
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
    "revision": "ba3de56528e32dc633349cf943a83192"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "3a4bbf1719f8cbba112e2f290acd2f56"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/index.html",
    "revision": "d4dbeb1e44ee66697e30ddddf9649d73"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "ff7a7af0246c6061357f92ac2241c8cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "8223302075b72c26f8e88b8af49b5c78"
  },
  {
    "url": "wodexinqing.html",
    "revision": "d76a433f08c16d898c746aa54303059c"
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
