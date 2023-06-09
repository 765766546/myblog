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
    "revision": "90ac6fb0c7a5a5ea064330df07cfa0bd"
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
    "url": "assets/js/app.ea82c86f.js",
    "revision": "826213e83241747b1683ee91e86a3eab"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "32e8126f4ae10cef306ced46912b2162"
  },
  {
    "url": "categories/index.html",
    "revision": "9f07ab6fe5ef0f9302ff8866b6fb435c"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2a797f51f1d27c96cf6b43710fb7aa01"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "88e8bc0275ea6ad70aa1f02465115cd3"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "f4edc4a8374c64bc55a9f5488f4f3f2a"
  },
  {
    "url": "index.html",
    "revision": "b8548613c861103cdbb013281df303e9"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "05282eabaa526d6d63fcdd54d8be8b16"
  },
  {
    "url": "tag/index.html",
    "revision": "06bfbe0d38ff73c17f25f0f7b105f866"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "8b6dbc2ff0c96918b03f0f425873558d"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "f427409e717df7fb6770026eaff781c1"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "baf5296721dfe35a013116aec2effc6a"
  },
  {
    "url": "timeline/index.html",
    "revision": "3971ddde9896ed6a2439a50fd1e24379"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "07308c8a825ea87b0be626aac0c98ced"
  },
  {
    "url": "web-scraper.html",
    "revision": "6fded3952f79d20e6a5e8d60d9643afb"
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
