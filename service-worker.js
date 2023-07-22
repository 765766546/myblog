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
    "revision": "291c63592dd5157b5e94dd55328c1206"
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
    "url": "assets/js/app.4c04d570.js",
    "revision": "f3ec3092d1959e7684ecd64b5bca7e4b"
  },
  {
    "url": "assets/js/vendors~flowchart.89c7dfd1.js",
    "revision": "95b21e25ea5017af36eea73194db484c"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "5032a2c61af2ee385b1489e177232223"
  },
  {
    "url": "categories/index.html",
    "revision": "8e57fc5a2e2b34164b11ccc7c255ba3a"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "4eb40f603c85c5de27d7b9e705f71867"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "9a7bcbe78c497a93d895c758e484ec4d"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "a255dcb38ee26801125cbdf18a4ed932"
  },
  {
    "url": "index.html",
    "revision": "ed6eb0765af1acfc81461eb9de0b007f"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "3ee79a92ce10664033bcfa04567ae445"
  },
  {
    "url": "tag/index.html",
    "revision": "681874be2a1411460e91d3fdd22985f5"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "9913fb86e19ced33fe713aa13ca14b0a"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "fa4f593e4be8d72d230117562ec3ff01"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "a97a5fd68f273181ad0c272cdf3cd63b"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a1088dcde44a3f12474e949e6224405"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "19d49a786d3bc6140fa8f7e7fb0524bc"
  },
  {
    "url": "web-scraper.html",
    "revision": "7072d0e94a4416d9291e881a9f073806"
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
