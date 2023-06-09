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
    "revision": "2506eb18b67552b9a1f54ee03c13e9c3"
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
    "url": "assets/js/app.8833bd6c.js",
    "revision": "42d194301facf7171a6785a7f0ee5815"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "58599b66a61222bc84dd9ca004421a8a"
  },
  {
    "url": "categories/index.html",
    "revision": "553ae3155add4399b3ee59fd219fe00f"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "61a2c018b87bae920a2cd9d36c11027e"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "14c5d463fe480d74f5cc189366f60ce9"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "21b7a49d55d2e0a091a2fda8f549ae6b"
  },
  {
    "url": "index.html",
    "revision": "aeb4a7e8c7950e8724430ffa915ce902"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "3b4b8828ea8ad99778cc55e8d58d1960"
  },
  {
    "url": "tag/index.html",
    "revision": "d83f0f50c240cd91c2a78c611e7e250f"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "b1c7a6fc91033fc1b7d98dd27c4ae402"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "647cceb657bcdbb7dd905b68500cd766"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "cc84c8289fd92a63b92f66f360cc6144"
  },
  {
    "url": "timeline/index.html",
    "revision": "06b8559a48a9497b8fc0a5d53035e234"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "4ea67fd959bc04ecb0ca3fc321d76f92"
  },
  {
    "url": "web-scraper.html",
    "revision": "5099bb2a059b94ff9a910be649e22190"
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
