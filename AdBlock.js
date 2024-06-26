// ==UserScript==
// @ScriptName        墨鱼去开屏𝐕𝟐.𝟎
// @Author            @ddgksf2013
// @TgChannel         𝐡𝐭𝐭𝐩𝐬://𝐭.𝐦𝐞/𝐝𝐝𝐠𝐤𝐬𝐟𝟐𝟎𝟐𝟏
// @TgBot             https://t.me/ddgksf2013_bot
// @WechatID          公众号墨鱼手记
// @Feedback          💡 请通过邮件反馈问题『其它方式一概无视』：𝐝𝐝𝐠𝐤𝐬𝐟𝟐𝟎𝟏𝟑@𝟏𝟔𝟑.𝐜𝐨𝐦 💡
// @UpdateTime        2024-03-01
// @Please            如需引用请注明出处，谢谢合作！
// @Function          去除APP首页启动广告和部分应用内广告，如果有需要的去除广告的APP，可以公众号后台直接回复
// @ExtraTxt          Only provide the removal of open-screen advertisements for personally used apps
// @Attention         QuantumultX能去广告，不代表能去所有广告！（应用个数：277）
// @Mark              名字后面的*代表该应用启动倒计时仍然存在
// @Contributor       @blackmatrix7, @app2smile, @DivineEngine, @kyle, @Nick-workflow, @kkpp, @LE
// @Tips              利用捷径打开URL[填写AppScheme]，即可免开屏广告打开应用，适合无法MITM的APP
// @DoitYourself      https://mp.weixin.qq.com/s/DOwEQs4Z7eFpGWOVAO-2QA
// @APPList           无法𝐌𝐈𝐓𝐌的应用：银行类[绝大部分]|抖音|蜂巢|滴答清单|Taio|小米运动|有条下载|Fileball|万年历|豆瓣[信息流]|虎牙直播|货拉拉|番茄小说|携程旅行[APP]|凯叔讲故事|七猫小说|醒图|剪映|潮汐|不背单词|高铁管家|咕咚运动|APTV|DayOne|懂车帝|南京银行
// @Attention         如果广告仍然存在，请『卸载应用』重新安装，还是不行则表示『规则里没有或已失效』
// @ScriptURL         https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/StartUp.conf
// ==/UserScript==



# ======= ~ ====== #

#以下重写请自行添加，本重写引用不含[喜马拉雅、哔哩哔哩、微博(国际版)、Youtube、Keep、百度贴吧、知乎、高德地图、小红书、网易云、百度地图、什么值得买、皮皮虾、菜鸟]去广告
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Ximalaya.conf
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Bilibili.conf
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Weibo.conf
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/YoutubeAds.conf
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/KeepStyle.conf
;https://github.com/app2smile/rules/raw/master/module/tieba-qx.conf
;https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zheye/zheye.snippet
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Amap.conf
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/XiaoHongShu.conf
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Netease.conf
;https://gist.githubusercontent.com/ddgksf2013/beec132ca0c3570ffa0cf331bce8f82a/raw/baidumap.adblock.conf
;https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.qxrewrite
;https://gist.githubusercontent.com/ddgksf2013/bb1dadbd32f67c68772caebcc70b0a33/raw/pipixia.adblock.js
;https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Cainiao.conf


# ======= 0~9 ======= #

# > version
^https?:\/\/2024.03.01/v2.0.433 url reject-200

# > 58
^https?:\/\/app\.58\.com\/api\/home\/(advertising|appadv) url reject-200
# > 555
^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+){1,3}(:\d+)?\/api\/v\d\/movie\/index_recommend url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/555Ad.js
^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+){1,3}(:\d+)?\/api\/v\d\/advert url reject-200
# > 12123
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery url reject-200

# > 500
^https?:\/\/evs\.500\.com\/esinfo\/loading\/loading url reject-200
# > 12306
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://github.com/ddgksf2013/Scripts/raw/master/12306.js


# ======= A ======= #

# > acfun
^https?:\/\/api-new\.app\.acfun\.cn\/rest\/app\/flash\/screen\/ url reject-200
# > aihuishou
^https?:\/\/gw.aihuishou.com\/app-portal\/home\/getadvertisement url reject-200
# > appso
^https?:\/\/sso.ifanr.com\/jiong\/IOS\/appso\/splash\/ url reject-200

