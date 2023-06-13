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
    "revision": "75d4a49b2f77e5859ae5ccf5bf709461"
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
    "url": "assets/js/1.5ba8257e.js",
    "revision": "d84d7e882a7360c8dd35adf979878bff"
  },
  {
    "url": "assets/js/10.a962667b.js",
    "revision": "593871440d838e913925ba765570bcc3"
  },
  {
    "url": "assets/js/11.f5c3d59a.js",
    "revision": "3d0e882b841b9d53af9040c9939dbc55"
  },
  {
    "url": "assets/js/12.2877a420.js",
    "revision": "497a99c0705a063488922e7f89892b61"
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
    "url": "assets/js/3.c6a1f06f.js",
    "revision": "1a1930be4b149d5f55a152f1dccf0cba"
  },
  {
    "url": "assets/js/4.e7588b00.js",
    "revision": "d552d3305a1d4e6be903c6ee0e057372"
  },
  {
    "url": "assets/js/5.cd2a3d55.js",
    "revision": "b17aa5319c87492bc42de6e033ab6d1d"
  },
  {
    "url": "assets/js/6.3aee6ccb.js",
    "revision": "4dd36bb5d6d4723613d176266b64a8af"
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
    "url": "assets/js/app.7b69d186.js",
    "revision": "a28a3ee95a4c341a05a4209d5af3feb6"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "68110ed3d44ff3e14def7526d6e6a9c2"
  },
  {
    "url": "categories/index.html",
    "revision": "0f91cec2a9a3add559d386bffc30b50c"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "14537229ed4e270dc2b3924b96932370"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "b52944c92cfb44f978d52275485f2775"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "0d5faa12eb6d55e13e7d8646f3a60cf9"
  },
  {
    "url": "index.html",
    "revision": "fbc4c0f340cc805ba9b32cda2328ef6c"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "ba5077bd4c0dfe831c4a837c77dfe6c4"
  },
  {
    "url": "tag/index.html",
    "revision": "4f1f314453e50da91907117da84ae4fc"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "c84ae4cac6a49c20c130eb68709caee6"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "c124c4c24856def3c2cfa02d15b5c79a"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "33520f5edc1cb6cca4ad35b334cdc3ab"
  },
  {
    "url": "timeline/index.html",
    "revision": "5890709a15575ee168faa0979263949c"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "e4bdd241bfa746b19967cb818edf9792"
  },
  {
    "url": "web-scraper.html",
    "revision": "3968e18a18bd8ccc407ca342540f33d0"
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
