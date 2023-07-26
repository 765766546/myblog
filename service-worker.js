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
    "revision": "5cfb8befa31e28fee127ad95bb02d146"
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
    "url": "assets/js/1.7714e33a.js",
    "revision": "24e994d6e5272b332ba58f4228803f6b"
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
    "url": "assets/js/13.9a122075.js",
    "revision": "25d72a7afb5644ab3e4e68242c05b099"
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
    "url": "assets/js/16.2099da83.js",
    "revision": "22f8f4d3df7ee64a4b6afc4bfd999665"
  },
  {
    "url": "assets/js/17.8e43274f.js",
    "revision": "8d026006465a6a4d7550236a92a3aed6"
  },
  {
    "url": "assets/js/18.1bb5516a.js",
    "revision": "b2ef857204c9f6d552551cc56fa86193"
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
    "url": "assets/js/9.0016bd8f.js",
    "revision": "21c171e4d1df606ea6aa5af3b5d26c42"
  },
  {
    "url": "assets/js/app.82aca44e.js",
    "revision": "f1f82971ee398b9ec360158b2ce90fb3"
  },
  {
    "url": "assets/js/vendors~flowchart.ad7e78af.js",
    "revision": "cd161ca0342764dda2e9669e3d059959"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "8782abda34a6f6062e0686774d252630"
  },
  {
    "url": "categories/index.html",
    "revision": "a628f1055d8306ea9594080efd58b94c"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "78f5c2864a99cfd0260ebd2cc1086499"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "957e5dd51e9f1e546bafbcd7732ae66f"
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
    "url": "how-do-i-learn-python.html",
    "revision": "3e9890180d89277c460332b1a266b539"
  },
  {
    "url": "index.html",
    "revision": "c225f35980262b673fe9fa829d215f55"
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
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "22d42d0e26c5f5b02143c6911f2b68e1"
  },
  {
    "url": "tag/index.html",
    "revision": "78f985d14a01c74755e2a61cf952ca5e"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "e67314a294c036b27430f0e3aa1bcca8"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "d17d09270c5178004180cf46ee78e8ef"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3115d2c7347cb407e914b4f70f429d0c"
  },
  {
    "url": "timeline/index.html",
    "revision": "bdf6a4b56a369dc23bc942674f0eddb7"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "c6157a9938477329a0630b955b3ab8aa"
  },
  {
    "url": "web-scraper.html",
    "revision": "945a48208f55593f10df2e3ee30882c0"
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