# > ahfs
^https?:\/\/.*(xbwpys|ahhhhfs)\.com\/($|[0-9a-zA-Z_/]+\/$) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ahfs.js
# > aastocks
^http:\/\/.*aastocks\.com\/ad\/ url reject-200


# ======= B ======= #

# > baiduditu
^https:\/\/newclient\.map\.baidu\.com\/client\/phpui2\/\?qt=ads url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/baidumap.js
# > baidufanyi
^https?:\/\/mime\.baidu\.com\/v\d\/IosStart\/getStartInfo url reject-200
^https?:\/\/mime\.baidu\.com\/v\d\/activity\/advertisement url reject-200
# > baiduwenku
^https?:\/\/appwk\.baidu\.com\/xpage\/interface\/wknaad url reject-200
# > baiduwangpan
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list url reject-200
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/pcs\/ad url reject-200
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url reject-200


# > baidushurufa
#^https?:\/\/mobads\.baidu\.com\/cpro\/ui\/mads.php url reject-200


# ======= C ======= #



# > chaoxingxuexitong
^https?:\/\/learn\.chaoxing\.com\/apis\/service\/appConfig url reject-200

# > caijingzazhi
#^https?:\/\/api\.caijingmobile\.com\/(ad|advert)\/ url reject-200
# > caiyun
^https:\/\/api\.caiyunapp\.com\/v1\/activity url reject-200

# > cainiao
^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.(show|mshow)\.cn\/ url reject-200
# > csdn
^https?:\/\/app-gw\.csdn\.net\/silkroad-api\/api\/v\d\/assemble\/list\/pub\/channel\/app_open_screen_ad url reject-200




# ======= D ======= #



# > dashixiong
^https?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/.*?\/v\d\/(version|top_notice\?|advert\?position=[^2]+) url reject-200
# > douban
^https?:\/\/api\.douban\.com\/v2\/app_ads\/splash url reject-200
^https?:\/\/api\.douban\.com\/b.*\/common_ads\?.* url reject-200
# > didichuxing
#https?://res\.xiaojukeji\.com\/resapi\/activity\/mget url reject-200
#https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) url reject-200


# > douyu
^https?:\/\/rtbapi\.douyucdn\.cn\/japi\/sign\/app\/getinfo url reject-200
# > dewu
^https:\/\/app\.dewu\.com\/api\/v1\/app\/advertisement\/ url reject-200
# > donghuafeng
^https?:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v\d\/anime_get_question\.php url reject-dict
;^https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v\d\/(token|m3u8).php\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutAnimeAds.js

# > dianshijia
^https?:\/\/api\.gaoqingdianshi\.com\/api\/v\d\/ad\/ url reject-200
^https?:\/\/cdn\.dianshihome\.com\/static\/ad\/ url reject-200


# > dedao
^https?:\/\/entree-ws\.igetget\.com\/oms\/front\/start\/push url reject-200
# > dingdongmaicai
^https?:\/\/maicai\.api\.ddxq\.mobi\/advert\/getAd url response-body rt_time":\d{2} response-body rt_time":40
# > dejian
^https?:\/\/dj\.palmestore\.com\/zybk\/api\/ad url reject-200
^https?:\/\/saad\.ms\.zhangyue\.net\/ad\/ url reject-200


# ======= E ======= #

# > elema
^https?:\/\/elemecdn.com\/.+\/sitemap url reject-200
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} url reject-200
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} url reject-200
^https?:\/\/fuss10.elemecdn.com\/.+.mp4 url reject-200
^https?:\/\/www1.elecfans.com\/www\/delivery\/ url reject-200



# ======= F ======= #

# > fandengdushu
^https?:\/\/gateway-api\.dushu365\.com\/chief-orch\/config\/config\/v100\/appConfig url reject-200





# ======= G ======= #


# > guojiadili
^https?:\/\/dili\.bdatu\.com\/jiekou\/ad url reject-200
^https?:\/\/wap\.ngchina\.cn\/news\/adverts url reject-200


# ======= H ======= #


