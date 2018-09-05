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
    "revision": "51c5f63cd6b9f71237d8ae65111b01d7"
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
    "url": "assets/js/app.6d0f9e44.js",
    "revision": "18932a518a81c205622475d87a45be2b"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "36f31ccfe0aef617800a0e662183476d"
  },
  {
    "url": "en/index.html",
    "revision": "75073ab329f87f99f166e607459bf392"
  },
  {
    "url": "en/photography/index.html",
    "revision": "94f277a849f83cfc66b9c60dc93f7710"
  },
  {
    "url": "en/resume/index.html",
    "revision": "8052bdbea061b3885689bfff8ef7dfdb"
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
    "revision": "ca4964e2e2cd8a3a009c1217d4d324f5"
  },
  {
    "url": "zh/article/array-summary.html",
    "revision": "4856db855d23a3d7289403edeb5272ef"
  },
  {
    "url": "zh/article/css-variable-study.html",
    "revision": "c82239fe02f939ef8db746efccda9afe"
  },
  {
    "url": "zh/article/express-first-day.html",
    "revision": "b3ba5ec94f3bd1e70e6533d01f2a7165"
  },
  {
    "url": "zh/article/index.html",
    "revision": "6d0d58ea1565a72edb3048abfee08357"
  },
  {
    "url": "zh/article/mongoDB-first-day.html",
    "revision": "b0b43596333aa84b330f060cf2c29d94"
  },
  {
    "url": "zh/article/set-and-map.html",
    "revision": "827085a20be95e54abd588514b054b2e"
  },
  {
    "url": "zh/article/string-summary.html",
    "revision": "16211deeba6562cec6c075a240a11099"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "bb5371e1d295251c5701f5111e616443"
  },
  {
    "url": "zh/index.html",
    "revision": "a8595f868d6227b27084fba2dda975fd"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "bd6cf55cb2ef68738f68b2c79e6260ed"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "55914c2d458554dfbe7883fa54399ba3"
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
