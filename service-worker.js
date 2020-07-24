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
    "revision": "bb0374cda032bf28847d9a835b1375fc"
  },
  {
    "url": "assets/css/0.styles.f84a27be.css",
    "revision": "798772a6d48e8cc9fec451ea74e51890"
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
    "url": "assets/js/10.58401287.js",
    "revision": "b6a1afd50e40195c6432bbc13798ca3d"
  },
  {
    "url": "assets/js/11.25f7ce77.js",
    "revision": "a9b03e397c1a4e605db82528b0cc4826"
  },
  {
    "url": "assets/js/12.f31637f3.js",
    "revision": "4dd4c305235433cd64981fb6ccb2ff9e"
  },
  {
    "url": "assets/js/13.2b76d66c.js",
    "revision": "3bc048c1e79080dd4dd0b90ad2ccd5ae"
  },
  {
    "url": "assets/js/14.26305c22.js",
    "revision": "01c2f8a64ac5096f93d29dea55ad713f"
  },
  {
    "url": "assets/js/15.c38258ca.js",
    "revision": "423055108ed36455af226488ea2dcedf"
  },
  {
    "url": "assets/js/16.4d9f7953.js",
    "revision": "cbd4cf984e971dbff5d0077288ddf5f8"
  },
  {
    "url": "assets/js/17.6fea18d3.js",
    "revision": "2f29f4fce4e07abbc3cdf0c21a78b3fb"
  },
  {
    "url": "assets/js/18.ddcb1195.js",
    "revision": "3b5f36e9534994c45ad4fde4e4be1fa2"
  },
  {
    "url": "assets/js/19.52b989c1.js",
    "revision": "5cda8a4f1bed950ad8d91c313f78d318"
  },
  {
    "url": "assets/js/2.44e25298.js",
    "revision": "f6a0169f314e7a5667a89975cc98b91c"
  },
  {
    "url": "assets/js/20.a0d8dcfe.js",
    "revision": "5dab756e62619d87fcc2f0423264d61c"
  },
  {
    "url": "assets/js/21.96c167f7.js",
    "revision": "f032ce9e1c0f480523910923a8ad224c"
  },
  {
    "url": "assets/js/22.1edd8caa.js",
    "revision": "a677c9462df265296b5bb910315e6732"
  },
  {
    "url": "assets/js/23.01cdbd7b.js",
    "revision": "a0929420d57372f8f92fa299a755b86e"
  },
  {
    "url": "assets/js/24.f63a2f8c.js",
    "revision": "6dc535558cae5c4ec90772a23ab9a539"
  },
  {
    "url": "assets/js/25.f3741893.js",
    "revision": "18b3c5fad0cbbd716fd1be2a63581908"
  },
  {
    "url": "assets/js/3.a4cffc2a.js",
    "revision": "a3ed2c86d055a3c20ac0753e45791e44"
  },
  {
    "url": "assets/js/4.a05d49c8.js",
    "revision": "d2889fa55c284f1b4716ea32d762c769"
  },
  {
    "url": "assets/js/5.f4711ca1.js",
    "revision": "5c172dbbc6e0fb420a77381f3324f1bc"
  },
  {
    "url": "assets/js/6.19ab3b12.js",
    "revision": "260be8f8098f70792875d02b808581ac"
  },
  {
    "url": "assets/js/7.1396d0c8.js",
    "revision": "95026e82002ba8385c1433a1ae44a678"
  },
  {
    "url": "assets/js/8.5d946ef1.js",
    "revision": "95fd8f4970bc788935d23158abf2dd10"
  },
  {
    "url": "assets/js/9.f44d6964.js",
    "revision": "652c8803cca66e6d72366c093b6b7fb5"
  },
  {
    "url": "assets/js/app.ba163933.js",
    "revision": "14a028b7f598e306157ce47db58d3d5d"
  },
  {
    "url": "dev/index.html",
    "revision": "15945082cc973ac068825867947c4da7"
  },
  {
    "url": "dev/ShadowAbout.html",
    "revision": "1f19da48ce3d4a6262d24ad71960823b"
  },
  {
    "url": "dev/VueRouter-KeepAlive.html",
    "revision": "dbf17fae1db0fa317d03de7bd7367fa2"
  },
  {
    "url": "dev/WebDesignSkills.html",
    "revision": "d530b3a066b8d017eb3780fba4ee2b9c"
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
    "revision": "32d819c9d9801f2b3f829f98d49c7e8c"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "3ab1d23ad6490d1eed97a293bbabe0a5"
  },
  {
    "url": "movie/index.html",
    "revision": "0e0d124b2168956a646d8398f68e3ca4"
  },
  {
    "url": "music/index.html",
    "revision": "65db264d66e72751e083f23d9edebb9d"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "d2885d174791f43b835edd77d31e13a9"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "bbfc9e72f06d6b5d93d94071ae204aac"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "1d5685fe575d4d023f2f0374164dab65"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "b483d896748f7c2aa7c6e38667ed99fd"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "6706a0a613521bf51d4d5a0ce85e892c"
  },
  {
    "url": "sufjan/index.html",
    "revision": "3840ee1686b158c96f0cdc6bd864d3b3"
  },
  {
    "url": "website/index.html",
    "revision": "9eeb59a10f8e54465824152c74a34afb"
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
