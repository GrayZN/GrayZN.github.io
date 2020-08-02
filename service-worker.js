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
    "revision": "c28cf19d7e5dfb35a030431c3364a86d"
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
    "url": "assets/js/10.e775be42.js",
    "revision": "56b22b1b3ceb06d46f9424f7b329774e"
  },
  {
    "url": "assets/js/11.194d5165.js",
    "revision": "931e3346efa368488debeeb686c961cb"
  },
  {
    "url": "assets/js/12.b05c335a.js",
    "revision": "5fecbd8f0d4e011a5fef387f3d13fbc5"
  },
  {
    "url": "assets/js/13.663514e0.js",
    "revision": "865f0e4ef8e12cc0f4af55c84a44f084"
  },
  {
    "url": "assets/js/14.8b7b60db.js",
    "revision": "4892246ce46e201ea89240e06e2b8b07"
  },
  {
    "url": "assets/js/15.96db8f9b.js",
    "revision": "0120ba2cde534d65528f02f6160ac226"
  },
  {
    "url": "assets/js/16.fac8ea8d.js",
    "revision": "2e8dfaa574bdb8aecc435a4912b68d0b"
  },
  {
    "url": "assets/js/17.5f6340f3.js",
    "revision": "d522086bec34c8ba732a5634effae43f"
  },
  {
    "url": "assets/js/18.5f17121d.js",
    "revision": "b91b03b3a85361927693654bc198904e"
  },
  {
    "url": "assets/js/19.0d75c7af.js",
    "revision": "45261c2612a7ca7e4488a7c735835635"
  },
  {
    "url": "assets/js/2.9ffc007d.js",
    "revision": "e660af594a22e6f167b63430dc449da4"
  },
  {
    "url": "assets/js/20.437cad22.js",
    "revision": "58cd8cdf8e0936b18b76b9277be91015"
  },
  {
    "url": "assets/js/21.3c7e0569.js",
    "revision": "9b46361078dcbfde1dc5e6df27c406eb"
  },
  {
    "url": "assets/js/22.a6be1f31.js",
    "revision": "bcb9dd93193c2fe122d073076aa0352c"
  },
  {
    "url": "assets/js/23.084234ca.js",
    "revision": "37e985eab4afc7bd49d4b90fcb44a555"
  },
  {
    "url": "assets/js/24.c0b20796.js",
    "revision": "7861a96c300c35d45f4de723404e4029"
  },
  {
    "url": "assets/js/25.77e30141.js",
    "revision": "73366265629ddbbee0eb64178b787e91"
  },
  {
    "url": "assets/js/26.4b497d44.js",
    "revision": "d40e04ad5b755a1a7e2221c1caf91f2a"
  },
  {
    "url": "assets/js/27.8745c21d.js",
    "revision": "ba6ba76d857351ffad7441b324003151"
  },
  {
    "url": "assets/js/3.0094ede4.js",
    "revision": "87f534a0dd8c1aa423f9755cb105b13f"
  },
  {
    "url": "assets/js/4.11d436e4.js",
    "revision": "f6051fe8a78f0635139bc18a75e7076d"
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
    "url": "assets/js/7.e8eb9346.js",
    "revision": "779c92e962d33867d0bc5d8c71fac532"
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
    "url": "assets/js/app.c7cb3b46.js",
    "revision": "a9ae43293bd0fc5f47b641f57f34e18b"
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
    "revision": "f2b8109e9ed4629e496d349d0b8b556e"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "8487083a10e234c9a91f41f17227b2f6"
  },
  {
    "url": "movie/index.html",
    "revision": "21e515786ea50e0cae06e731f2bb36d7"
  },
  {
    "url": "music/index.html",
    "revision": "1369c114c79a1049c53af8e1de21bd3c"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "671b17378a3b4a173d9be26aeeaf01e2"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "8fbcc546953b946ef4f6790d94528a9f"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "0a98d54b26997eb192ec2bb39b44ff42"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "2956cb4aafaf8abac9165f21f9e9e48e"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "b591955c65675e3e25450ee25e68d2b0"
  },
  {
    "url": "note/index.html",
    "revision": "26d1fa7606dadd7ec9ae9e8b20b83c5a"
  },
  {
    "url": "note/LittleFunc.html",
    "revision": "3df85f2bf8d0703442bcb5bdbece4d92"
  },
  {
    "url": "note/MyPromise.html",
    "revision": "25cc5ceb097af936170849bbc557400d"
  },
  {
    "url": "note/ShadowAbout.html",
    "revision": "681a2f22180dfb6ddcc9b5e9e6b44da2"
  },
  {
    "url": "note/VueRouter-KeepAlive.html",
    "revision": "be8d35080d2820c3643e8663db45886d"
  },
  {
    "url": "note/WebDesignSkills.html",
    "revision": "5ff6da042cc57851b1345b81d724fedb"
  },
  {
    "url": "sufjan/index.html",
    "revision": "8d6abbe8aeb9a4d5fea93f275cc71d6c"
  },
  {
    "url": "website/index.html",
    "revision": "9443ff649b14aff1f0232bb799aaece9"
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
