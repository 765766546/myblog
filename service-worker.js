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
    "revision": "df3be6db3bbe89f642753458122a56e7"
  },
  {
    "url": "assets/css/0.styles.8eecd07a.css",
    "revision": "ffb1f7fc69deb1cad8ee07c9257dafd0"
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
    "url": "assets/js/1.af65cf41.js",
    "revision": "753bbfb154223929ffb9b22bfa38705c"
  },
  {
    "url": "assets/js/10.d9e06b9b.js",
    "revision": "3fd27faae1d92a249b6e4461d30e470c"
  },
  {
    "url": "assets/js/11.07ca085b.js",
    "revision": "5345f24548004e5d0984eb02b657915f"
  },
  {
    "url": "assets/js/12.fde1624d.js",
    "revision": "76292005b4466621a07de619d0964210"
  },
  {
    "url": "assets/js/13.9fa67c60.js",
    "revision": "bad9c9e0e78a6cdbdfa267475c0b3628"
  },
  {
    "url": "assets/js/14.f7ee63a6.js",
    "revision": "cc0e0cfa1e72c0396e1f1edb6f41e2a8"
  },
  {
    "url": "assets/js/15.ef0e23c5.js",
    "revision": "ed39bebacb94dd97ddfde23b5dcb03b9"
  },
  {
    "url": "assets/js/16.dd5a44f1.js",
    "revision": "873ef7a2c37001853620d70cbde13190"
  },
  {
    "url": "assets/js/17.ef8b1af5.js",
    "revision": "cf96499eb52d4db9737ea8a5b6ce779d"
  },
  {
    "url": "assets/js/4.7cec843b.js",
    "revision": "8afc4530059d6ef698d38c04acddf894"
  },
  {
    "url": "assets/js/5.44032416.js",
    "revision": "c871da01f6280d9a229754d1f1b833e1"
  },
  {
    "url": "assets/js/6.e724f852.js",
    "revision": "a91b678766baf1ff2011d55d6162a02d"
  },
  {
    "url": "assets/js/7.11db455d.js",
    "revision": "ed6c63310f99e0e6b275df1e5419b91d"
  },
  {
    "url": "assets/js/8.1e331488.js",
    "revision": "8f2fac1be9bf366d62ca29461a787559"
  },
  {
    "url": "assets/js/9.edd2f0fb.js",
    "revision": "adcb15fea197a059f886858a816fe902"
  },
  {
    "url": "assets/js/app.b9278249.js",
    "revision": "5bd0a4e8c8695d2b13b56c832a604436"
  },
  {
    "url": "assets/js/vendors~flowchart.a7b0e677.js",
    "revision": "500358c7b7aac3b5045b77e60b54fdf6"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "490dc31cd02b4db34d152b870cda0a1c"
  },
  {
    "url": "categories/index.html",
    "revision": "95551d2a05f09bd6e08a4106afd27dfc"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "1195219960aa9491be315bdf25aebbfd"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "a27c47594a80b8d77c675ed55fe38aa7"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "7b16f5e44eeb549ac7a262fbe8e77920"
  },
  {
    "url": "index.html",
    "revision": "1b5ab4eb943d9dc289fcf65b0719c1cd"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "90361bd70507773443416fd5c7bbacd2"
  },
  {
    "url": "tag/index.html",
    "revision": "c3db8794e548a2d56091197968f1e3a1"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "8aa50de80d4e128e9faaca430102cd72"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "d006ba7f01357023a2fc31bf216d447b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "724237ce4d2d848816816fe4d7644d82"
  },
  {
    "url": "timeline/index.html",
    "revision": "058b416be151e9d571f0d3c92146aed6"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "c6a45712e7beded5b304b1f02ccce4b9"
  },
  {
    "url": "web-scraper.html",
    "revision": "4931d90b1436a3205b45324477883f43"
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
