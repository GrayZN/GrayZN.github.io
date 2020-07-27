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
    "revision": "2a7ca07715ada5272e97d77116716ed8"
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
    "url": "assets/js/10.27ccff55.js",
    "revision": "6a521171930167ee194b3a4629df19a9"
  },
  {
    "url": "assets/js/11.194d5165.js",
    "revision": "931e3346efa368488debeeb686c961cb"
  },
  {
    "url": "assets/js/12.35b53fa4.js",
    "revision": "33ba82f5e9c42a51760d5c37e9c96366"
  },
  {
    "url": "assets/js/13.663514e0.js",
    "revision": "865f0e4ef8e12cc0f4af55c84a44f084"
  },
  {
    "url": "assets/js/14.b3817583.js",
    "revision": "c71ff6fc4ed26f02c99a79feedbb17f3"
  },
  {
    "url": "assets/js/15.820b8d5b.js",
    "revision": "5a9c8ce3603fa1daa2edf74f20eefc77"
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
    "url": "assets/js/18.399faea4.js",
    "revision": "1da7c796054486002bfbf756e43a2a66"
  },
  {
    "url": "assets/js/19.cc97c80c.js",
    "revision": "e30fae4fcfbad22f83b30c054c89bdad"
  },
  {
    "url": "assets/js/2.9ffc007d.js",
    "revision": "e660af594a22e6f167b63430dc449da4"
  },
  {
    "url": "assets/js/20.470e1d36.js",
    "revision": "011bf3b0fc00b25e1698571d2a2f58f6"
  },
  {
    "url": "assets/js/21.b028f687.js",
    "revision": "66012810b9a7407ba361d73366addedc"
  },
  {
    "url": "assets/js/22.e1b18296.js",
    "revision": "645404221c7412f232ae9793258502ee"
  },
  {
    "url": "assets/js/23.b5df58f5.js",
    "revision": "8f9130f36fd509d7d0b97fac359b47ae"
  },
  {
    "url": "assets/js/24.51f86288.js",
    "revision": "95e9ae64fd20ec842781989723ab08de"
  },
  {
    "url": "assets/js/25.66d78e19.js",
    "revision": "44504ad6fc0713381a9aa692d4db6ac4"
  },
  {
    "url": "assets/js/3.460d7d56.js",
    "revision": "1db4d794a21b04156090941c6caf3c28"
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
    "url": "assets/js/6.04ad8ac7.js",
    "revision": "c45ce6b60970230adf21bfb482da4eb5"
  },
  {
    "url": "assets/js/7.105c6d68.js",
    "revision": "45703d6dd7b65ede900b6cabc39ffe53"
  },
  {
    "url": "assets/js/8.414fd179.js",
    "revision": "936b551288a43d33fd114f35da34344f"
  },
  {
    "url": "assets/js/9.8ddc1b60.js",
    "revision": "7a1fdecda9344cf8159bf6536896c9d5"
  },
  {
    "url": "assets/js/app.9454291a.js",
    "revision": "37c3d8086d3df30c8d02a080acecd764"
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
    "revision": "52c0acf7f5aac410c02cdb722085ee04"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "33fe4f23f0f45ac91579602103d3e690"
  },
  {
    "url": "movie/index.html",
    "revision": "222eaf56b653c64225f3a1aaff651ff1"
  },
  {
    "url": "music/index.html",
    "revision": "c1a43cc1e46d8ed5295528144b8f2726"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "44425e215b3c7ecfd7cfef52402e483d"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "345c4a41109c21fc34cfe1bab941a71b"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "aed79385ac0893800a6d8058e0a489ad"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "1fa7fe614d473efd287d6bc7523d5440"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "2d1fff83588f0b26e9439350f3dca537"
  },
  {
    "url": "note/index.html",
    "revision": "5968fc19a22647da130f70d7477c1cb9"
  },
  {
    "url": "note/ShadowAbout.html",
    "revision": "acb34ca4685d4b166e6d8d770aa23899"
  },
  {
    "url": "note/VueRouter-KeepAlive.html",
    "revision": "11cff119d55063073e2a0821ee46a20d"
  },
  {
    "url": "note/WebDesignSkills.html",
    "revision": "af46417187da700e8c3e7d61fc19f2ed"
  },
  {
    "url": "sufjan/index.html",
    "revision": "c91c6f45af11fd8f2f524352eb48bfd5"
  },
  {
    "url": "website/index.html",
    "revision": "13fad785d7c0820b912488612b4e7f80"
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
