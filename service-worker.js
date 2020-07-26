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
    "revision": "2a73cd1f1aeab93ebb55e7b26defdbc6"
  },
  {
    "url": "assets/css/0.styles.e8a7a238.css",
    "revision": "d896a8d2f983e671b0f7c0b2c12bcd9c"
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
    "url": "assets/js/11.25f7ce77.js",
    "revision": "a9b03e397c1a4e605db82528b0cc4826"
  },
  {
    "url": "assets/js/12.d8fcdafe.js",
    "revision": "1e3700004e232490d298bf63bcf7a36e"
  },
  {
    "url": "assets/js/13.fd73aae5.js",
    "revision": "ef59eaa919d2f948707e5f6107779c13"
  },
  {
    "url": "assets/js/14.49e89faf.js",
    "revision": "f0425b7e82304d4cda77aef5e69ad35e"
  },
  {
    "url": "assets/js/15.c38258ca.js",
    "revision": "423055108ed36455af226488ea2dcedf"
  },
  {
    "url": "assets/js/16.99a82bd6.js",
    "revision": "6a672ab157b144c818330dfd367b8287"
  },
  {
    "url": "assets/js/17.18d819e3.js",
    "revision": "c4338f0fd72a02909b8ce85e9e546dcb"
  },
  {
    "url": "assets/js/18.46fd04e9.js",
    "revision": "07c831eb7252406b81c44d08a87a6a91"
  },
  {
    "url": "assets/js/19.ac883ecf.js",
    "revision": "2392f4a724cba444ea5cad605196a5db"
  },
  {
    "url": "assets/js/2.9ffc007d.js",
    "revision": "e660af594a22e6f167b63430dc449da4"
  },
  {
    "url": "assets/js/20.07c12619.js",
    "revision": "0facd2c1b438694e9d7e512a70af07e7"
  },
  {
    "url": "assets/js/21.fbd97179.js",
    "revision": "75e470949a8dc3b63b6d0854656f2c78"
  },
  {
    "url": "assets/js/22.63492d09.js",
    "revision": "4bf7d79633b3e371a538f1bffd9db859"
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
    "url": "assets/js/3.460d7d56.js",
    "revision": "1db4d794a21b04156090941c6caf3c28"
  },
  {
    "url": "assets/js/4.9d3ec80b.js",
    "revision": "93c7db60d27bcc1bb8b8213c15acf37e"
  },
  {
    "url": "assets/js/5.431218cc.js",
    "revision": "e70f92841de80fa63522f9bf9130e9ff"
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
    "url": "assets/js/8.2e38ef01.js",
    "revision": "1cfa8181fa1a986cb6e5ffa22aa5081a"
  },
  {
    "url": "assets/js/9.8ddc1b60.js",
    "revision": "7a1fdecda9344cf8159bf6536896c9d5"
  },
  {
    "url": "assets/js/app.715e2593.js",
    "revision": "1e51dc41bf59d8b857f924a6a80ec27d"
  },
  {
    "url": "dev/index.html",
    "revision": "94458e7f5caf7906c9963e04e927b7e3"
  },
  {
    "url": "dev/ShadowAbout.html",
    "revision": "0fe9162403cfa1cc99443ae57904f7e1"
  },
  {
    "url": "dev/VueRouter-KeepAlive.html",
    "revision": "f3feac099bbf315830d44397f7bb73d6"
  },
  {
    "url": "dev/WebDesignSkills.html",
    "revision": "bb371a6821caddc26b3596719833fe3e"
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
    "revision": "0f72e2f111d65465caf8973f0ff4607f"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "8e7d95bbe81618e2b66a8ddd39a3980e"
  },
  {
    "url": "movie/index.html",
    "revision": "66a4116e2814cefc1541ee50e0fe3578"
  },
  {
    "url": "music/index.html",
    "revision": "f7780989c5d016d42a0beb4b3a5f32f6"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "65ebb53e8abddc862b5e5e4c61dc8f9b"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "f8fd3f4a5dfe6d66a3dae0cd33de1b6c"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "b058929725ad98285b5f0d1d8f7eee0b"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "e02362c5b74b15a6af60edd45bfa4c06"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "0a2473800ee7bad6e14e62f0f915b0ef"
  },
  {
    "url": "sufjan/index.html",
    "revision": "aae1057d287cf4a33d1141c38b06da16"
  },
  {
    "url": "website/index.html",
    "revision": "acad363f2336ce6bb77b2785b80cfcae"
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
