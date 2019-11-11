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
    "revision": "aa04700c3b2b87930a3a6375ed6cbfc1"
  },
  {
    "url": "assets/css/0.styles.0f49b5ab.css",
    "revision": "b739d25d2204fb395660c4a4c5b52d9a"
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
    "url": "assets/js/11.7326b584.js",
    "revision": "d54569188efac4e4ba706c3d72630bec"
  },
  {
    "url": "assets/js/12.135aac1c.js",
    "revision": "7935a6cd7933a6e01638758d6805bd89"
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
    "url": "assets/js/15.62fac7b6.js",
    "revision": "a9fb077ef20552172d0aef26eb720a6d"
  },
  {
    "url": "assets/js/16.9cd26820.js",
    "revision": "58286ed0db7485a2697ad1ffe8b130b6"
  },
  {
    "url": "assets/js/17.c0b2cfe4.js",
    "revision": "e8153a80f242c561d474dbf67c2e9d1b"
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
    "url": "assets/js/20.fca323cd.js",
    "revision": "3b8f60dbb5318c46e01f45d54ae36524"
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
    "url": "assets/js/23.56d39cc9.js",
    "revision": "213218689c3b62e31e5efa258a132caf"
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
    "url": "assets/js/3.4a212a2f.js",
    "revision": "f79c3c8a0538d28123665857136dfdff"
  },
  {
    "url": "assets/js/4.1ea9a9ac.js",
    "revision": "6bc06cba1238807e37071a445b49e750"
  },
  {
    "url": "assets/js/5.040e6ce9.js",
    "revision": "60fe51b5cd7b0127a84b45aaa49d3955"
  },
  {
    "url": "assets/js/6.0091caa4.js",
    "revision": "f6dc8aa747a03d3bbda6cd56b28f89bd"
  },
  {
    "url": "assets/js/7.508210b5.js",
    "revision": "c997bbf9d73245d53af5124b3dcd6325"
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
    "url": "assets/js/app.92aa9394.js",
    "revision": "8ed0bfce3e203a669a34c76a16d63ca0"
  },
  {
    "url": "dev/index.html",
    "revision": "580d817648aef3418291f9b0d75d3321"
  },
  {
    "url": "dev/ShadowAbout.html",
    "revision": "ad32cb79f785d7944279b3a38c5fa206"
  },
  {
    "url": "dev/VueRouter-KeepAlive.html",
    "revision": "d15bd9a40aa3cbb35cc670274ca261be"
  },
  {
    "url": "dev/WebDesignSkills.html",
    "revision": "d31c2cb3d674b21adcdf10d245b96880"
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
    "revision": "f641b7551cbc3f86a1aa40a7164328ea"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "637a0f40324f2b90c8b5c9d0d1cf2a25"
  },
  {
    "url": "movie/index.html",
    "revision": "f9c443455a1897f1f789e36e9156dcf7"
  },
  {
    "url": "music/index.html",
    "revision": "6629a6ff2ff13043189f0d0e8c859206"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "c0435b59bd47c23aedc23ff760672623"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "647cbdb5378f9bef0136d0fac0f99dab"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "e7e442cc9defa48c4679561670a66ee9"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "7202296c9a12ab193173ca7a183832a2"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "e5fc2236367a3bacddae8f92c0c8718a"
  },
  {
    "url": "sufjan/index.html",
    "revision": "0322f0a82a3a873b620e8cb3bb54a717"
  },
  {
    "url": "website/index.html",
    "revision": "d586b4152b272387d68476ac6268d9f5"
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
