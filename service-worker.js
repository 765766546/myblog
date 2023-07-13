/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-9d146cca'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "1a2e40f68b39d7e8af905d9760804c4b"
  }, {
    "url": "assets/092101.html-6a44b8a3.js",
    "revision": "186e9c8a7fdc8fe23a707299a863f4aa"
  }, {
    "url": "assets/092101.html-b2513f6a.js",
    "revision": "26d399892f494c70caf6f67875354f45"
  }, {
    "url": "assets/092101.html-c05afe2f.js",
    "revision": "b8cdbe9d2f0a9198a423f6e0b889eb8f"
  }, {
    "url": "assets/092101.html-d540137a.js",
    "revision": "f58ff328ebcbf15beff92a964abef9d5"
  }, {
    "url": "assets/121501.html-aa1f70e3.js",
    "revision": "59b0dd084bd8544742d5371f268247d5"
  }, {
    "url": "assets/121501.html-acc2fc49.js",
    "revision": "810af15d69d24185c755fb38483d2764"
  }, {
    "url": "assets/121501.html-b557f65e.js",
    "revision": "6724dade286fa825071a3ca2b1085383"
  }, {
    "url": "assets/121501.html-ef7ad95a.js",
    "revision": "a0b030d4d028e114cf7ce4b08dc4486c"
  }, {
    "url": "assets/404.html-bd7a96c7.js",
    "revision": "43560e84c0b9d0255158116ad404f8ca"
  }, {
    "url": "assets/404.html-f1afe3f3.js",
    "revision": "aab8f1fc93f9326cd3ab13ba4e6c9799"
  }, {
    "url": "assets/api.html-7e7d4228.js",
    "revision": "338279a22b4f713d5a4c8b96e31929e5"
  }, {
    "url": "assets/api.html-8fac3746.js",
    "revision": "1a76dcb865ce1ba7de6cb529571126fd"
  }, {
    "url": "assets/back-to-top-8efcbe56.svg",
    "revision": "cbe7b14b16686bbafd5f42b528a5360e"
  }, {
    "url": "assets/giscus-2a044aea-a5732e4a.js",
    "revision": "8ec06770314ba89d02f1a1cda868e323"
  }, {
    "url": "assets/giscus-theme-dark.css",
    "revision": "37b60f7377d2098dc11aff4ce429720f"
  }, {
    "url": "assets/giscus-theme.css",
    "revision": "c1103530cf4ddee18a7d25dc33c7b816"
  }, {
    "url": "assets/guide.html-46cfdc20.js",
    "revision": "413b090407f4f59d58da4572e57870f7"
  }, {
    "url": "assets/guide.html-7602b094.js",
    "revision": "c5e6054640fcddae619066e50d16ce28"
  }, {
    "url": "assets/home.html-c20b36de.js",
    "revision": "b99ac0cf4c3d324cc8facaa3087cd9fe"
  }, {
    "url": "assets/home.html-d9073a9b.js",
    "revision": "9aa1d761db552540c3b2b79042461278"
  }, {
    "url": "assets/index-27eac26f.js",
    "revision": "dd2a8af51fc573ae65e5426785043507"
  }, {
    "url": "assets/index.html-000f84f8.js",
    "revision": "4082d08086615987e927b472b52e1e2d"
  }, {
    "url": "assets/index.html-096b5ad5.js",
    "revision": "d0eda029250463a12800b1b4798ae94c"
  }, {
    "url": "assets/index.html-16224265.js",
    "revision": "77c9024e557af06ad490c310f713efe5"
  }, {
    "url": "assets/index.html-1ce76d88.js",
    "revision": "61535927505c5b5277d85d31f33b9bae"
  }, {
    "url": "assets/index.html-327d4ca0.js",
    "revision": "8586fc6924928604fc72958f9e63026b"
  }, {
    "url": "assets/index.html-3b011135.js",
    "revision": "d5167212edb0d9a62220db45dd48263c"
  }, {
    "url": "assets/index.html-507bbfb8.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-5c13be16.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-60c022c6.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-69bc30c6.js",
    "revision": "eb15c7f79490344b22b4e94a69ab2c2b"
  }, {
    "url": "assets/index.html-6b89900c.js",
    "revision": "bc5961cc77ac24ea9990ff3a353c621f"
  }, {
    "url": "assets/index.html-6eb74551.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-787f9d75.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-7d6e7175.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-807230be.js",
    "revision": "4e1f031c5a51ba89d371621439abdb0d"
  }, {
    "url": "assets/index.html-8862698d.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-8a2803fa.js",
    "revision": "454a3b84066110359fe49d112d2cd4cc"
  }, {
    "url": "assets/index.html-9dde457d.js",
    "revision": "3340b057360610ba14472c553806b202"
  }, {
    "url": "assets/index.html-9ee23712.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-9f4a035e.js",
    "revision": "84560bda9efefdb18c739de6acf0d780"
  }, {
    "url": "assets/index.html-a64991cc.js",
    "revision": "cddfcffd340439f59796c1cd40d1d809"
  }, {
    "url": "assets/index.html-bfdb98f4.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-e181e7f5.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/index.html-ecf56f23.js",
    "revision": "c91e910622c106f61d091f951e557284"
  }, {
    "url": "assets/plugin.html-264f3203.js",
    "revision": "9aa046ca761393abc2c51aa437d489cd"
  }, {
    "url": "assets/plugin.html-7d3510c0.js",
    "revision": "43c0b914244b2b7da0b9e7373d768d42"
  }, {
    "url": "assets/reco-valine-7d46cf80.js",
    "revision": "ad9dbb53dd7167501cf6f41be6ddd7f7"
  }, {
    "url": "assets/search-0782d0d1.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  }, {
    "url": "assets/search-60f7e790.svg",
    "revision": "e06dedc925c98725f27ce3c44be8cd07"
  }, {
    "url": "assets/setupDevtools-X4YFRK4B-d79485bb.js",
    "revision": "6c493da3cf237d2eb1f2d44fc028161b"
  }, {
    "url": "assets/style-e2bb1963.css",
    "revision": "41546a66958e357d728e60f4269acd11"
  }, {
    "url": "assets/taken-42974550.svg",
    "revision": "ff5b846addb97c521208fc91efed5647"
  }, {
    "url": "assets/theme.html-a7bc5c34.js",
    "revision": "4306a913ae2a7c701d870ad015ef6834"
  }, {
    "url": "assets/theme.html-b678f20f.js",
    "revision": "9c6607a5973762d9c6d644fe015e4a60"
  }, {
    "url": "bg.svg",
    "revision": "cf398a4e163baf4a18104368cbe4b813"
  }, {
    "url": "blogs/category1/2018/121501.html",
    "revision": "cbff3a8f6d3f7e29d3d82e2ad937e91a"
  }, {
    "url": "blogs/category1/2019/092101.html",
    "revision": "edeffefc02f76bfa88131616c96e3895"
  }, {
    "url": "blogs/category2/2016/121501.html",
    "revision": "38f538066704094847bc75b0e9eddf28"
  }, {
    "url": "blogs/category2/2017/092101.html",
    "revision": "482def9b07bebeed6bc4454cb52bf23b"
  }, {
    "url": "blogs/other/guide.html",
    "revision": "98f99ec1a37819e2fc42ee9d5d9e7030"
  }, {
    "url": "categories/category1/1/index.html",
    "revision": "6ae9edcc17b93b4dc01e1e2738381edb"
  }, {
    "url": "categories/category2/1/index.html",
    "revision": "3208711445aabf33be9c0facfa6ab7ca"
  }, {
    "url": "categories/reco/1/index.html",
    "revision": "09ec8f4b895431b6ac6173ab5ed78b1c"
  }, {
    "url": "docs/theme-reco/api.html",
    "revision": "0529c1e6f78646c8aa59a1f276d294cf"
  }, {
    "url": "docs/theme-reco/home.html",
    "revision": "9b18bf9dcf28a8f5e143644792229aa1"
  }, {
    "url": "docs/theme-reco/plugin.html",
    "revision": "6afe230e52125c368235f11703dff025"
  }, {
    "url": "docs/theme-reco/theme.html",
    "revision": "5fc553a3d1f848c445d1b0b257eba4ed"
  }, {
    "url": "friendship-link/index.html",
    "revision": "355648a5debc99846e10079b11e9bdbc"
  }, {
    "url": "head.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  }, {
    "url": "index.html",
    "revision": "8583794daf208087d7b175fd22a34e8f"
  }, {
    "url": "logo.png",
    "revision": "283dc11f7f2171b7a120c474716f83a9"
  }, {
    "url": "posts/1/index.html",
    "revision": "9c91784d7a80f972a2cde0a658d58598"
  }, {
    "url": "posts/index.html",
    "revision": "9bed658e79bd3edcf8278e414e5e71a1"
  }, {
    "url": "tags/tag1/1/index.html",
    "revision": "e025f4ce57c5b7179776c10954631cf3"
  }, {
    "url": "tags/tag2/1/index.html",
    "revision": "746c2f14fe57454ea3a3200d98a8a219"
  }, {
    "url": "tags/tag3/1/index.html",
    "revision": "0a8f495626063fb1da66e891eafd251b"
  }, {
    "url": "tags/tag4/1/index.html",
    "revision": "e701f0362108034fc63106852427605f"
  }, {
    "url": "timeline/index.html",
    "revision": "514e254d7f1729235ed5f0dbeb46339f"
  }], {});

}));
//# sourceMappingURL=service-worker.js.map