# > huazhu
^https?:\/\/appapi\.huazhu\.com:\d{4}\/client\/app\/getAppStartPage\/ url reject-200
# > hupu
^https?:\/\/i\d\.hoopchina\.com\.cn/blogfile\//d+\//d+\/BbsImg\.(?<=(big.(png|jpg)))$ url reject-img
^https?:\/\/games\.mobileapi\.hupu\.com\/.+\/(search|interfaceAdMonitor|status|hupuBbsPm)/(hotkey|init|hupuBbsPm)\. url reject-img
^https?:\/\/games\.mobileapi\.hupu\.com\/interfaceAdMonitor url reject-img
^https?:\/\/goblin\.hupu\.com\/.+\/interfaceAd\/getOther url reject-200
^https?:\/\/i1\.hoopchina\.com\.cn\/blogfile\/.+_\d{3}x\d{4} url reject-img


# > huyazhibo
^https?:\/\/business\.msstatic\.com\/advertiser\/material url reject-200



# ======= I ======= #

# > i4
^https?:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml url reject-200
# > i3
#^https?:\/\/www\.i3zh\.com url response-body cm-pop-up-banners response-body ddgksf2013
# > iQiYi
^https?:\/\/.*cupid\.iqiyi\.com\/mixer\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/iqiyi_open_ads.js


# ======= J ======= #


# > jimi
^https?:\/\/superapp\.xgimi\.com\/api/v1\/app\/ad\/configs\?_sort=createdAt:Adesc url reject-200


# ======= K ======= #

# > ku'an
^https?:\/\/api\.coolapk\.com\/v6\/(feed\/(replyList|detail)|main\/indexV8|dataList) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
^https?:\/\/api.coolapk.com\/v6\/main\/init url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
^https?:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch url reject-dict

# > kuake
^https?:\/\/open-cms-api\.(uc|quark)\.cn\/open-cms url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/quark.js

# > kudi
^https?:\/\/gateway\.abite\.com\/cotti-capi\/customer\/position\/list\?code=cotti-launch-window url reject-200



# ======= L ======= #


# > lanRenTingShu
^https?:\/\/.*\/yyting\/advertclient\/ClientAdvertList.action url reject-200

# > lanrentingshu
^https?:\/\/.*mting\.info\/advert\/ClientAdvertList\.action url reject-200

# ======= M ======= #

# > MeiTuan
^https?:\/\/peisongapi\.meituan\.com\/client\/getInitiateImage url reject-200
^https?:\/\/img\.meituan\.net\/(adunion|display|midas)\/\w+\.(gif|jpg|jpg\.webp)$ url reject-200
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) url reject-200
^https?:\/\/p\d\.meituan\.net\/(bizad|wmbanner)\/\w+\.jpg url reject-200
^https?:\/\/p\d\.meituan\.net\/movie\/\w+\.jpg\?may_covertWebp url reject-200
# > MeiTuanWaiMai
^https?:\/\/img\.meituan\.net\/(bizad|brandCpt)\/\w+\.(png|jpg) url reject-200
^https?:\/\/.*\.meituan\.com\/api\/v\d\/(openscreen\?ad|appstatus\?ad|loadInfo\?|startpicture) url reject-200
^http:\/\/s3plus\.meituan\.net\/.*\/brandcpt-vedio\/.*\?time url reject-200
# > MeiWeiBuYongDeng
^https?:\/\/capi.mwee.cn\/app-api\/V12\/app\/getstartad url reject-200

# > manmanmai
^https?:\/\/apapia-sqk\.manmanbuy\.com\/index_json\.ashx url response-body splashAD response-body ddgksf2013

# > manhuaren
^https?:\/\/.*mangaapi\.manhuaren\.\w{2,4}\/v\d\/public\/(getStartUpMessage|getStartPageAds|getShelfActivity) url reject-200
^https?:\/\/.*mangaapi\.manhuaren\.\w{2,4}\/v\d\/ad url reject-200
# > MIX
^https?:\/\/dispatcher\.camera360\.com\/api\/v1\/list$ url reject-200
^https?:\/\/mix-api\.camera360\.com\/v\d\/operational-positions url reject-200
# > MaKaLong
^https:\/\/app\.api\.versa-ai\.com\/launch\/ads\? url reject-200

