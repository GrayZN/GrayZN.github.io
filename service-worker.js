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
    "revision": "5e761e0c31b6308d911b67aa6fe6e46e"
  },
  {
    "url": "assets/css/0.styles.19974481.css",
    "revision": "f4678426b23e0953f91a26e548fb98ae"
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
    "url": "assets/js/10.162e584e.js",
    "revision": "6a9d7ba3c20d32c508cc1a3d7e9310f0"
  },
  {
    "url": "assets/js/11.b1919093.js",
    "revision": "34736624f84af43c3909dd68b1e3d148"
  },
  {
    "url": "assets/js/12.9b5c8005.js",
    "revision": "7694548c639ffa7f00742398c51a9553"
  },
  {
    "url": "assets/js/13.36a6c504.js",
    "revision": "2698f29efe3677e232c99fd07f01de17"
  },
  {
    "url": "assets/js/14.a52db8d8.js",
    "revision": "858bfce8913913af71b699d215509f7c"
  },
  {
    "url": "assets/js/15.6144cf15.js",
    "revision": "1cba9fed9a6c25e8edb0e39b8a231f30"
  },
  {
    "url": "assets/js/16.8ab73b02.js",
    "revision": "b167a65f9cb52059709991bd1f29d36d"
  },
  {
    "url": "assets/js/17.040c6094.js",
    "revision": "aa3d7b42ca42b56a59e9a424e75e8032"
  },
  {
    "url": "assets/js/18.6717db0d.js",
    "revision": "6be5f54cbf5ea27529684e450d387271"
  },
  {
    "url": "assets/js/19.3cc3dcc6.js",
    "revision": "cbe55872db5d8a5891eafe05106ca29b"
  },
  {
    "url": "assets/js/2.02c59d05.js",
    "revision": "111968da4bdbecca02a310fdc63458fc"
  },
  {
    "url": "assets/js/20.7527cbaa.js",
    "revision": "4782d7a49a7d65cbd4ac74510f63bc5a"
  },
  {
    "url": "assets/js/21.38d733de.js",
    "revision": "a24daa6186c8cfbd51053d15abf13ff6"
  },
  {
    "url": "assets/js/22.0babde83.js",
    "revision": "ab3cdecebffde1cfd85c271653194b98"
  },
  {
    "url": "assets/js/23.7375b70d.js",
    "revision": "c5b6177a8d0929bb8c364423276e4d8b"
  },
  {
    "url": "assets/js/24.a62def38.js",
    "revision": "b507c6a70ac314add31765340e266229"
  },
  {
    "url": "assets/js/25.afab5274.js",
    "revision": "2404420394112f9ab7a3e55816829188"
  },
  {
    "url": "assets/js/3.2b7c01b5.js",
    "revision": "bc49053fb8860f85a66f7417cc7e33a3"
  },
  {
    "url": "assets/js/4.dee68c11.js",
    "revision": "0d9d90f9c2f9bdb419779ecc058f161c"
  },
  {
    "url": "assets/js/5.d336eb29.js",
    "revision": "8a6f4db601237b14f7e114fcbf4ce6a2"
  },
  {
    "url": "assets/js/6.0091caa4.js",
    "revision": "f6dc8aa747a03d3bbda6cd56b28f89bd"
  },
  {
    "url": "assets/js/7.590f0c0b.js",
    "revision": "4698fee1bc78efbc646d54afe62974ea"
  },
  {
    "url": "assets/js/8.b402712a.js",
    "revision": "9529df43624986cb167262b6f40f1843"
  },
  {
    "url": "assets/js/9.be137a7f.js",
    "revision": "a02eb63fb6a087f835399bcadc386921"
  },
  {
    "url": "assets/js/app.a8724d81.js",
    "revision": "8880445b5e9524dfe315e879db083009"
  },
  {
    "url": "dev/index.html",
    "revision": "8f259fb69c471f1d83b1590a0e777887"
  },
  {
    "url": "dev/ShadowAbout.html",
    "revision": "09d15b7ecd047ebeecd3d22787fa0238"
  },
  {
    "url": "dev/VueRouter-KeepAlive.html",
    "revision": "dd7d5d7c1ce500ebeb1454f3d311c89d"
  },
  {
    "url": "dev/WebDesignSkills.html",
    "revision": "9484cb9ea4f8fda204cb4940540a0b1a"
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
    "revision": "03b2d5e607b69ae5adf4109ddddc083a"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "259a70f35d8a1780aaee2266668e06d0"
  },
  {
    "url": "movie/index.html",
    "revision": "246a944e907fda4a4ddfc82e83d9ce6d"
  },
  {
    "url": "music/index.html",
    "revision": "439c040ce52fa965830eaf7e305df3b5"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "cd599328e374b2ba2427adf2b952aba1"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "5fa993b8eb4a4b4606cc25e08e6dedb0"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "ff72fc1e4d55d92faa9a85d2444b93a1"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "1474dee88fe6335c808d4c4cc6e34aad"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "067c058e552e9b55bccf66b7e754368c"
  },
  {
    "url": "sufjan/index.html",
    "revision": "00ff1c18dfbe9f52837baaeb657477c8"
  },
  {
    "url": "website/index.html",
    "revision": "a899e90a9d65b7cce3a89ab536d56098"
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
