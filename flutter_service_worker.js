'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "26590f34363f20b91b95133c3160c9d7",
"index.html": "0b116df435a946074ffeea51798341f0",
"/": "0b116df435a946074ffeea51798341f0",
"main.dart.js": "23c66a99b9a74a234c14c292e61ff684",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/config": "28a730212143e54eae34d41f11c73c61",
".git/objects/61/242c1da5b5d2b15b89f0a94cc3d1c3cb61f7d8": "3c2546dc7fbe6c229b5972ed76de7260",
".git/objects/61/86647ef66231dc9c616a98043c09f2718ed7ad": "3895b44cec58ceef3b1bd5fde4d10620",
".git/objects/61/471fed6cf3799ce02f6c38006e710f1b0ea425": "a2abfe3e7af21671e54a327961078c90",
".git/objects/95/978c2aa2fd31dfae6428d00335cbecb2d5f2af": "33e6b4c45836264095681ad573a99ff7",
".git/objects/50/490887dd039941104b1e379f5f1447975b1dca": "ae4a7fd3ee5b9bb4bcf3bea91a46db76",
".git/objects/50/a463356b7d89bc7f17cfe56003eab71b56d8ad": "604dcda5259cee556b0d49cccce957ca",
".git/objects/3b/66b9b02a118d31c0d2bad62065eb2c4fcd6098": "09b14ff55e51297e336ef5522197cff7",
".git/objects/3b/647c42d5d603104db21c53a41d6f9b7ebdd828": "1c14db6ee6375cf20d572764374613ce",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/3c/75f7aef1d94cde94fff3752080d490770f483a": "e0a25db51278c4eb8766a37256a1ec1d",
".git/objects/3c/779abcce0036ab333b59510cf98c7705b1d58c": "c0e476f9eca133ca77f26f66769535f5",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/b2186256f60dc2602451ecb225606346dc4887": "1b22231b86a1c04e34dc1ae8e1e1a409",
".git/objects/67/2d9febc66f50fca5a731b4b0e4373438cdccc3": "f165a089954f67d9d5dac30c3ab83183",
".git/objects/0e/fa3f7ac3e22390ed8963e3870c410cc16dc682": "3b9fde02b3fa4b5dfeedfa8c88758c4d",
".git/objects/33/ad7c01312135336ff1625e25f6f764b7d06dbf": "a6b9b240ee6c3afac566cde9fa108532",
".git/objects/a4/d672af0399f61d0bc09c2e03614f87d65e0adf": "1c448de5409c41ea34f339db07fbac03",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/7b5c5566264dacaf07f83cc15d2c48c9be4714": "31bc1f8bb10558b7f005f85b79550fd7",
".git/objects/b5/ea1ba784cf79895fcca811f7510a34cbb04960": "b8372f87c54bbc5617d7a5eeedd29085",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/e272d2d9f94e2bf5eaff9d601c28df96d7838e": "a4ecd20a38327001ec58bed6ca287775",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/6534ab7abdee0b3e071fc8a8270b510894a8d6": "f70b4d0428ea691e9dc90cc734a4d2ef",
".git/objects/da/b22bfded30b69611d08e1a269f393848aaeee0": "3723b695964ce0a39e5cbcbec49e42f7",
".git/objects/b4/e78cacb91e426b011b6a20daf0ea4115b75ff1": "09ca418567288566858bcbc84c39d947",
".git/objects/d8/58905917b4919d756a598dac3d6c874360e473": "f0c4045c368f7680ae05b8fec4a26a62",
".git/objects/d8/b4b2dd1e63eea5e4da1d877c11e7b3e0abd415": "03e781e816411b5f9e7d5303c5f4d473",
".git/objects/e2/8191e6b5f449045de3bbcbf5297e57e0b82aa0": "cc5990ef43b4eb7362e9a608a5f369d8",
".git/objects/f4/1385ce6128ed40174d97e9d0a99d21533944bf": "200c085794a7443fae8637b5519def62",
".git/objects/ee/d195f1d1eb0e6fe89d81097f14d47274a8f125": "2f9e2007bf8dd041475e73f69a83a3dc",
".git/objects/e3/9ad60cde47db38dd91b213f0b6f15e49e81286": "b2677ace38a838be398c655c6acd3847",
".git/objects/cf/b3d1e9efe797725777a406674d065f5a3a1981": "a444a0e2a0aff0ebcace12dcf5ea4aa4",
".git/objects/fb/9758a537f4a5ab761a3c126c25bcf735c3ff64": "74afd6f8352b447b0cfa3eb7d4c2ae28",
".git/objects/fb/a515820d999d6e7d7cdcad6d68ef2513586ac5": "4d38918da1b649c66db391e7750a3b0b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/3016da167700329fe30206191815500246b26c": "92731aa57d800b73cf5fb89cbffe551d",
".git/objects/4b/c38a6394825a9395e71b44e77787f7140ce849": "8b687c0173e153bec5b8f95a75a0de2b",
".git/objects/29/295ea7af3c98ffb058b6c0945576a0a15ff816": "580141ab56847f0e9e9c906c378a420e",
".git/objects/16/9bc7615ac8c638d1cfb77532f80e6365789b4b": "3899035d5236541d4cae16864863eadb",
".git/objects/45/4649395e09012f7159876a8428353a4ef29e51": "9b57b1f7371565b2b52013283ac76577",
".git/objects/73/1eb3200286931589bf23f575fe88f8fb673f76": "0e11b2fcdec53e2570bc791254c1efb7",
".git/objects/73/40a40aab55849fd94d6d8c4ec9ce64e0200e92": "0b436585251592ab3b7d3bbd61b0a050",
".git/objects/80/19648d992ef5b13fe79365d94ca7ca18fc5f1a": "de1e46bbbb1b46700e7b309d8ab24009",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/4349db2500d38d9a5368383ca03b8a43b4dd52": "300f5d1a329f3e3541f0c64172dae0a5",
".git/objects/4c/acec65d4f3153ce04212f71887f25ef7cd100b": "ccb630a76162b5d4e9a5fbb2454adc9a",
".git/objects/26/2c886cddead6525457411a4908879486dedc18": "fe91916d3dfe8f0a7c6bbe0c76443364",
".git/objects/75/12700e79db9baf7c1a167cf479283c064dda8e": "cd450798f81d47adb18bbac41a1bead7",
".git/objects/44/cda459c158d4d8c3dad754e333ceb1b543c05e": "7510986bc57f46d43f533e39ca4e0b79",
".git/objects/2a/90ce5cc34b58c42e7fb8e054b56713958a9ea5": "b568596ea8a8c7e61f823a0bb6596706",
".git/objects/43/afc2e78caba1f3d0bdcc683f4e4b6cfc53e62b": "13e0e699dc452608e9bba88dfe037db3",
".git/objects/43/1ee9d44dca8b4a9f28543949df4b379cf15274": "40d6d170a3a25bc8290baabbbd7c19cb",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/4c0a82aedd0bf639509ca821f9b3993913e9d0": "8f556867c462f39ade78fca1ae5d280d",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/09/b7859ef731dc68b71969e702b58faf0141c9b7": "ef139e2118b4ca7291cab564a39681c6",
".git/objects/62/a5af73f3254986ca20d0b81855ee87e0835360": "86f87c8f4941068a6a31a6eb1bd0a47c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/5e/2b26964de4398d1796882d04b071d4ef46ee25": "23bd90022d4c0338a5e86714a4d7c0f1",
".git/objects/6d/dc18583910081e8ac3a147477414f703316918": "d84e0ca5d96dea2fbb93c7b6e2bb3869",
".git/objects/6c/b18aa3402092aa9ef9eadf6ee01baf15aea956": "601b416874fa74bb2c8b0a018c5dd330",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/7a7bf2f37c01c26050aea4d47193f058958aea": "1bb2915168473ce2a1753d549c84ee35",
".git/objects/52/bb6966d7aadfd5f1ebfd79a71a65d49ef53cd8": "3bc2319dee40cfddce807de72fa9a626",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/c5a61f19a9ece33f98e7300642e75c376e06bc": "956fcde21a3584455107a23128dcd7d0",
".git/objects/64/9b1f8c14eef7e62d513ba6a7e3cfa8a5b7bcfb": "ba34373d3eab7abe3665ff0314e9f91f",
".git/objects/90/7135fffd1e5171fc6521345985e2227dc445b2": "8f4981806a2a82b0df479dcdb068ea0d",
".git/objects/d4/fdaa38d3a6b1d0743e6f3900f9a0cc651c9410": "babc2cf1e7976c33ea67e3ffe810da74",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b8/c0735613b56bdd8e99e390444454c3af3ece83": "9b7738033f8bc9ab52d62aa1b86af783",
".git/objects/b1/179c090e5eb84d8d5b34d110f5cc53d24fcf66": "8d1377ba9f32dd3bc1430bad0197446b",
".git/objects/b6/8ee64f9d150fdbf269707519ffcc987e169f57": "827a62fb958c4eeab5f9981814f5c1fe",
".git/objects/b6/60b76ef7d2b2aaac79792924a1c2756e384673": "74db369d6fc8b2bee62f82e7f1bf3746",
".git/objects/af/2ca50c31861b9a3f9d3eb2758a3f0963ebf879": "8cedb68775dc5daf5749f8acd17cbfdd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4275dc53ac885bc087731fb6e1db74ed858204": "25e302cbd14c49c2adcde0a373cc79e9",
".git/objects/a8/7a0c94e3f70a3e946f2e02ad0d30860435e74b": "dde9e6c78822686b5df6faa6354a8738",
".git/objects/c3/e342ba6a753ab5c50b0c15e2ba311930277663": "0ef1924c3d871c55bda4d8e28b002138",
".git/objects/cc/189ae0940c3145cb3e767c69eca1cb8889343c": "2551ab90c4a1d29e33aa9d3e530e4ce4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/objects/fa/3ea19a22fc42c265b59c7e083290fdb464cf11": "122d9fce441ea0c43628415348c3231d",
".git/objects/f6/a148ffc3f45b23e9bf290b6d320b99cba747e0": "a737c84f3c8b1cbad810f3cdb5074a5a",
".git/objects/e9/ba513681a8a01b2f1fc1682d45d9e8395e6013": "fce0131113f5b3e5efa955bbe63ea945",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/cb/720f8542ce968d09148e05079fb74849600677": "f70bb94c05f2282eb43927fca9b62d61",
".git/objects/e0/896e9e7610d171b8a3501d520adc57053c7682": "44dfee812d4632c30421b2bad24bd3f4",
".git/objects/46/25baa79bb92254fb46ecd7210172f72ffee5b3": "8e205e940a53bce081538ffa1775e6a4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/70/f2a1baf36f6b0385b658bcc4336324cbf472c5": "ae99e10354a1336c5c2cc75e1c9799f9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/13926eea349171d0dce97cd99bb7b44ad52054": "b7176b91488165f565d4c234236d6377",
".git/objects/15/900f0e6e74d0bed9db5bca085681b8e84bde9d": "ac865706fe50670124aa503638f6e0c0",
".git/objects/15/be0aa08df360b6bbf397f721ae5f5205d49110": "85e5b01b1f137b18275adb42f995e075",
".git/objects/8c/92df3e1bb9afe4154224bea331479de14f7e78": "00f9460f5736c314afa9d4dfbd00dd24",
".git/objects/8c/521cbfe427d4c67945a519441ebae4ed2d10e1": "956c30ab387cf3c366d24112481d0797",
".git/objects/1c/dbd95a03192b55ace75d5a801eafb6fd99bc04": "d1dd7faaf6fe5a32b46ac57d55e55194",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/8e/2c7917a9ffab63d817cbcacd7f18faa09b5007": "d704466f0bf40206cbe91d1f0254877b",
".git/objects/22/9d04fc1425a7eeded16a6178dcce68048e7926": "028fbfe595ab439c3237f0a20a4354f7",
".git/objects/25/1edb9457b374ca39871f23cb308dbf5a8e3091": "b042b424c00ad3a213be1fdbbe3d3e65",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "36dec37f36fb9a3bb1cdfcd45c00b484",
".git/logs/refs/heads/main": "36dec37f36fb9a3bb1cdfcd45c00b484",
".git/logs/refs/remotes/origin/main": "972c33ee1e1e43306be120eea0e18521",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c782f1cd8c0de0562ceb44c4f4809820",
".git/refs/remotes/origin/main": "c782f1cd8c0de0562ceb44c4f4809820",
".git/index": "864d8d20b8ec18efdc7249f1301eebf9",
".git/COMMIT_EDITMSG": "97da2a39bcb0e5c32776748fd7ab9719",
"assets/AssetManifest.json": "737660595e974f70dffc8abcf4f17940",
"assets/NOTICES": "be9f9f3a1468d12f084e6fcdb720fa31",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "d54fbaf0fa84045f33b3dd945be4eb10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "9b44e2613d19d3d874195fa33c8b3752",
"assets/fonts/MaterialIcons-Regular.otf": "ff680012c734d5cea4f0411b39b32b2c",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/IMG_1227.JPG": "43064e15582a06d402231a2b8e9ee563",
"assets/assets/images/IMG_1224.JPG": "5132921301697301b41469036eb4ab29",
"assets/assets/images/IMG_1228.JPG": "b783986437995a6ad661c7c43c663a20",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/IMG_1216.JPG": "3d7b8c2291acd5596f65548220d4730e",
"assets/assets/images/fondo.png": "a605a80f3f4a41ead32d5798ce38494d",
"assets/assets/images/social.png": "7ac9bc20ad43475e07237561b8ce3e36",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fav.png": "b5b55ea8f0d90f6414fcf9ba29655cfa",
"social.png": "7ac9bc20ad43475e07237561b8ce3e36",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
