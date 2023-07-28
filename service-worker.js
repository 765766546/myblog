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
    "revision": "58c52b6b0556bb7fa72d6fc87a8a1219"
  },
  {
    "url": "assets/css/0.styles.3a649ab1.css",
    "revision": "407dc0c94bb0530b95d040401b3882c4"
  },
  {
    "url": "assets/img/1690354592516.21d26b0c.png",
    "revision": "21d26b0ccab487f521bb7a949849d047"
  },
  {
    "url": "assets/img/1690354854809.38cd0a1f.png",
    "revision": "38cd0a1f5b552a788a725cc6892ad484"
  },
  {
    "url": "assets/img/1690354885965.acbe6d06.png",
    "revision": "acbe6d0668a6deb58f4e7cb6c932ed27"
  },
  {
    "url": "assets/img/1690354938435.ece6f8e4.png",
    "revision": "ece6f8e44870faaf0497e23743a390e6"
  },
  {
    "url": "assets/img/1690354967970.f3bef1ab.png",
    "revision": "f3bef1abd2bd0bfed23296944886d058"
  },
  {
    "url": "assets/img/1690471432463.915a8aa6.png",
    "revision": "915a8aa6078d21a9ad7eae30b9fb3b73"
  },
  {
    "url": "assets/img/1690474536395.edc10d82.png",
    "revision": "edc10d82166e84a85892c24ee4f622ad"
  },
  {
    "url": "assets/img/1690511584621.48068676.png",
    "revision": "480686761d66c19a7742475513569581"
  },
  {
    "url": "assets/img/1690527500738.e0c7bd08.png",
    "revision": "e0c7bd08cb2aac3aab25b31ed156639d"
  },
  {
    "url": "assets/img/1690533243505.54b74bb5.png",
    "revision": "54b74bb56d928ca3916449bd50efaf1c"
  },
  {
    "url": "assets/img/1690565622390.3b482529.png",
    "revision": "3b482529c765ec746fa07f3f7f926df7"
  },
  {
    "url": "assets/img/1690565654221.09389c5c.png",
    "revision": "09389c5c5f6c5f31408271f9ee096b12"
  },
  {
    "url": "assets/img/1690566059225.47102b45.png",
    "revision": "47102b456c4664f38064df79082cfbd5"
  },
  {
    "url": "assets/img/1690566242585.d0ed9e01.png",
    "revision": "d0ed9e014fb619bc68e14ff70eae3c25"
  },
  {
    "url": "assets/img/1690567467596.0358e626.png",
    "revision": "0358e6260805633d68acf3e2385ee346"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
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
    "url": "assets/js/1.6e7f2495.js",
    "revision": "4c2613c2fd68288f95214a4a8b34ca34"
  },
  {
    "url": "assets/js/10.0a7fe971.js",
    "revision": "a11e418b82f7e8ee8046594d88ef4ae3"
  },
  {
    "url": "assets/js/11.fe53d392.js",
    "revision": "825270222c1e0d6466dbca265155dea0"
  },
  {
    "url": "assets/js/12.0e433bec.js",
    "revision": "ef14bc4bab144e1afb9d7dc475160768"
  },
  {
    "url": "assets/js/13.ab4bf1f1.js",
    "revision": "8c5842ca2d9abbc832152eb590c258e3"
  },
  {
    "url": "assets/js/14.ad4ebeb5.js",
    "revision": "4dcb79ff91c628b43f83a0bbe5106cca"
  },
  {
    "url": "assets/js/15.db99e2ad.js",
    "revision": "fcf51c395af7bcf682576c4e86efd4ae"
  },
  {
    "url": "assets/js/16.d609d792.js",
    "revision": "2e3995d553f6eb35dcdf422d9376f3d1"
  },
  {
    "url": "assets/js/17.aaa04c5c.js",
    "revision": "cc3cc2e8d533cb79ffb9febe6a0405a3"
  },
  {
    "url": "assets/js/18.1c9bfece.js",
    "revision": "cd454471fa537f36a7d7f26d4b8e30b0"
  },
  {
    "url": "assets/js/19.c9222732.js",
    "revision": "e8644c284d34a27cdee51f4c9949fa58"
  },
  {
    "url": "assets/js/20.14e1c644.js",
    "revision": "f89824e2875e5c72d23f29c8b5cfd38e"
  },
  {
    "url": "assets/js/21.53be636b.js",
    "revision": "bf47e8efc3b2096ee7190734293630f8"
  },
  {
    "url": "assets/js/22.2bdcb081.js",
    "revision": "abfd120f71c18d1a1658493e87b41d96"
  },
  {
    "url": "assets/js/4.3ce31ff0.js",
    "revision": "96513558041f41e4b04a2668d77dd8f3"
  },
  {
    "url": "assets/js/5.dd12867f.js",
    "revision": "2ecc39d2107bec376ddf063425f34bb3"
  },
  {
    "url": "assets/js/6.b274a771.js",
    "revision": "754d4236a258863850f1ae11ad837355"
  },
  {
    "url": "assets/js/7.61081163.js",
    "revision": "c60b5a150d3fa76cce51c1f7ae398bc3"
  },
  {
    "url": "assets/js/8.788811c0.js",
    "revision": "b38391dd8875010258409ba3b536c94d"
  },
  {
    "url": "assets/js/9.f1552c5d.js",
    "revision": "0a967800475713faaf2e40e4d3e633d5"
  },
  {
    "url": "assets/js/app.1f2f1c77.js",
    "revision": "65fa64b01ad7fcba430268342b140505"
  },
  {
    "url": "assets/js/vendors~flowchart.16adfd93.js",
    "revision": "db3145e32624d42afdca895f9af614c8"
  },
  {
    "url": "beijing.gif",
    "revision": "ac72229c4e9d8c85ed4633af25c862e6"
  },
  {
    "url": "categories/index.html",
    "revision": "421cf0873051c7333c38814af57983c1"
  },
  {
    "url": "categories/二年级/index.html",
    "revision": "d0e09f1fd38eec251f52fe20bad0a04c"
  },
  {
    "url": "categories/旅游/index.html",
    "revision": "66a68233c77b65d6d07a6df55bb18ead"
  },
  {
    "url": "chongqing-lygl.html",
    "revision": "8e839d6271818a0486962058039fe263"
  },
  {
    "url": "chongqing/cq1.png",
    "revision": "915a8aa6078d21a9ad7eae30b9fb3b73"
  },
  {
    "url": "chongqing/cq2.png",
    "revision": "7f10be2cea7409c11ce475783eab3ddf"
  },
  {
    "url": "chongqing/jiefangbei.png",
    "revision": "4880afb04d6930df7873d77c63b469ba"
  },
  {
    "url": "chunyou.html",
    "revision": "4131a8457a0439af3a8d9b038adc4bb2"
  },
  {
    "url": "chunyou1.jpg",
    "revision": "21d26b0ccab487f521bb7a949849d047"
  },
  {
    "url": "chunyou2.jpg",
    "revision": "acbe6d0668a6deb58f4e7cb6c932ed27"
  },
  {
    "url": "chunyou3.jpg",
    "revision": "38cd0a1f5b552a788a725cc6892ad484"
  },
  {
    "url": "chunyou5.jpg",
    "revision": "ece6f8e44870faaf0497e23743a390e6"
  },
  {
    "url": "chunyou6.jpg",
    "revision": "58b298edb34ecb6bb2b1e6c61f0fa7c3"
  },
  {
    "url": "chunyou7.jpg",
    "revision": "f3bef1abd2bd0bfed23296944886d058"
  },
  {
    "url": "emeishan-lygl.html",
    "revision": "7a6a97056a125fda1f8cbacb62a01304"
  },
  {
    "url": "friend.jpg",
    "revision": "95447d879af2d91219e97914ce6b358f"
  },
  {
    "url": "friend1.jpg",
    "revision": "0bb1a26c543fa54100348332b6c4fe98"
  },
  {
    "url": "friend2.jpg",
    "revision": "58c8038ad56334d0dce6213e74ab5fd4"
  },
  {
    "url": "friend3.jpg",
    "revision": "73914be4528a7253a1590140a241284a"
  },
  {
    "url": "index.html",
    "revision": "f57495dcc7495a8140842fbadcf524bc"
  },
  {
    "url": "lanlan-haitan.jpg",
    "revision": "5d1de0bd5f7e1a59dbdced9353777f41"
  },
  {
    "url": "lanlan-haitan.png",
    "revision": "0a9c282df84db1e367d1365aacca73c7"
  },
  {
    "url": "lanlan-haitan1.jpg",
    "revision": "b221a9d8968e8e7f81e1e77f4bac3e15"
  },
  {
    "url": "lanlan-haitan1(1).jpg",
    "revision": "4d1337aa26a87975884453bc83da0fb0"
  },
  {
    "url": "lanlanyiyi.jpg",
    "revision": "b5a946b86dbc00981ce22eb4e69f0ad8"
  },
  {
    "url": "lianhuashan1.jpg",
    "revision": "cb19a62d220c5bf931df1b50e0714f0d"
  },
  {
    "url": "lianhuashan2.jpg",
    "revision": "a0ce038b838a0a774d8f52c3845629ee"
  },
  {
    "url": "lianhuashan3.jpg",
    "revision": "520b74ba20fb524a827b90b20c8b6ce1"
  },
  {
    "url": "lianhuashan4.jpg",
    "revision": "5291e445fe7e3684fdb4f249cc3dabad"
  },
  {
    "url": "lianhuashanyouwan.html",
    "revision": "ed42da8a4464fa34209ea8e1a8daf126"
  },
  {
    "url": "logo.png",
    "revision": "b138ea300294b50a9d87c41f31850a9b"
  },
  {
    "url": "myfriend.html",
    "revision": "f82ce3093503e4cf8d9a8a53e2b40dd1"
  },
  {
    "url": "myweixin-small.jpg",
    "revision": "43bc7a2565cac7c07f8007988c5f2dcd"
  },
  {
    "url": "myweixin.jpg",
    "revision": "9236d4e8dd5e3f0a5fc2b02357ab0b65"
  },
  {
    "url": "tag/index.html",
    "revision": "ec3aa529adcc2cbe29b79954d18bb212"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "206482fef0c6cb76d8e8a649ad4ea841"
  },
  {
    "url": "tag/攻略/index.html",
    "revision": "cb6556b992145fe00f5e9d0aa247c005"
  },
  {
    "url": "timeline/index.html",
    "revision": "3b8e68013d90ab8e4b6e7d314cf6ac42"
  },
  {
    "url": "wodexinqing.html",
    "revision": "ad937f83e03b0be5153950abadb30b03"
  },
  {
    "url": "xizang-lygl.html",
    "revision": "5251096719a0b1302f3c059d7a0f1914"
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
