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
    "revision": "36ce834f194fee6643a14f3ce7475978"
  },
  {
    "url": "assets/css/0.styles.b3be74d2.css",
    "revision": "2464ee951256cf7f1dbd7469f15c79be"
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
    "url": "assets/js/10.27ccff55.js",
    "revision": "6a521171930167ee194b3a4629df19a9"
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
    "url": "assets/js/13.4713fa3b.js",
    "revision": "35281810408e5cd2f54d087029b5cc47"
  },
  {
    "url": "assets/js/14.dd5c1407.js",
    "revision": "f5f93c46c648558ca350850f6859db3f"
  },
  {
    "url": "assets/js/15.820b8d5b.js",
    "revision": "5a9c8ce3603fa1daa2edf74f20eefc77"
  },
  {
    "url": "assets/js/16.bef7583c.js",
    "revision": "96ace96914397acde5ac71cedfcd519a"
  },
  {
    "url": "assets/js/17.c03edc57.js",
    "revision": "8cbf049d5b414894c123efb7c369da9a"
  },
  {
    "url": "assets/js/18.5f17121d.js",
    "revision": "b91b03b3a85361927693654bc198904e"
  },
  {
    "url": "assets/js/19.74785d0f.js",
    "revision": "e41ce47c40756e03dc8295ee0536b7e7"
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
    "url": "assets/js/22.ab8eab5a.js",
    "revision": "6eab1899288831d77117d9a4da6620d1"
  },
  {
    "url": "assets/js/23.084234ca.js",
    "revision": "37e985eab4afc7bd49d4b90fcb44a555"
  },
  {
    "url": "assets/js/24.3b505e5a.js",
    "revision": "0a2b44ca1b8bba86a8c8018d7a67eb5f"
  },
  {
    "url": "assets/js/25.e9db9490.js",
    "revision": "111197d93ab212d57342e3177fff0edd"
  },
  {
    "url": "assets/js/26.02a81894.js",
    "revision": "8f2ea8e6d5c3400cd9601c129ee51ed8"
  },
  {
    "url": "assets/js/27.8745c21d.js",
    "revision": "ba6ba76d857351ffad7441b324003151"
  },
  {
    "url": "assets/js/3.7432d3e8.js",
    "revision": "f6b34015b5d178fb2b22cf83806e49b6"
  },
  {
    "url": "assets/js/4.026be2cb.js",
    "revision": "d0d924b4468b2cf3e80d91872693d892"
  },
  {
    "url": "assets/js/5.8da09289.js",
    "revision": "8eb1e96957a4fd28ab8e5891d7fb031d"
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
    "url": "assets/js/app.cd370189.js",
    "revision": "dc88adc6a4284115af7e107309c050cb"
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
    "revision": "98ba2fe7059f4bf54ad83a1467a54466"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "68cbf85c0756f157376a5785c1400b54"
  },
  {
    "url": "movie/index.html",
    "revision": "76a6a6fdc7f934908dca6d42f79a5091"
  },
  {
    "url": "music/index.html",
    "revision": "ab1e1752d565ecefcab73053a7836f8e"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "a4053cddeb626a92e6b84f6faff8ffad"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "ed7c5f6de8d6d486f67eb84ab5487d7e"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "7736fc10b8f74584eb0d9ad43acf47ea"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "eaa2826ea8d4b1973cd75c3e79148e23"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "33dbe168ca23c701fad6f0ed5c3e2c31"
  },
  {
    "url": "note/index.html",
    "revision": "e1c2f1e4f647d2153c8236a7b7915b32"
  },
  {
    "url": "note/LittleFunc.html",
    "revision": "dec7006c5abcf4eebaf3867286520cc2"
  },
  {
    "url": "note/MyPromise.html",
    "revision": "4095d49b985f645618d2943db9f0a40b"
  },
  {
    "url": "note/ShadowAbout.html",
    "revision": "61aad4818ef6838043453397f7f572e9"
  },
  {
    "url": "note/VueRouter-KeepAlive.html",
    "revision": "a3eb8ddcecfc92458ec40efbcf317029"
  },
  {
    "url": "note/WebDesignSkills.html",
    "revision": "b5048d72961c1dfd31f483e0288ce95c"
  },
  {
    "url": "sufjan/index.html",
    "revision": "6f24750e3bb84520dd4a58089343ab96"
  },
  {
    "url": "website/index.html",
    "revision": "05a204eeb1532499d4d108dd61c75670"
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
