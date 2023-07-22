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
    "revision": "c71fca87cc90af8c8db310a33c55243c"
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
    "url": "assets/js/app.cbad293e.js",
    "revision": "9355b7454aa44e72cf2cf787af64939d"
  },
  {
    "url": "assets/js/vendors~flowchart.89c7dfd1.js",
    "revision": "95b21e25ea5017af36eea73194db484c"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "3f63e0de90351ccf706eb4ab85ed076e"
  },
  {
    "url": "categories/index.html",
    "revision": "320fe2e278b9e6f7c381f48f99816847"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "f13a9370aed1c0ca9b2ff5cb55b561e4"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "17798b61103a83002300800d6171fb87"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "9b809c51f996bfe1928d035c7cb3068f"
  },
  {
    "url": "index.html",
    "revision": "a3dea35f91e6fba8822be2e22d2c2db5"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "abe7ec5168d4592d2002bdd2b6f626b0"
  },
  {
    "url": "tag/index.html",
    "revision": "78c9efcd04b54758ed232aa21a917223"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "2d4042a524410837dea428b5483438a3"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "f17a19e7c64573d9b4b0c78ea73f87b6"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "d4a89ed555760f9b95a1509b3a6c3d84"
  },
  {
    "url": "timeline/index.html",
    "revision": "3cdafd00ac5d5f793cc94d208f59ecd7"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "47dff4fd4e2752de27827af2d94051d8"
  },
  {
    "url": "web-scraper.html",
    "revision": "ddbb0eef72a37233fbcb5fc8d9be22a2"
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
