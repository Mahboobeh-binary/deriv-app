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

var precacheConfig = [["/br_modal/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_modal/css/AccountSignupModal.css","660c36e422e2b8ce0d3fd549916a331c"],["/br_modal/css/app.css","29f0959cfc6468aa8d77afe49575222d"],["/br_modal/css/default~open_position~1833eefb.css","08d876eca23322e93f73ff993902e549"],["/br_modal/css/digits.css","8e0c3639dc5d97daf805bd355f6bd61f"],["/br_modal/css/modals.css","62e97c98c849dfaad877a710a7c06350"],["/br_modal/css/notification-messages.css","3a4c941d74380bc59f328d97d3d5a29f"],["/br_modal/css/reports.css","adde10a595cca6346ca31ca53b4b2950"],["/br_modal/css/screen-small.css","6ef029a4ce7a534a440630f047658efb"],["/br_modal/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/br_modal/css/work-in-progress.css","d50fe922cdf426bafc8e8f12c106e137"],["/br_modal/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_modal/index.html","010ebafcbc7c611a2540c65a1f499479"],["/br_modal/js/0.e68b6212348fe9fc26a7.js","64c586e1b7c4d79ef231b8df5a09fe56"],["/br_modal/js/1.e68b6212348fe9fc26a7.js","dc0fe784d554d7b103dadb5cf81d9022"],["/br_modal/js/10.e68b6212348fe9fc26a7.js","096acc86eb2a53fc677f2a78fec027f7"],["/br_modal/js/11.e68b6212348fe9fc26a7.js","a00086e38be35f39da8baf5da956e36a"],["/br_modal/js/12.e68b6212348fe9fc26a7.js","07bc71639bd54f93327eb29cbb517e6f"],["/br_modal/js/13.e68b6212348fe9fc26a7.js","c64ec2c338aaafcb826f5db4dc5d0191"],["/br_modal/js/14.e68b6212348fe9fc26a7.js","24afb1315071ba236bf131971a58bf20"],["/br_modal/js/15.e68b6212348fe9fc26a7.js","108f22d25cd902127d019f4a5aa2186a"],["/br_modal/js/16.e68b6212348fe9fc26a7.js","9f43d30e28041747bef813973268fb8c"],["/br_modal/js/17.e68b6212348fe9fc26a7.js","20c2ade54ce94b4f2aea999d6188b210"],["/br_modal/js/18.e68b6212348fe9fc26a7.js","ba09a00baf01aa5a73ebb3e3029cf1e5"],["/br_modal/js/19.e68b6212348fe9fc26a7.js","a41e570e6b974d8c23fa49505f9692ba"],["/br_modal/js/2.e68b6212348fe9fc26a7.js","69a3916151bfeca6ea3e309cb677f383"],["/br_modal/js/20.e68b6212348fe9fc26a7.js","d6c104d127d0d4207dcbc279a70eeb01"],["/br_modal/js/21.e68b6212348fe9fc26a7.js","54f94adfc746feaade0ca8d3db5a3f8f"],["/br_modal/js/22.e68b6212348fe9fc26a7.js","77f1e32427b6eb3fa77960fe71a078e6"],["/br_modal/js/23.e68b6212348fe9fc26a7.js","b35c69f7a014b49f1d4e7ba5e54d469c"],["/br_modal/js/24.e68b6212348fe9fc26a7.js","17a522664b7d3d9578a8f10a63cce74a"],["/br_modal/js/25.e68b6212348fe9fc26a7.js","4619a170bd276127dff30017394fea2c"],["/br_modal/js/26.e68b6212348fe9fc26a7.js","3c7417e4b68993ff100afa6d82591a1a"],["/br_modal/js/27.e68b6212348fe9fc26a7.js","dcf0d77d7b0d3c4cd992ee66ebd8062a"],["/br_modal/js/28.e68b6212348fe9fc26a7.js","1fcdee3109f640d592420f3d8af745e3"],["/br_modal/js/29.e68b6212348fe9fc26a7.js","966f03631a74c09b9e29987ec8c279cd"],["/br_modal/js/3.e68b6212348fe9fc26a7.js","13cae3d7d4ced653bf4da4d9de3060de"],["/br_modal/js/30.e68b6212348fe9fc26a7.js","00e69a130508ae623c53593494137b2c"],["/br_modal/js/31.e68b6212348fe9fc26a7.js","88e0d2764bac84417f787d220748dcb4"],["/br_modal/js/32.e68b6212348fe9fc26a7.js","bceda5623b74681f03f00f7ec8f291a2"],["/br_modal/js/33.e68b6212348fe9fc26a7.js","4122f739c5c14c42055a0afe3cdf2444"],["/br_modal/js/34.e68b6212348fe9fc26a7.js","8b150068220e9e0608821fdb44805784"],["/br_modal/js/35.e68b6212348fe9fc26a7.js","bf9fb7a7d6780b00eccc655472070c87"],["/br_modal/js/36.e68b6212348fe9fc26a7.js","4e613f6e01862cb157f0493d413c60d9"],["/br_modal/js/37.e68b6212348fe9fc26a7.js","eab2edaa04dee07ccaae4def7d41f89e"],["/br_modal/js/38.e68b6212348fe9fc26a7.js","0c0fd254ad5a5414103a9312379e00ce"],["/br_modal/js/39.e68b6212348fe9fc26a7.js","50c7bf52b8c6440409085c23e7764acb"],["/br_modal/js/4.e68b6212348fe9fc26a7.js","22c8d61732566693b2aca7f41a29147d"],["/br_modal/js/40.e68b6212348fe9fc26a7.js","49487c43f0a133fc74a8731571320116"],["/br_modal/js/404.e68b6212348fe9fc26a7.js","1f3a7716b8719351582e43542ab017e0"],["/br_modal/js/41.e68b6212348fe9fc26a7.js","c5c1b64c0c819285548dea76e37e804f"],["/br_modal/js/42.e68b6212348fe9fc26a7.js","f79d688f2091acc95d763b586baf0016"],["/br_modal/js/43.e68b6212348fe9fc26a7.js","dd008458f769d483621d1ad493bb6362"],["/br_modal/js/44.e68b6212348fe9fc26a7.js","af890d550ea3c3c39dc8952fd77d7d43"],["/br_modal/js/45.e68b6212348fe9fc26a7.js","0a9b8f9eab8bce4c750a8c2e9f521451"],["/br_modal/js/46.e68b6212348fe9fc26a7.js","9d26823d021cbd83382dcbd692169644"],["/br_modal/js/47.e68b6212348fe9fc26a7.js","35443d7dde586a6cc4b5b257eaefa538"],["/br_modal/js/48.e68b6212348fe9fc26a7.js","0a4695d91341277ea85b4f086c9e27c5"],["/br_modal/js/49.e68b6212348fe9fc26a7.js","cbf81de043b846eff7ddf41ddf465437"],["/br_modal/js/5.e68b6212348fe9fc26a7.js","da21628bd38fc5e09b6d9c77955021b9"],["/br_modal/js/50.e68b6212348fe9fc26a7.js","76a86342a2795054d56ec680402f5bd5"],["/br_modal/js/51.e68b6212348fe9fc26a7.js","108b69cc96c39187ea8f920ff658d248"],["/br_modal/js/52.e68b6212348fe9fc26a7.js","251e9c69bc786cb361870a4d2e0e4640"],["/br_modal/js/53.e68b6212348fe9fc26a7.js","507590170d98f0d48b383f36ab24d4b9"],["/br_modal/js/54.e68b6212348fe9fc26a7.js","5a6d246a89027160cb7a78673b160be9"],["/br_modal/js/55.e68b6212348fe9fc26a7.js","0f706cb55f66e4693dc4433d0af10490"],["/br_modal/js/56.e68b6212348fe9fc26a7.js","2d821b2d5979697efd3a99220b81f852"],["/br_modal/js/57.e68b6212348fe9fc26a7.js","fdb5cf1f75170b45d6520a3ca0fc1c7e"],["/br_modal/js/58.e68b6212348fe9fc26a7.js","b9489520b5ce21e229050c3fbbb27c31"],["/br_modal/js/59.e68b6212348fe9fc26a7.js","83d9dbc99e64e8bb8b9850cc6e64a98b"],["/br_modal/js/6.e68b6212348fe9fc26a7.js","b5abf4b786a03677913a038b9061e1c8"],["/br_modal/js/60.e68b6212348fe9fc26a7.js","b0ae53a7457233d4c4f8df94c9566859"],["/br_modal/js/61.e68b6212348fe9fc26a7.js","dc860c95a279dcd2574ec0ece8997e4e"],["/br_modal/js/62.e68b6212348fe9fc26a7.js","0a9e2be2c047b6fb983c6de4814c0ce3"],["/br_modal/js/63.e68b6212348fe9fc26a7.js","fc5737dd118281813073561c8f633131"],["/br_modal/js/64.e68b6212348fe9fc26a7.js","3b4d32af8a04f274e2c2d3b78275182c"],["/br_modal/js/65.e68b6212348fe9fc26a7.js","0ac0fca69b645ed9684ef0e4f413ba5d"],["/br_modal/js/66.e68b6212348fe9fc26a7.js","ebf633a92e2d66ef8cb59ad0cae17e39"],["/br_modal/js/67.e68b6212348fe9fc26a7.js","1afaf275034ce6cc8f55cc6f7c2118ad"],["/br_modal/js/68.e68b6212348fe9fc26a7.js","315e7c693169da59ab2344116756c452"],["/br_modal/js/69.e68b6212348fe9fc26a7.js","22b972b510221751a09294cefa3bb68f"],["/br_modal/js/7.e68b6212348fe9fc26a7.js","1d7e0da4612a619c8ea36b01d8bc5284"],["/br_modal/js/70.e68b6212348fe9fc26a7.js","3fc87aa6def127527570b21358990eb4"],["/br_modal/js/71.e68b6212348fe9fc26a7.js","80b2e478300545e87f4338936843ace1"],["/br_modal/js/8.e68b6212348fe9fc26a7.js","88b9914e6d1c3404dfe4f756d064c9d8"],["/br_modal/js/9.e68b6212348fe9fc26a7.js","b419f6c43489d193edee83ec3abf011a"],["/br_modal/js/AccountSignupModal.e68b6212348fe9fc26a7.js","3af9abaf5c3ab79de3030923e16966ca"],["/br_modal/js/account-info.e68b6212348fe9fc26a7.js","6db731be25debebc259ffa5c62ad17f9"],["/br_modal/js/contract.e68b6212348fe9fc26a7.js","45ea9fecb2fd3ccbac0e64bce025c619"],["/br_modal/js/default~open_position~1833eefb.e68b6212348fe9fc26a7.js","8c1a007d981442a15fc66a54539749c2"],["/br_modal/js/digits.e68b6212348fe9fc26a7.js","a88dfe515d12b540203aad3b903cc284"],["/br_modal/js/info-box.e68b6212348fe9fc26a7.js","9177dffd36677605376b2052abaa8369"],["/br_modal/js/modals.e68b6212348fe9fc26a7.js","32146cf356a079fcdada18c8c1375689"],["/br_modal/js/notification-messages.e68b6212348fe9fc26a7.js","a9a7282fe7fec067ab20d9bee25e6ebf"],["/br_modal/js/open_positions.e68b6212348fe9fc26a7.js","f90c235a474ad76694fe4067536b087e"],["/br_modal/js/profit_table.e68b6212348fe9fc26a7.js","1c41fefa989296a1efa073e10a2b5f60"],["/br_modal/js/push-notification.e68b6212348fe9fc26a7.js","b8af4326287b0fbbc0467f8d4323265f"],["/br_modal/js/reports.e68b6212348fe9fc26a7.js","ce93665771f7ec539efe09b208f49d91"],["/br_modal/js/screen-small.e68b6212348fe9fc26a7.js","8ce1cd64905b9502827322b5a618bf9a"],["/br_modal/js/settings-chart.e68b6212348fe9fc26a7.js","203983190b6fa6ea82520681789bf9dd"],["/br_modal/js/settings-language.e68b6212348fe9fc26a7.js","cf1389132c2c6407d696a32e5192247f"],["/br_modal/js/settings-theme.e68b6212348fe9fc26a7.js","fde76e03c55c00f2e88f8e14e109b97c"],["/br_modal/js/smart_chart.e68b6212348fe9fc26a7.js","853e504b0e11bbf456d3f2cfc42668b7"],["/br_modal/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_modal/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_modal/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_modal/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_modal/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_modal/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_modal/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_modal/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_modal/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_modal/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_modal/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_modal/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_modal/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_modal/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_modal/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_modal/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_modal/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_modal/js/statement.e68b6212348fe9fc26a7.js","942e88fbfc178cc74228a048d2a103f2"],["/br_modal/js/toggle-menu-drawer.e68b6212348fe9fc26a7.js","c36c5c056db481cedb1abb851c27465a"],["/br_modal/js/two-month-picker.e68b6212348fe9fc26a7.js","d366f39bb014def5c2f841106481e2c9"],["/br_modal/js/vendors~AccountSignupModal.e68b6212348fe9fc26a7.js","cd45816f5fc2e1bc8a5faaae018b3618"],["/br_modal/js/vendors~digits~info-b~897959f6.e68b6212348fe9fc26a7.js","46b15bf292db5de0f1d34d8f63458cfd"],["/br_modal/js/vendors~open_position~7c650be5.e68b6212348fe9fc26a7.js","35e9a0b928d379da3420c5b85c32e316"],["/br_modal/js/vendors~smart_chart.e68b6212348fe9fc26a7.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/br_modal/js/work-in-progress.e68b6212348fe9fc26a7.js","d496270ecfd75478806f8e92ae25c4c1"],["/br_modal/manifest.json","d730990be5915e0e9d812d10bba55821"],["/br_modal/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_modal/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_modal/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_modal/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_modal/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_modal/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_modal/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_modal/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_modal/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_modal/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_modal/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_modal/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_modal/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_modal/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_modal/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_modal/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_modal/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_modal/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_modal/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_modal/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_modal/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_modal/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_modal/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_modal/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_modal/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_modal/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_modal/';
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