# > mixuebingcheng
^https:\/\/mxsa\.mxbc\.net\/api\/v1\/adinfo\/limitedAds$ url reject-200
# > maoyan*
^https?:\/\/p0\.pipi\.cn\/adAdmin\/\w+.jpg\? url reject-img
# > miyoushe
^https?:\/\/bbs-api\.miyoushe\.com\/apihub\/api\/getAppSplash url reject-200


# ======= N ======= #


# > nongyeyinhang
;^https?:\/\/mobilepaas\.abchina\.com\.cn:441\/mgw\.htm url script-response-header https://raw.githubusercontent.com/ddgksf2013/Scripts/master/abchina.js


# ======= O ======= #

# > omofun
^https?:\/\/103\.91\.210\.141\:2515\/xgapp\.php\/v2\/top_notice url reject-200


# ======= P ======= #

# > pikpak
https://access.mypikpak.com/access_controller/v1/area_accessible url reject-200
# > pinduoduo
^https?:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash url reject-200
# > PiaoGen
^https?:\/\/pss\.txffp\.com\/piaogen\/images\/launchScreen/ url reject-200

# > pansearch
^https?:\/\/www\.pansearch\.me\/api\/adsite url reject-dict


# ======= Q ======= #

# > qqbrower
^https:\/\/us\.l\.qq\.com\/exapp\?spsa=\d url reject-200
# > QuNaEr
https://homefront.qunar.com/front/splash/ad url reject-200
^https?:\/\/client\.qunar\.com\/pitcher-proxy\?qrt=p_splashAd url reject-200

# > QiDianDuShu
^https?:\/\/magev\d\.if\.qidian\.com\/argus\/api\/v\d\/client\/getsplashscreen url reject-200

# ======= R ======= #

# > RenMinRiBao
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/(adv|getAdvertImage) url reject-200
^https?:\/\/stat\.peopleapp\.com\/ url reject-200
# > ruixinkafei
^https?:\/\/capi\.lkcoffee\.com\/resource\/m\/sys\/(homePage\/contactor\/modules|app\/adposNew) url reject-200


# ======= S ======= #

# > shaoshupai
https://ios.sspai.com/api/v3/recommend/page/get\?ad.*ios_home_modal url reject-200
# > ShunFengYouXuan
^https://mapi.sfbest.com\/brokerservice-server\/cms\/getPositionById.* url reject-200

# > spotify
^https?://spclient.wg.spotify.com/(ad-logic|ads|.+ad_slot|.+banners|.+canvases|.+cards|.+crashlytics|.+doubleclick.net|.+enabled-tracks|.+promoted_offer) url reject-img
^https?:\/\/api\d?\.musical\.ly\/api\/ad\/ url reject-img

# > ShunFeng
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/appVersion\/detectionUpgrade url reject-200
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/shunfeng_json.js
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryAdImages url reject-200
^https?:\/\/shopic\.sf-express\.com\/crm\/mobile\/common\/flashscreen url reject-200
# > shihuo
^https?:\/\/sh-gateway\.shihuo\.cn\/v\d\/services\/sh-adapi\/home\/(screen|ad) url reject-200

# > suning
^https?:\/\/mpcs\.suning\.com\/mpcs\/dm\/getDmInfo url reject-200
# > shanmu
^https?:\/\/api-sams\.walmartmobile\.cn\/api\/v1\/sams\/sams-user\/(window\/getGoUpPlus|screen_promotion\/get) url reject-200
# > shanxianyixia
^https:\/\/api\.gameplus\.qq\.com\/community\.OnloadSrv\/GetPreloadScreenInfo url reject-200

# > shoulvrujia
^https?:\/\/app\.homeinns\.com\/api\/landing url reject-200
# > soutushenqi
^https?:\/\/wallpaper\.soutushenqi\.com\/v\d\/dateSignature\/random url reject-200
^https?:\/\/wallpaper\.soutushenqi\.com\/v\d\/home\/dialog url reject-200



# ======= T ======= #


# > tianxingjinrong
^https?:\/\/t1\.market\.xiaomi\.com\/thumbnail\/webp\/w1170q100\/ url reject-200
# > tianyiyunpan
^https?:\/\/api\.cloud\.189\.cn\/guns\/getOpenscreenBanners url reject-200

