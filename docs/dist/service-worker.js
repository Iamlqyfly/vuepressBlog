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
    "revision": "a8469ab15d90403a396eff97c75857a2"
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
    "url": "assets/js/10.d68c045b.js",
    "revision": "dbb9245005a4482c990d6cd1ac9f7e0b"
  },
  {
    "url": "assets/js/11.eef4de16.js",
    "revision": "efc1bc03e9afd0a95e04c36855531cdc"
  },
  {
    "url": "assets/js/12.eea4f98c.js",
    "revision": "fa669b8fe658fd4c49e6f69ad24ee84c"
  },
  {
    "url": "assets/js/13.970c596a.js",
    "revision": "88b79747d4171e90c104d0621f646a88"
  },
  {
    "url": "assets/js/14.a780d504.js",
    "revision": "06d9cb4704314a27ddab5931f52698ff"
  },
  {
    "url": "assets/js/15.4f6d9a5c.js",
    "revision": "e02476237d6b566d7f21fa86b1a9637a"
  },
  {
    "url": "assets/js/16.d3a85447.js",
    "revision": "3ba1cc242c45f51a1386d0cf38b0badd"
  },
  {
    "url": "assets/js/17.de57b7c5.js",
    "revision": "b91538d9e2cc47dd6a6bc836c67a0fd9"
  },
  {
    "url": "assets/js/18.bcf2e0f8.js",
    "revision": "78b92f27d35b93f4d7e32553816fd46d"
  },
  {
    "url": "assets/js/19.7cc727e6.js",
    "revision": "be8540eb739e9091e3aac28abb5140c2"
  },
  {
    "url": "assets/js/2.ecd68e85.js",
    "revision": "ba0abd703fb0d990eef06f5e005973f3"
  },
  {
    "url": "assets/js/20.6322b11c.js",
    "revision": "4c536823d05dea8bb4fd17d4b6407e76"
  },
  {
    "url": "assets/js/21.1736735c.js",
    "revision": "210a7b4d018394d3785450f4fa30cac1"
  },
  {
    "url": "assets/js/22.fda06a81.js",
    "revision": "9b1b74897123afbebb808c9338f950a6"
  },
  {
    "url": "assets/js/3.f22192c3.js",
    "revision": "9dbc888f6c126e65679baca432775810"
  },
  {
    "url": "assets/js/4.e298e65e.js",
    "revision": "659b4e9cd54e93b51799b9e9a72cce0d"
  },
  {
    "url": "assets/js/5.e10100bd.js",
    "revision": "5757e3a9799dfb8548b7d3a23a7d6f01"
  },
  {
    "url": "assets/js/6.8db30d26.js",
    "revision": "3a43c6288cd01566f2e7fc34a8e35de8"
  },
  {
    "url": "assets/js/7.6f246152.js",
    "revision": "8affdc0f497997f965b6b3a51a8a0b5f"
  },
  {
    "url": "assets/js/8.3ea7a58f.js",
    "revision": "7514b197840a0955e0b90fdbad176679"
  },
  {
    "url": "assets/js/9.f76659de.js",
    "revision": "1f0381c928d86a7266948dd56872c5c8"
  },
  {
    "url": "assets/js/app.7f101515.js",
    "revision": "1ae39f280155ca9ca1fb65bfa3fbcacf"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "ca51da588a0db701e6242e4b42edcf7d"
  },
  {
    "url": "en/index.html",
    "revision": "4b0c1a8b18bbd0114306a6302f8106c0"
  },
  {
    "url": "en/photography/index.html",
    "revision": "d587c8125e47e1826c6107f852b4c069"
  },
  {
    "url": "en/resume/index.html",
    "revision": "350e36f35ebd57a37a8c62c7d9d2f467"
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
    "revision": "3fdaff56edc74dcca28dfd2c75e96891"
  },
  {
    "url": "zh/article/array-summary.html",
    "revision": "abd0a9c161b908a9495902488a782029"
  },
  {
    "url": "zh/article/css-variable-study.html",
    "revision": "1faa859e45a0c96e4378b63b6f812cbd"
  },
  {
    "url": "zh/article/express-first-day.html",
    "revision": "ed20525c44b22007157d3336045cd096"
  },
  {
    "url": "zh/article/index.html",
    "revision": "030766c35c15dde145ee6e2cc901f694"
  },
  {
    "url": "zh/article/mongoDB-first-day.html",
    "revision": "dd91fef8cef7598aa12585abee5f4592"
  },
  {
    "url": "zh/article/set-and-map.html",
    "revision": "c89066f193a9cb931f2f836ae46dd223"
  },
  {
    "url": "zh/article/string-summary.html",
    "revision": "387c153bff0344c65927cabfa646a07c"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "90decbbaf0cb04a64351e8e90aa8abd6"
  },
  {
    "url": "zh/index.html",
    "revision": "46f1c9edf6ec36917de7c1856c63abd8"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "84ee16b3a4fc189898c8e0d6dfbba01d"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "18e8acb5c45ca1ac8434b1f823b0f90d"
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
