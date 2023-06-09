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
    "revision": "27bd261bcb1022e37de34fe93c1f3416"
  },
  {
    "url": "assets/css/0.styles.4522ba09.css",
    "revision": "5550ee1e6646330a0e001669505cabb9"
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
    "url": "assets/js/1.dc19eba6.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.851bf250.js",
    "revision": "55567e157924abf14bed3f9bf2db5461"
  },
  {
    "url": "assets/js/11.f5c3d59a.js",
    "revision": "3d0e882b841b9d53af9040c9939dbc55"
  },
  {
    "url": "assets/js/12.7716d1a6.js",
    "revision": "d23315c269efa1a2b9afce77306f148d"
  },
  {
    "url": "assets/js/13.b25ccd62.js",
    "revision": "3c4dda22cc66e0dfa17979b8fcf6eab6"
  },
  {
    "url": "assets/js/14.03c13a34.js",
    "revision": "96987f99021ea0b6448114b1fb535442"
  },
  {
    "url": "assets/js/15.e72d06b8.js",
    "revision": "d5bf7deba565b8d88242949a602cba34"
  },
  {
    "url": "assets/js/16.9fe2f265.js",
    "revision": "d1dc66dd30e93a707a88a5c4bf89a5d1"
  },
  {
    "url": "assets/js/3.041ba4dc.js",
    "revision": "f4db067d4b1ff41583a5d79a669b8ea1"
  },
  {
    "url": "assets/js/4.f60db9fd.js",
    "revision": "6b535fdb7a43793d2f2b397a65d07e73"
  },
  {
    "url": "assets/js/5.4b1e5522.js",
    "revision": "2db0569d2acbb21cfb8463eef05d92ba"
  },
  {
    "url": "assets/js/6.1ecf8bc9.js",
    "revision": "b169d154d100cf9505374677d3d710d2"
  },
  {
    "url": "assets/js/7.b7b70b29.js",
    "revision": "f699235d05a5bc9fae83268e959ca601"
  },
  {
    "url": "assets/js/8.2e9efc42.js",
    "revision": "cc8f1fdf371e6db415edaf6ad675600f"
  },
  {
    "url": "assets/js/9.2794c8e8.js",
    "revision": "1ad43d3efa493911d3158347937dac76"
  },
  {
    "url": "assets/js/app.77971ed8.js",
    "revision": "045e92b97f423f80bb4080a1c68ee4b7"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "0514c3b0f22609708fcdf518c3912b2f"
  },
  {
    "url": "categories/index.html",
    "revision": "3247b07f19523f8af99bd1a092aabefa"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2ac09b0e2e28a2c97cb8cdcdfa8e018b"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "42a71d317ad94bee996e5a475c75bff4"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "1da4026b5f4f3516960f883cc6d4f10c"
  },
  {
    "url": "index.html",
    "revision": "3f164a3fa28909da745bcfa9edcb7203"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "c3f162719dcdc909747939ccb2521714"
  },
  {
    "url": "tag/index.html",
    "revision": "2ac95a44f28a7692aa91926ad30e8718"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "b0d9c47b2e5eaff90e45c2d8de63e4ac"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "34c207f84bd89ec3ea11957ada59bb3f"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "d29237baaecb6aa3e813a1339932f0d3"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd4d652e56bfc661f0425b7bde40888d"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "4abc4b7265fe2fc10015a75f6a3d1885"
  },
  {
    "url": "web-scraper.html",
    "revision": "2f1f34748b89201a63c631048b51babb"
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