# > testflight
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*" request-body storefrontId" : "143441-1,29"

# > topwidget
https://top-widgets-api.xiaozujian.com/api/ad/config url reject-200
# > TencentNews
^https?:\/\/r\.inews\.qq\.com\/(adsBlacklist|getFullScreenPic|getQQNewsRemoteConfig) url reject-200
^https?:\/\/r\.inews\.qq\.com\/(getBannerAds|getNewsRemoteConfig|getSplash|searchHotCatList|upLoadLoc) url reject-200

# > tengxundongman
^https?:\/\/iphone\.ac\.qq\.com\/.*\/Support\/(getSystemConf|bootScreen) url reject-200
# > tongchenglvxing
^https?:\/\/tcmobileapi\.17usoft\.com\/appindexnew\/index\/getappindexconfig url reject-200

# > tangdong
^https?:\/\/td\.cgmcare\.cn\/api\/ad url reject-200



# ======= U ======= #


# ======= V ======= #

# > v2ex
^https?:\/\/.*v2ex\.com\/($|t\/\d+) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/v2ex.js


# ======= W ======= #

# > weipinhui
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get url reject-200
https://b.appsimg.com/upload/momin/ url reject
https://mapi.appvipshop.com/vips-mobile/rest/activity/advertisement/get url reject-200
^https:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/iosAdInfo\/report url reject-200
# > WangYiDaShen
^https?:\/\/god\.gameyw\.netease\.com\/v\d\/ad\/serving\/app-start url reject-200
# > WangYiyunyinyue
#^https?:\/\/interface(\d)?.music.163.com\/eapi\/ad\/ url reject-200
# > WangYiYouXiang
^https?:\/\/appconf\.mail\.163\.com\/mmad\/get\.do url reject-200
^https?:\/\/client\.mail\.163.com\/apptrack\/confinfo\/(searchMultiAds.do|showAds.do) url reject-200
# > WangYiYanXuan
https://support.you.163.com/appversync/check.do url reject-200
^https?:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json url reject-200
^https?:\/\/m\.you\.163\.com\/activity\/popWindow url reject-200
; ^https?:\/\/yanxuan.nosdn.127.net\/(static-union\/)?.*\.gif url reject-200
^https?:\/\/yanxuan\.nosdn\.127\.net\/.*\.mp4 url reject-200
# > WeChat110
^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/weixin110.js
# > weixindaihuo
^https?:\/\/mp\.weixin\.qq\.com\/mp\/cps_product_info url reject-200
# > WeChat
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body advertisement response-body ddgksf2013
# > Weifeng
^https?:\/\/api\.wfdata\.club\/v2\/yesfeng\/(infoCenterAd|yesList) url reject-200
#^https?:\/\/api\.wfdata\.club\/v\d\/search\/hot\? url response-body dataList":\[.+\] response-body dataList":[{}]
# > Weico
^https?:\/\/overseas.weico.cc\/portal.php\?a=get_coopen_ads url reject-200

# > wangyikaola
^https?:\/\/sp\.kaola\.com\/api\/openad url reject-200
^https?:\/\/gw\.kaola\.com\/gw\/dgmobile\/newOpenAd url reject-200
# > wanmeishijiedianjing
^https?:\/\/api\.wmpvp\.com\/api\/v\d\/config\/promote url reject-200



# ======= X ======= #

# > xinyue
^https?:\/\/bgw\.xinyue\.qq\.com\/xyapi\.PageService\/GetIndexPopFlash url reject-200
# > xierdun
^https?:\/\/wcprd\.hilton\.com\.cn\/app-middleware\/graphql\?type=splashAd url reject-200
# > XiaoTe
^https?:\/\/lcen\.xiaote\.net\/api\/graphql url response-body screenSplashAd response-body ddgksf2013

# > XieCheng
^https:\/\/ma-adx\.ctrip\.com\/_ma\.gif url reject-200
^https:\/\/mbd\.baidu\.com\/newspage\/api\/getmobads\?page\=landingshare url reject-200
# > XiChuangZhu
^https?:\/\/lchttpapi\.xczim\.com\/1\.1\/functions\/getLaunchImageForIOS url reject-200
# > XiaoYi
^https://api.xiaoyi.com\/v5\/app\/mobile\/ads url reject-200
^https://api.xiaoyi.com\/v5\/app\/config\?userid=.* url reject-200

