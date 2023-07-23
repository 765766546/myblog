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
    "revision": "a10cec7e0fb0106467588d4a458c77fd"
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
    "url": "assets/js/1.f39593fa.js",
    "revision": "d5921b281a8c52b2a8fd8b246361fb05"
  },
  {
    "url": "assets/js/10.0aa290f4.js",
    "revision": "7650cbd84607546ba01c7c60a7cc39e2"
  },
  {
    "url": "assets/js/11.a8fb2a93.js",
    "revision": "9451a83bdeae661395496f2669900ccc"
  },
  {
    "url": "assets/js/12.9f688a83.js",
    "revision": "6ca7cabccefe23d37090eef635454b49"
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
    "url": "assets/js/4.772e32b5.js",
    "revision": "0c522a2b1621c1ab470f87dadc6b7389"
  },
  {
    "url": "assets/js/5.0225edd1.js",
    "revision": "23189602e1d156992b61aad68eef8257"
  },
  {
    "url": "assets/js/6.e2e95517.js",
    "revision": "ae59219f63008c933b111de0c6ee3db4"
  },
  {
    "url": "assets/js/7.55b59756.js",
    "revision": "6502a454e96077c7a40a5dd163a3c49c"
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
    "url": "assets/js/app.f77b305e.js",
    "revision": "9d7067a4b296f31bd45348cd9e537948"
  },
  {
    "url": "assets/js/vendors~flowchart.89c7dfd1.js",
    "revision": "95b21e25ea5017af36eea73194db484c"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "04de7f259017436ca17cdbda77586c12"
  },
  {
    "url": "categories/index.html",
    "revision": "b1ba466d9c3871e99f60e0ab6c6d854b"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "73e27ba4e388edbaa8d65d779e7c2923"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "69c67f7e61bfd27d7e956d88e25b2f83"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "7a2fb384dae01d247298bdbcca215cd8"
  },
  {
    "url": "index.html",
    "revision": "5c0c4aa336782b89a39704cda84a1ca5"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "d810e68b3c2ec46c27e8e5dfc45c9e49"
  },
  {
    "url": "tag/index.html",
    "revision": "0de55ce4619f226bd7db3112d1c08af4"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "2e77c23c4b61f8bfcf126efe73851db5"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "7f6218768648afc430e78fee7c431e8e"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "c0e44b36c4fb3474bd4b94d3b9b137fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "60ba0b33aab9712d87e2075d668320df"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "b0a20f395671b5ebb3fc2a31f7649477"
  },
  {
    "url": "web-scraper.html",
    "revision": "4b25defc90e5cf92385a975f27e28579"
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
