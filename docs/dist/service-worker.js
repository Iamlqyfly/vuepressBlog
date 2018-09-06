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
    "revision": "a7781ce6bc360278e56a63b93716a6b4"
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
    "url": "assets/js/14.4225a498.js",
    "revision": "a18bcbfdcf81fc68d8957432d6be7fd9"
  },
  {
    "url": "assets/js/15.4f6d9a5c.js",
    "revision": "e02476237d6b566d7f21fa86b1a9637a"
  },
  {
    "url": "assets/js/16.fad6a64e.js",
    "revision": "c182867d8169454961fb2a80130981ca"
  },
  {
    "url": "assets/js/17.8e516905.js",
    "revision": "653a940b5fa4199e2a0fd915091ed255"
  },
  {
    "url": "assets/js/18.6e237040.js",
    "revision": "963598a1f84d1c61f6ad66b3e541206a"
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
    "url": "assets/js/app.06b67ccb.js",
    "revision": "fe6f94a5a558cd3aab4b0e36a3457fcf"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "8e3969055d39af120f9ecca0333d8d12"
  },
  {
    "url": "en/index.html",
    "revision": "aa27855f2d2b489cf7447207085e362c"
  },
  {
    "url": "en/photography/index.html",
    "revision": "295fb6682586f9280166b9a93d32aacb"
  },
  {
    "url": "en/resume/index.html",
    "revision": "ac94d5fb6e23e0c6fca108c248214e5b"
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
    "revision": "bbe55081304d1ce3fa53142d422b978e"
  },
  {
    "url": "zh/article/array-summary.html",
    "revision": "4d5c892cc0215af2beb72d4705a13c1f"
  },
  {
    "url": "zh/article/css-variable-study.html",
    "revision": "5072872241b3810d454ea8e9cfa877fc"
  },
  {
    "url": "zh/article/express-first-day.html",
    "revision": "948e0f886b77e8d3ee75d38815876922"
  },
  {
    "url": "zh/article/index.html",
    "revision": "05314645d109546197a6a297cd163416"
  },
  {
    "url": "zh/article/mongoDB-first-day.html",
    "revision": "6cf908daa68c873f405900590fd5c19e"
  },
  {
    "url": "zh/article/set-and-map.html",
    "revision": "aa2800eb5c1b797fc1c9473c0d8b5fd8"
  },
  {
    "url": "zh/article/string-summary.html",
    "revision": "a133c0544834c2f0a7ddcef0f3fa60e2"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "17de1f27f3370d112e33b40ca434f803"
  },
  {
    "url": "zh/index.html",
    "revision": "23b7b4696ffe8b5079d0e83c47c72f72"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "666a4f8fffd9e0ddc07e37900d055015"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "072d1960d9c60e4406d54027ca1ff29b"
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