# > xiaomi
^https?:\/\/api\.m\.mi\.com\/v1\/app\/start url reject-200
# > xiaomiyoupin
^https?:\/\/shopapi\.io\.mi\.com\/mtop\/mf\/resource\/homePage\/pageConfig url reject-200
# > xifandongman
^https?:\/\/pzoap\.moedot\.net\/xgapp\.php\/v2\/top_notice url reject-200

# > xinruijulebu
^https?:\/\/bgw\.xinyue\.qq\.com\/xyapi\.PageService\/GetIndexPopFlash url reject-200


# > xiaoaiyinxiang
^https?:\/\/info\.mina\.mi\.com\/advertise\/splash url reject-200


# ======= Y ======= #

# > yanaifei
^https?:\/\/pipi\.4kya\.com\/\/xgapp\.php\/v3\/advert\.position=[^2]+ url reject-200
# > YangShiPin
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/\w+\.json url reject-200
# > YiHaoDian
^https?:\/\/venus\.yhd\.com\/memhome\/launchConfig url reject-200

# > YinxiangNote
^https?:\/\/app\.yinxiang\.com\/ads\/ url reject-200
# > yonghui
^https?:\/\/api\.yonghuivip\.com\/web\/shensuan\/ad\/getAd url reject-200

# > yingshiyun
^https?:\/\/i\.ys7\.com\/api\/ads\/ url reject-200


# > youminxingkong
^https?:\/\/entry\.ubixioe\.com\/mob\/sdk\/v\d\/endpoint url reject-200

# > yingshiyun
^https?:\/\/api\.ys7\.com\/api\/ads url reject-200

# > youdaocidian
^https?:\/\/cdke\.youdao\.com\/course3\/recommend\/dict\/startup url reject-200
^https?:\/\/gorgon\.youdao\.com\/gorgon url reject-200

# ======= Z ======= #

# > zhangshangshenghuo
#^https?:\/\/mlife\.cmbchina\.com\/ClientFaceService\/api\/mlife\.clientface\.clientservice\.api\.advertiseService\/preCacheAdvertiseSec url reject-200
# > zhongguoyidong
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject-200
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/explorePage\/getAdverList url reject-200
# > zhongguoyidongyunpan
^https?:\/\/ad\.mcloud\.139\.com\/advertapi\/adv-filter\/adv-filter\/AdInfoFilter\/getAdInfos$ url reject-200

# > zhongguoyidonganhui*
^https?:\/\/api\.ahmobile\.cn:443\/eip\?eip_serv_id=app\.getAllNew url reject-200
# > zhuanzhuan
^https?:\/\/app\.zhuanzhuan\.com\/zzx\/transfer\/getConfigInfo url reject-200
# > zhiboba
^https?:\/\/a\.qiumibao\.com\/activities\/config\.php$ url reject-200
^https?:\/\/a\.qiumibao\.com\/ios\/config\/\?version_code= url reject-200

# > ZuiYou
^https?:\/\/adapi\.izuiyou\.com\/ url reject-200
^https?:\/\/api\.izuiyou\.com\/ad\/ url reject-200
# > Zhihu
^https?:\/\/api\.zhihu\.com\/commercial_api.*launch_v2 url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/zhihu_openads.js

# > zhongguoyinhang
#^https?:\/\/mbs\.boc\.cn\/ubas-mgateway-static\/images\/advertType\/.+.jpg url reject-img

# > zhangshangyingxionglianmeng
^https?:\/\/mlol\.qt\.qq\.com\/go\/recommend url reject-200

# > zhixinghuochepiao
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/\d+\/scjson\/tripAds url reject-200




