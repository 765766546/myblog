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
    "revision": "99c6e484fec8b44ecf78922a6e965bf6"
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
    "url": "assets/js/12.9923bf29.js",
    "revision": "249537e9d4086f3fb1559af82c37b1b4"
  },
  {
    "url": "assets/js/13.8b9c0517.js",
    "revision": "59b9bedd305136e171b10b2d95b50eae"
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
    "url": "assets/js/app.fea3c857.js",
    "revision": "2a4384f2f9e3c209ec9e2a48791c69bd"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "77481541d6bff5b7b084991aa122c055"
  },
  {
    "url": "categories/index.html",
    "revision": "b77fc91fd5820d71a6ac81f674de8548"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "a3c8332d567f48ce62f8440d67e8081e"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "07704ac45c3521920ff6070a79a45d76"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "b5ed3dfcf5965d1b4f056671992768f0"
  },
  {
    "url": "index.html",
    "revision": "e3a8fc7640888bb8a893cd703692a51f"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "83a7dbd7b494b00e58b01832900d7f3e"
  },
  {
    "url": "tag/index.html",
    "revision": "06e5ed96d43bd17a6d9ee88e0b9dede9"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "5bf280b79d976a6e173922080732f8c9"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "e8817595fe4a43abade07e5cf4bd91f9"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "5456c3987efb00ca1abd98cd24441057"
  },
  {
    "url": "timeline/index.html",
    "revision": "e60319d8e893ce1e4c07e07f2a199ae1"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "5a16330c87c304bfdcc7eb6695ce9b63"
  },
  {
    "url": "web-scraper.html",
    "revision": "6682492bb9d3a17f47750a99f3d3e3b1"
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
