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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

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
    "revision": "63b5eb528528269dd39f73bafe760e34"
  },
  {
    "url": "assets/css/0.styles.c7414863.css",
    "revision": "9b1b2e461a8d342fee10614027cb0b7c"
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
    "url": "assets/js/1.85eee79c.js",
    "revision": "a6e6ca5f650f19e36957b39e8b8f302c"
  },
  {
    "url": "assets/js/10.1866e9f2.js",
    "revision": "a8ad8d425c14249553711078e73d75a8"
  },
  {
    "url": "assets/js/11.cafd71bf.js",
    "revision": "6f48dd682f16448fc193714de9633835"
  },
  {
    "url": "assets/js/12.ba026d62.js",
    "revision": "01008e67b0a03f43ac8fab1c80f3737e"
  },
  {
    "url": "assets/js/13.fc1567b3.js",
    "revision": "e8d3cd14d9b144f19d2e596df4e3fe21"
  },
  {
    "url": "assets/js/14.06b66208.js",
    "revision": "ae1cc7fe4fc77e52cb2ee42816817380"
  },
  {
    "url": "assets/js/15.9df8582b.js",
    "revision": "6dbd5c341bd430f63892e51a82a4075b"
  },
  {
    "url": "assets/js/2.ecc61061.js",
    "revision": "9ec3a3fb427d2d149a35f25389b17320"
  },
  {
    "url": "assets/js/3.8285a88e.js",
    "revision": "a6a4ad680918662e7bbdf6e83ab37f94"
  },
  {
    "url": "assets/js/4.d33d8619.js",
    "revision": "f68b97aaa9cb268341f4e91a9726df18"
  },
  {
    "url": "assets/js/5.0b96ea34.js",
    "revision": "e67b6a480828f5b17e4e2a0c33896491"
  },
  {
    "url": "assets/js/6.c64960ad.js",
    "revision": "1dc6759b85d568e1ec05a4f7a2564de1"
  },
  {
    "url": "assets/js/7.f7b159e8.js",
    "revision": "4e95ef84efa574bbf41b360aef35d4ec"
  },
  {
    "url": "assets/js/8.bbe6aeea.js",
    "revision": "4977cc5c1d11c1e53c36c9a5cab06239"
  },
  {
    "url": "assets/js/9.ce65451c.js",
    "revision": "4fc2b39a48531d72f6a797b3b5a231d2"
  },
  {
    "url": "assets/js/app.e3a762ef.js",
    "revision": "5b04e08ba555c5b94494698675999da1"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "36fee6a929edc6910230f826d25ac863"
  },
  {
    "url": "en/index.html",
    "revision": "b8dc5a06542ddda000a22093d166ac49"
  },
  {
    "url": "en/photography/index.html",
    "revision": "3d04da187432de2f5ea557467f93168f"
  },
  {
    "url": "en/resume/index.html",
    "revision": "bac35db5d9810e53d5414cdaa774f623"
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
    "revision": "bfab416915fdc683063b6411d393096d"
  },
  {
    "url": "zh/article/array-summary.html",
    "revision": "5bac866bbc63475cf4768b57dbfcb8cf"
  },
  {
    "url": "zh/article/index.html",
    "revision": "9f6b9feca8cf0f04dc51c779cf18f960"
  },
  {
    "url": "zh/article/string-summary.html",
    "revision": "7fa6d8f06dd92535c1f5bed7516274dd"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "00d31fb09a5636b9ebaaec1a2fed5369"
  },
  {
    "url": "zh/index.html",
    "revision": "06c40774936d5b48569acfb9c7d047e4"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "99c6e5cb50244c4c64a2ba0ffc670644"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "1bed0424ed81f04821f8c8dcd1b5351d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