hostname = gorgon.youdao.com, cdke.youdao.com, api.ys7.com, saad.ms.zhangyue.net, dj.palmestore.com, mobilepaas.abchina.com.cn, maicai.api.ddxq.mobi, info.mina.mi.com, hfapp-service.qweather.net, *.ahhhhfs.com, mobads.baidu.com, entree-ws.igetget.com, *.mting.info, entry.ubixioe.com, *.v2ex.com, www.pansearch.me, td.cgmcare.cn,ad.mcloud.139.com, wallpaper.soutushenqi.com, 140.179.224.63, apapia-sqk.manmanbuy.com, superapp.xgimi.com, mix-api.camera360.com, api.wmpvp.com, gateway.abite.com, rengine-platform.llsapp.com, capi.lkcoffee.com, bbs-api.miyoushe.com, tcmobileapi.17usoft.com, *.xbwpys.com, open-cms-api.quark.cn, wxa.wxs.qq.com, evs.500.com, m.you.163.com, open-cms-api.uc.cn, *.qyfxgd.cn, *.weilai555.com, *.ecoliving168.com, *cupid.iqiyi.com, shopapi.io.mi.com, tk.lanjiyin.com, iphone.ac.qq.com, web.chelaile.net.cn, gd.10086.cn, newclient.map.baidu.com, gateway-api.dushu365.com, p0.pipi.cn, app.homeinns.com, mlol.qt.qq.com, app-gw.csdn.net, api.gameplus.qq.com, mxsa.mxbc.net, cn-acs.m.cainiao.com, api.caiyunapp.com, api.ahmobile.cn, gx.10086.cn, api-sams.walmartmobile.cn, adapi.izuiyou.com, i.ys7.com, api.yonghuivip.com, access.mypikpak.com, api.caijingmobile.com, bgw.xinyue.qq.com, api-new.app.acfun.cn, sh-gateway.shihuo.cn, wcprd.hilton.com, ad.12306.cn, 103.91.210.141, pzoap.moedot.com, pipi.4kya.com, sdk.alibaba.com.ailbaba.me, bgw.xinyue.qq.com, pan.baidu.com, client.app.coc.10086.cn, t1.market.xiaomi.com, api.m.mi.com, app.zhuanzhuan.com, api.cloud.189.cn, appwk.baidu.com, us.l.qq.com, mi.gdt.qq.com, a.qiumibao.com, b.appsimg.com, ios.sspai.com, mpcs.suning.com, api.pinduoduo.com, api.yangkeduo.com,  sp.kaola.com, gw.kaola.com, mime.baidu.com, learn.chaoxing.com, client.qunar.com, dili.bdatu.com, wap.ngchina.cn, list-app-m.i4.cn, peisongapi.meituan.com, *gaoqingdianshi.com, r.inews.qq.com, app.yinxiang.com, mapi.appvipshop.com, cdn.cmgadx.com, img.meituan.net, lcen.xiaote.net, venus.yhd.com, mage*.if.qidian.com, god.gameyw.netease.com, overseas.weico.cc, 118.178.214.118, 182.92.251.113, dapis.mting.info, www.meituan.com, client.mail.163.com, api.izuiyou.com, appapi.huazhu.com, api.wfdata.club, interface*.music.163.com, mp.weixin.qq.com, security.wechat.com, weixin110.qq.com, api.coolapk.com, ccsp-egmas.sf-express.com, *.laichon.com, www.i3zh.com, rtbapi.douyucdn.cn, gab.122.gov.cn, dispatcher.camera360.com, app.api.versa-ai.com, app.dewu.com, api.gamer.com.tw, pss.txffp.com, m.sd.10086.cn, 47.100.65.202, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, new.vip.weibo.cn, wap.js.10086.cn, top-widgets-api.xiaozujian.com, *mangaapi.manhuaren.*, support.you.163.com, yanxuan.nosdn.127.net, *.peopleapp.com, gw.aihuishou.com, *.58cdn.com.cn, app.58.com, api.zhihu.com, res.xiaojukeji.com, 116.85.2.15, 116.85.2.14, 212.129.159.79, business.msstatic.com, api.jr.mi.com, api.m.mi.com, elemecdn.com, fuss10.elemecdn.com, www1.elecfans.com, api.xiaoyi.com, api.douban.com, mapi.sfbest.com, api.mwee.cn, sso.ifanr.com, s3plus.meituan.net, flowplus.meituan.net, p*.meituan.net, testflight.apple.com, wmapi.meituan.com, appconf.mail.163.com, homefront.qunar.com, afd.baidu.com, ma-adx.ctrip.com, mbd.baidu.com, img.rr.tv, api.rr.tv, *.hoopchina.com, goblin.hupu.com, spclient.wg.spotify.com
