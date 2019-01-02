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
    "revision": "ebcd8a7b8429cc62437d126eea85bc89"
  },
  {
    "url": "assets/css/1.styles.f7df1341.css",
    "revision": "4b3388510058b577a0cd70040ae00885"
  },
  {
    "url": "assets/css/2.styles.1985c5bd.css",
    "revision": "cb61f461525029212845fa9a6021f56d"
  },
  {
    "url": "assets/css/3.styles.72caea39.css",
    "revision": "949f5152e393d940d1991792e1091cc3"
  },
  {
    "url": "assets/css/4.styles.13609228.css",
    "revision": "15d82c8fc4be1616cc7f90e8bc8bd8ad"
  },
  {
    "url": "assets/css/5.styles.c011c738.css",
    "revision": "0c6a12fe79f022c3a422118c286c6077"
  },
  {
    "url": "assets/css/styles.8f2a45aa.css",
    "revision": "86eed22259575d8184346a45864e985d"
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
    "url": "assets/js/1.f7df1341.js",
    "revision": "b23792a650aba0141628914ba225043b"
  },
  {
    "url": "assets/js/10.67f925ad.js",
    "revision": "2a93fd5426fe9fddf78915cc16e6d017"
  },
  {
    "url": "assets/js/11.c18a2f4b.js",
    "revision": "ff28c9dce116b2be8e3c7046ee97ddb3"
  },
  {
    "url": "assets/js/12.9f1fc949.js",
    "revision": "0112e69db344b32de021156c1c91abd1"
  },
  {
    "url": "assets/js/13.e4ccb9eb.js",
    "revision": "91477078df773c01597e7486465d1c6d"
  },
  {
    "url": "assets/js/14.ec8c5f4b.js",
    "revision": "5f9475ab50e91fa6a8d5b5bff708e6fc"
  },
  {
    "url": "assets/js/15.9eb34f70.js",
    "revision": "4a32e1fc35f6d10b8910cb965e13c96c"
  },
  {
    "url": "assets/js/16.56fe43a6.js",
    "revision": "7c008f6ffb4f049e247fe390989220cf"
  },
  {
    "url": "assets/js/17.df45451c.js",
    "revision": "7433ceb1c55b5a94f7e3f5996d37a669"
  },
  {
    "url": "assets/js/18.4d65956c.js",
    "revision": "3e1af6121fb2320968d22258f199bb8a"
  },
  {
    "url": "assets/js/19.1900c87a.js",
    "revision": "e9e25315e70d9d837604762f1822d8db"
  },
  {
    "url": "assets/js/2.1985c5bd.js",
    "revision": "204bfd26cc8290455e58de094e6b9b75"
  },
  {
    "url": "assets/js/20.03be048a.js",
    "revision": "30992a8021ecfe430172671a37566436"
  },
  {
    "url": "assets/js/21.eb6519da.js",
    "revision": "015de2962361a5407f8bb53c74066846"
  },
  {
    "url": "assets/js/22.d7154b2a.js",
    "revision": "ddc0f56c1d61d80ee6ec04e73504b214"
  },
  {
    "url": "assets/js/3.72caea39.js",
    "revision": "8fe6c150f8b8eff93a4d1a4543926433"
  },
  {
    "url": "assets/js/4.13609228.js",
    "revision": "66a75e227122c11a91041e7913cd0bfd"
  },
  {
    "url": "assets/js/5.c011c738.js",
    "revision": "7373376a056d8b62e86df8eeaaa37982"
  },
  {
    "url": "assets/js/6.8855961b.js",
    "revision": "cf0ccc4ef83eb0f819c5881053526724"
  },
  {
    "url": "assets/js/7.9ba55558.js",
    "revision": "0ea38929e7d725f38d292dd89edffaca"
  },
  {
    "url": "assets/js/8.f77d36bf.js",
    "revision": "2a1354bebfd76442d17973386e31101a"
  },
  {
    "url": "assets/js/9.684345a7.js",
    "revision": "fadde2a59523ec88f43557d0e276fd38"
  },
  {
    "url": "assets/js/app.8f2a45aa.js",
    "revision": "397c5c68549325700ab33296591aba3e"
  },
  {
    "url": "dev/index.html",
    "revision": "8594a77a2c54f77b3e1fa7e5fd8e47cf"
  },
  {
    "url": "dev/ShadowAbout.html",
    "revision": "1bd519f768d0278c380e365a9148a300"
  },
  {
    "url": "dev/VueRouter-KeepAlive.html",
    "revision": "c9933c1f6d7a9ff115048cea5366c8a6"
  },
  {
    "url": "dev/WebDesignSkills.html",
    "revision": "a23dcca01bd52c80622a0af490099346"
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
    "revision": "caffa863a5dc097012bd7efd45a870c4"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "8351ca347071f7a020d0f36e3ef86a80"
  },
  {
    "url": "movie/index.html",
    "revision": "de841b53883d70c70385a27eb79ea9bf"
  },
  {
    "url": "music/index.html",
    "revision": "56b9ded7fb11000e6550893086b2fb28"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "11c1e83dc189678a03ee8932640519b9"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "a6de63a66dd6aa40fa96a330b7bb1f0a"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "9702cf52e6364bb503365fc75940bf24"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "5e0891bbb9fcd0f3c22ca76cbdba0517"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "e9c961eaafb4440b5a8ca04eb9c6477d"
  },
  {
    "url": "sufjan/index.html",
    "revision": "d9d7ec50f7c9543a0fa262d8363452ab"
  },
  {
    "url": "website/index.html",
    "revision": "1646a8065f9dfa3411bb81cc5622a4cc"
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
