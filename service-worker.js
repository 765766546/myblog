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
    "revision": "b7a8df66fe4427323b6c44a768159060"
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
    "url": "assets/js/11.58fe7857.js",
    "revision": "d54ea3ccf9c028631731064e12790ad7"
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
    "url": "assets/js/14.6b75ba91.js",
    "revision": "7d42f957c357c18a167b96358f5db79f"
  },
  {
    "url": "assets/js/15.7b74cc8d.js",
    "revision": "7098eaa20fef34bfb77e4c6b33c60644"
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
    "url": "assets/js/app.383ae426.js",
    "revision": "46aeb222fcd1afeb82de5502533bed65"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "734f58093e722a06ec8fdc33b5080476"
  },
  {
    "url": "categories/index.html",
    "revision": "dceed7ccc98358cf44f7ea47132f266c"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "0f4f6967ca77fbc631384b5e22ee147d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "cb29e64474d0e43d08a328a71580ccf8"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "a151d9dfead253125e275f85b421c769"
  },
  {
    "url": "index.html",
    "revision": "0e48645b611e8bdbeb31831ddf21b419"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "4b962539143565d63b116b3f7bc8d631"
  },
  {
    "url": "tag/index.html",
    "revision": "8f3636fdafe54d4ec7274ba9c4e94fc6"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "3abbd1223ddd44802b8ac53d6e255715"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "f18d33a171e89579294c9362a681a34b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3093d615b0b98ba2e66acec9dad7dcf5"
  },
  {
    "url": "timeline/index.html",
    "revision": "1a09e9dd878579e453750703670a75fe"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "8c48f17bac02462143c26cf0d39e97c2"
  },
  {
    "url": "web-scraper.html",
    "revision": "896c8165dfb35465c96c1ec34dfde3e5"
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
