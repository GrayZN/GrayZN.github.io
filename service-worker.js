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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1f73bf46f13b5be9b77a3cd0403c95f6"
  },
  {
    "url": "assets/css/0.styles.c3d310f5.css",
    "revision": "00bbdd0b884b0efb6143ca7dafa702a2"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
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
    "url": "assets/js/10.c18989fa.js",
    "revision": "6c5908ee83e7f47fe4b1a8e6cce38847"
  },
  {
    "url": "assets/js/11.592addac.js",
    "revision": "3cd3da549d1cbd879dcf15eb5d032320"
  },
  {
    "url": "assets/js/12.d8f03ced.js",
    "revision": "03c68bdae264cc037c241a7898d38e76"
  },
  {
    "url": "assets/js/13.db50d5b9.js",
    "revision": "a003b0208bdb2de80d82f70d6c5ef94d"
  },
  {
    "url": "assets/js/14.c9b9b5a3.js",
    "revision": "d6c288f28d37d19b4b599b81e2a7e7c0"
  },
  {
    "url": "assets/js/15.98be62b8.js",
    "revision": "eca5e39f3822034437a329acad9efebd"
  },
  {
    "url": "assets/js/16.ceb3832a.js",
    "revision": "881acb1495e6f89409c02072cb70011f"
  },
  {
    "url": "assets/js/17.64b11958.js",
    "revision": "817b0b42e9af4bbe080fd1ccc8281166"
  },
  {
    "url": "assets/js/18.63d3693c.js",
    "revision": "4fd1aae2c510981e0e1ca76fda1c9343"
  },
  {
    "url": "assets/js/19.1f05c393.js",
    "revision": "35b8cb0c689f7c497e28f797d36cda2a"
  },
  {
    "url": "assets/js/2.9ffc007d.js",
    "revision": "e660af594a22e6f167b63430dc449da4"
  },
  {
    "url": "assets/js/20.871c78a6.js",
    "revision": "4ceb5ff7c6dad6be9c1d9b8b71f5f336"
  },
  {
    "url": "assets/js/21.ecd92319.js",
    "revision": "5725654d851f3fdf0b8fd6c4332eef3d"
  },
  {
    "url": "assets/js/22.59314548.js",
    "revision": "d78d6d9a9affc9c981e34d2d7fe78d60"
  },
  {
    "url": "assets/js/23.654a7023.js",
    "revision": "39af1046d8003b90413b3773349f2c0c"
  },
  {
    "url": "assets/js/24.d2a52a4f.js",
    "revision": "6803dc0b1ceb75bc4791137fda60a998"
  },
  {
    "url": "assets/js/25.07670c84.js",
    "revision": "fd595e5a05a13c7a7a029a7f0a0557dc"
  },
  {
    "url": "assets/js/26.640b78b6.js",
    "revision": "7a0fe6359aca155fcd6b409f09df3151"
  },
  {
    "url": "assets/js/3.0094ede4.js",
    "revision": "87f534a0dd8c1aa423f9755cb105b13f"
  },
  {
    "url": "assets/js/4.026be2cb.js",
    "revision": "d0d924b4468b2cf3e80d91872693d892"
  },
  {
    "url": "assets/js/5.f8c55cd8.js",
    "revision": "397a742bc6e89547c4ae666f01589f27"
  },
  {
    "url": "assets/js/6.7623d260.js",
    "revision": "6fff8f99911771dcdbf5ab8f30f93844"
  },
  {
    "url": "assets/js/7.105c6d68.js",
    "revision": "45703d6dd7b65ede900b6cabc39ffe53"
  },
  {
    "url": "assets/js/8.f35fbd69.js",
    "revision": "a09f4f9bc370a58e2f85eefb51ea09b5"
  },
  {
    "url": "assets/js/9.8ddc1b60.js",
    "revision": "7a1fdecda9344cf8159bf6536896c9d5"
  },
  {
    "url": "assets/js/app.5294aa5f.js",
    "revision": "4bb41fafee9ca829a1b220352e567d94"
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
    "url": "img/Sufjan/Boat2019.jpg",
    "revision": "b2853c87be31211b217af0b1b2900bf9"
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
    "url": "img/Sufjan/HAPPY-LOVING-DAY.jpg",
    "revision": "383c0849aea24b550a979c4abdd5d915"
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
    "url": "img/Sufjan/Landscape/1.jpg",
    "revision": "692ec897f9f5595f4ee60513ae964423"
  },
  {
    "url": "img/Sufjan/Landscape/2.jpg",
    "revision": "f518ab315420703bdd4c2ccbd1fbb09e"
  },
  {
    "url": "img/Sufjan/Landscape/3.jpg",
    "revision": "57bb8ec202a41b00aabb08694370dd4a"
  },
  {
    "url": "img/Sufjan/Landscape/4.png",
    "revision": "b59412c31ac84ce078b1ce9689467c30"
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
    "url": "img/Sufjan/TheAscension/CP1.jpg",
    "revision": "34dcd804d5a7f199be94636f03046421"
  },
  {
    "url": "img/Sufjan/TheAvalancheVinyl.jpg",
    "revision": "75d6b9608ca88d6c666e48c3e2072fd4"
  },
  {
    "url": "img/Sufjan/TheSunOnAWinterMorn.jpg",
    "revision": "cc646b9df95f79027bbb171a73d4cced"
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
    "url": "img/Sufjan/Uncle1.jpg",
    "revision": "44fef06ba81457f67f8039f30dee2e0c"
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
    "revision": "bfe23b0fa3b1363ba72c86c4c4ca7a42"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "627576a6cfeae48472c95a64a3412af3"
  },
  {
    "url": "movie/index.html",
    "revision": "f7ffae8d8a218e4d4f68682ad06dedbd"
  },
  {
    "url": "music/index.html",
    "revision": "cf9285cc11e9cce60121348695a6b8f5"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "d6931de1c6b680364721a1e4dc25e876"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "ce344bb9538ddcbfe7c7219ff55521a5"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "041763f59ae87d3108f5082bdb7fc49f"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "ef6d9dc53ebe6edeba4a68980f2ef849"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "705b8beb7fc0a936e19f407583d7fd17"
  },
  {
    "url": "note/index.html",
    "revision": "51e1b24e8b2d3b3315eea7394db1f50f"
  },
  {
    "url": "note/MyPromise.html",
    "revision": "55e1c76aecd3f66c45951855034825d6"
  },
  {
    "url": "note/ShadowAbout.html",
    "revision": "37768a6e271c32104066ac934f89ea29"
  },
  {
    "url": "note/VueRouter-KeepAlive.html",
    "revision": "868ba9d6b480409c3cbc01e269201c85"
  },
  {
    "url": "note/WebDesignSkills.html",
    "revision": "3ffcb5b41ac4de4a556334642e904477"
  },
  {
    "url": "sufjan/index.html",
    "revision": "e72d134e16252fe68819c3b6ab2a36df"
  },
  {
    "url": "website/index.html",
    "revision": "49116f5cfffedcc3cf65a69fed43da8d"
  }
].concat(self.__precacheManifest || []);
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
