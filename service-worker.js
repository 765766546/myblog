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
    "revision": "df3273aeef3c89af385bad807c57f6e3"
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
    "url": "assets/js/app.92ac99b0.js",
    "revision": "d95acd16433425984ae7d72a3088b027"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "cc9f8e7414a3c1e54929963e0da92995"
  },
  {
    "url": "categories/index.html",
    "revision": "68de301c3db5c4ec73e4e982498d1598"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "93c0b82047e0a3f9b4e9a577e9ab6081"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "116dbb653667d4c1a29d261a49954cd3"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "6e746b664a9486d52f223a581ff3476a"
  },
  {
    "url": "index.html",
    "revision": "47fbe1daacd4597735df6f1305781747"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "66fa2e4a7a066f50b1c96321414a1983"
  },
  {
    "url": "tag/index.html",
    "revision": "1112658a61ba7f27e2e5061d44575984"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "306f5cf02297bec4fbe7c132524c1bab"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "9d53ce0892ef2b49d30bc218db7e2385"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "101a426d636b80f05641712c6201c6d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "94fb57e860f20e1561f59ae8b1d5460d"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "6e85748f3208d4b910e3e4d151acf7c5"
  },
  {
    "url": "web-scraper.html",
    "revision": "a759eef0ab2ad87a6597e22dae8a2415"
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
