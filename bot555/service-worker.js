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

var precacheConfig = [["/bot555/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/bot555/css/app.css","a17a0ef99a14dadbf421a2bf9bd2bf3c"],["/bot555/css/bot.css","3e9910e4cd80cdbaef9abf1fd1fda785"],["/bot555/css/modals.css","80d99d01a10a1921a8dce6670f8d4773"],["/bot555/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/bot555/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/bot555/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/bot555/index.html","42678bdc32343056672026b18cf6ad7f"],["/bot555/js/0.ea4cf3e3abe16145e26b.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/bot555/js/1.ea4cf3e3abe16145e26b.js","d5b227514040f9243fd1bd65d8f4d25e"],["/bot555/js/10.ea4cf3e3abe16145e26b.js","751de4c79083a2ec085f5657e7a3be84"],["/bot555/js/11.ea4cf3e3abe16145e26b.js","b9f3f7bd369081d485c5a505f295c43c"],["/bot555/js/12.ea4cf3e3abe16145e26b.js","4240972ecd2a9c60f7a861349bda3abc"],["/bot555/js/13.ea4cf3e3abe16145e26b.js","27c08e553da23f76336673f969868de6"],["/bot555/js/14.ea4cf3e3abe16145e26b.js","cc88ae1128218b4d7ffb73a9a5edc5af"],["/bot555/js/15.ea4cf3e3abe16145e26b.js","98f03eb56745ceaf0bd1a093f33e98c2"],["/bot555/js/16.ea4cf3e3abe16145e26b.js","dfeaa69a837d4f00802b07fcd9cc0abd"],["/bot555/js/17.ea4cf3e3abe16145e26b.js","9289b22ae19e0d3a0f7046c462a601bd"],["/bot555/js/18.ea4cf3e3abe16145e26b.js","0a45feb945f313a0e1fa016842c030bb"],["/bot555/js/19.ea4cf3e3abe16145e26b.js","f8c91b6f5020685476adfcb81387882d"],["/bot555/js/2.ea4cf3e3abe16145e26b.js","e094c75826ae51075cb79a2d8e515cae"],["/bot555/js/20.ea4cf3e3abe16145e26b.js","4264b25b2877ac70f0d5a0e024eb09de"],["/bot555/js/21.ea4cf3e3abe16145e26b.js","8928e4241bdaadc6d199fb47e10c66f5"],["/bot555/js/22.ea4cf3e3abe16145e26b.js","ef5bdfa6d80889af34286ce2171bd3e1"],["/bot555/js/23.ea4cf3e3abe16145e26b.js","16a0788f9067ca749b18c5c364faeff8"],["/bot555/js/24.ea4cf3e3abe16145e26b.js","2e326919939a7c1f6baf7fce4f937a51"],["/bot555/js/25.ea4cf3e3abe16145e26b.js","b67f3e192d6414c8a0daa7f5e8bdf439"],["/bot555/js/26.ea4cf3e3abe16145e26b.js","96046d2e1d1747741274b983a190f9e9"],["/bot555/js/27.ea4cf3e3abe16145e26b.js","f84499093749802ded54d4f2ec41f046"],["/bot555/js/28.ea4cf3e3abe16145e26b.js","319878cda9e494ab160662c8f50cecdc"],["/bot555/js/29.ea4cf3e3abe16145e26b.js","78f53983e05c2a95a33577c05176f7d7"],["/bot555/js/3.ea4cf3e3abe16145e26b.js","684cbdefdffa09869a7426a6ac62db21"],["/bot555/js/30.ea4cf3e3abe16145e26b.js","83c2dcbafc186b664a6d01d8dd43b029"],["/bot555/js/31.ea4cf3e3abe16145e26b.js","926140a3f7f662052cb50da0276017b7"],["/bot555/js/32.ea4cf3e3abe16145e26b.js","03da3fe7fdcadde6e01102bcb1c613c5"],["/bot555/js/33.ea4cf3e3abe16145e26b.js","998c1ffa642a90b8641b6f55772040e0"],["/bot555/js/34.ea4cf3e3abe16145e26b.js","c70e0c81cc95f1abb098ab39e711dc34"],["/bot555/js/35.ea4cf3e3abe16145e26b.js","9fc599df25c8e85f807c1bc24a1b2bc5"],["/bot555/js/36.ea4cf3e3abe16145e26b.js","102db0aede7c7df83f17907141f50e93"],["/bot555/js/37.ea4cf3e3abe16145e26b.js","0daa79c8a88d1a8e42d0e989b585f84f"],["/bot555/js/38.ea4cf3e3abe16145e26b.js","271f10f907394e9a3b42218e279d891f"],["/bot555/js/39.ea4cf3e3abe16145e26b.js","cc3291623f9565fa3edf2cd29b7584a2"],["/bot555/js/4.ea4cf3e3abe16145e26b.js","0b3bc2d1d6bad7e4f35e2045032ff355"],["/bot555/js/40.ea4cf3e3abe16145e26b.js","443d39d07665f7b19e006fffe326d7cd"],["/bot555/js/404.ea4cf3e3abe16145e26b.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/bot555/js/41.ea4cf3e3abe16145e26b.js","2c47e3542c94d08cb5a95577599035ea"],["/bot555/js/42.ea4cf3e3abe16145e26b.js","5f81fa9f1dd6c9f777654777c6defc95"],["/bot555/js/43.ea4cf3e3abe16145e26b.js","6e5c226e729aa712995c1c22bf49b9f9"],["/bot555/js/44.ea4cf3e3abe16145e26b.js","5af50d6a09dd5e77a5c202629713727e"],["/bot555/js/45.ea4cf3e3abe16145e26b.js","0a01cfded9c36b4f72da7664014ce09a"],["/bot555/js/46.ea4cf3e3abe16145e26b.js","9d9f6fb1066c48e91a5d9ea8ad31f9d7"],["/bot555/js/47.ea4cf3e3abe16145e26b.js","ac21399928cce977d2fd64c81450493c"],["/bot555/js/48.ea4cf3e3abe16145e26b.js","fed012001a93f3ab0f2d5a067048b235"],["/bot555/js/49.ea4cf3e3abe16145e26b.js","1625b2a663b2fe781471c7e83754490b"],["/bot555/js/5.ea4cf3e3abe16145e26b.js","488e6b8594547e2b3e733cb70dbc0a99"],["/bot555/js/50.ea4cf3e3abe16145e26b.js","11a4bfe92ad7a6f27cfa12f7a4384441"],["/bot555/js/51.ea4cf3e3abe16145e26b.js","4b628b10f2d5b405079d00b68b49066f"],["/bot555/js/52.ea4cf3e3abe16145e26b.js","ea53befbc15fd32a17a123c66e9516be"],["/bot555/js/53.ea4cf3e3abe16145e26b.js","24915e62a944043f178a28a94939f02f"],["/bot555/js/54.ea4cf3e3abe16145e26b.js","f9ce82c1eba1b5949f156f15ab27dad2"],["/bot555/js/55.ea4cf3e3abe16145e26b.js","11bb74750638ce9cfa9be687866ab198"],["/bot555/js/56.ea4cf3e3abe16145e26b.js","dd6e15302e295e8a162d041d0dd132ae"],["/bot555/js/57.ea4cf3e3abe16145e26b.js","be49051fc95706d04fd32b84d83ae678"],["/bot555/js/58.ea4cf3e3abe16145e26b.js","cb429d77b6828c6ab7091cc3eb56d5ce"],["/bot555/js/59.ea4cf3e3abe16145e26b.js","4f275a0da12e986fa0e90b34713d7e78"],["/bot555/js/6.ea4cf3e3abe16145e26b.js","8bcdab92cb6767f385f2aecbfe67596f"],["/bot555/js/60.ea4cf3e3abe16145e26b.js","0faabad8e465298e40927e937adfa32d"],["/bot555/js/61.ea4cf3e3abe16145e26b.js","8235dfe44363431a4a591d7c63a9e9f8"],["/bot555/js/62.ea4cf3e3abe16145e26b.js","ffb22e7f3f2136a423d52f8815cc7c29"],["/bot555/js/63.ea4cf3e3abe16145e26b.js","e88eeddbea7dc182514dfa70e49770b2"],["/bot555/js/64.ea4cf3e3abe16145e26b.js","3060133f9778cae20cd5a16d87d88e7f"],["/bot555/js/65.ea4cf3e3abe16145e26b.js","dca94a266c37ab45bc5795a209a1569d"],["/bot555/js/66.ea4cf3e3abe16145e26b.js","a09b3211a4d1d88e373d708b90106e98"],["/bot555/js/67.ea4cf3e3abe16145e26b.js","2e1d9d07990fd15e46e61fc5923e80d5"],["/bot555/js/68.ea4cf3e3abe16145e26b.js","ead2b3320618499ddc75c160130a9ff5"],["/bot555/js/69.ea4cf3e3abe16145e26b.js","9c5378c25efd5362aa8fa268c4419176"],["/bot555/js/7.ea4cf3e3abe16145e26b.js","ee4646876d58a5d754e25c67a0a830c2"],["/bot555/js/70.ea4cf3e3abe16145e26b.js","c1e9bae8923c603e670412f72f974e8c"],["/bot555/js/71.ea4cf3e3abe16145e26b.js","e53e8a7f0f8803a052035ba3a8e19f62"],["/bot555/js/8.ea4cf3e3abe16145e26b.js","10670c38175d043949136ed9e0a01222"],["/bot555/js/9.ea4cf3e3abe16145e26b.js","9a1d4afddfe336fe59dbeb13c706e606"],["/bot555/js/DenialOfServiceModal.ea4cf3e3abe16145e26b.js","bca386b2f999825539a0f2ed694e34b2"],["/bot555/js/MarketUnavailableModal.ea4cf3e3abe16145e26b.js","78a067dd7dc79f699d02ca255e49390a"],["/bot555/js/ServicesErrorModal.ea4cf3e3abe16145e26b.js","cb4569407fe835a6b6950689f92388b0"],["/bot555/js/UnsupportedContractModal.ea4cf3e3abe16145e26b.js","58ba2eb5480fe0cffb915d9e286cab1f"],["/bot555/js/account-info.ea4cf3e3abe16145e26b.js","990a5160356fee546b034842aa6edfb5"],["/bot555/js/bot/1-cb2ac4.bot.js","52fd85a5ad848d6e8dfc2b82c022b88d"],["/bot555/js/bot/10-3a811d.bot.js","f1f3b470a300c9cebd55b95d4cc8b7f2"],["/bot555/js/bot/11-bb6e3b.bot.js","8cafc0a763cb6763bae66cf6beedc153"],["/bot555/js/bot/12-fce8f2.bot.js","101864634a098ee3251797e9de6a85c4"],["/bot555/js/bot/2-b96798.bot.js","8fc16af2929fd3acfa53cb8d89f800d1"],["/bot555/js/bot/3-f8fe4e.bot.js","97ea91242aeddda60681c46999647e91"],["/bot555/js/bot/4-bcd799.bot.js","a0f2bb12b474d2015f7f5f4a02b61724"],["/bot555/js/bot/5-29eb42.bot.js","08ed58c1620ce883475032da96671058"],["/bot555/js/bot/6-6111ba.bot.js","5fc3cc0657580b5d90449104da709737"],["/bot555/js/bot/7-00d034.bot.js","45d0d41fcc76f707ad5a4f7e863c35d1"],["/bot555/js/bot/8-5fdd96.bot.js","f9e72478e6b544f740ed4125ca825a8e"],["/bot555/js/bot/9-f6495d.bot.js","848491d506c39c6c593c2c0f8ac8f4b0"],["/bot555/js/bot/bot-sprite.svg","e163293b73b5b28c4d08239ad518187a"],["/bot555/js/bot/bot.css","3e9910e4cd80cdbaef9abf1fd1fda785"],["/bot555/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot555/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot555/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot555/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot555/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot555/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot555/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot555/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot555/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot555/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot555/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot555/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot555/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot555/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot555/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot555/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot555/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot555/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot555/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot555/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot555/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot555/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot555/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot555/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot555/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot555/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot555/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot555/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot555/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot555/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot555/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot555/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot555/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot555/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot555/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot555/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot555/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot555/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot555/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot555/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot555/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot555/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot555/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot555/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot555/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot555/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot555/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot555/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot555/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot555/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot555/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot555/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot555/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot555/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot555/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot555/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot555/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot555/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot555/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot555/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot555/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot555/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot555/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot555/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot555/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot555/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot555/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot555/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot555/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot555/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot555/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot555/js/bot/xml/main.xml","f4aadc9f189e2d6c76b51c3dc7c36352"],["/bot555/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/bot555/js/main.ea4cf3e3abe16145e26b.js","5e2012329de6a51923580110584c9cc5"],["/bot555/js/modals.ea4cf3e3abe16145e26b.js","193a3957171fb617cb816e1a6fbde777"],["/bot555/js/push-notification.ea4cf3e3abe16145e26b.js","0b12df6e5ba12101d9d791943e5994ca"],["/bot555/js/settings-chart.ea4cf3e3abe16145e26b.js","affa35d00136723a3026be5b30c0c299"],["/bot555/js/settings-language.ea4cf3e3abe16145e26b.js","0c731935668f644467cefdc4e9b95754"],["/bot555/js/settings-theme.ea4cf3e3abe16145e26b.js","636b375e93c4876f9ef7fb914161c417"],["/bot555/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/bot555/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/bot555/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/bot555/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/bot555/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/bot555/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/bot555/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/bot555/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/bot555/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/bot555/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/bot555/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/bot555/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/bot555/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/bot555/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/bot555/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/bot555/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/bot555/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/bot555/js/toggle-cashier.ea4cf3e3abe16145e26b.js","b85412f0a1df1df3627ec4a528dc3d73"],["/bot555/js/toggle-menu-drawer.ea4cf3e3abe16145e26b.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/bot555/js/wallet-information.ea4cf3e3abe16145e26b.js","336d02e07984b18d01a8473503d91f8d"],["/bot555/js/work-in-progress.ea4cf3e3abe16145e26b.js","3b7eb417d4d773b2f639dcdf34cbb507"],["/bot555/manifest.json","94ac4486a030f3f356ed4d1a177c1a0b"],["/bot555/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot555/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot555/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot555/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot555/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot555/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot555/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot555/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot555/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot555/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot555/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot555/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot555/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot555/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot555/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot555/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot555/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/bot555/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/bot555/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/bot555/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/bot555/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/bot555/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/bot555/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/bot555/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/bot555/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/bot555/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/bot555/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/bot555/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/bot555/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/bot555/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/bot555/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/bot555/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot555/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/bot555/';
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







