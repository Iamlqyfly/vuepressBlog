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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "b77e440720078dec770b202077fd8e5d"
  },
  {
    "url": "404.html",
    "revision": "2a4ec38c8580475cf01743a1baa03e3d"
  },
  {
    "url": "assets/css/0.styles.185c448b.css",
    "revision": "f5a93c67b52221db88a7bd614e9765c2"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5acd52d0.js",
    "revision": "2c79d4dd55469ddbb690ed96ab6f1e26"
  },
  {
    "url": "assets/js/11.da48f062.js",
    "revision": "67f6f72d17ab8a85d3b52957c440fd34"
  },
  {
    "url": "assets/js/12.22f6de64.js",
    "revision": "1e76e2a2e34eca0b7a270d440f4ca6ce"
  },
  {
    "url": "assets/js/13.1c87c438.js",
    "revision": "4dfdd1dcaf8eba3296703d48daea71ef"
  },
  {
    "url": "assets/js/14.88bc9c97.js",
    "revision": "3c8714ed138687f1fcdfdacabf1ee08e"
  },
  {
    "url": "assets/js/15.6a2eafbd.js",
    "revision": "4a5208f69824acde7a0e7fcbbb50846f"
  },
  {
    "url": "assets/js/16.3543c62a.js",
    "revision": "aa879f84e2aba937bcf8030a38e71f0a"
  },
  {
    "url": "assets/js/17.b0b853e9.js",
    "revision": "ed3bd0c10b1d47ce73372e39e1060bd7"
  },
  {
    "url": "assets/js/18.863e58d3.js",
    "revision": "b5dec835e37342ee39aac9d3f71ba068"
  },
  {
    "url": "assets/js/19.b9b286c0.js",
    "revision": "abaa6fdade96f5282f322c02f0fc61ad"
  },
  {
    "url": "assets/js/2.ecd68e85.js",
    "revision": "ba0abd703fb0d990eef06f5e005973f3"
  },
  {
    "url": "assets/js/20.9dd6b3a1.js",
    "revision": "ab478ead7ce54d2657559db8d0f1b15e"
  },
  {
    "url": "assets/js/21.add7669d.js",
    "revision": "c1f86e2d4ce2d17a7106178d22e04cb5"
  },
  {
    "url": "assets/js/3.6fe41834.js",
    "revision": "72c3bd662cab13bad13036d89e2778e9"
  },
  {
    "url": "assets/js/4.f835dba1.js",
    "revision": "d7d0fd39193d971e493607e0fe795544"
  },
  {
    "url": "assets/js/5.e10100bd.js",
    "revision": "5757e3a9799dfb8548b7d3a23a7d6f01"
  },
  {
    "url": "assets/js/6.8c6d4596.js",
    "revision": "fde0fc69024bcc716db68670094ea267"
  },
  {
    "url": "assets/js/7.108a9534.js",
    "revision": "3e85957eeac92138cd90c2a336a828a9"
  },
  {
    "url": "assets/js/8.0a0a3ae8.js",
    "revision": "904193af5fa88ddf68254eb2383f377b"
  },
  {
    "url": "assets/js/9.83216727.js",
    "revision": "4f5183ee5d5d26fe6205b7c49c904550"
  },
  {
    "url": "assets/js/app.ef9b4f08.js",
    "revision": "028a61dbfbf909153b4b0d8db8f99cf1"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "cbae87ba594918ef6ec09bd2fa0ffaee"
  },
  {
    "url": "en/index.html",
    "revision": "2a00401955c81c799d30724d6d90d3ce"
  },
  {
    "url": "en/photography/index.html",
    "revision": "ec45ca59b3e2b674ab0aa1f98f16fb11"
  },
  {
    "url": "en/resume/index.html",
    "revision": "0514b3e951758fee10fe65ac36f942c8"
  },
  {
    "url": "imgs/2.jpg",
    "revision": "9cb57f55d181bb0bee8fc7d07578d06f"
  },
  {
    "url": "imgs/3.jpg",
    "revision": "fd28da86710f0add72d54421200a38b7"
  },
  {
    "url": "imgs/4.jpg",
    "revision": "762cebca3d1a368cac14e63189b901e0"
  },
  {
    "url": "index.html",
    "revision": "bce7e6212e80be2e5205aa3aedf7ee6d"
  },
  {
    "url": "zh/article/array-summary.html",
    "revision": "eeea2d615e9dbe57ac58347c0271ffef"
  },
  {
    "url": "zh/article/css-variable-study.html",
    "revision": "f9e3868defdb889bfc64c48808d470ab"
  },
  {
    "url": "zh/article/express-first-day.html",
    "revision": "cf8f7bfa1b59a546953da6c9cb49336d"
  },
  {
    "url": "zh/article/index.html",
    "revision": "5bb0c29ad5d30e23df733e676961ee06"
  },
  {
    "url": "zh/article/mongoDB-first-day.html",
    "revision": "0262fef06b6857c41af545dae6001257"
  },
  {
    "url": "zh/article/set-and-map.html",
    "revision": "fcd9b99bb0bf4a8844c3e1060ed90142"
  },
  {
    "url": "zh/article/string-summary.html",
    "revision": "ddc5f7c091ab5edd2c3217871fc1f9d9"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "ff56f15a57133dc357e6974bc2cf5aae"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "2f5fd23355dea77b91d48431224e7633"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "9734089446162e19ff38b1df9f779257"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
