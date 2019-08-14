/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/br_extract-button/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_extract-button/css/app.css","5e3e6bb8fcf456c733f022beadbb0097"],["/br_extract-button/css/deriv-components.css","7e7e0c92ef9e6d5ea08b4cb675a97ac3"],["/br_extract-button/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/br_extract-button/css/modals.css","a3ada3ef9ab9912f1f3b17ded2c4fdb2"],["/br_extract-button/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/br_extract-button/css/reports.css","113d3dd3e7a75253136cd029a46beea9"],["/br_extract-button/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/br_extract-button/css/smartcharts.css","6a8e8a0ef7d5d5e51cb94c680e3f039f"],["/br_extract-button/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/br_extract-button/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_extract-button/index.html","dbfe0f0b86b4f3823f1b44f413ccb444"],["/br_extract-button/js/0.60b3a738dacd2ba7f0e2.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_extract-button/js/1.60b3a738dacd2ba7f0e2.js","d5b227514040f9243fd1bd65d8f4d25e"],["/br_extract-button/js/10.60b3a738dacd2ba7f0e2.js","751de4c79083a2ec085f5657e7a3be84"],["/br_extract-button/js/11.60b3a738dacd2ba7f0e2.js","b9f3f7bd369081d485c5a505f295c43c"],["/br_extract-button/js/12.60b3a738dacd2ba7f0e2.js","4240972ecd2a9c60f7a861349bda3abc"],["/br_extract-button/js/13.60b3a738dacd2ba7f0e2.js","27c08e553da23f76336673f969868de6"],["/br_extract-button/js/14.60b3a738dacd2ba7f0e2.js","cc88ae1128218b4d7ffb73a9a5edc5af"],["/br_extract-button/js/15.60b3a738dacd2ba7f0e2.js","98f03eb56745ceaf0bd1a093f33e98c2"],["/br_extract-button/js/16.60b3a738dacd2ba7f0e2.js","dfeaa69a837d4f00802b07fcd9cc0abd"],["/br_extract-button/js/17.60b3a738dacd2ba7f0e2.js","9289b22ae19e0d3a0f7046c462a601bd"],["/br_extract-button/js/18.60b3a738dacd2ba7f0e2.js","0a45feb945f313a0e1fa016842c030bb"],["/br_extract-button/js/19.60b3a738dacd2ba7f0e2.js","f8c91b6f5020685476adfcb81387882d"],["/br_extract-button/js/2.60b3a738dacd2ba7f0e2.js","d6729726c1d4fbfdfd85b12620e52515"],["/br_extract-button/js/20.60b3a738dacd2ba7f0e2.js","4264b25b2877ac70f0d5a0e024eb09de"],["/br_extract-button/js/21.60b3a738dacd2ba7f0e2.js","8928e4241bdaadc6d199fb47e10c66f5"],["/br_extract-button/js/22.60b3a738dacd2ba7f0e2.js","ef5bdfa6d80889af34286ce2171bd3e1"],["/br_extract-button/js/23.60b3a738dacd2ba7f0e2.js","16a0788f9067ca749b18c5c364faeff8"],["/br_extract-button/js/24.60b3a738dacd2ba7f0e2.js","2e326919939a7c1f6baf7fce4f937a51"],["/br_extract-button/js/25.60b3a738dacd2ba7f0e2.js","b67f3e192d6414c8a0daa7f5e8bdf439"],["/br_extract-button/js/26.60b3a738dacd2ba7f0e2.js","96046d2e1d1747741274b983a190f9e9"],["/br_extract-button/js/27.60b3a738dacd2ba7f0e2.js","f84499093749802ded54d4f2ec41f046"],["/br_extract-button/js/28.60b3a738dacd2ba7f0e2.js","319878cda9e494ab160662c8f50cecdc"],["/br_extract-button/js/29.60b3a738dacd2ba7f0e2.js","78f53983e05c2a95a33577c05176f7d7"],["/br_extract-button/js/3.60b3a738dacd2ba7f0e2.js","98b3557e58820d8ac01a036b28ad9f46"],["/br_extract-button/js/30.60b3a738dacd2ba7f0e2.js","83c2dcbafc186b664a6d01d8dd43b029"],["/br_extract-button/js/31.60b3a738dacd2ba7f0e2.js","2f4ef155d47e4581151f1e684d1f171f"],["/br_extract-button/js/32.60b3a738dacd2ba7f0e2.js","03da3fe7fdcadde6e01102bcb1c613c5"],["/br_extract-button/js/33.60b3a738dacd2ba7f0e2.js","998c1ffa642a90b8641b6f55772040e0"],["/br_extract-button/js/34.60b3a738dacd2ba7f0e2.js","c70e0c81cc95f1abb098ab39e711dc34"],["/br_extract-button/js/35.60b3a738dacd2ba7f0e2.js","9fc599df25c8e85f807c1bc24a1b2bc5"],["/br_extract-button/js/36.60b3a738dacd2ba7f0e2.js","102db0aede7c7df83f17907141f50e93"],["/br_extract-button/js/37.60b3a738dacd2ba7f0e2.js","0daa79c8a88d1a8e42d0e989b585f84f"],["/br_extract-button/js/38.60b3a738dacd2ba7f0e2.js","271f10f907394e9a3b42218e279d891f"],["/br_extract-button/js/39.60b3a738dacd2ba7f0e2.js","cc3291623f9565fa3edf2cd29b7584a2"],["/br_extract-button/js/4.60b3a738dacd2ba7f0e2.js","0b3bc2d1d6bad7e4f35e2045032ff355"],["/br_extract-button/js/40.60b3a738dacd2ba7f0e2.js","443d39d07665f7b19e006fffe326d7cd"],["/br_extract-button/js/404.60b3a738dacd2ba7f0e2.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_extract-button/js/41.60b3a738dacd2ba7f0e2.js","2c47e3542c94d08cb5a95577599035ea"],["/br_extract-button/js/42.60b3a738dacd2ba7f0e2.js","5f81fa9f1dd6c9f777654777c6defc95"],["/br_extract-button/js/43.60b3a738dacd2ba7f0e2.js","6e5c226e729aa712995c1c22bf49b9f9"],["/br_extract-button/js/44.60b3a738dacd2ba7f0e2.js","5af50d6a09dd5e77a5c202629713727e"],["/br_extract-button/js/45.60b3a738dacd2ba7f0e2.js","0a01cfded9c36b4f72da7664014ce09a"],["/br_extract-button/js/46.60b3a738dacd2ba7f0e2.js","9d9f6fb1066c48e91a5d9ea8ad31f9d7"],["/br_extract-button/js/47.60b3a738dacd2ba7f0e2.js","ac21399928cce977d2fd64c81450493c"],["/br_extract-button/js/48.60b3a738dacd2ba7f0e2.js","fed012001a93f3ab0f2d5a067048b235"],["/br_extract-button/js/49.60b3a738dacd2ba7f0e2.js","1625b2a663b2fe781471c7e83754490b"],["/br_extract-button/js/5.60b3a738dacd2ba7f0e2.js","488e6b8594547e2b3e733cb70dbc0a99"],["/br_extract-button/js/50.60b3a738dacd2ba7f0e2.js","11a4bfe92ad7a6f27cfa12f7a4384441"],["/br_extract-button/js/51.60b3a738dacd2ba7f0e2.js","4b628b10f2d5b405079d00b68b49066f"],["/br_extract-button/js/52.60b3a738dacd2ba7f0e2.js","ea53befbc15fd32a17a123c66e9516be"],["/br_extract-button/js/53.60b3a738dacd2ba7f0e2.js","24915e62a944043f178a28a94939f02f"],["/br_extract-button/js/54.60b3a738dacd2ba7f0e2.js","f9ce82c1eba1b5949f156f15ab27dad2"],["/br_extract-button/js/55.60b3a738dacd2ba7f0e2.js","11bb74750638ce9cfa9be687866ab198"],["/br_extract-button/js/56.60b3a738dacd2ba7f0e2.js","dd6e15302e295e8a162d041d0dd132ae"],["/br_extract-button/js/57.60b3a738dacd2ba7f0e2.js","be49051fc95706d04fd32b84d83ae678"],["/br_extract-button/js/58.60b3a738dacd2ba7f0e2.js","cb429d77b6828c6ab7091cc3eb56d5ce"],["/br_extract-button/js/59.60b3a738dacd2ba7f0e2.js","4f275a0da12e986fa0e90b34713d7e78"],["/br_extract-button/js/6.60b3a738dacd2ba7f0e2.js","8bcdab92cb6767f385f2aecbfe67596f"],["/br_extract-button/js/60.60b3a738dacd2ba7f0e2.js","0faabad8e465298e40927e937adfa32d"],["/br_extract-button/js/61.60b3a738dacd2ba7f0e2.js","8235dfe44363431a4a591d7c63a9e9f8"],["/br_extract-button/js/62.60b3a738dacd2ba7f0e2.js","ffb22e7f3f2136a423d52f8815cc7c29"],["/br_extract-button/js/63.60b3a738dacd2ba7f0e2.js","e88eeddbea7dc182514dfa70e49770b2"],["/br_extract-button/js/64.60b3a738dacd2ba7f0e2.js","3060133f9778cae20cd5a16d87d88e7f"],["/br_extract-button/js/65.60b3a738dacd2ba7f0e2.js","dca94a266c37ab45bc5795a209a1569d"],["/br_extract-button/js/66.60b3a738dacd2ba7f0e2.js","a09b3211a4d1d88e373d708b90106e98"],["/br_extract-button/js/67.60b3a738dacd2ba7f0e2.js","2e1d9d07990fd15e46e61fc5923e80d5"],["/br_extract-button/js/68.60b3a738dacd2ba7f0e2.js","ead2b3320618499ddc75c160130a9ff5"],["/br_extract-button/js/69.60b3a738dacd2ba7f0e2.js","9c5378c25efd5362aa8fa268c4419176"],["/br_extract-button/js/7.60b3a738dacd2ba7f0e2.js","ee4646876d58a5d754e25c67a0a830c2"],["/br_extract-button/js/70.60b3a738dacd2ba7f0e2.js","c1e9bae8923c603e670412f72f974e8c"],["/br_extract-button/js/71.60b3a738dacd2ba7f0e2.js","e53e8a7f0f8803a052035ba3a8e19f62"],["/br_extract-button/js/8.60b3a738dacd2ba7f0e2.js","10670c38175d043949136ed9e0a01222"],["/br_extract-button/js/9.60b3a738dacd2ba7f0e2.js","9a1d4afddfe336fe59dbeb13c706e606"],["/br_extract-button/js/account-info.60b3a738dacd2ba7f0e2.js","c73ad94793de10d64fc1328a615b0f98"],["/br_extract-button/js/contract.60b3a738dacd2ba7f0e2.js","c78279e94afb52e458942dc251d56583"],["/br_extract-button/js/default~open_position~1833eefb.60b3a738dacd2ba7f0e2.js","0bd95c967974e38c8f4f14eed8d25903"],["/br_extract-button/js/digits.60b3a738dacd2ba7f0e2.js","59cde3c4f5ebb6037af4b31459e11f8c"],["/br_extract-button/js/info-box.60b3a738dacd2ba7f0e2.js","d875b810eca8d18514f47976f1f3cb25"],["/br_extract-button/js/modals.60b3a738dacd2ba7f0e2.js","e4a7b220e15952a2d5fc1376785ae59f"],["/br_extract-button/js/notification-messages.60b3a738dacd2ba7f0e2.js","f9fa1e1fd9591e927fe0d5dcc9e6b9ad"],["/br_extract-button/js/open_positions.60b3a738dacd2ba7f0e2.js","1fc1b7b908937b9cd37fa021895fed7b"],["/br_extract-button/js/profit_table.60b3a738dacd2ba7f0e2.js","d1779b49afa57da1a153b7f2e23d3175"],["/br_extract-button/js/push-notification.60b3a738dacd2ba7f0e2.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_extract-button/js/reports.60b3a738dacd2ba7f0e2.js","2a389a85ed4c3cd67303ecbb0a6c4061"],["/br_extract-button/js/screen-small.60b3a738dacd2ba7f0e2.js","192ebe3c28077f8af194da612b0714b9"],["/br_extract-button/js/settings-chart.60b3a738dacd2ba7f0e2.js","affa35d00136723a3026be5b30c0c299"],["/br_extract-button/js/settings-language.60b3a738dacd2ba7f0e2.js","0c731935668f644467cefdc4e9b95754"],["/br_extract-button/js/settings-theme.60b3a738dacd2ba7f0e2.js","d4f189f61a0ee6a651bcc9d7e314f25d"],["/br_extract-button/js/smart_chart.60b3a738dacd2ba7f0e2.js","0bd151447fb09ea7ea7570c5835f6351"],["/br_extract-button/js/smartcharts/chartiq-5bb834.smartcharts.js","55b80fceca4ae8de1bbccab6307f03b3"],["/br_extract-button/js/smartcharts/de-po-4ebb0d.smartcharts.js","c82388fdf51df760211407057a634f47"],["/br_extract-button/js/smartcharts/es-po-c179ee.smartcharts.js","4c1f372f7e674856da87a05da0b27ee0"],["/br_extract-button/js/smartcharts/fr-po-b390e4.smartcharts.js","946e71b243e29758a36392ed2004a25b"],["/br_extract-button/js/smartcharts/html2canvas-7f0471.smartcharts.js","522651dbbc71ec8c5eca49dfec519476"],["/br_extract-button/js/smartcharts/id-po-ee47a9.smartcharts.js","97dc6ca0d1c7bbf575d6d5279bf12223"],["/br_extract-button/js/smartcharts/it-po-2f06e4.smartcharts.js","6d18c8d9e4aa76e553e09b50b91b8440"],["/br_extract-button/js/smartcharts/nl-po-321630.smartcharts.js","baa11b7e5cf5d1b4ffb250c67af2fd88"],["/br_extract-button/js/smartcharts/pl-po-229aeb.smartcharts.js","57548b7ceb5d3173c95ae4d384cad280"],["/br_extract-button/js/smartcharts/pt-po-10fbc7.smartcharts.js","eaef7d5d7611189c23d43b3b289a0f6e"],["/br_extract-button/js/smartcharts/ru-po-d3ee8c.smartcharts.js","311d37ef72cb9607535669d1e7c74be7"],["/br_extract-button/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/br_extract-button/js/smartcharts/th-po-1e8510.smartcharts.js","c9ab0a99c8be1b9cf7ecc652549f9494"],["/br_extract-button/js/smartcharts/vendors~resize-observer-polyfill-c5c154.smartcharts.js","ccc9eb227784346282ba1d2511f8ba51"],["/br_extract-button/js/smartcharts/vi-po-faa561.smartcharts.js","61e682c04c8cd5e0cdee1e22d4916234"],["/br_extract-button/js/smartcharts/zh_cn-po-9bf3c6.smartcharts.js","cc14a3e3e274b09a3661ad94d2cd03ac"],["/br_extract-button/js/smartcharts/zh_tw-po-68a36e.smartcharts.js","27cd6c639e741588dd99bfe4f5f8bbdd"],["/br_extract-button/js/statement.60b3a738dacd2ba7f0e2.js","0faf79fb5a2f9352d1e6f4a112892fdd"],["/br_extract-button/js/toggle-menu-drawer.60b3a738dacd2ba7f0e2.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_extract-button/js/two-month-picker.60b3a738dacd2ba7f0e2.js","7ffcebff91118e847097df8afcb893b7"],["/br_extract-button/js/vendors~open_position~7c650be5.60b3a738dacd2ba7f0e2.js","96370a09a14169069e4993fc9b50456a"],["/br_extract-button/js/vendors~smart_chart.60b3a738dacd2ba7f0e2.js","51377081049a0f06dfae83d794110d25"],["/br_extract-button/js/work-in-progress.60b3a738dacd2ba7f0e2.js","15d5d8cb32b88ce19746e2ab41348e01"],["/br_extract-button/manifest.json","73565b92e506ef3fbbd44da930d9fe32"],["/br_extract-button/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_extract-button/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_extract-button/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_extract-button/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_extract-button/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_extract-button/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_extract-button/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_extract-button/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_extract-button/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_extract-button/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_extract-button/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_extract-button/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_extract-button/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_extract-button/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_extract-button/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_extract-button/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_extract-button/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_extract-button/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_extract-button/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_extract-button/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_extract-button/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_extract-button/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_extract-button/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_extract-button/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_extract-button/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_extract-button/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/br_extract-button/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







