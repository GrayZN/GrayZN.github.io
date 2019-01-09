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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "acd9558a8782ac7f3c8c9c15440537f9"
  },
  {
    "url": "assets/css/0.styles.b5a68056.css",
    "revision": "5b98d3d29ec960ffb0b7a754c5d0014f"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Lovely.2a830763.jpg",
    "revision": "2a8307633d1596fd3d015f4e4bd4beec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.23ced2d2.js",
    "revision": "389f2618d510d0f433de616a5d692a2c"
  },
  {
    "url": "assets/js/11.0294e726.js",
    "revision": "adaf81d6807706a6b9915a5db11ee5b0"
  },
  {
    "url": "assets/js/12.e563a44d.js",
    "revision": "5523e2573735569f8c10518850e7318b"
  },
  {
    "url": "assets/js/13.aa83e129.js",
    "revision": "2345eb12452b35451f3e1ce068add641"
  },
  {
    "url": "assets/js/14.5ea175a8.js",
    "revision": "ad6711a8cc6716f46e1fae439b7b7d06"
  },
  {
    "url": "assets/js/15.fddd707c.js",
    "revision": "f59f5ec0dc44427a02294f944c8dfde4"
  },
  {
    "url": "assets/js/16.f60f0578.js",
    "revision": "106ea87ecce6c3d4938238e4229d35e5"
  },
  {
    "url": "assets/js/17.6c5e928e.js",
    "revision": "25876cf93759da86b23d2118a5a622ae"
  },
  {
    "url": "assets/js/18.95b4af11.js",
    "revision": "62f3de60fe9ba897f192417b086c497f"
  },
  {
    "url": "assets/js/19.3506eae7.js",
    "revision": "20d3f2c4a97e98300ca6638832b844dd"
  },
  {
    "url": "assets/js/2.45251570.js",
    "revision": "b9995c623ccb162eb35b13ad9ec93e15"
  },
  {
    "url": "assets/js/20.15011e6e.js",
    "revision": "c86cb37edf5057db2b687ca7dec8fb1e"
  },
  {
    "url": "assets/js/21.628c0e01.js",
    "revision": "ee42ae420c56dc663544d95d6e46c854"
  },
  {
    "url": "assets/js/22.38f0a2d2.js",
    "revision": "69d1080a7322f3e649309c1c2ada43fa"
  },
  {
    "url": "assets/js/23.ebf8754a.js",
    "revision": "1629e3aebba6e29b237ce7ea1a0730e5"
  },
  {
    "url": "assets/js/3.a1b22d14.js",
    "revision": "53e40fa6d938cc682a61a47cda1d9c17"
  },
  {
    "url": "assets/js/4.6eb826f6.js",
    "revision": "a6297bee9a13064f23942b65b27cd486"
  },
  {
    "url": "assets/js/5.ad5e43d7.js",
    "revision": "81eca5c0b6e09fc996196d0134648b78"
  },
  {
    "url": "assets/js/6.aacbb97d.js",
    "revision": "0c2b941cb41fcb8f0c858b88915a759f"
  },
  {
    "url": "assets/js/7.bba0f8a1.js",
    "revision": "9892edb42e74bbb1f9bfbff5f4c6da34"
  },
  {
    "url": "assets/js/8.2d7f928a.js",
    "revision": "c605bf4468d88f59b6ea337f63fde43c"
  },
  {
    "url": "assets/js/9.c3f5c4bc.js",
    "revision": "e9c7cfb540e245f342bbbf306ff2fdf7"
  },
  {
    "url": "assets/js/app.490a2c59.js",
    "revision": "3a6cd5ee5e3d6b6e17e9d7f048c027c3"
  },
  {
    "url": "dev/index.html",
    "revision": "2ae4f6f09bebc59d9ebf3a25c947c207"
  },
  {
    "url": "dev/ShadowAbout.html",
    "revision": "1244da0cc076781ed57a7af12532ce25"
  },
  {
    "url": "dev/VueRouter-KeepAlive.html",
    "revision": "b3abd348dfec257bc16915af43de1871"
  },
  {
    "url": "dev/WebDesignSkills.html",
    "revision": "caf2de1511fa56aea139ec10c0466f7a"
  },
  {
    "url": "img/Movie/CMBYN.jpg",
    "revision": "0da7ffae67afeb5c63bd2d73efbe664c"
  },
  {
    "url": "img/Movie/God'sOwnCountry.jpg",
    "revision": "81a76d4dca23f674e4e89b0b90022025"
  },
  {
    "url": "img/Movie/HAWAII.jpg",
    "revision": "d05a773181811e30f9fe482f2464c1dc"
  },
  {
    "url": "img/Movie/Patrik1,5.jpg",
    "revision": "0975a5aa4ad7215328b623ace7b8d558"
  },
  {
    "url": "img/Movie/Shelter.jpg",
    "revision": "d9e7ac18d15613b47db5a2b1f743c866"
  },
  {
    "url": "img/Movie/Taekwondo.jpg",
    "revision": "4faefa382d52c254080cb848589852f8"
  },
  {
    "url": "img/Music/StVincent_MASSEDUCTION_2.png",
    "revision": "38a478c560b773014e56e4aebc2f8964"
  },
  {
    "url": "img/Music/StVincent_MASSEDUCTION_3.jpg",
    "revision": "1fecc4a1f1e3c3469501b88cbefd059b"
  },
  {
    "url": "img/Music/StVincent_MASSEDUCTION_4.jpg",
    "revision": "cb27731c8ce5e110a170dc92915fceb2"
  },
  {
    "url": "img/Music/StVincent_MASSEDUCTION.jpg",
    "revision": "c259111c86b0987c14e8c57a05c9ed08"
  },
  {
    "url": "img/Music/SufjanStevens_Carrie&Lowell.jpg",
    "revision": "7942c171090b2eec8d3520fc71fc7e0e"
  },
  {
    "url": "img/Music/SufjanStevens_Carrie&LowellLive.jpg",
    "revision": "1bd6f7a73e9a22543424dc0d2b8e1eee"
  },
  {
    "url": "img/Music/SufjanStevens_TheGreatestGift.jpg",
    "revision": "3222a8000dca674dba90cbc1d0b8d37f"
  },
  {
    "url": "img/Music/TaylorSwift_1989.jpg",
    "revision": "8c838b1324274a328a4f15bde3774738"
  },
  {
    "url": "img/Sufjan/Angel.png",
    "revision": "675b0d4eb216934d256890726e84c46d"
  },
  {
    "url": "img/Sufjan/CivicDuty.jpg",
    "revision": "8aac8380cc340a6bec405c23f83bce01"
  },
  {
    "url": "img/Sufjan/FriendlyReminder.BeHumble_1.gif",
    "revision": "fcd6246acace157cb9e003efa7e68c84"
  },
  {
    "url": "img/Sufjan/FriendlyReminder.BeHumble_2.png",
    "revision": "32b2dfd73c240147bb555d3260366931"
  },
  {
    "url": "img/Sufjan/Guccigang.jpg",
    "revision": "224986dda2ac02d101aa3751e1a86b0a"
  },
  {
    "url": "img/Sufjan/HappyHolidays.jpg",
    "revision": "fda10eab9663cbdca5c4680440036aa1"
  },
  {
    "url": "img/Sufjan/HappyNewYear2019.jpg",
    "revision": "720d710f7419d90aba818d47853e158e"
  },
  {
    "url": "img/Sufjan/Juror.jpg",
    "revision": "cacc317f57d15adfb3117c3ccefff54b"
  },
  {
    "url": "img/Sufjan/LanderWY-Office.jpg",
    "revision": "b00f5955e42ff19997a6537171beb36e"
  },
  {
    "url": "img/Sufjan/LonelyManOfWinter.jpg",
    "revision": "4845486465ff9da875d516cb95914db0"
  },
  {
    "url": "img/Sufjan/Lovely.jpg",
    "revision": "2a8307633d1596fd3d015f4e4bd4beec"
  },
  {
    "url": "img/Sufjan/MerryChristmas2018.jpg",
    "revision": "46be6a101fb298297b1a1fa70bb14ce4"
  },
  {
    "url": "img/Sufjan/MoreIsMoreAndLessIsMore.jpg",
    "revision": "808066894ba3d18c9de69bc2c9832e0f"
  },
  {
    "url": "img/Sufjan/OriginalDrawingforSufjanStevens-ChristmasUnicornCover.jpg",
    "revision": "bdd723739ad79327aaa966de18cacd7c"
  },
  {
    "url": "img/Sufjan/OSCARS.jpg",
    "revision": "3a38ab0728d6746b0758427835bb7ded"
  },
  {
    "url": "img/Sufjan/PeaceToYou.jpg",
    "revision": "4f9ce55195a5f332603427305e77149a"
  },
  {
    "url": "img/Sufjan/SongsForChristmas.jpg",
    "revision": "5fedf6f1ca903e348a0ea453f4d178dd"
  },
  {
    "url": "img/Sufjan/SUFJAN.jpg",
    "revision": "6e25edc9df6f605cd5ed5cddc8987c6f"
  },
  {
    "url": "img/Sufjan/TheAvalancheVinyl.jpg",
    "revision": "75d6b9608ca88d6c666e48c3e2072fd4"
  },
  {
    "url": "img/Sufjan/TheWorldIsAbundant.jpg",
    "revision": "17b03043f3abaf75e5c88e713c44e95a"
  },
  {
    "url": "img/Sufjan/TonyaHardingVinyl.jpg",
    "revision": "0960f5cb51caac0d71e3adcd16c31cd6"
  },
  {
    "url": "img/Sufjan/Truth.jpg",
    "revision": "57655dd80eeb2ebad87bb79c1e64af2a"
  },
  {
    "url": "img/Sufjan/Vote!.gif",
    "revision": "760465766a22cbd094073ce905da5fd1"
  },
  {
    "url": "img/Sufjan/WhyAreYouFat.jpg",
    "revision": "56c09a2894d4737b6fb393016db951d4"
  },
  {
    "url": "img/Sufjan/YelloBalloon.jpg",
    "revision": "9d53e6b0c2a0062eae8fee99ceacc075"
  },
  {
    "url": "img/Sufjan/YellowVinyl.jpg",
    "revision": "dd7a9adb93a6b011c292e830c2d1e3f3"
  },
  {
    "url": "index.html",
    "revision": "e78ef60a772b5750452f45af78f4c151"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "560413d7b7c63e0629f8867068069e9b"
  },
  {
    "url": "movie/index.html",
    "revision": "024d6abdfd6236b88c8a51ee3b955bda"
  },
  {
    "url": "music/index.html",
    "revision": "d163c71251b9dd01459da0217f9ef0d1"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "f7abbc57dfaef2a365390de3bccf592b"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "957a50237b8e02a6d579f2e907d4bebc"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "1e9b9064d85ab71c91fe6a3659d65285"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "b7bf4079c4f07265dcbf733ce004b6f8"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "156e2d614944e86f05ac6f9a5b2db6b9"
  },
  {
    "url": "sufjan/index.html",
    "revision": "8caa4b135ea956289a8607f7d273c03f"
  },
  {
    "url": "website/index.html",
    "revision": "454ac70931360cdb1bc434265d26ec0b"
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
