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
    "revision": "227362b2040aa017c64823158058f7da"
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
    "url": "assets/js/6.9ac50051.js",
    "revision": "a97e5edb22702bab09bdfa778142fc8c"
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
    "url": "assets/js/app.42d69ade.js",
    "revision": "ea36ce3bceb4184d61e535b88eda9a45"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "40cac1cb5aecbdac84d0a23e2a11fe78"
  },
  {
    "url": "en/index.html",
    "revision": "7cd1f9c19a70534a0e085e645008dd14"
  },
  {
    "url": "en/photography/index.html",
    "revision": "2e8596f31e3a45f76edaaab3a17e1634"
  },
  {
    "url": "en/resume/index.html",
    "revision": "817ef1e93faf08f2dfcb6251b69ba176"
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
    "revision": "44c049704bac897df261ce5d6b9b558c"
  },
  {
    "url": "zh/article/array-summary.html",
    "revision": "a5755c11d4e383986e54576fffc3a250"
  },
  {
    "url": "zh/article/css-variable-study.html",
    "revision": "05d5d4186dcb457f777f7e2a6b56bb89"
  },
  {
    "url": "zh/article/express-first-day.html",
    "revision": "a81f7496213855b974a754b4dcf003d3"
  },
  {
    "url": "zh/article/index.html",
    "revision": "2ee0dfe9309e1a84729d67943d2b45df"
  },
  {
    "url": "zh/article/mongoDB-first-day.html",
    "revision": "f7a59e95a39c20d9b84e942b3bd86b98"
  },
  {
    "url": "zh/article/set-and-map.html",
    "revision": "6cc6281a7682a6ba52ffbb60a4830cdc"
  },
  {
    "url": "zh/article/string-summary.html",
    "revision": "41f7853c2649bcf5a81f4f28ab5c5491"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "0b0f0b732eed0884c43b49b93cb53f54"
  },
  {
    "url": "zh/index.html",
    "revision": "dcd9b141e259a11d77c4778f8a1c540e"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "f7721602630c61b91ce6355220193a2f"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "fcdc22cabe7d444396a94fae768195f3"
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
