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
    "revision": "c48099e8817791ebc66fbe6f106db4c5"
  },
  {
    "url": "assets/css/0.styles.381ced55.css",
    "revision": "0abaa45eb4a9b139c57dcebc1e2e998b"
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
    "url": "assets/js/10.2265f91b.js",
    "revision": "7674bccf66bf04d14a6761de5c8cf467"
  },
  {
    "url": "assets/js/11.d1a210f8.js",
    "revision": "41946f619b6e3cac78e524461af5a541"
  },
  {
    "url": "assets/js/12.cc4127dd.js",
    "revision": "c2e5808894c002537903f89c47b80687"
  },
  {
    "url": "assets/js/13.fabb6e40.js",
    "revision": "7f8707b98668bb1b0660c5480b67cf19"
  },
  {
    "url": "assets/js/14.a39e5a6f.js",
    "revision": "a20c9b56238baa16595af08218379ef0"
  },
  {
    "url": "assets/js/15.21ab1b7b.js",
    "revision": "db22e6e5ddaed37a3a2aec0b8a28aef3"
  },
  {
    "url": "assets/js/16.fa9e54a6.js",
    "revision": "c5535f2d6b08e7e417ddcf66bb213b1d"
  },
  {
    "url": "assets/js/17.eefbacae.js",
    "revision": "bc65a387c31be31f5a3b15689181257f"
  },
  {
    "url": "assets/js/18.cd8f21ad.js",
    "revision": "cefb5a4eb4f0ff2f6788d40c86880470"
  },
  {
    "url": "assets/js/19.02a2985c.js",
    "revision": "14e4ddb6dcf4390cb290474db1f755ef"
  },
  {
    "url": "assets/js/2.f2501341.js",
    "revision": "0023314d8728b37f6d0a3ba8df52ff3a"
  },
  {
    "url": "assets/js/20.a9138b6e.js",
    "revision": "2f8bb5ccb6a8ddc22198d9c14855b816"
  },
  {
    "url": "assets/js/21.fdd2be6b.js",
    "revision": "f25c24158c24d1f5d0e6e83a41a4155e"
  },
  {
    "url": "assets/js/22.63aa1858.js",
    "revision": "132247e0638af75e3f67a09d742b8bae"
  },
  {
    "url": "assets/js/23.ea2c1be6.js",
    "revision": "bfb518f25545a244bdbbf102ef4ac1ae"
  },
  {
    "url": "assets/js/24.a2958d56.js",
    "revision": "5d70fa362e3f72802b0575a235739358"
  },
  {
    "url": "assets/js/25.ea26fd53.js",
    "revision": "2404420394112f9ab7a3e55816829188"
  },
  {
    "url": "assets/js/3.2669dcd6.js",
    "revision": "9224106c312b57c99a34c9af2a5136b3"
  },
  {
    "url": "assets/js/4.3afd1bca.js",
    "revision": "0c017528696c70b4708ed8d18b1e0bc7"
  },
  {
    "url": "assets/js/5.52510645.js",
    "revision": "1126ce8370993fdb12a5501422099749"
  },
  {
    "url": "assets/js/6.317088a5.js",
    "revision": "9fed4619a1d44dbc6ff806001a8ba8e2"
  },
  {
    "url": "assets/js/7.413867c3.js",
    "revision": "377b2eb5ebde3d83cffc264ed7f53436"
  },
  {
    "url": "assets/js/8.734596f9.js",
    "revision": "9572cc1ce3bd3eb55b2fb3ba9f539f23"
  },
  {
    "url": "assets/js/9.86142b18.js",
    "revision": "a300feeac5c5b2ee12546a52dc91c4b7"
  },
  {
    "url": "assets/js/app.4f9263bb.js",
    "revision": "23532531d2d49e428836acd37c2b6e94"
  },
  {
    "url": "dev/index.html",
    "revision": "b332ae3ff49e52a8405aab5c404da327"
  },
  {
    "url": "dev/ShadowAbout.html",
    "revision": "f06944bb2d304e52cc369398d47447d3"
  },
  {
    "url": "dev/VueRouter-KeepAlive.html",
    "revision": "eb9928cbbed13b9c9d6e04e2456d458d"
  },
  {
    "url": "dev/WebDesignSkills.html",
    "revision": "4dfa3f487d3013ea1dbd1da4d86ad770"
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
    "revision": "484c915af09f6527c33e6a60889e2e8a"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "b8763d889129a9f455fb85e546c0530e"
  },
  {
    "url": "movie/index.html",
    "revision": "7de8eeaebe59fbf0e8a0b496b220d892"
  },
  {
    "url": "music/index.html",
    "revision": "a0a6a7b2286473b4cab48eb5d2a004f0"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "16db16a26650a56ea03edd8c98b8e8b3"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "e582faf0b82c89d2df15ec93163518a4"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "1a38828a4074e773aa88ed3b5b59fed3"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "e3809961011ac4469f3da7b85d03dd54"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "673599ad523c8b9c80050871ad8b6a40"
  },
  {
    "url": "sufjan/index.html",
    "revision": "e79e8d29a73e0c52754f3c918d8026b4"
  },
  {
    "url": "website/index.html",
    "revision": "509a7dc4ca893d5c7dbd3c8984a39faf"
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
