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
    "revision": "eb4be2c7249442198cff5d5111825618"
  },
  {
    "url": "assets/css/0.styles.827d369b.css",
    "revision": "58699a80f3ac2e43fc62cf301e7c7c20"
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
    "url": "assets/js/1.3add3331.js",
    "revision": "999cab65b14986cbdba029a38c5cacaf"
  },
  {
    "url": "assets/js/10.0aa290f4.js",
    "revision": "7650cbd84607546ba01c7c60a7cc39e2"
  },
  {
    "url": "assets/js/11.bf3edeb0.js",
    "revision": "d023e1900f5a640a29c88fe42a832fe8"
  },
  {
    "url": "assets/js/12.260fb257.js",
    "revision": "8d54b1b4afd77f6af63811dc9d3737bb"
  },
  {
    "url": "assets/js/13.2df27606.js",
    "revision": "d467541ca3dae3dc2ad4d443a0efddff"
  },
  {
    "url": "assets/js/14.22c6d331.js",
    "revision": "a4ecbe39f16319b6b570e5faf0fd0472"
  },
  {
    "url": "assets/js/15.6074692a.js",
    "revision": "664cb6b828a3cb11d6ac4203e920d8f2"
  },
  {
    "url": "assets/js/16.bc5d2633.js",
    "revision": "61f0128c59dfb77ff37e358ee01b8221"
  },
  {
    "url": "assets/js/17.1fae3ad1.js",
    "revision": "232b5d2c52df7a54787821f5d766630d"
  },
  {
    "url": "assets/js/18.3188151c.js",
    "revision": "a4ffb0cb0f3e31a0872d3fa24c0ed751"
  },
  {
    "url": "assets/js/4.e43af5b5.js",
    "revision": "ed530284163f0ec0aa932860fb7d9f30"
  },
  {
    "url": "assets/js/5.978ff44c.js",
    "revision": "6f91cbf05bc7c97c17029d499fc6936b"
  },
  {
    "url": "assets/js/6.42335c4e.js",
    "revision": "5aaeebb1f161c2e10897785fff0f8ed8"
  },
  {
    "url": "assets/js/7.b481c7c8.js",
    "revision": "fd27c4add823abf2453fe59a4fccdb8d"
  },
  {
    "url": "assets/js/8.e2b10c8a.js",
    "revision": "b2e2f01a02f01b36b8b518c21e5c6180"
  },
  {
    "url": "assets/js/9.d8ca16c8.js",
    "revision": "dcec96f167eb5a1a8d5099b443bb2314"
  },
  {
    "url": "assets/js/app.47752634.js",
    "revision": "81f8850c0f4ad1f8e97f7cb471740ed7"
  },
  {
    "url": "assets/js/vendors~flowchart.89c7dfd1.js",
    "revision": "95b21e25ea5017af36eea73194db484c"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "eb67fcdabb16d39083293578016bfa18"
  },
  {
    "url": "categories/index.html",
    "revision": "31df2eb28d4983a5379dc5706d1eb800"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "9779056927d129aeaa92512cc56518a8"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "2400b33723785141690605ccf4f8a659"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "59792347bc7ed4d9c30718d0c9b46b51"
  },
  {
    "url": "index.html",
    "revision": "fc004567b874d680e13343ff0d339a48"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "4d58283069a3f1a5926663336f629df3"
  },
  {
    "url": "tag/index.html",
    "revision": "b9f59c298dbb34413f7ce97977bd48f4"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "ed3e8151546da12bfddcbbea5d26030f"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "fc5350537c0a77dcdbcf057c81a23e77"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "cf5bd13010a8b9a2c21a68a42b71d00f"
  },
  {
    "url": "timeline/index.html",
    "revision": "98c13ed6586ba1ef4ff36cff7576ef0f"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "67a76dc9b5e9324e3c510a5adb0e35b8"
  },
  {
    "url": "web-scraper.html",
    "revision": "7a057dbac5f782f01727724127f981e0"
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
