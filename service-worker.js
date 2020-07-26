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
    "revision": "0d9c83514f721383b2b0152ce85196ff"
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
    "url": "assets/js/10.3f79e161.js",
    "revision": "0d92bb175c8a8d6d7f56f67701ee5363"
  },
  {
    "url": "assets/js/11.cfa7d2b1.js",
    "revision": "352b27fb3ce4572d8c376ed00f2fcc9e"
  },
  {
    "url": "assets/js/12.df2ac8d5.js",
    "revision": "ada3662ac714fbc4a4af6c478daa0331"
  },
  {
    "url": "assets/js/13.4441291d.js",
    "revision": "edc084f6da0f80c34ae5db3e6d97e031"
  },
  {
    "url": "assets/js/14.b3817583.js",
    "revision": "c71ff6fc4ed26f02c99a79feedbb17f3"
  },
  {
    "url": "assets/js/15.82b23745.js",
    "revision": "59d3de6e45bfe1b26c500d5d728597a1"
  },
  {
    "url": "assets/js/16.8d6b3e2d.js",
    "revision": "979e20138794bc7b655528e60f8b766d"
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
    "url": "assets/js/19.67979ed3.js",
    "revision": "1e1e5c9f92eee88f93cc9edee348bf2c"
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
    "url": "assets/js/22.7a1e3f6d.js",
    "revision": "44a9b1a6e5b379a7db93b8fcb81801c9"
  },
  {
    "url": "assets/js/23.b5df58f5.js",
    "revision": "8f9130f36fd509d7d0b97fac359b47ae"
  },
  {
    "url": "assets/js/24.55eb3d3b.js",
    "revision": "aa7a9b736fdfc4e4223c4511ff1b8d58"
  },
  {
    "url": "assets/js/25.66d78e19.js",
    "revision": "44504ad6fc0713381a9aa692d4db6ac4"
  },
  {
    "url": "assets/js/3.7432d3e8.js",
    "revision": "f6b34015b5d178fb2b22cf83806e49b6"
  },
  {
    "url": "assets/js/4.11d436e4.js",
    "revision": "f6051fe8a78f0635139bc18a75e7076d"
  },
  {
    "url": "assets/js/5.e1f4be8f.js",
    "revision": "9da6206628266f136058a80c93bd7b3d"
  },
  {
    "url": "assets/js/6.04ad8ac7.js",
    "revision": "c45ce6b60970230adf21bfb482da4eb5"
  },
  {
    "url": "assets/js/7.71ff166d.js",
    "revision": "7e717ae36bf3b266aa8630d8c890eacc"
  },
  {
    "url": "assets/js/8.2e38ef01.js",
    "revision": "1cfa8181fa1a986cb6e5ffa22aa5081a"
  },
  {
    "url": "assets/js/9.8ddc1b60.js",
    "revision": "7a1fdecda9344cf8159bf6536896c9d5"
  },
  {
    "url": "assets/js/app.2c88cf00.js",
    "revision": "0ac50ea20fb32bd7317be5e469011435"
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
    "revision": "46a65bb893152bd10860e5ea206ec46b"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "ccc9fc7be58901732f5ab97e399c0dc6"
  },
  {
    "url": "movie/index.html",
    "revision": "4ed4d3f559aa75a8db7458f64385baa7"
  },
  {
    "url": "music/index.html",
    "revision": "4f5468e0b38a03501b8997f38d3c73b6"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "18b1bbb1a84de9ec5ac90e3f5717a807"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "0bbbb452c0fc61908efe08dc00d100a8"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "f7572f2cf7613a77bed967a2a283d848"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "c4cdbef36f77d1e32e5c60d98512359f"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "50b1653df1f78eafe6c7e1d1c9ce5fe6"
  },
  {
    "url": "note/index.html",
    "revision": "d9567c4b5ec8542543afa0fb87dc8581"
  },
  {
    "url": "note/ShadowAbout.html",
    "revision": "2705e097f0e79d31fb37fc4f3ccf1ca0"
  },
  {
    "url": "note/VueRouter-KeepAlive.html",
    "revision": "7d2738856d1dd364d61114523bca0b65"
  },
  {
    "url": "note/WebDesignSkills.html",
    "revision": "576b786c45d6296ef177fc85bd37e96a"
  },
  {
    "url": "sufjan/index.html",
    "revision": "2b2d483e6f266a10fd4e504ab25ee147"
  },
  {
    "url": "website/index.html",
    "revision": "dd94d308ec05efefb5f332277e424c92"
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
