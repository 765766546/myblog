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
    "revision": "5ca1f4b28ef8949184afeedd8ec4e585"
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
    "url": "assets/js/17.425d10e4.js",
    "revision": "36057aee543e35d37e3d58cf02c280d2"
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
    "url": "assets/js/app.8bfd61c9.js",
    "revision": "c02e5d8e537b8e64b556e20ae48a3d13"
  },
  {
    "url": "assets/js/vendors~flowchart.ad7e78af.js",
    "revision": "cd161ca0342764dda2e9669e3d059959"
  },
  {
    "url": "categories/index.html",
    "revision": "921cc29db645b66d409e77c006f5e498"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "a6cbd32851c88f7b1050ffb956f34f71"
  },
  {
    "url": "chunyou.html",
    "revision": "2b09b44921de0ba44fd18d086fa8e9d8"
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
    "revision": "f9d49247db828101ed15bd0ade28d4e8"
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
    "revision": "b42644c4910347981791ea0ff8cf5648"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "d2c1099dbc302b62418e64548d7b51fe"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/index.html",
    "revision": "b10c9db6d31acec974b2d5169d99f83d"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "5f8dbab6ca6f5196b7b5727f699f2baa"
  },
  {
    "url": "timeline/index.html",
    "revision": "83c7742b65fe3e59dab80c56c6d25f08"
  },
  {
    "url": "wodexinqing.html",
    "revision": "bacb08cfcae471c2523dbb3326fdf657"
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
