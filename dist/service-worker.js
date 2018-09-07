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
    "revision": "7e764e0a9b1a18463a8a4819f3bdc417"
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
    "url": "assets/js/app.a906fba3.js",
    "revision": "111a903bf49919c2ff8cf2092d35877e"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "99afe9be5051f04d823b5d5044057036"
  },
  {
    "url": "en/index.html",
    "revision": "defa116595e20c300ea0486d6e9b2e1f"
  },
  {
    "url": "en/photography/index.html",
    "revision": "fe34abf44dafd2a031db6c214aff6ac3"
  },
  {
    "url": "en/resume/index.html",
    "revision": "59f310d9e1a71b9cfc359a51eaf8853a"
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
    "revision": "32f5eb63e439c83da2c3f1740d616847"
  },
  {
    "url": "zh/article/array-summary.html",
    "revision": "dd901d03df99d617952ad2b3d12082a3"
  },
  {
    "url": "zh/article/css-variable-study.html",
    "revision": "07239f08ed818f657abee26c9c37eb57"
  },
  {
    "url": "zh/article/express-first-day.html",
    "revision": "758a8d9e95adb97959381e1134bd912b"
  },
  {
    "url": "zh/article/index.html",
    "revision": "6cc720796145ba534bc78e400d68ebf7"
  },
  {
    "url": "zh/article/mongoDB-first-day.html",
    "revision": "e5220973db36851d3b6101885a7c5794"
  },
  {
    "url": "zh/article/set-and-map.html",
    "revision": "a8a61a809327ec5db7cc0dfa3158936c"
  },
  {
    "url": "zh/article/string-summary.html",
    "revision": "ad6071d841f8b77d90f0fdf6a197b0d7"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "7fa4a4c182350fe2407bb48563fbffae"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "2ee1cc026ad264bda366fb739160e319"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "2734f2707ab61a2498b5da15bbf0cb92"
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
