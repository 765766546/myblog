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
    "revision": "b4e7a51c14a50a75b3eb69a6bf98b43d"
  },
  {
    "url": "assets/css/0.styles.cd771c84.css",
    "revision": "4c6b50b8a99c333303fa559f0598a91f"
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
    "url": "assets/js/1.dd369c58.js",
    "revision": "426cfbdd00b1d7230295e56b19aefd7f"
  },
  {
    "url": "assets/js/10.9e6567a3.js",
    "revision": "fcdee886fed8d9e021ccc53b5bb6b215"
  },
  {
    "url": "assets/js/11.23e1e132.js",
    "revision": "bc0e58218d40a4757a00bab7cf1960be"
  },
  {
    "url": "assets/js/12.25306526.js",
    "revision": "789e630b8370ccfa435abde3e29d4fc0"
  },
  {
    "url": "assets/js/13.4eaafb6e.js",
    "revision": "25d72a7afb5644ab3e4e68242c05b099"
  },
  {
    "url": "assets/js/14.99fd66ed.js",
    "revision": "338f3285aa5fef9fc7c81cbfd8bea9bc"
  },
  {
    "url": "assets/js/15.113c478c.js",
    "revision": "d0d6285dfb6b062b32baee5d343cfcab"
  },
  {
    "url": "assets/js/16.6a8eb2a6.js",
    "revision": "1dcd90c5609f2fcdaca75695a6b24351"
  },
  {
    "url": "assets/js/17.cf508761.js",
    "revision": "0bd66220c0ebd45f18c4b45029f4c7d7"
  },
  {
    "url": "assets/js/18.8595ae96.js",
    "revision": "06d33ba3ce98bd1e2226278098a76516"
  },
  {
    "url": "assets/js/4.ee963f08.js",
    "revision": "0b85556815309bad0b51530e5924d491"
  },
  {
    "url": "assets/js/5.aeb61830.js",
    "revision": "04eb550010bd8c5fdf41c237abf3fb22"
  },
  {
    "url": "assets/js/6.bb928aa1.js",
    "revision": "c734529b283a2762f0a39af847cb63ad"
  },
  {
    "url": "assets/js/7.ac3a8d15.js",
    "revision": "99d3aea38080ae3f17aca187cfddf15f"
  },
  {
    "url": "assets/js/8.42ed1553.js",
    "revision": "3142beb49a0b9d5e5543adf68edc51cf"
  },
  {
    "url": "assets/js/9.ed238b0b.js",
    "revision": "21c171e4d1df606ea6aa5af3b5d26c42"
  },
  {
    "url": "assets/js/app.6a89d5e8.js",
    "revision": "68b720d42c02f273304bab1b2130b4ca"
  },
  {
    "url": "assets/js/vendors~flowchart.ad7e78af.js",
    "revision": "cd161ca0342764dda2e9669e3d059959"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "d2a10c63cdd7a0580dd835c698135984"
  },
  {
    "url": "categories/index.html",
    "revision": "b8d7e07ad546d4b9408e00a8ef909140"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "dd8de8c41b348101871454208f9f34b0"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "ed8f0196c0680266f798eaf478a83c7e"
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
    "revision": "f1eaa85558466ddabe22cdb661d2825c"
  },
  {
    "url": "index.html",
    "revision": "b38bbf1c7acbe44690aa99f2b281dd6f"
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
    "revision": "78b4a341009dc28189d15ccba4138725"
  },
  {
    "url": "tag/index.html",
    "revision": "867997eead6ebb0046312e5836701f8f"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "63dfdee0e75da4adc5b29854207efe1c"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "2ed8cc33bda460edebc1e6aeca68d225"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "07044a0f2e46d3409e264356c06fe9c3"
  },
  {
    "url": "timeline/index.html",
    "revision": "e951b11e65d1fe83366b8828f09a179b"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "bb1747bcdd9193fffb97f09a953c35a2"
  },
  {
    "url": "web-scraper.html",
    "revision": "91639f41cc52296d5c30319d5dd9e5b3"
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
