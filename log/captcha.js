!function(e) {
    var t = {};
    function n(a) {
        if (t[a])
            return t[a].exports;
        var i = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(a, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return a
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 4)
}({
    "./src/modules/i18n/language.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
          , i = {
            "captcha-h5-tips": "Sorry, we have detected unusual traffic from your network.",
            "captcha-h5-tips-slider": "Please slide to verify.",
            "wait-h5-tips": "Please try again.",
            "deny-h5-tips": "We have detected unusual traffic from your network, please try again later.",
            "wait-pure-tips": "The server is busy, please try again later",
            "deny-pure-tips": "Unusual traffic detected, please try again later",
            "common-company-name": "@2003-Now Alibaba Group",
            "feedback-code": "Feedback ID",
            "feedback-link": "Click to feedback >",
            "pure-feedback-link": "Feedback",
            copyright: "© 1999-Now Alibaba.com Copyright",
            "previous-page": "BACK",
            "upgrade-text": "Oops! The version is too old<p>Your hand-tao version has expired, please follow the update reminder<br/>or go to the app store to update</p>",
            "close-btn-text": "I see"
        }
          , r = {
            "th-TH": {
                "captcha-h5-tips": "ขออภัยเราตรวจพบการเข้าชมที่ผิดปกติจากเครือข่ายของคุณ",
                "captcha-h5-tips-slider": "โปรดเลื่อนเพื่อยืนยัน",
                "wait-h5-tips": "โปรดลองใหม่อีกครั้ง",
                "deny-h5-tips": "เราตรวจพบการเข้าชมที่ผิดปกติจากเครือข่ายของคุณ โปรดลองใหม่อีกครั้งในภายหลัง",
                "wait-pure-tips": "ความแออัดของเครือข่าย โปรดรอสักครู่",
                "deny-pure-tips": "การเข้าถึงถูกปฏิเสธ โปรดรอสักครู่",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                "common-company-name": "Alibaba Group",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "previous-page": "BACK",
                "upgrade-text": "อ๊ะ! เวอร์ชันเก่าเกินไป<p>เวอร์ชัน hand-tao ของคุณหมดอายุแล้ว โปรดปฏิบัติตามการแจ้งเตือนการอัปเดต<br/>หรือไปที่ App Store เพื่ออัปเดต</p>",
                "close-btn-text": "ฉันเห็น"
            },
            "vi-VN": {
                "captcha-h5-tips": "Rất tiếc, hệ thống của chúng tôi đã phát hiện lưu lượng truy cập bất thường từ mạng máy tính của bạn",
                "captcha-h5-tips-slider": "Vui lòng kéo sang phải để xác nhận",
                "wait-h5-tips": "Hệ thống của chúng tôi đã phát hiện lưu lượng truy cập bất thường từ mạng máy tính của bạn, vui lòng thử lại sau.",
                "deny-h5-tips": "Hệ thống của chúng tôi đã phát hiện lưu lượng truy cập bất thường từ mạng máy tính của bạn, vui lòng thử lại sau.",
                "wait-pure-tips": "Nghẽn mạng, vui lòng đợi",
                "deny-pure-tips": "Truy cập bị từ chối, vui lòng đợi",
                "common-company-name": "@2013-Bây giờ Alibaba Nhóm",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "previous-page": "BACK",
                "upgrade-text": "Giáo sư! Phiên bản quá cũ <p> Phiên bản hand-tao của bạn đã hết hạn, vui lòng làm theo lời nhắc cập nhật <br/> hoặc truy cập cửa hàng ứng dụng để cập nhật </p>",
                "close-btn-text": "Tôi thấy"
            },
            "zh-CN": {
                "captcha-h5-tips": "亲，请拖动下方滑块完成验证<p>通过验证以确保正常访问</p>",
                "common-company-name": "@2003-现在 阿里巴巴集团",
                "wait-h5-tips": "亲，网络拥堵<p>请稍后重试</p>",
                "deny-h5-tips": "亲，访问被拒绝<p>请检查是否使用了代理软件或 VPN 哦~</p>",
                "wait-pure-tips": "网络拥堵，请稍后",
                "deny-pure-tips": "访问被拒绝，请稍后",
                "captcha-h5-tips-slider": "为保证您的正常访问请进行验证",
                "feedback-code": "错误码",
                "feedback-link": "点我反馈 >",
                "pure-feedback-link": "反馈",
                copyright: "© 1999-现在 Alibaba.com 版权所有",
                "captcha-title": "验证码拦截",
                "deny-title": "访问被拒绝",
                "wait-title": "系统正忙",
                "previous-page": "返回上一页",
                "upgrade-text": "哎呀！版本太旧了<p>您的手淘版本已经过期，请关注更新提醒<br/>或去应用商店更新</p>",
                "close-btn-text": "我知道了"
            },
            "in-ID": {
                "captcha-h5-tips-slider": "Geser untuk verifikasi",
                "wait-h5-tips": "Silahkan coba lagi",
                "deny-h5-tips": "Mohon periksa koneksi jaringan Anda dan coba lagi",
                "wait-pure-tips": "Kemacetan jaringan, harap tunggu",
                "deny-pure-tips": "Akses ditolak, harap tunggu",
                "captcha-h5-tips": "Mohon maaf, silahkan periksa koneksi jaringan Anda dan coba lagi",
                "common-company-name": "@2003-Now Alibaba Group",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "previous-page": "BACK",
                "upgrade-text": "Ups! Versi terlalu lama<p>Versi hand-tao Anda telah kedaluwarsa, harap ikuti pengingat pembaruan<br/>atau buka toko aplikasi untuk memperbarui</p>",
                "close-btn-text": "saya mengerti"
            },
            "en-US": i,
            "ms-MY": {
                "captcha-h5-tips": "Kesesakan yang tidak dijangka telah di kesan dalam rangkaian kami.",
                "captcha-h5-tips-slider": "Sila leret untuk teruskan.",
                "wait-h5-tips": "Terdapat kesesakan pada sistem. Sila cuba sekali lagi.",
                "deny-h5-tips": "Kesesakan yang tidak dijangka telah di kesan dalam rangkaian kami. Sila cuba lagi sebentar lagi.",
                "wait-pure-tips": "Kesesakan rangkaian, sila tunggu",
                "deny-pure-tips": "Akses ditolak, sila tunggu",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                "common-company-name": "@2003-Now Alibaba Group",
                copyright: "© 1999-Now Aliviverifybaba.com Copyright",
                "previous-page": "BACK",
                "upgrade-text": "Alamak! Versi terlalu lama <p> Versi tao tangan anda telah berakhir, ikuti peringatan kemas kini <br/> atau pergi ke app store untuk mengemas kini </p>",
                "close-btn-text": "saya faham"
            },
            ne: {
                "captcha-h5-tips": "हामीले तपाईंको नेटवर्क असामान्य ट्राफिक फेला पारेको छौँ  ।",
                "captcha-h5-tips-slider": "कृपया प्रमाणिकरण गर्न स्लाइड गर्नुहोस्।",
                "wait-h5-tips": "पुन:प्रयास गर्नुहोस्।",
                "deny-h5-tips": "हामीले तपाईंको नेटवर्क असामान्य ट्राफिक फेला पारेको छौँ, कृपया केहि समयपछि पुन:प्रयास गर्नुहोस्।",
                "wait-pure-tips": "नेटवर्क भीड, कृपया प्रतीक्षा गर्नुहोस्",
                "deny-pure-tips": "पहुँच अस्वीकार गरियो, कृपया प्रतीक्षा गर्नुहोस्",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "previous-page": "BACK",
                "upgrade-text": "उफ्! संस्करण धेरै पुरानो छ <p> तपाइँको हात-ताओ संस्करण को म्याद समाप्त भएको छ, कृपया अपडेट रिमाइन्डर को पालन गर्नुहोस् <br/> वा अपडेट गर्न को लागी एप स्टोर मा जानुहोस् </p>",
                "close-btn-text": "मैले देखें"
            },
            bn: {
                "captcha-h5-tips": "দুঃখিত, আমরা আপনার নেটওয়ার্ক থেকে অস্বাভাবিক ট্র্যাফিক সনাক্ত করেছি।",
                "captcha-h5-tips-slider": "যাচাই করার জন্য স্লাইড করুন।",
                "wait-h5-tips": "অনুগ্রহপূর্বক আবার চেষ্টা করুন.",
                "deny-h5-tips": "আমরা আপনার নেটওয়ার্ক থেকে অস্বাভাবিক ট্র্যাফিক সনাক্ত করেছি, অনুগ্রহপূর্বক আবার চেষ্টা করুন.।",
                "wait-pure-tips": "নেটওয়ার্ক কনজেশন, অনুগ্রহ করে অপেক্ষা করুন",
                "deny-pure-tips": "অ্যাক্সেস অস্বীকৃত, অনুগ্রহ করে অপেক্ষা করুন",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "previous-page": "BACK",
                "upgrade-text": "উফ! সংস্করণটি অনেক পুরনো <p> আপনার হ্যান্ড-টাও সংস্করণের মেয়াদ শেষ হয়ে গেছে, দয়া করে আপডেট রিমাইন্ডার অনুসরণ করুন <br/> অথবা আপডেট করতে অ্যাপ স্টোরে যান </p>",
                "close-btn-text": "আমি দেখি"
            },
            si: {
                "captcha-h5-tips": "සමාවෙන්න , ඔබේ ජාලයෙන් අපට අසාමාන්‍ය තදබදයක් වාර්තා වී ඇත.",
                "captcha-h5-tips-slider": "කරුණාකර තහවුරු කිරීමට ස්ලයිඩ් කරන්න.",
                "wait-h5-tips": "කරුණාකර නැවත උත්සහ කරන්න ",
                "deny-h5-tips": "ඔබේ ජාලයෙන් අපට අසාමාන්‍ය තදබදයක් වාර්තා වී ඇත.කරුණාකර පසුව උත්සහ කරන්න.",
                "wait-pure-tips": "ජාල තදබදය, කරුණාකර රැඳී සිටින්න",
                "deny-pure-tips": "ප්‍රවේශය ප්‍රතික්ෂේප විය, කරුණාකර රැඳී සිටින්න",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "previous-page": "BACK",
                "upgrade-text": "අපොයි! අනුවාදය ඉතා පරණයි <p> ඔබේ අත් ටාවෝ අනුවාදය කල් ඉකුත් වී ඇත, කරුණාකර යාවත්කාලීන සිහිකැඳවීම අනුගමනය කරන්න <br/> නැතහොත් යාවත්කාලීන කිරීමට යෙදුම් වෙළඳසැල වෙත යන්න </p>",
                "close-btn-text": "මම දකියි"
            },
            my: {
                "captcha-h5-tips": "ဝမ္းနည္းပါတယ္။ သင္၏နက္ဝက္ခ္မွ ပံုမွန္မဟုတ္ေသာ ဝင္ေရာက္မႈမ်ားကို သတိျပဳမိပါသည္။",
                "captcha-h5-tips-slider": "အတည္ျပဳရန္ ေဘးသို႔ဆြဲပါ။",
                "wait-h5-tips": "ေက်းဇူးျပဳ၍ ေနာက္တစ္ႀကိမ္ ထပ္မံႀကိဳးစားပါ။",
                "deny-h5-tips": "သင္၏နက္ဝက္ခ္မွ ပံုမွန္မဟုတ္ေသာ ဝင္ေရာက္မႈမ်ားကို သတိျပဳမိပါသည္။ ေနာက္တစ္ႀကိမ္ ထပ္မံႀကိဳးစားပါ။",
                "wait-pure-tips": "ကွန်ရက်ပိတ်နေလို့ စောင့်ပါ။",
                "deny-pure-tips": "ဝင်သုံးခွင့် ငြင်းပယ်ခံရသည်၊ ကျေးဇူးပြု၍ စောင့်ပါ။",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "previous-page": "BACK",
                "upgrade-text": "သည်းခံပါ။ ဗားရှင်းသည်ဟောင်းလွန်းသည်။ <p> သင်၏ hand-tao ဗားရှင်းသက်တမ်းကုန်သွားပါပြီ၊ ကျေးဇူးပြု၍ update သတိပေးချက်ကိုလိုက်နာပါ၊ သို့မွမ်းမံရန် app store သို့သွားပါ </p>",
                "close-btn-text": "ဟုတ်လား"
            },
            "zh-TW": {
                "captcha-h5-tips": "親，請拖動下方滑塊完成驗證<p>通過驗證以確保正常訪問</p>",
                "common-company-name": "@2003-現在 阿里巴巴集團",
                "wait-h5-tips": "系統繁忙，請您稍等片刻，<p> 稍等馬上回來哦</p>",
                "deny-h5-tips": "您的訪問被拒絕<p>請檢查是否使用了代理軟件或 VPN 哦~</p>",
                "wait-pure-tips": "網絡擁堵，請稍後",
                "deny-pure-tips": "訪問被拒絕，請稍後",
                "captcha-h5-tips-slider": "為保證您的正常訪問請進行驗證",
                "feedback-code": "反饋碼",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-現在 Alibaba.com 版權所有",
                "captcha-title": "驗證碼攔截",
                "deny-title": "訪問被拒絕",
                "wait-title": "系統繁忙",
                "previous-page": "返回上一頁",
                "upgrade-text": "哎呀！版本太舊了<p>您的手淘版本已經過期，請關注更新提醒<br/>或去應用商店更新</p>",
                "close-btn-text": "我知道了"
            },
            "ar-SA": a({}, i, {
                "wait-pure-tips": "الخادم مشغول ، يرجى المحاولة مرة أخرى لاحقًا",
                "deny-pure-tips": "تم اكتشاف حركة مرور غير عادية ، يرجى المحاولة مرة أخرى لاحقًا"
            }),
            "de-DE": a({}, i, {
                "wait-pure-tips": "Der Server ist ausgelastet, bitte versuchen Sie es später erneut",
                "deny-pure-tips": "Ungewöhnlicher Datenverkehr erkannt, bitte versuchen Sie es später erneut"
            }),
            "es-ES": a({}, i, {
                "wait-pure-tips": "El servidor está ocupado, inténtalo de nuevo más tarde",
                "deny-pure-tips": "Se detectó tráfico inusual, inténtelo de nuevo más tarde"
            }),
            "fr-FR": a({}, i, {
                "wait-pure-tips": "Le serveur est occupé, veuillez réessayer plus tard",
                "deny-pure-tips": "Trafic inhabituel détecté, veuillez réessayer plus tard"
            }),
            "it-IT": a({}, i, {
                "wait-pure-tips": "Il server è occupato, riprova più tardi",
                "deny-pure-tips": "Rilevato traffico insolito, riprova più tardi"
            }),
            "iw-HE": a({}, i, {
                "wait-pure-tips": "השרת תפוס, אנא נסה שוב מאוחר יותר",
                "deny-pure-tips": "זוהתה תנועה חריגה, אנא נסה שוב מאוחר יותר"
            }),
            "ja-JP": a({}, i, {
                "wait-pure-tips": "サーバーがビジーです。後でもう一度やり直してください",
                "deny-pure-tips": "異常なトラフィックが検出されました。しばらくしてからもう一度お試しください"
            }),
            "ko-KR": a({}, i, {
                "wait-pure-tips": "서버가 사용 중입니다. 나중에 다시 시도해 주세요",
                "deny-pure-tips": "비정상적인 트래픽이 감지되었습니다. 나중에 다시 시도해 주세요"
            }),
            "nl-NL": a({}, i, {
                "wait-pure-tips": "De server is bezet, probeer het later opnieuw",
                "deny-pure-tips": "Ongebruikelijk verkeer gedetecteerd, probeer het later opnieuw"
            }),
            "pt-BR": a({}, i, {
                "wait-pure-tips": "Serwer jest zajęty, spróbuj ponownie później",
                "deny-pure-tips": "Wykryto nietypowy ruch, spróbuj ponownie później"
            }),
            "ru-RU": a({}, i, {
                "wait-pure-tips": "Сервер занят, повторите попытку позже",
                "deny-pure-tips": "Обнаружен необычный трафик. Повторите попытку позже"
            }),
            "tr-TR": a({}, i, {
                "wait-pure-tips": "Sunucu meşgul, lütfen daha sonra tekrar deneyin",
                "deny-pure-tips": "Olağandışı trafik algılandı, lütfen daha sonra tekrar deneyin"
            }),
            "uk-UA": a({}, i, {
                "wait-pure-tips": "Перевантаження мережі, зачекайте",
                "deny-pure-tips": "Доступ заборонено, зачекайте"
            })
        };
        r.zh = r["zh-CN"],
        r["zh-cn"] = r["zh-CN"],
        r.th = r["th-TH"],
        r.vi = r["vi-VN"],
        r.id = r["in-ID"],
        r.ms = r["ms-MY"],
        r.tw = r["zh-TW"],
        r["ne-NP"] = r.ne,
        r["id-ID"] = r["in-ID"],
        r.ar = r["ar-SA"],
        r.de = r["de-DE"],
        r.es = r["es-ES"],
        r.fr = r["fr-FR"],
        r.it = r["it-IT"],
        r.he = r["iw-HE"],
        r.ja = r["ja-JP"],
        r.ko = r["ko-KR"],
        r.nl = r["nl-NL"],
        r.pt = r["pt-BR"],
        r.ru = r["ru-RU"],
        r.tr = r["tr-TR"],
        r.uk = r["uk-UA"];
        for (var o = ["en", "en-SG", "en-GB", "en-PK", "en-MY", "en-VN", "en-TH"], s = 0; s < o.length; s++)
            r[o[s]] = r["en-US"];
        t.default = r
    },
    "./src/modules/i18n/nocaptcha-language.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = {
            ru_RU: {
                _startTEXT: "Проведите вправо",
                _yesTEXT: "Готово",
                _Loading: "Загрузка...",
                _error300: 'Что-то пошло не так. <a href="javascript:__nc.reset()">Обновите страницу</a> и попробуйте ещё раз',
                _errorNetwork: 'Нет интернета. Попробуйте <a href="javascript:__nc.reset()">обновить страницу</a>',
                LOADING: "Загрузка...",
                SLIDER_LABEL: "Пройдите, чтобы проверить",
                CHECK_Y: "Готово",
                ERROR_TITLE: "Что-то пошло не так",
                CHECK_N: "Ошибка",
                TIPS_TITLE: "Что-то пошло не так",
                ERROR_RELOAD: "Перезагрузить",
                ERROR_FEEDBACK: "Отзывы и предложения",
                SLIDE: "Пройдите, чтобы проверить",
                SUCCESS: "Готово",
                ERROR: "Что-то пошло не так",
                FAIL: "Перезагрузить",
                BXMARK: "Пожалуйста, обновите страницу и попробуйте снова"
            },
            es_ES: {
                _startTEXT: "Desliza para verificar",
                _yesTEXT: "Verificada",
                _Loading: "Cargando...",
                _error300: 'Vaya, algo ha ido mal. <a href="javascript:__nc.reset()">Actualiza</a> e inténtalo de nuevo.',
                _errorNetwork: 'Error en la conexión, <a href="javascript:__nc.reset()">actualiza</a>',
                LOADING: "Cargando...",
                SLIDER_LABEL: "Desliza para verificar",
                CHECK_Y: "Verificada",
                ERROR_TITLE: "Lo sentimos, algo ha ido mal.",
                CHECK_N: "Error",
                TIPS_TITLE: "Algo no ha ido como debería...",
                ERROR_RELOAD: "Volver a cargar",
                ERROR_FEEDBACK: "Comentarios y sugerencias",
                SLIDE: "Desliza para verificar",
                SUCCESS: "Verificada",
                ERROR: "Lo sentimos, algo ha ido mal.",
                FAIL: "Volver a cargar",
                BXMARK: "Actualice la página y vuelva a intentarlo"
            },
            pt_BR: {
                _startTEXT: "Deslize para verificar",
                _yesTEXT: "Verificado",
                _Loading: "Carregando...",
                _error300: 'Oops, ocorreu uma falha. <a href="javascript:__nc.reset()">Atualize</a> e tente novamente.',
                _errorNetwork: 'Falha na conexão, <a href="javascript:__nc.reset()">atualizar</a>.',
                LOADING: "Carregando...",
                SLIDER_LABEL: "Deslize para verificar",
                CHECK_Y: "Verificado",
                ERROR_TITLE: "Desculpe, ocorreu uma falha.",
                CHECK_N: "Erro",
                TIPS_TITLE: "Ops... Algo deu errado!",
                ERROR_RELOAD: "Recarregar",
                ERROR_FEEDBACK: "Sugestões e Comentários",
                SLIDE: "Deslize para verificar",
                SUCCESS: "Verificado",
                ERROR: "Desculpe, ocorreu uma falha.",
                FAIL: "Recarregar",
                BXMARK: "Por favor, atualize a página e tente novamente"
            },
            fr_FR: {
                _startTEXT: "Merci de glisser pour vérifier",
                _yesTEXT: "Vérifié",
                _Loading: "Chargement...",
                _error300: 'Oups, une erreur s\'est produite. Veuillez <a href="javascript:__nc.reset()">rafraîchir</a> et réessayer.',
                _errorNetwork: 'Erreur de réseau. Veuillez <a href="javascript:__nc.reset()">rafraîchir</a>.',
                LOADING: "Chargement...",
                SLIDER_LABEL: "Glisser pour vérifier",
                CHECK_Y: "Vérifié",
                ERROR_TITLE: "Désolé, une erreur s'est produite.",
                CHECK_N: "Erreur",
                TIPS_TITLE: "Oups, une erreur s'est produite.",
                ERROR_RELOAD: "Recharger",
                ERROR_FEEDBACK: "Suggestions et commentaires",
                SLIDE: "Glisser pour vérifier",
                SUCCESS: "Vérifié",
                ERROR: "Désolé, une erreur s'est produite.",
                FAIL: "Recharger",
                BXMARK: "Veuillez actualiser la page et réessayer"
            },
            in_ID: {
                _startTEXT: "Geser untuk memverifikasi",
                _yesTEXT: "Terverifikasi",
                _Loading: "Memuat",
                _error300: 'Ups, ada yang tidak beres. Harap <a href="javascript:__nc.reset()">segarkan</a> dan coba lagi.',
                _errorNetwork: 'Kesalahan jaringan. Harap <a href="javascript:__nc.reset()">segarkan</a>.',
                LOADING: "Memuat",
                SLIDER_LABEL: "Geser untuk memverifikasi",
                CHECK_Y: "Terverifikasi",
                ERROR_TITLE: "Maaf, ada yang tidak beres.",
                CHECK_N: "Eror",
                TIPS_TITLE: "Ups, ada yang tidak beres.",
                ERROR_RELOAD: "Muat ulang",
                ERROR_FEEDBACK: "Beri kami tanggapan",
                SLIDE: "Geser untuk memverifikasi",
                SUCCESS: "Terverifikasi",
                ERROR: "Maaf, ada yang tidak beres.",
                FAIL: "Muat ulang",
                BXMARK: "Silakan refresh halaman dan coba lagi"
            },
            tr_TR: {
                _startTEXT: "Doğrulamak için lütfen kaydırın",
                _yesTEXT: "Doğrulandı",
                _Loading: "Yükleniyor",
                _error300: 'Bir hata oluştu. Lütfen <a href="javascript:__nc.reset()">sayfayı yenileyin</a> ve tekrar deneyin.',
                _errorNetwork: 'Ağ hatası. Lütfen <a href="javascript:__nc.reset()">sayfayı yenileyin</a>.',
                LOADING: "Yükleniyor",
                SLIDER_LABEL: "Doğrulamak için kaydırın",
                CHECK_Y: "Doğrulandı",
                ERROR_TITLE: "Bir hata oluştu.",
                CHECK_N: "Hata",
                TIPS_TITLE: "Bir hata oluştu.",
                ERROR_RELOAD: "Yeniden yükle",
                ERROR_FEEDBACK: "Geri bildirim gönderin",
                SLIDE: "Doğrulamak için kaydırın",
                SUCCESS: "Doğrulandı",
                ERROR: "Bir hata oluştu.",
                FAIL: "Yeniden yükle",
                BXMARK: "Lütfen sayfayı yenileyin ve tekrar deneyin"
            },
            th_TH: {
                _startTEXT: "กรุณาเลื่อนเพื่อยืนยัน",
                _yesTEXT: "ตรวจสอบแล้ว",
                _Loading: "กำลังโหลด",
                _error300: 'อุ๊ปส์ มีบางอย่างผิดพลาด กรุณา<a href="javascript:__nc.reset()">รีเฟรช</a>และลองใหม่อีกครั้ง',
                _errorNetwork: 'เครือข่ายผิดพลาด กรุณา<a href="javascript:__nc.reset()">รีเฟรช</a>',
                LOADING: "กำลังโหลด",
                SLIDER_LABEL: "เลื่อนเพื่อตรวจสอบ",
                CHECK_Y: "ตรวจสอบแล้ว",
                ERROR_TITLE: "ขออภัย มีบางอย่างผิดพลาด",
                CHECK_N: "ผิดพลาด",
                TIPS_TITLE: "อุ๊ปส์ มีบางอย่างผิดพลาด",
                ERROR_RELOAD: "โหลดอีกครั้ง",
                ERROR_FEEDBACK: "แสดงความคิดเห็นให้เราทราบ",
                SLIDE: "เลื่อนเพื่อตรวจสอบ",
                SUCCESS: "ตรวจสอบแล้ว",
                ERROR: "ขออภัย มีบางอย่างผิดพลาด",
                FAIL: "โหลดอีกครั้ง",
                BXMARK: "โปรดรีเฟรชหน้าลองใหม่อีกครั้ง"
            },
            it_IT: {
                _startTEXT: "Scorri per verificare",
                _yesTEXT: "Verificato",
                _Loading: "Caricamento in corso",
                _error300: 'Ops, qualcosa è andato storto. <a href="javascript:__nc.reset()">Ricarica</a> e riprova.',
                _errorNetwork: 'Errore di rete. <a href="javascript:__nc.reset()">Ricarica</a>.',
                LOADING: "Caricamento in corso",
                SLIDER_LABEL: "Scorri per verificare",
                CHECK_Y: "Verificato",
                ERROR_TITLE: "Spiacenti, qualcosa è andato storto.",
                CHECK_N: "Errore",
                TIPS_TITLE: "Ops, c'è stato un problema.",
                ERROR_RELOAD: "Ricarica",
                ERROR_FEEDBACK: "Dacci un feedback",
                SLIDE: "Scorri per verificare",
                SUCCESS: "Verificato",
                ERROR: "Spiacenti, qualcosa è andato storto.",
                FAIL: "Ricarica",
                BXMARK: "Aggiorna la pagina e riprova"
            },
            de_DE: {
                _startTEXT: "Zum Verifizieren bitte schieben",
                _yesTEXT: "Überprüft",
                _Loading: "Laden",
                _error300: 'Ups, da ist etwas schief gelaufen. Bitte <a href="javascript:__nc.reset()">aktualisieren</a> und erneut versuchen.',
                _errorNetwork: 'Netzwerkfehler. Bitte <a href="javascript:__nc.reset()">aktualisieren</a>.',
                LOADING: "Laden",
                SLIDER_LABEL: "Zum Überprüfen wischen",
                CHECK_Y: "Überprüft",
                ERROR_TITLE: "Entschuldigung, etwas ist schief gelaufen.",
                CHECK_N: "Fehler",
                TIPS_TITLE: "Ups, etwas ist schiefgelaufen.",
                ERROR_RELOAD: "Aktualisieren",
                ERROR_FEEDBACK: "Geben Sie uns Feedback",
                SLIDE: "Zum Überprüfen wischen",
                SUCCESS: "Überprüft",
                ERROR: "Entschuldigung, etwas ist schief gelaufen.",
                FAIL: "Aktualisieren",
                BXMARK: "Bitte aktualisieren Sie die Seite und versuchen Sie es erneut"
            },
            iw_HE: {
                _startTEXT: "החליקו לאימות",
                _yesTEXT: "אומת",
                _Loading: "טוען",
                _error300: 'אופס, משהו השתבש. <a href="javascript:__nc.reset()">רעננו</a> את הדף ונסו שוב.',
                _errorNetwork: 'שגיאת מערכת. <a href="javascript:__nc.reset()">רעננו</a> את הדף',
                LOADING: "טוען",
                SLIDER_LABEL: "החליקו לאימות",
                CHECK_Y: "אומת",
                ERROR_TITLE: "מצטערים, משהו השתבש.",
                CHECK_N: "שגיאה",
                TIPS_TITLE: "אופס, משהו השתבש.",
                ERROR_RELOAD: "ריענון",
                ERROR_FEEDBACK: "תנו לנו משוב",
                SLIDE: "החליקו לאימות",
                SUCCESS: "אומת",
                ERROR: "מצטערים, משהו השתבש.",
                FAIL: "ריענון",
                BXMARK: "אנא לרענן את הדף ולנסות שוב"
            },
            ja_JP: {
                _startTEXT: "スライドして確認してください",
                _yesTEXT: "確証しました",
                _Loading: "ロード中",
                _error300: 'おっと、何かがうまくいきませんでした。<a href="javascript:__nc.reset()">リフレッシュして</a>もう一度お試し下さい。',
                _errorNetwork: 'ネットワークエラーが発生しました。<a href="javascript:__nc.reset()">リフレッシュして</a>ください。',
                LOADING: "ロード中",
                SLIDER_LABEL: "スライドして確認",
                CHECK_Y: "確証しました",
                ERROR_TITLE: "申し訳ありませんが、何かがうまくいきませんでした。",
                CHECK_N: "エラー",
                TIPS_TITLE: "おっと、何かがうまくいきませんでした。",
                ERROR_RELOAD: "リロード",
                ERROR_FEEDBACK: "フィードバックを送信",
                SLIDE: "スライドして確認",
                SUCCESS: "確証しました",
                ERROR: "申し訳ありませんが、何かがうまくいきませんでした。",
                FAIL: "リロード",
                BXMARK: "ページを更新して再試行してください"
            },
            ko_KR: {
                _startTEXT: "옆으로 밀어서 확인해 주세요",
                _yesTEXT: "확인 성공",
                _Loading: "로딩",
                _error300: '죄송합니다. 문제가 생겼어요. <a href="javascript:__nc.reset()">새로고침</a>해서 다시 시도해 주세요.',
                _errorNetwork: '네트워크 오류입니다. <a href="javascript:__nc.reset()">새로고침</a> 해주세요.',
                LOADING: "로딩",
                SLIDER_LABEL: "밀어서 확인하기",
                CHECK_Y: "확인 성공",
                ERROR_TITLE: "죄송합니다. 문제가 생겼어요.",
                CHECK_N: "오류",
                TIPS_TITLE: "죄송합니다. 문제가 생겼어요.",
                ERROR_RELOAD: "새로고침",
                ERROR_FEEDBACK: "피드백 전달",
                SLIDE: "밀어서 확인하기",
                SUCCESS: "확인 성공",
                ERROR: "죄송합니다. 문제가 생겼어요.",
                FAIL: "새로고침",
                BXMARK: "페이지를 새로 고치고 다시 시도하십시오."
            },
            nl_NL: {
                _startTEXT: "Veeg om te verifiëren",
                _yesTEXT: "Geverifieerd",
                _Loading: "Aan het laden",
                _error300: 'Oeps, er is iets misgegaan. <a href="javascript:__nc.reset()">Vernieuw</a> en probeer het nog een keer.',
                _errorNetwork: 'Netwerkfout. <a href="javascript:__nc.reset()">Vernieuw</a>.',
                LOADING: "Aan het laden",
                SLIDER_LABEL: "Veeg om te verifiëren",
                CHECK_Y: "Geverifieerd",
                ERROR_TITLE: "Er is iets misgegaan.",
                CHECK_N: "Fout",
                TIPS_TITLE: "Oeps, er ging iets mis.",
                ERROR_RELOAD: "Vernieuwen",
                ERROR_FEEDBACK: "Geef ons feedback",
                SLIDE: "Veeg om te verifiëren",
                SUCCESS: "Geverifieerd",
                ERROR: "Er is iets misgegaan.",
                FAIL: "Vernieuwen",
                BXMARK: "Vernieuw de pagina en probeer het opnieuw"
            },
            vi_VN: {
                _startTEXT: "Vui lòng trượt để xác nhận",
                _yesTEXT: "Đã xác minh",
                _Loading: "Đang tải",
                _error300: 'Rất tiếc, đã xảy ra sự cố. Vui lòng <a href="javascript:__nc.reset()">làm mới</a> và thử lại.',
                _errorNetwork: 'Lỗi mạng. Vui lòng <a href="javascript:__nc.reset()">làm mới</a>.',
                LOADING: "Đang tải",
                SLIDER_LABEL: "Trượt để xác minh",
                CHECK_Y: "Đã xác minh",
                ERROR_TITLE: "Xin lỗi, đã xảy ra sự cố.",
                CHECK_N: "Lỗi",
                TIPS_TITLE: "Rất tiếc, đã xảy ra sự cố.",
                ERROR_RELOAD: "Tải lại",
                ERROR_FEEDBACK: "Phản hồi cho chúng tôi",
                SLIDE: "Trượt để xác minh",
                SUCCESS: "Đã xác minh",
                ERROR: "Xin lỗi, đã xảy ra sự cố.",
                FAIL: "Tải lại",
                BXMARK: "Vui lòng làm mới trang và thử lại"
            },
            ar_SA: {
                _startTEXT: "يرجى التمرير للتحقق",
                _yesTEXT: "تمَّ التحقق!",
                _Loading: "جاري التحميل",
                _error300: 'نأسف، حدث خطأ. يرجى <a href="javascript:__nc.reset()">تحديث الصفحة</a> وإعادة المحاولة.',
                _errorNetwork: 'خطأ بالشبكة. يرجى <a href="javascript:__nc.reset()">تحديث الصفحة</a>.',
                LOADING: "جاري التحميل",
                SLIDER_LABEL: "مرر للتحقق",
                CHECK_Y: "تمَّ التحقق!",
                ERROR_TITLE: "نأسف، حدث خطأ.",
                CHECK_N: "خطأ",
                TIPS_TITLE: "نأسف، حدث خطأ.",
                ERROR_RELOAD: "إعادة التحميل",
                ERROR_FEEDBACK: "شاركنا ملاحظاتك",
                SLIDE: "مرر للتحقق",
                SUCCESS: "تمَّ التحقق!",
                ERROR: "نأسف، حدث خطأ.",
                FAIL: "إعادة التحميل",
                BXMARK: "يرجى تحديث الصفحة والمحاولة مرة أخرى"
            },
            pl_PL: {
                _startTEXT: "Proszę przesunąć, aby zweryfikować",
                _yesTEXT: "Zweryfikowano",
                _Loading: "Ładowanie",
                _error300: 'Ups, coś poszło nie tak. Proszę <a href="javascript:__nc.reset()">odświeżyć</a> i spróbować ponownie.',
                _errorNetwork: 'Błąd sieci. Proszę <a href="javascript:__nc.reset()">odświeżyć</a>.',
                LOADING: "Ładowanie",
                SLIDER_LABEL: "Przesuń, aby zweryfikować",
                CHECK_Y: "Zweryfikowano",
                ERROR_TITLE: "Przepraszamy, coś poszło nie tak.",
                CHECK_N: "Błąd",
                TIPS_TITLE: "Ups! Coś poszło nie tak.",
                ERROR_RELOAD: "Odśwież",
                ERROR_FEEDBACK: "Podziel się z nami swoją opinią",
                SLIDE: "Przesuń, aby zweryfikować",
                SUCCESS: "Zweryfikowano",
                ERROR: "Przepraszamy, coś poszło nie tak.",
                FAIL: "Odśwież",
                BXMARK: "Odśwież stronę i spróbuj ponownie"
            },
            uk_UA: {
                _startTEXT: "Протягніть, щоб підтвердити",
                _yesTEXT: "Підтверджено",
                _Loading: "Завантаження",
                _error300: 'Сталася помилка. <a href="javascript:__nc.reset()">Оновіть сторінку</a> та спробуйте ще раз.',
                _errorNetwork: 'Помилка мережі. <a href="javascript:__nc.reset()">Оновіть сторінку</a>.',
                LOADING: "Завантаження",
                SLIDER_LABEL: "Протягніть, щоб підтвердити",
                CHECK_Y: "Підтверджено",
                ERROR_TITLE: "На жаль, сталася помилка.",
                CHECK_N: "Помилка",
                TIPS_TITLE: "Сталася помилка.",
                ERROR_RELOAD: "Перезавантажити",
                ERROR_FEEDBACK: "Надішліть свій відгук",
                SLIDE: "Протягніть, щоб підтвердити",
                SUCCESS: "Підтверджено",
                ERROR: "На жаль, сталася помилка.",
                FAIL: "Перезавантажити",
                BXMARK: "Будь ласка, оновіть сторінку та повторіть спробу"
            },
            cn: {
                LOADING: "加载中...",
                SLIDE: "向右滑动验证",
                SUCCESS: "验证通过",
                ERROR: "非常抱歉，网络出错了...",
                FAIL: "验证失败，点击框体重试",
                BXMARK: "请刷新页面重试"
            },
            tw: {
                LOADING: "加載中...",
                SLIDE: "向右滑動驗證",
                SUCCESS: "驗證通過",
                ERROR: "非常抱歉，網絡出錯了...",
                FAIL: "驗證失敗，點擊框體重試",
                BXMARK: "請刷新頁面重試"
            },
            en: {
                BXMARK: "Please refresh the page and try again"
            }
        }
    },
    "./src/modules/punishpage/base-template.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("./src/modules/punishpage/utils/index.js");
        t.default = function(e, t) {
            var n = e.uuid
              , i = e.copyright
              , r = e.logo
              , o = e.logoLink
              , s = e.action
              , c = (e.appUpgrade,
            e.headerConfig)
              , d = void 0 === c ? {} : c
              , p = d.backUrl
              , u = d.isHeaderShow
              , l = window.innerHeight || window.screen && window.screen.height;
            return '<div id="baxia-punish" class=\'baxia-punish ' + s + " " + (a.isMobile ? l && l < 550 ? " mobile half " : " mobile " : a.isPc ? " pc " : a.isAjax ? " pc-ajax " : " pc ") + "'>\n    " + (r && "null" !== r ? '<div id="J_Header" class="header clearfix">\n    <h1 id="logo" class="logo">\n        <a href="' + o + '" target="_top">\n          <img src="' + r + '" title="点击查看源网页">\n        </a>\n    </h1>\n</div>' : "") + '\n    <div class="wrapper">\n    ' + (u ? "<div class='control-header'>\n          <div class='back' onclick=location.replace('" + p + '\') ><svg t="1614585590171" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4891" width="24" height="24"><path d="M691.8656 172.544a32 32 0 0 0-45.2608-45.2096l-358.4 358.4a37.12 37.12 0 0 0 0 52.5312l358.4 358.4a32 32 0 0 0 45.2608-45.2608L352.4096 512l339.456-339.456z" fill="#191F25" p-id="4892"></path></svg></div>\n          <div class=\'refresh\' onclick=location.reload()><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>icon/24/icon_Y_shuaxin</title><g id="icon/24/icon_Y_shuaxin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M12,1.5 C15.4955506,1.5 18.592149,3.20811721 20.5006488,5.8352051 L20.5,3.80901699 C20.5,3.53287462 20.7238576,3.30901699 21,3.30901699 C21.0776225,3.30901699 21.1541791,3.32708954 21.2236068,3.3618034 L22.5,4 L22.5,12 L21.2236068,12.6381966 C20.9766175,12.7616912 20.676281,12.6615791 20.5527864,12.4145898 C20.5180725,12.3451621 20.5,12.2686056 20.5,12.190983 L20.5,12 C20.5,7.30557963 16.6944204,3.5 12,3.5 C7.30557963,3.5 3.5,7.30557963 3.5,12 C3.5,16.6944204 7.30557963,20.5 12,20.5 C14.1783769,20.5 16.2255616,19.6785468 17.788251,18.2246937 L19.1505536,19.6889791 C17.2213363,21.4838325 14.6888945,22.5 12,22.5 C6.20101013,22.5 1.5,17.7989899 1.5,12 C1.5,6.20101013 6.20101013,1.5 12,1.5 Z" id="图标颜色" fill="#191F25" fill-rule="nonzero"></path></g></svg></div>\n          </div>' : "") + '\n    <div class="content-inside">\n       ' + t + '\n        </div>\n\n    <div class="copyright">\n    ' + (a.isMobile ? n : "") + "\n    <span>" + ("null" === i ? "" : i) + "</span>\n    </div>\n    </div>\n   </div> </div>"
        }
    },
    "./src/modules/punishpage/capscratch.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.uuid
                  , n = e.isMobile;
                return (0,
                r.default)(e, ' <div class="bannar">\n            <div class=\'captcha-tips\'>\n                <div id="nocaptcha" style="margin-top:0 !important"></div>\n                <p class="p-uuid-tips captcha-uuid-tips">' + (!n && t ? t : "") + "</p>\n            </div>\n        </div>")
            },
            render: function(e) {
                s(e),
                (0,
                o.initReferrer)()
            }
        };
        var s = function(e) {
            (0,
            o.loadScript)("https://g.alicdn.com/bsop-static/scratch-captcha/0.0.9/index.js", (function() {
                var a = e.NCAPPKEY
                  , i = e.NCTOKENSTR
                  , r = e.SECDATA
                  , s = e.notReport
                  , c = e.noCaptchaLanguageConfigJson
                  , d = document.getElementById("bx-feedback-btn")
                  , p = (0,
                o.getSubmitPathPrefix)(e)
                  , u = p + "/_____tmd_____/report";
                window.scratchCaptcha && window.scratchCaptcha.init({
                    token: i,
                    appKey: a,
                    questionUrl: p + "/_____tmd_____/newslidecaptcha",
                    verifyUrl: p + "/_____tmd_____/newslidevalidate",
                    x5secdata: r,
                    language: n,
                    renderTo: document.querySelector(t),
                    languageConfigJson: c,
                    verifySuccess: function(t, n) {
                        if (!n || o.isMiniprogram)
                            (0,
                            o.close)(n);
                        else
                            try {
                                (0,
                                o.checkCookie)(n, e)
                            } catch (e) {
                                (0,
                                o.log)("setCookie校验失败：" + JSON.stringify(e)),
                                (0,
                                o.close)(n)
                            }
                    },
                    initSuccess: function() {
                        s || (d && d.href.indexOf("ncInitSuccess") < 0 && (d.href += "&ncInitSuccess=true"),
                        d && d.href.indexOf("netError") > -1 && d.href.replace("&netError=true", ""),
                        (0,
                        o.request)({
                            url: u,
                            type: "GET",
                            data: {
                                x5secdata: r,
                                type: "initSuccess",
                                msg: "capscratch init success",
                                uuid: i
                            }
                        }))
                    },
                    initFail: function() {
                        s || d && d.href.indexOf("netError") < 0 && (d.href += "&netError=true")
                    },
                    verifyFail: function(e) {
                        s || (d && d.href.indexOf("verifyFail") < 0 && (d.style.color = "#FAAD14",
                        d.href += "&verifyFail=true"),
                        (0,
                        o.request)({
                            url: u,
                            type: "GET",
                            data: {
                                x5secdata: r,
                                type: "verifyFail",
                                msg: e,
                                uuid: i
                            }
                        }))
                    },
                    nativeReport: function() {
                        var t = (new Date).valueOf();
                        (0,
                        o.nativeReport)(e, t)
                    }
                })
            }
            ), e, "Capscratch", e.notReport);
            var t = e.renderTo
              , n = e.noCaptchaLanguage
        }
    },
    "./src/modules/punishpage/capslide.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.customImage
                  , n = e.uuid
                  , a = e.languageConfig
                  , i = e.isMobile;
                return (0,
                r.default)(e, ' <div class="bannar">\n        <div class=\'bg-img-wrap\'>\n        <img id="bg-img" src="' + t + '" /></div>\n        <div class=\'captcha-tips\'><div class="warnning-text" style="margin-top:0">\n        ' + a["captcha-h5-tips"] + '\n        </div>\n        <center>\n        <div id="nocaptcha" style="margin-top:0 !important">\n        </div> <p class="p-uuid-tips captcha-uuid-tips">' + (!i && n ? n : "") + "</p></div>\n    </center>\n   \n    </div>")
            },
            render: function(e) {
                s(e),
                (0,
                o.initReferrer)()
            }
        };
        var s = function(e) {
            (0,
            o.loadScript)("https://g.alicdn.com/bsop-static/slide-captcha/0.0.18/index.js?t=500", (function() {
                var i = e.NCAPPKEY
                  , r = e.NCTOKENSTR
                  , s = e.SECDATA
                  , c = document.getElementById(a ? "pure-bx-feedback-btn" : "bx-feedback-btn")
                  , d = (0,
                o.getSubmitPathPrefix)(e)
                  , p = d + "/_____tmd_____/report";
                window.index.initSC({
                    token: r,
                    appKey: i,
                    getUrl: d + "/_____tmd_____/newslidecaptcha",
                    postUrl: d + "/_____tmd_____/newslidevalidate",
                    x5secdata: s,
                    language: n,
                    renderTo: document.querySelector(t),
                    callback: function(t) {
                        if (!t || o.isMiniprogram)
                            (0,
                            o.close)(t);
                        else
                            try {
                                (0,
                                o.checkCookie)(t, e)
                            } catch (e) {
                                (0,
                                o.log)("setCookie校验失败：" + JSON.stringify(e)),
                                (0,
                                o.close)(t)
                            }
                    },
                    onload: function(e) {
                        c && c.href.indexOf("ncInitSuccess") < 0 && (c.href += "&ncInitSuccess=true"),
                        c && c.href.indexOf("netError") > -1 && c.href.replace("&netError=true", ""),
                        (0,
                        o.request)({
                            url: p,
                            type: "GET",
                            data: {
                                x5secdata: s,
                                type: "initSuccess",
                                msg: "capslide init success",
                                uuid: r
                            }
                        })
                    },
                    onerror: function(e) {
                        c && c.href.indexOf("netError") < 0 && (c.href += "&netError=true")
                    },
                    fail: function(e) {
                        c && c.href.indexOf("verifyFail") < 0 && (c.style.color = "#FAAD14",
                        c.href += "&verifyFail=true"),
                        (0,
                        o.request)({
                            url: p,
                            type: "GET",
                            data: {
                                x5secdata: s,
                                type: "verifyFail",
                                msg: e,
                                uuid: r
                            }
                        })
                    }
                })
            }
            ), e, "Capslide");
            var t = e.renderTo
              , n = e.noCaptchaLanguage
              , a = e.pureCaptcha
        }
    },
    "./src/modules/punishpage/captcha.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = s(n("./src/modules/punishpage/base-template.js"))
          , i = s(n("./src/modules/punishpage/render.js"))
          , r = s(n("./src/modules/punishpage/pureCaptcha.js"))
          , o = n("./src/modules/punishpage/utils/index.js");
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            template: function(e) {
                var t = e.customImage
                  , n = e.uuid
                  , i = e.languageConfig
                  , s = e.pureCaptcha
                  , c = ' <center>\n    <div id="nocaptcha" style="margin-top:45px">\n    </div> <p class="p-uuid-tips captcha-uuid-tips">' + (!o.isMobile && n ? n : "") + '</p></div>\n</center>\n<form id="nc-verify-form" action="' + e.FORMACTIOIN + '" method="GET">\n    <input name="nc_token" value="' + e.NCTOKENSTR + '" type="hidden">\n    <input name="nc_session_id" id="nc-session-id" value="" type="hidden">\n    <input name="nc_sig" id="nc-sig" value="" type="hidden">\n    <input name="x5sec_domain" id="x5sec_domain" value="" type="hidden">\n    <input name="x5secdata" id="x5secdata" type="hidden" value="' + e.SECDATA + '">\n    <input name="x5step" id="x5step" type="hidden" value="' + e.BXSTEP + '">\n    <input name="ajax" id="ajax" type="hidden" value="true">\n    <input name="nc_app_key" id="nc_app_key" type="hidden" value="' + e.NCAPPKEY + '">\n</form>';
                return s ? "" + r.default + c : (0,
                a.default)(e, ' <div class="bannar">\n        <div class=\'bg-img-wrap\'>\n        <img id="bg-img" src="' + t + '" onerror="customImageError(this)" /></div>\n        <div class=\'captcha-tips\'><div class="warnning-text">\n        ' + i["captcha-h5-tips"] + "\n        </div>\n       " + c + "\n    </div>")
            },
            ajaxSubmit: u,
            submit: d,
            formSubmit: function(e, t) {
                var n = p(e, t);
                document.getElementById("nc-verify-form").action = n.url,
                document.getElementById("nc-verify-form").submit()
            },
            render: function(e) {
                c(e),
                (0,
                o.initReferrer)(),
                e.pureCaptcha && (0,
                o.pureRender)("nocaptcha")
            }
        };
        var c = function(e) {
            var t = ""
              , n = e.NCTOKENSTR
              , a = e.SECDATA
              , i = (0,
            o.getSubmitPathPrefix)(e) + "/_____tmd_____/report";
            try {
                e.isMobile && -1 === location.search.indexOf("pc_native=1") ? (t = "register_h5",
                (0,
                o.log)("开始加载h5滑块js，uuid:" + n)) : (t = "register",
                (0,
                o.log)("开始加载web滑块js，uuid:" + n)),
                (0,
                o.loadScript)("https://g.alicdn.com/AWSC/AWSC/awsc.js", (function() {
                    try {
                        AWSC.use("nc", (function(e, t) {
                            if ("loaded" !== e && (0,
                            o.request)({
                                url: i,
                                type: "GET",
                                data: {
                                    x5secdata: p,
                                    type: "loadErrorNC",
                                    msg: "nc.js_load_" + e,
                                    uuid: c
                                }
                            }),
                            window.nc = t.init(k),
                            document.getElementById("nc_1_nocaptcha")) {
                                var n = document.getElementById(w ? "pure-bx-feedback-btn" : "bx-feedback-btn");
                                n && (n.href += "&ncInitSuccess=true")
                            }
                        }
                        ), {
                            timeout: 3e4
                        })
                    } catch (e) {
                        (0,
                        o.log)("渲染" + ("register_h5" === k.scene ? "h5" : "web") + "滑块异常，uuid：" + c + "，error：" + (e && e.message || JSON.stringify(e)))
                    }
                }
                ), e, "AWSC")
            } catch (e) {
                (0,
                o.log)("加载滑块js异常，uuid：" + n + "，error：" + (e && e.message || JSON.stringify(e)))
            }
            var r = e.renderTo
              , s = e.NCAPPKEY
              , c = e.NCTOKENSTR
              , p = e.SECDATA
              , l = e.noCaptchaCallback
              , g = e.noCaptchaLanguage
              , h = e.noCaptchaLanguageCont
              , f = e.preNoCaptchaSubmit
              , m = e.noCaptchaSuccess
              , _ = e.noCaptchaFail
              , v = e.noCaptchaError
              , b = e.isCaptchaLanguageI18n
              , y = e.languageConfig
              , w = e.pureCaptcha
              , E = e.ajaxSubmit
              , k = {
                renderTo: r,
                appkey: s,
                token: c,
                scene: t,
                reportUrl: i + "?x5secdata=" + a + "&",
                callback: function(e) {
                    if (l)
                        return l(!1, e);
                    f && f(),
                    d(e)
                },
                fail: function(t) {
                    if (w && !document.getElementById("pure-bx-feedback-btn")) {
                        var r = document.createElement("div");
                        r.innerHTML = (0,
                        o.getFeedbackLink)(y["pure-feedback-link"], "pure-bx-feedback-btn", n, e),
                        document.body.appendChild(r)
                    }
                    var s = document.getElementById(w ? "pure-bx-feedback-btn" : "bx-feedback-btn");
                    s && (s.style.color = "#FAAD14"),
                    window.ncFailCode = t,
                    window.ncFailCodeList = window.ncFailCodeList || [],
                    window.ncFailCodeList.push(t),
                    s && (s.href.indexOf(!1) ? s.href = s.href.split("errorcode=")[0] + "&errorcode=" + window.ncFailCodeList.join("%2C") : s.href += "&errorcode=" + window.ncFailCodeList.join("%2C")),
                    (0,
                    o.request)({
                        url: i,
                        type: "GET",
                        data: {
                            x5secdata: a,
                            type: "verifyFail",
                            msg: t,
                            uuid: n
                        }
                    }),
                    _ && _(t)
                },
                error: function(e) {
                    window.ncErrorCode = e,
                    v && v(e)
                }
            };
            g && (k.language = g),
            k.upLang = {},
            k.upLang[g] = {
                BXMARK: h.BXMARK
            },
            (window._custom_config_ && window._custom_config_.noCaptchaLanguageCont || h && (o.isMobile || b || "pl_PL" === g || "uk_UA" === g)) && (k.upLang = {},
            k.upLang[g] = h),
            l || (k.replaceCallback = function(t) {
                var n = (new Date).valueOf();
                E && "function" == typeof E ? E(e, t, m) : u(e, t, m, n),
                (0,
                o.nativeReport)(e, n)
            }
            )
        };
        function d(e) {
            document.getElementById("nc-session-id").value = e.csessionid,
            document.getElementById("nc-sig").value = e.sig,
            document.getElementById("nc-verify-form").submit()
        }
        function p(e, t) {
            if (location.pathname.indexOf("x5secdata%3D") > -1) {
                var n = o.isLandscape ? "&landscape=1" : "";
                return {
                    data: {
                        slidedata: JSON.stringify(t.data),
                        x5secdata: e.SECDATA
                    },
                    url: (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/slide/" + encodeURIComponent("slidedata=" + JSON.stringify(t.data) + "&x5secdata=" + e.SECDATA + n)
                }
            }
            var a = {
                slidedata: JSON.stringify(t.data),
                x5secdata: e.SECDATA
            };
            return o.isLandscape && (a.landscape = 1),
            {
                data: a,
                url: (0,
                o.getSubmitPathPrefix)(e) + "/_____tmd_____/slide"
            }
        }
        function u(e, t, n, a) {
            var r = p(e, t);
            n && "function" == typeof n && (l = n),
            a && r.data && r.data && (r.data.ts = a),
            t.success = t.success || l,
            t.fail = t.fail || l,
            (0,
            o.request)({
                url: r.url,
                type: "GET",
                dataType: "json",
                data: r.data,
                sign: !0,
                success: function(n, a, r) {
                    try {
                        if (n.indexOf("Deny from x5") > -1)
                            return t.success(n, r, e);
                        if (n.indexOf("window._config_") > -1)
                            return void function(e) {
                                var t = e.replace(/\s+/g, "").match(/window\.\_config_\=([^;]+)/)
                                  , n = "";
                                t && t[1] && (n = t[1]);
                                e = n && JSON.parse(n),
                                window._config_ = e,
                                document.getElementById("x5secdata").value = e.SECDATA,
                                document.getElementById("nc_app_key").value = e.NCAPPKEY,
                                e && void 0 === e.canFeedback && (e.canFeedback = (0,
                                o.canFeedback)(e.action));
                                new i.default(e).render()
                            }(n);
                        if ((n = JSON.parse(n)).rgv587_flag)
                            return void function(e, t) {
                                var n = (0,
                                o.getSubmitPathPrefix)(t) + "/_____tmd_____" + e.url.split("_____tmd_____")[1];
                                o.isInNativeSdk && (n += "&native=1");
                                location.replace(n)
                            }(n, e);
                        n.result && 0 === n.result.code ? l(n, r, e) : t.success(n, r, e)
                    } catch (t) {
                        l(n, r, e)
                    }
                },
                error: function(e) {
                    l()
                }
            })
        }
        window.customImageError = function(e) {
            if ("https://img.alicdn.com/imgextra/i1/O1CN01rAc7zy1I9ns9kkTth_!!6000000000851-2-tps-134-134.png" !== e.src) {
                var t = window._config_ || {}
                  , n = t.NCTOKENSTR
                  , a = t.NCAPPKEY;
                (0,
                o.log)(window._custom_config_ && window._custom_config_.templateName, 11, n, a, e.src),
                e.src = "https://img.alicdn.com/imgextra/i1/O1CN01rAc7zy1I9ns9kkTth_!!6000000000851-2-tps-134-134.png"
            }
        }
        ;
        var l = function(e, t, n) {
            if (!t || o.isMiniprogram)
                (0,
                o.close)(t);
            else
                try {
                    (0,
                    o.checkCookie)(t, n)
                } catch (e) {
                    (0,
                    o.log)("setCookie校验失败：" + JSON.stringify(e)),
                    (0,
                    o.close)(t)
                }
        }
    },
    "./src/modules/punishpage/close.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function() {
                return "<div>跳转中，如果跳转失败，请手动回退。 Jumping,</div>"
            },
            render: function() {
                (0,
                a.close)()
            }
        }
    },
    "./src/modules/punishpage/constant.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.CUSTOM_PROPS = ["customImage", "logo", "logoLink", "copyright", "noCaptchaCallback", "language", "languageConfig", "languageConfigJson", "noCaptchaLanguage"]
    },
    "./src/modules/punishpage/deny.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(n("./src/modules/punishpage/base-template.js"))
          , i = n("./src/modules/punishpage/utils/index.js")
          , r = o(n("./src/modules/punishpage/pureDenyWait.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            template: function(e) {
                var t = e.languageConfig
                  , n = e.uuid
                  , o = e.uuidOrigin
                  , s = e.customImage
                  , c = e.appUpgrade
                  , d = e.upgradeHeaderImage
                  , p = e.upgradeImage
                  , u = e.upgradeText
                  , l = e.upgradeUrl
                  , g = e.upgradeBtnText
                  , h = e.upgradeBtnColor
                  , f = e.pureDenyWait
                  , m = document.referrer;
                return m.indexOf("___tmd___") > -1 && (m = ""),
                f ? r.default + '<div id="deny">\n              <img src="https://img.alicdn.com/imgextra/i1/O1CN01UpZUYt1mqnSN1BRl1_!!6000000005006-55-tps-14-14.svg">\n              <div class="deny-text">' + (t["deny-pure-tips"] || t["deny-h5-tips"]) + (0,
                i.getFeedbackLink)(t["feedback-link"], "pure-bx-feedback-btn", o, e) + "</div>\n          </div>" : (0,
                a.default)(e, "<div " + (c ? 'class="bannar app-upgrade"' : 'class="bannar"') + ">\n        " + (c ? '<div class="header-img"><div id="header-inner-img" style="background-image:url(\'' + (d || "https://img.alicdn.com/tfs/TB1sgcIkWNj0u4jSZFyXXXgMVXa-154-37.png") + "')\"></div></div>" : "") + '\n        <img id="bg-img" src="' + (c ? p || "https://img.alicdn.com/tfs/TB1vbn5jBFR4u4jSZFPXXanzFXa-200-200.png" : s) + '" />\n        <div class="warnning-text" style="margin-bottom: 100px;">\n            ' + (c ? u || t["upgrade-text"] : t["deny-h5-tips"]) + "\n            \n            " + (e.showCenterClose && !c ? '<p style="text-align:center;margin-top: 10px;"><a  class="btn-submit-close" id="js-btn-submit-close" href="javascript:void(0)">' + t["close-btn-text"] + "</a>\n            </p>" : "") + "\n            " + (c ? '<a id="upgrade-btn" ' + (l ? 'href="' + l + '" ' : " ") + " " + (h ? 'style="background-color:' + h + '"' : "") + ">" + (g || t["close-btn-text"]) + "</a>" : "") + '\n            <p class="p-uuid-tips">' + (!i.isMobile && n ? n : "") + "</p>\n            " + (i.isMobile || !m || i.isAjax ? "" : '<a class="back-referrer" href=' + m + "><img class='back-up-img' src='https://img.alicdn.com/tfs/TB1AWGWD1L2gK0jSZFmXXc7iXXa-200-200.png' />" + t["previous-page"] + "</a>") + "\n        </div>\n    </div>")
            },
            render: function(e) {
                if (e.pureDenyWait && (0,
                i.pureRender)("deny"),
                e.appUpgrade) {
                    var t = encodeURIComponent(location.href.match(/uuid=([^&]+)/) && location.href.match(/uuid=([^&]+)/)[1] || e.NCTOKENSTR);
                    "test" !== t && "###NCTOKENSTR###" !== t && t && ((new Image).src = "https://fourier.alibaba.com/ts?ext=24&uuid=" + t)
                }
            }
        }
    },
    "./src/modules/punishpage/index.js": function(e, t, n) {
        "use strict";
        n("./src/modules/punishpage/render.js"),
        n("./src/modules/punishpage/style/index.less")
    },
    "./src/modules/punishpage/nlp.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.customImage
                  , n = e.uuid
                  , a = e.languageConfig
                  , i = e.isMobile;
                return (0,
                r.default)(e, ' <div class="bannar">\n        <div class=\'bg-img-wrap\'>\n        <img id="bg-img" src="' + t + '" /></div>\n        <div class=\'captcha-tips\'><div class="warnning-text">\n        ' + a["captcha-h5-tips"] + '\n        </div>\n        <center>\n        <div id="nocaptcha-nlp" style="width:100%">\n        </div> <p class="p-uuid-tips captcha-uuid-tips">' + (!i && n ? n : "") + '</p></div>\n    </center>\n    <form id="nc-verify-form" action="' + e.FORMACTIOIN + '" method="GET">\n        <input name="nc_token" value="' + e.NCTOKENSTR + '" type="hidden">\n        <input name="nc_session_id" id="nc-session-id" value="" type="hidden">\n        <input name="nc_sig" id="nc-sig" value="" type="hidden">\n        <input name="x5sec_domain" id="x5sec_domain" value="" type="hidden">\n        <input name="x5secdata" id="x5secdata" type="hidden" value="' + e.SECDATA + '">\n        <input name="x5step" id="x5step" type="hidden" value="' + e.BXSTEP + '">\n        <input name="ajax" id="ajax" type="hidden" value="true">\n        <input name="nc_app_key" id="nc_app_key" type="hidden" value="' + e.NCAPPKEY + '">\n        <input name="native" id="native" type="hidden" value="' + (o.isInNativeSdk ? "1" : "0") + '">\n    </form>\n    </div>')
            },
            render: function(e) {
                s(e),
                (0,
                o.initReferrer)()
            }
        };
        var s = function(e) {
            var t = e.NCAPPKEY
              , n = e.NCTOKENSTR
              , a = e.SECDATA
              , i = e.isMobile
              , r = (0,
            o.getSubmitPathPrefix)(e) + "/_____tmd_____/report";
            (0,
            o.loadScript)("//g.alicdn.com/sd/quizCaptcha/0.0.15/index.js", (function() {
                var s = {
                    appKey: t,
                    scene: "lc_register",
                    renderTo: "#nocaptcha-nlp",
                    token: n,
                    success: function(e) {
                        (0,
                        o.close)()
                    },
                    fail: function(t) {
                        !i && o.isAjax && (document.getElementsByClassName("token-enc")[0].innerHTML = (0,
                        o.getFeedbackLink)(n, "bx-feedback-btn", n, e));
                        var s = document.getElementById("bx-feedback-btn");
                        s && s.href.indexOf("verifyFail") < 0 && (s.style.color = "#FAAD14",
                        s.href += "&verifyFail=true"),
                        (0,
                        o.request)({
                            url: r,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "verifyFail",
                                msg: t && t.code || t,
                                uuid: n
                            }
                        })
                    },
                    initSuccess: function(t) {
                        var s = document.getElementById("bx-feedback-btn");
                        !i && o.isAjax && (document.getElementsByClassName("token-enc")[0].innerHTML = (0,
                        o.getFeedbackLink)(n, "bx-feedback-btn", n, e).replace("</a>", "") + '<span class="tooltip-text">点我反馈</span></a>',
                        (s = document.getElementById("bx-feedback-btn")) && s.href.indexOf("verifyFail") < 0 && t && (s.style.color = "#FAAD14",
                        s.href += "&verifyFail=true"));
                        s && s.href.indexOf("ncInitSuccess") < 0 && (s.href += "&ncInitSuccess=true"),
                        (0,
                        o.request)({
                            url: r,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "initSuccess",
                                msg: "nlp init success",
                                uuid: n
                            }
                        })
                    }
                };
                o.isAjax && (s.width = 360);
                new window.quizCaptcha(s).init()
            }
            ), e, "NLP")
        }
    },
    "./src/modules/punishpage/pureCaptcha.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = "<style>\n/* PC 端样式自定义  */\nbody .bg-img-wrap,\nbody .warnning-text,\nbody .copyright,\n#logo,\n.bx-pu-qrcode-wrap {\n  display: none;\n}\n\nbody .content-inside {\n  padding: 0;\n}\n\n#nocaptcha {\n  margin-top: 0 !important;\n  width: auto;\n}\nbody #nc_1_nocaptcha {\n  margin: 0 !important;\n}\nbody .nc-container #nc_2_wrapper,\nbody .nc-container.tb-login #nc_2_wrapper {\n  max-width: none !important;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody .nc-container #nc_1_wrapper,\nbody .nc-container.tb-login #nc_1_wrapper {\n  max-width: none !important;\n}\n\n/* 移动端样式自定义 */\n\n@media only screen and (-webkit-device-pixel-ratio: 2) and (max-device-height: 568px) and (min-device-width: 320px) {\n  #nocaptcha ._nc .stage1 .button .icon {\n    bottom: 0px;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n\nbody,\np {\n  text-align: center;\n}\n\nbody .baxia-container {\n  margin-top: 20px;\n}\n\n#baxia-dialog-content {\n  height: 40px !important;\n}\n\n.custom-dialog-wrapper {\n  height: 40px;\n}\n\n#nocaptcha ._nc .stage1 {\n  height: 40px;\n  border-radius: 0;\n  background-color: transparent;\n}\n\n#nocaptcha ._nc .stage {\n  padding: 0;\n}\n\n#nocaptcha ._nc .stage1 .slider {\n  position: static;\n  left: 0;\n  right: 0;\n  height: 40px;\n  background-color: #e8e8e8;\n  border-radius: 0;\n}\n\n#nocaptcha ._nc .stage1 .slider .track {\n  border-radius: 0;\n}\n\n#nocaptcha ._nc .stage1 .track div,\n#nocaptcha ._nc .stage1 .label {\n  height: 40px;\n  line-height: 40px;\n}\n#nocaptcha {\n  max-height: 40px !important;\n  width: auto !important;\n}\n\n#nocaptcha ._nc .stage1 .label {\n}\n\n#nocaptcha ._nc .stage1 .button {\n  width: 40px;\n  height: 38px;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n#nocaptcha ._nc .icon-slide-arrow {\n  font-size: 16px;\n  color: #737383;\n}\n\n#nocaptcha ._nc .stage1 .icon {\n  left: 5px;\n  top: 14px;\n}\n\n#nocaptcha ._nc .stage1 {\n  height: 40px;\n}\n\n@media only screen and (-webkit-device-pixel-ratio: 2) and (max-device-height: 568px) and (min-device-width: 320px) {\n  #nocaptcha ._nc .stage1 .icon {\n    bottom: 14px;\n  }\n}\n\n#nocaptcha ._nc .stage1 .icon.icon-load-c {\n  top: 0px;\n}\n\n#nocaptcha ._nc .stage3 {\n  height: 40px;\n  font-size: 12px;\n  text-align: right;\n}\n\n#nocaptcha ._nc .stage3 .title {\n  margin: 0px;\n  font-size: 12px;\n  color: #e5a042;\n}\n\n#nocaptcha ._nc .menu {\n  width: auto;\n  margin: 0px 5px;\n  position: initial;\n}\n\n#nocaptcha ._nc .stage3 .menu {\n  position: initial;\n  display: initial;\n  margin: 0 5px;\n  width: auto;\n  height: auto;\n  border-radius: 0;\n  border: none;\n}\n\n#nocaptcha ._nc .menu.nc-sep {\n  display: none;\n}\n\n#nocaptcha ._nc .menu .label {\n  height: 12px;\n  line-height: 12px;\n  font-size: 12px;\n  position: initial;\n  color: #0394f5;\n}\n\n#nocaptcha ._nc .stage3 .menu .label {\n  font-size: 12px;\n  line-height: 12px;\n  color: #0394f5;\n}\n\n#nocaptcha ._nc .menu .icon {\n  font-size: 12px;\n  margin-right: 5px;\n  height: 12px;\n  width: 12px;\n}\n\n#nocaptcha ._nc .stage3 .menu .icon {\n  color: #999;\n  line-height: normal;\n}\n\n#nocaptcha ._nc .stage3 .menu.feedback .icon {\n  font-size: 12px;\n}\n\n#nocaptcha ._nc .menu .icon::before {\n  color: #0394f5;\n}\n\n#nocaptcha ._nc .stage1 .icon.icon-ok {\n  top: 0px;\n}\n\n#pure-bx-feedback-btn {\n  position: absolute;\n  color: #999;\n  font-size: 12px;\n  right: 6px;\n  top: 9px;\n  z-index: 9999;\n}\n</style>"
    },
    "./src/modules/punishpage/pureDenyWait.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = "<style>\n#deny {\n    background-color: #FFF1F0;\n    border: 1px solid #FFCCC7;\n}\n#wait {\n    background-color: #FFF4E3;\n    border: 1px solid #FEC14D;\n}\n#deny, #wait {\n    height: auto;\n    width: calc(100% - 2px);\n    width: -moz-calc(100% - 2px);\n    width: -webkit-calc(100% - 2px);\n    border-radius: 2px;\n}\n#deny img,#wait img {\n    width: 14px;\n    height: 14px;\n    margin: 9px 0px 9px 16px;\n    position: absolute;\n}\n#deny .deny-text,#wait .deny-text {\n    font-weight: 400;\n    font-size: 14px;\n    color: rgba(0,0,0,0.65);\n    letter-spacing: 0;\n    line-height: 22px;\n    margin: 5px 16px 5px 38px;\n    white-space: normal;\n    word-wrap: break-word;\n}\n#pure-bx-feedback-btn {\n    position: absolute;\n    text-decoration: none;\n    color: #999;\n    font-size: 12px;\n    right: 16px;\n}\n</style>"
    },
    "./src/modules/punishpage/render.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
          , i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        }()
          , r = w(n("./src/modules/punishpage/deny.js"))
          , o = w(n("./src/modules/punishpage/wait.js"))
          , s = w(n("./src/modules/punishpage/nlp.js"))
          , c = w(n("./src/modules/punishpage/captcha.js"))
          , d = w(n("./src/modules/punishpage/close.js"))
          , p = w(n("./src/modules/punishpage/capslide.js"))
          , u = w(n("./src/modules/punishpage/capscratch.js"))
          , l = w(n("./src/modules/punishpage/vi.js"))
          , g = w(n("./src/modules/punishpage/upgrade.js"))
          , h = w(n("./src/modules/i18n/language.js"))
          , f = n("./src/modules/punishpage/utils/index.js")
          , m = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }(f)
          , _ = n("./src/modules/punishpage/constant.js")
          , v = n("./src/modules/punishpage/utils/i18n-captcha.js")
          , b = n("./src/modules/punishpage/utils/index.js")
          , y = w(n("./src/modules/i18n/nocaptcha-language.js"));
        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var E = {
            deny: r.default,
            block: r.default,
            wait: o.default,
            captcha: c.default,
            captchanlp: s.default,
            captchacapslide: p.default,
            captchacapslidev2: u.default,
            captchascene: u.default,
            captchavi: l.default,
            nlp: s.default,
            close: d.default,
            capslide: p.default,
            upgrade: g.default,
            denyupgrade: g.default,
            denyrelogin: r.default,
            loginlv: r.default
        }
          , k = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.props = this.getDefaultProps(t),
                this.isIE() && (document.getElementsByTagName("html")[0].className = "ie-browser")
            }
            return i(e, [{
                key: "getNoCaptchaLanguage",
                value: function(e, t) {
                    var n = t.noCaptchaLanguage;
                    return t.isCaptchaLanguageI18n ? (0,
                    v.getI18nLanguage)() : n ? {
                        language: n,
                        languageCont: y.default[n] || y.default.cn
                    } : {
                        language: n = {
                            zh: "cn",
                            "zh-cn": "cn",
                            "en-us": "en",
                            "zh-tw": "tw",
                            ru: "ru_RU",
                            "ru-ru": "ru_RU",
                            es: "es_ES",
                            "es-es": "es_ES",
                            pt: "pt_BR",
                            "pt-br": "pt_BR",
                            fr: "fr_FR",
                            "fr-fr": "fr_FR",
                            id: "in_ID",
                            "id-id": "in_ID",
                            tr: "tr_TR",
                            "tr-tr": "tr_TR",
                            th: "th_TH",
                            "th-th": "th_TH",
                            it: "it_IT",
                            "it-it": "it_IT",
                            de: "de_DE",
                            "de-de": "de_DE",
                            he: "iw_HE",
                            "iw-he": "iw_HE",
                            ja: "ja_JP",
                            "ja-jp": "ja_JP",
                            ko: "ko_KR",
                            "ko-kr": "ko_KR",
                            nl: "nl_NL",
                            "nl-nl": "nl_NL",
                            vi: "vi_VN",
                            "vi-vn": "vi_VN",
                            ar: "ar_SA",
                            "ar-sa": "ar_SA",
                            pl: "pl_PL",
                            "pl-pl": "pl_PL",
                            uk: "uk_UA",
                            "uk-ua": "uk_UA"
                        }[e ? e.toLowerCase() : "en-us"] || "en",
                        languageCont: y.default[n]
                    }
                }
            }, {
                key: "getHost",
                value: function(e) {
                    return "wait" === e || "deny" === e ? document.referrer : location.hostname
                }
            }, {
                key: "getLogoInfo",
                value: function(e) {
                    var t = this.getHost(e)
                      , n = (new Date).getFullYear();
                    return t.indexOf("taobao.com") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB1UDHOcwoQMeJjy0FoXXcShVXa-286-118.png",
                        logoLink: "https://www.taobao.com/",
                        copyright: "© 2003-现在 Taobao.com 版权所有"
                    } : t.indexOf("tmall.com") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png",
                        logoLink: "https://www.tmall.com/",
                        copyright: "© 2003-" + n + " TMALL.COM 版权所有"
                    } : t.indexOf("aliyun.com") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB13DzOjXP7gK0jSZFjXXc5aXXa-212-48.png",
                        logoLink: "https://www.aliyun.com/",
                        copyright: "© 2009-" + n + " Aliyun.com 版权所有"
                    } : t.indexOf("etao.com") > -1 ? {
                        logo: "https://gw.alicdn.com/tfs/TB1yRiUQVXXXXaAXFXXXXXXXXXX-620-220.png",
                        logoLink: "https://etao.com/",
                        copyright: "Copyright © 2010-" + n + " ETAO.COM 版权所有"
                    } : t.indexOf("alimama.com") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB12M.meYH1gK0jSZFwXXc7aXXa-392-100.png",
                        logoLink: "https://www.alimama.com/index.htm",
                        copyright: "© 2007-现在 阿里妈妈版权所有"
                    } : t.indexOf("youku.com") > -1 ? {
                        logo: "https://gw.alicdn.com/tfs/TB1ugm9f5cKOu4jSZKbXXc19XXa-356-76.png",
                        logoLink: "https://www.youku.com/",
                        copyright: "Copyright©" + n + " 优酷 youku.com 版权所有"
                    } : t.indexOf("feizhu.com") > -1 ? {
                        logo: "https://gw.alicdn.com/bao/tfs/TB1mFZneMmH3KVjSZKzXXb2OXXa-748-467.png",
                        logoLink: "https://www.feizhu.com/",
                        copyright: "© Fliggy.com版权所有"
                    } : t.indexOf("ele.me") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB10aMXfaNj0u4jSZFyXXXgMVXa-500-128.svg",
                        logoLink: "https://www.ele.me/",
                        copyright: "Copyright ©2008-" + n + " 上海拉扎斯信息科技有限公司, All Rights Reserved."
                    } : {
                        logo: "https://img.alicdn.com/tfs/TB17G2dJGmWBuNjy1XaXXXCbXXa-241-41.png",
                        logoLink: "https://www.alibaba.com/",
                        copyright: "© 1999-" + n + " Alibaba.com. All rights reserved. "
                    }
                }
            }, {
                key: "getDefaultProps",
                value: function(e) {
                    for (var t in e)
                        this.uselessProps(e, t) && delete e[t];
                    var n = this.getI18nProps(e)
                      , i = this.getLogoInfo(e.action)
                      , r = i.logo
                      , o = i.logoLink
                      , s = i.copyright;
                    return window._custom_config_ = this.formatCustomConfig(),
                    e = Object.assign({
                        logo: r,
                        logoLink: o,
                        customImage: "deny" === e.action ? "https://img.alicdn.com/imgextra/i4/O1CN01jNKpmR1ODMZOUKGaE_!!6000000001671-2-tps-223-222.png" : "https://img.alicdn.com/imgextra/i2/O1CN010VLpQY1VWKHBQuBUQ_!!6000000002660-2-tps-222-222.png",
                        action: "captcha",
                        copyright: s || n.languageConfig.copyright,
                        renderTemplate: !0
                    }, e, n, a({}, window._custom_config_))
                }
            }, {
                key: "formatCustomConfig",
                value: function() {
                    var e = window._custom_config_ || {};
                    return e.showCenterClose && !f.isMobile && (e.showCenterClose = !1),
                    e.appUpgrade && !f.isMobile && (e.appUpgrade = !1),
                    e
                }
            }, {
                key: "uselessProps",
                value: function(e, t) {
                    return _.CUSTOM_PROPS.indexOf(t) > -1 && ("" === e[t] || "string" == typeof e[t] && e[t].indexOf("###") > -1)
                }
            }, {
                key: "getI18nProps",
                value: function(e) {
                    var t = e.languageConfigJson
                      , n = e.language
                      , a = e.noCaptchaLanguage
                      , i = (window._custom_config_ || {}).pureDenyWait
                      , r = e.languageConfig
                      , o = n || (navigator.browserLanguage ? navigator.browserLanguage : navigator.language);
                    if (t && t["en-US"])
                        for (var s = ["en", "en-SG", "en-GB", "en-PK", "en-MY", "en-VN", "en-TH"], c = 0; c < s.length; c++)
                            h.default[s[c]] = t["en-US"];
                    var d = (t = Object.assign(h.default, t || {}))[i && a ? a.replace("_", "-") : o];
                    d || (d = t["en-US"]),
                    d = Object.assign(d, r || {});
                    var p = this.getNoCaptchaLanguage(o, e);
                    return {
                        languageConfig: d,
                        languageConfigJson: t,
                        language: o,
                        noCaptchaLanguage: p.language,
                        noCaptchaLanguageCont: p.languageCont
                    }
                }
            }, {
                key: "bindEvents",
                value: function() {
                    this.props.showCenterClose && document.getElementById("js-btn-submit-close") && (document.getElementById("js-btn-submit-close").onclick = this.closeHandler),
                    this.props.appUpgrade && !this.props.upgradeUrl && document.getElementById("upgrade-btn") && (document.getElementById("upgrade-btn").onclick = this.closeHandler)
                }
            }, {
                key: "closeHandler",
                value: function() {
                    if (window.frames.length !== parent.frames.length)
                        try {
                            window.parent.postMessage(JSON.stringify({
                                type: "child",
                                content: '{"sm3Token":"not-send"}'
                            }), "*")
                        } catch (e) {
                            alert("请手动退出")
                        }
                    else
                        (0,
                        b.close)()
                }
            }, {
                key: "setTitle",
                value: function(e) {
                    var t = this.props.languageConfig
                      , n = {
                        deny: t["deny-title"] || t["deny-h5-tips"],
                        wait: t["deny-title"] || t["wait-h5-tips"],
                        captcha: t["captcha-title"] || t["captcha-h5-tips"],
                        nlp: t["captcha-title"] || t["captcha-h5-tips"]
                    };
                    document.title = n[e] || t["captcha-title"]
                }
            }, {
                key: "isIE",
                value: function() {
                    var e = navigator.userAgent.toLowerCase()
                      , t = e.indexOf("msie") > -1
                      , n = void 0;
                    return t && (n = e.match(/msie ([\d.]+)/)[1]),
                    n <= 9
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.languageConfig
                      , n = e.action
                      , a = e.renderTemplate
                      , i = void 0 === a || a
                      , r = e.pureCaptcha
                      , o = e.pureDenyWait
                      , s = E[n]
                      , c = Object.assign(this.props, {
                        uuid: this.getUUID(),
                        languageConfig: t,
                        isMobile: f.isMobile,
                        uuidOrigin: this.getUUIDValue()
                    });
                    i && ((0,
                    f.removeDom)("baxia-punish"),
                    document.body.innerHTML = document.body.innerHTML + s.template(c)),
                    !f.isMobile || !f.isAjax || f.isInNativeSdk || r || o || this.mobileFix(),
                    f.isLandscape && this.landscapeFix(),
                    s.render && s.render(c),
                    window._render_config_ = c,
                    this.setTitle(n),
                    this.bindEvents(),
                    this.renderQRCode(n)
                }
            }, {
                key: "getUUIDValue",
                value: function() {
                    var e = location.href.match(/uuid=([^&]+)/)
                      , t = this.props.NCTOKENSTR;
                    return e && e[1] ? e = e[1] : t && "###NCTOKENSTR###" !== t && (e = t),
                    encodeURIComponent(e)
                }
            }, {
                key: "getUUID",
                value: function() {
                    var e = this.props
                      , t = e.languageConfig
                      , n = e.canFeedback
                      , a = this.getUUIDValue()
                      , i = (0,
                    f.getFeedbackLink)(t["feedback-link"], "bx-feedback-btn", a, this.props);
                    return a && "undefined" !== a ? '<div class="bx-pu-qrcode-wrap"><div name="captcha-qrcode" class="captcha-qrcode"></div>\n      ' + (n ? i : "<label>" + t["feedback-code"] + "</label>") : n ? i : ""
                }
            }, {
                key: "renderQRCode",
                value: function(e) {
                    var t = this.props
                      , n = t.qrcodeRenderTo
                      , a = void 0 === n ? "captcha-qrcode" : n
                      , i = t.canFeedback
                      , r = t.language
                      , o = document.getElementsByName(a)[0]
                      , s = this.getUUIDValue();
                    if (s && o) {
                        if (f.isLandscape && window.innerHeight <= 220 || (f.isAjax && !f.isMobile || window.innerHeight <= 420) && (e.indexOf("capslidev2") > -1 || e.indexOf("scene") > -1))
                            return i ? e.indexOf("capslidev2") > -1 || e.indexOf("scene") > -1 ? (o.parentElement.style.lineHeight = "12px",
                            o.innerHTML = (["zh", "cn", "zh-cn", "zh_CN", "zh-CN"].indexOf(r) > -1 ? "反馈码" : "Code") + "：" + s) : o.innerHTML = (0,
                            f.getFeedbackLink)(s, "bx-feedback-btn", s, this.props) : o.innerHTML = s,
                            void (o.style.width = "captchacapslidev2" === e || "captchascene" === e ? "280px" : "100%");
                        if (!window.QRCode)
                            return void (o.innerHTML = i ? (0,
                            f.getFeedbackLink)(s, "bx-feedback-btn", s, this.props) : s);
                        new window.QRCode(o,{
                            text: s,
                            width: 80,
                            colorDark: "#999",
                            height: 80
                        })
                    }
                }
            }, {
                key: "mobileFix",
                value: function() {
                    var e = document.getElementsByTagName("body")[0];
                    if (e && e.style) {
                        e.style.position = "relative";
                        var t = window.innerHeight || 9999
                          , n = window.outerHeight || 9999
                          , a = window.screen && window.screen.height || 9999
                          , i = Math.min(t, n, a);
                        9999 === i ? i = "100%" : i += "px",
                        e.style.height = i
                    }
                }
            }, {
                key: "landscapeFix",
                value: function() {
                    var e = this.props.action;
                    if (window.innerHeight <= 420 && ("captchacapslidev2" === e || "captchascene" === e)) {
                        var t = document.querySelector(".copyright");
                        t && (t.style.height = "24px",
                        t.style.top = "auto",
                        t.style.bottom = "6px")
                    }
                }
            }, {
                key: "stopPropagation",
                value: function() {
                    if (f.isMobile)
                        try {
                            var e = document.getElementById("nocaptcha");
                            if (!e)
                                return;
                            e.addEventListener ? e.addEventListener("touchmove", (function(e) {
                                !function(e) {
                                    e.preventDefault(),
                                    e.stopPropagation()
                                }(e)
                            }
                            ), !1) : e.attachEvent && e.attachEvent("ontouchmove", (function() {
                                return window.event.cancelBubble = !0,
                                !1
                            }
                            ))
                        } catch (e) {
                            (0,
                            f.log)("阻止冒泡失败")
                        }
                }
            }]),
            e
        }();
        function x() {
            if (!window._bxRendered_) {
                (0,
                b.clearX5SecData)();
                var e = document.getElementsByTagName("punish-component")[0]
                  , t = function(e) {
                    var t = Object.assign({}, e || {})
                      , n = location.href.match(/action=([^&]+)/);
                    return n = n ? n[1] : "",
                    t.action && "###ACTION###" !== t.action && "###SUB_TYPE###" !== t.action && "###ACTION######SUB_TYPE###" !== t.action || (t.action = "captcha"),
                    n && ["captcha", "captchanlp", "captchavi", "captchaslide", "deny", "wait", "upgrade", "denyupgrade"].indexOf(n) > -1 && (t.action = n),
                    t.showCenterClose && !f.isMobile && (t.showCenterClose = !1),
                    t.appUpgrade && !f.isMobile && (t.appUpgrade = !1),
                    void 0 === t.canFeedback && (t.canFeedback = (0,
                    f.canFeedback)(t.action)),
                    t
                }(window._config_);
                if (e || !t.renderTemplate) {
                    if (new k(t).render(),
                    t.notReport)
                        return;
                    if (t.action && t.action.indexOf("captcha") > -1 && location.host.indexOf("bixi.alicdn") < 0)
                        try {
                            (0,
                            f.reportLoadPageAndCookieDisabled)(t)
                        } catch (e) {
                            (0,
                            f.log)("cookie禁用校验失败：" + JSON.stringify(e))
                        }
                }
                e && e.remove && e.remove(),
                window._bxRendered_ = !0
            }
        }
        t.default = k,
        "function" != typeof Object.assign && (Object.assign = function(e) {
            if (null === e)
                throw new TypeError("Cannot convert undefined or null to object");
            e = Object(e);
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null !== n)
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
        );
        try {
            window.frameElement && window.frameElement.id && window.frameElement.id.indexOf("baxia") > -1 && x()
        } catch (e) {
            console.log("页面渲染失败")
        }
        window.onload = function() {
            x()
        }
        ,
        window.sufeiPunish = {
            utils: m
        }
    },
    "./src/modules/punishpage/style/index.less": function(e, t) {},
    "./src/modules/punishpage/upgrade.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.languageConfig
                  , n = e.upgradeHeaderImage
                  , a = e.upgradeImage
                  , i = e.upgradeText
                  , s = e.upgradeUrl
                  , c = e.upgradeBtnText
                  , d = e.upgradeBtnColor;
                return (0,
                r.default)(e, '<div class="bannar app-upgrade">\n        <div class="header-img"><div id="header-inner-img" style="background-image:url(\'' + (n || "https://img.alicdn.com/tfs/TB1sgcIkWNj0u4jSZFyXXXgMVXa-154-37.png") + '\')"></div></div>\n        <img id="bg-img" src="' + (a || "https://img.alicdn.com/tfs/TB1vbn5jBFR4u4jSZFPXXanzFXa-200-200.png") + '" />\n        <div class="warnning-text" style="margin-bottom: 100px;">\n            ' + (i || t["upgrade-text"]) + "\n            \n            " + (o.isMobile ? '<a id="upgrade-btn" ' + (s ? 'href="' + s + '" ' : " ") + " " + (d ? 'style="background-color:' + d + '"' : "") + ">" + (c || t["close-btn-text"]) + "</a>" : "") + "\n        </div>\n    </div>")
            },
            render: function(e) {
                var t = encodeURIComponent(location.href.match(/uuid=([^&]+)/) && location.href.match(/uuid=([^&]+)/)[1] || e.NCTOKENSTR);
                "test" !== t && "###NCTOKENSTR###" !== t && t && ((new Image).src = "https://fourier.alibaba.com/ts?ext=24&uuid=" + t)
            }
        }
    },
    "./src/modules/punishpage/utils/i18n-captcha.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getI18nLanguage = void 0;
        var a = n("./src/modules/punishpage/utils/index.js");
        t.getI18nLanguage = function(e) {
            var t = e || navigator.language.toLocaleLowerCase()
              , n = {
                _startTEXT: "Please slide to verify",
                _yesTEXT: "Verified",
                _Loading: "Loading",
                _error300: 'Oops... something\'s wrong. Please <a href="javascript:__nc.reset()">refresh</a> and try again.',
                _errorNetwork: 'Net Err. Please <a href="javascript:__nc.reset()">refresh</a>',
                LOADING: "Loading",
                SLIDE: "Please slide to verify",
                SUCCESS: "Verified",
                ERROR: "Net Err. Please refresh",
                FAIL: "Oops... something's wrong. Please click and try again."
            }
              , i = {
                LOADING: "Loading...",
                SLIDER_LABEL: "Slide to verify",
                CHECK_Y: "Verified",
                ERROR_TITLE: "Sorry, something wrong",
                ERROR_RELOAD: "Reload",
                ERROR_FEEDBACK: "Feedback",
                SLIDE: "Slide to verify",
                SUCCESS: "Verified",
                ERROR: "Sorry, something wrong",
                FAIL: "Reload"
            }
              , r = {
                vi: "Vui lòng kéo sang phải để xác nhận",
                id: "Geser untuk verifikasi",
                th: "โปรดเลื่อนเพื่อยืนยัน",
                ms: "Sila leret untuk teruskan."
            };
            try {
                r["vi-VN"] = r.vi,
                r["id-ID"] = r.id,
                r["th-TH"] = r.th,
                r["ms-BN"] = r.ms,
                r["ms-MY"] = r.ms,
                n.SLIDE = r[t] || n._startTEXT,
                i.SLIDE = r[t] || i.SLIDER_LABEL
            } catch (e) {
                console && console.log("e")
            }
            return {
                language: t,
                languageCont: a.isMobile ? i : n
            }
        }
    },
    "./src/modules/punishpage/utils/index.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = ["captcha", "captchanlp", "captchacapslide", "captchacapslidev2", "captchascene", "deny", "denyrelogin", "denyupgrade", "wait", "block", "loginlv"]
          , r = {
            captcha: 1,
            deny: 2,
            wait: 3,
            captchanlp: 4,
            captchacapslide: 5,
            block: 6,
            denyrelogin: 7,
            denyupgrade: 8,
            captchacapslidev2: 9,
            captchascene: 9,
            loginlv: 10
        }
          , o = function(e) {
            e = e || {};
            var t = [];
            for (var n in e.data)
                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e.data[n]));
            t.push(("v=" + Math.random()).replace(".", ""));
            var a = t.join("&")
              , i = new XMLHttpRequest;
            i.onreadystatechange = function() {
                if (4 === i.readyState) {
                    var t = i.status;
                    t >= 200 && t < 300 ? e.success && e.success(i.responseText, i.responseXML, i) : e.error && e.error(t)
                }
            }
            ;
            var r = void 0;
            if (e.sign)
                try {
                    r = window.etSign && "function" == typeof window.etSign ? window.etSign("GET" === e.type ? e.url + "?" + a : e.url) : "nosgn"
                } catch (e) {
                    r = "nosgn"
                }
            "GET" === e.type ? (i.open("GET", e.url + "?" + a, !0),
            r && i.setRequestHeader("bx_et", r),
            i.send(null)) : "POST" === e.type && (i.open("POST", e.url, !0),
            r && i.setRequestHeader("bx_et", r),
            i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            i.send(a))
        }
          , s = document.documentElement || ""
          , c = document.body || ""
          , d = 320 === (s.clientHeight || c.clientHeight) || 480 === (s.clientHeight || c.clientHeight) || window.frames.length !== parent.frames.length
          , p = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.HOST
              , n = e.PATH
              , a = e.NCTOKENSTR
              , i = e.NCAPPKEY;
            try {
                "http:" === location.protocol && t.indexOf(":443") > -1 && (E("http with 443", 16, a, i, t),
                t = t.replace(":443", ""))
            } catch (e) {
                E("http with 443 err:" + JSON.stringify(e), 16, a, i, t)
            }
            return "//" + t + n
        }
          , u = function(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (t.addEventListener)
                t.addEventListener(e, n, a);
            else if (t.attachEvent)
                return t.attachEvent("on" + e, n),
                !1
        }
          , l = function(e) {
            if (d && (location.href.indexOf("_____tmd_____") > -1 || location.host.indexOf("bixi.alicdn") > -1)) {
                try {
                    window.parent.postMessage(JSON.stringify({
                        type: "child",
                        content: '{"smToken":"token","queryToken":"sm","sm":"sm"}'
                    }), "*")
                } catch (e) {
                    window.parent.postMessage('{"type":"child","content":"{\\"smToken\\":\\"token\\",\\"queryToken\\":\\"sm\\",\\"sm\\":\\"sm\\"}"}')
                }
                try {
                    window.pointman.require(["m/messenger"], (function(e) {
                        e.initListener({
                            currentWin: window,
                            originWin: window.parent,
                            msgTransfer: "fromParent"
                        }),
                        e.send({
                            type: "msg:validateSuccess@sufei",
                            content: "smToken=xxxx"
                        })
                    }
                    ))
                } catch (e) {
                    console.log("not messenger")
                }
            } else {
                if (_)
                    return window._custom_config_ && window._custom_config_.sleepSubmit || window._config_ && window._config_.sleepSubmit ? void function(e, t) {
                        t = Math.floor(1e3 * t / 2),
                        setTimeout((function() {
                            var n = document.cookie.match(/x5sec=([^;]+)/);
                            if (n && n[1]) {
                                var a = new Date;
                                a.setTime(a.getTime() + 18e5),
                                document.cookie = "x5sec=" + n[1] + ";expires=" + a.toGMTString() + ";path=/;max-age=1800"
                            }
                            setTimeout((function() {
                                e && e()
                            }
                            ), t)
                        }
                        ), t)
                    }((function() {
                        location.href = f()
                    }
                    ), window._custom_config_ && window._custom_config_.sleepTime || 2) : void (location.href = f());
                if (v)
                    return void g(e);
                sessionStorage && sessionStorage.x5referer !== location.href ? (location.replace(sessionStorage.x5referer || h()),
                sessionStorage.x5referer = "") : sessionStorage && sessionStorage.x5referer ? (sessionStorage.x5referer = "",
                location.reload()) : location.href = h()
            }
        }
          , g = function(e) {
            var t = location.search.match(/platform=([^&]+)/);
            if (t = t && t[1] || "wx",
            window[t]) {
                var n = void 0;
                ["wx", "tt"].indexOf(t) > -1 ? n = window[t].miniProgram : ["my", "dd", "ks"].indexOf(t) > -1 ? n = window[t] : ["swan"].indexOf(t) > -1 && (n = window[t].webView);
                var a = e && e.getResponseHeader("bx-x5sec");
                if (!a)
                    return n && n.postMessage({
                        data: {
                            success: !1
                        }
                    }),
                    void (n && n.navigateBack());
                var i = void 0
                  , r = void 0
                  , o = !0
                  , s = !1
                  , c = void 0;
                try {
                    for (var d, p = a.split(";")[Symbol.iterator](); !(o = (d = p.next()).done); o = !0) {
                        var u = d.value;
                        u.includes("x5sec") ? i = u.split("=")[1] : u.includes("Expires") && (r = new Date(u.split("=")[1]).valueOf())
                    }
                } catch (e) {
                    s = !0,
                    c = e
                } finally {
                    try {
                        !o && p.return && p.return()
                    } finally {
                        if (s)
                            throw c
                    }
                }
                n && n.postMessage({
                    data: {
                        success: !0,
                        token: i,
                        expire: r
                    }
                }),
                n && n.navigateBack()
            }
        }
          , h = function() {
            var e = "https://www.taobao.com"
              , t = {
                "taobao.com": "https://www.taobao.com/",
                "tmall.com": "https://www.tmall.com/",
                "aliyun.com": "https://www.aliyun.com/",
                "1688.com": "https://www.1688.com/",
                "lazada.co.id": "https://www.lazada.co.id/",
                "lazada.co.th": "https://www.lazada.co.th/",
                "lazada.vn": "https://www.lazada.vn/",
                "lazada.com.my": "https://www.lazada.com.my/",
                "lazada.sg": "https://www.lazada.sg/",
                "lazada.com.ph": "https://www.lazada.com.ph/",
                "youku.com": "https://www.youku.com/",
                "aliexpress.com": "https://www.aliexpress.com/",
                "aliexpress.ru": "https://www.aliexpress.ru/",
                "aliexpress.us": "https://www.aliexpress.us/"
            };
            for (var n in t)
                if (!(location.host.indexOf(n) < 0)) {
                    e = t[n];
                    break
                }
            return e
        }
          , f = function() {
            return location.href.indexOf("https://sec.taobao1111.com/") > -1 ? "https://sec.taobao1111.com/" : "https://sec.taobao.com/"
        }
          , m = (t.addQueryString = function(e, t, n) {
            return e.indexOf("?") > -1 ? e + "&" + t + "=" + n : e + "?" + t + "=" + n
        }
        ,
        location.href)
          , _ = m.indexOf("native=1") > -1 || m.indexOf("tmd_nc=1") > -1
          , v = !!location.search.match(/platform=([^&]+)/) || window._config_ && window._config_.isMiniprogram
          , b = navigator.userAgent.match(/.*(iPhone|iPad|Android|ios|SymbianOS|Windows Phone).*/i) || _ || v
          , y = m.indexOf("pc=1") > -1
          , w = b && "number" == typeof window.orientation ? 90 === window.orientation || -90 === window.orientation : window.innerWidth > window.innerHeight;
        u("DOMContentLoaded", window, (function() {
            var e = "number" == typeof window.orientation && "object" === a(window.onorientationchange);
            if (b) {
                var t, n = document.body.parentNode;
                u(e ? "orientationchange" : "resize", window, (function() {
                    location.reload()
                }
                )),
                t = w ? "landscape" : "portrait",
                n.setAttribute("class", t)
            }
        }
        ));
        var E = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              , n = arguments[2]
              , a = arguments[3]
              , i = arguments[4]
              , r = {
                code: t,
                msg: (e + "").substr(0, 1e3) + ";",
                pid: "sufeiPunish",
                page: location.href.split(/[#?]/)[0],
                query: location.search.substr(1),
                hash: location.hash,
                referrer: document.referrer,
                title: document.title,
                ua: navigator.userAgent
            };
            n && (r.c1 = n,
            r.c2 = a,
            r.c3 = i),
            k(r, "//gm.mmstat.com/fsp.1.1?")
        };
        function k(e, t) {
            var n = [];
            for (var a in e)
                n.push(a + "=" + encodeURIComponent(e[a]));
            (new Image).src = t + n.join("&")
        }
        function x(e) {
            var t = new Date;
            t.setTime(t.getTime() + -100);
            var n = "x5secdata=;maxAge=-100;expires=" + t.toUTCString() + ";path=/;domain=" + e + ";";
            document.cookie = n,
            document.cookie = n + "Secure;SameSite=None"
        }
        t.request = o,
        t.loadScript = function(e, t, n, a, i) {
            var r = document.createElement("script")
              , s = document.getElementsByTagName("head")[0]
              , c = !0;
            if (r.type = "text/javascript",
            r.charset = "UTF-8",
            r.src = e,
            r.crossOrigin = !0,
            a && !i) {
                var d = p(n) + "/_____tmd_____/report";
                r.onerror = function(e) {
                    o({
                        url: d,
                        type: "GET",
                        data: {
                            x5secdata: n.SECDATA,
                            type: "loadError" + a,
                            msg: a + ".js_load_error",
                            uuid: n.NCTOKENSTR
                        }
                    }),
                    c = !1,
                    r.onerror = null
                }
                ;
                var u = setTimeout((function() {
                    c && o({
                        url: d,
                        type: "GET",
                        data: {
                            x5secdata: n.SECDATA,
                            type: "loadTimeout" + a,
                            msg: a + ".js_load_timeout",
                            uuid: n.NCTOKENSTR
                        }
                    }),
                    clearTimeout(u),
                    u = null
                }
                ), 3e4)
            }
            r.addEventListener ? r.addEventListener("load", (function() {
                c = !1,
                t()
            }
            ), !1) : r.attachEvent && r.attachEvent("onreadystatechange", (function() {
                "loaded" === window.event.srcElement.readyState && (c = !1,
                t())
            }
            )),
            s.appendChild(r)
        }
        ,
        t.isAjax = d,
        t.getQueryString = function(e, t) {
            var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
              , a = e.substr(1).match(n);
            return null !== a ? unescape(a[2]) : null
        }
        ,
        t.close = l,
        t.checkCookie = function(e, t) {
            var n = setTimeout((function() {
                return l(e)
            }
            ), 5e3)
              , a = t.NCTOKENSTR
              , i = t.NCAPPKEY
              , r = t.SECDATA
              , s = t.HOST
              , c = t.PATH
              , d = p(t) + "/_____tmd_____/report"
              , u = document.cookie.match(/x5sec=([^;]+)/)
              , g = e && e.getResponseHeader("bx-x5sec");
            if (u) {
                if ((u = u[1]) !== (g = g.match(/x5sec=([^;]+)/)[1]) && (document.cookie = e.getResponseHeader("bx-x5sec"),
                (u = document.cookie.match(/x5sec=([^;]+)/)) && (u = u[1])),
                u === g)
                    return void o({
                        url: d,
                        type: "GET",
                        data: {
                            x5secdata: r,
                            type: "setCookieSuccess",
                            msg: "Set cookie success,x5sec:" + g,
                            uuid: a
                        },
                        success: function() {
                            clearTimeout(n),
                            n = null,
                            l(e)
                        },
                        error: function() {
                            clearTimeout(n),
                            n = null,
                            l(e)
                        }
                    });
                E("setCookie更新失败", 14, a, i, "" + s + c),
                o({
                    url: d,
                    type: "GET",
                    data: {
                        x5secdata: r,
                        type: "setCookieFail",
                        msg: "Set cookie fail,x5sec:" + g + ",old x5sec: " + u,
                        uuid: a
                    },
                    success: function() {
                        return l(e)
                    },
                    error: function() {
                        return l(e)
                    }
                })
            } else
                g && (document.cookie = g),
                (u = document.cookie.match(/x5sec=([^;]+)/)) || (E("setCookie写入失败", 14, a, i, "" + s + c),
                o({
                    url: d,
                    type: "GET",
                    data: {
                        x5secdata: r,
                        type: "setCookieFail",
                        msg: "Set cookie fail,x5sec:" + g.match(/x5sec=([^;]+)/)[1],
                        uuid: a
                    },
                    success: function() {
                        clearTimeout(n),
                        n = null,
                        l(e)
                    },
                    error: function() {
                        clearTimeout(n),
                        n = null,
                        l(e)
                    }
                }))
        }
        ,
        t.initReferrer = function() {
            try {
                if (localStorage && localStorage.closeReturn) {
                    var e = sessionStorage.x5referer;
                    return location.replace(e),
                    void (localStorage.closeReturn = "")
                }
                if (location.href.indexOf("_____tmd_____") > -1)
                    return;
                sessionStorage.x5referer = window.location.href
            } catch (e) {
                console.log("err")
            }
        }
        ,
        t.isMobile = b,
        t.isInNativeSdk = _,
        t.isMiniprogram = v,
        t.isPc = y,
        t.removeDom = function(e) {
            document.getElementById(e) && (document.getElementById(e).outerHTML = "")
        }
        ,
        t.addEvent = u,
        t.getSubmitPathPrefix = p,
        t.log = E,
        t.isLandscape = w,
        t.pureRender = function(e) {
            function t(e) {
                e <= 0 || window.parent.postMessage(JSON.stringify({
                    type: "msg:changeHeight",
                    content: e
                }), "*")
            }
            function n() {
                return document.getElementById(e).offsetHeight
            }
            var a = n();
            function i() {
                n() !== a && t(a = n())
            }
            t(a),
            document.addEventListener ? document.getElementById(e).addEventListener("DOMNodeInserted", i, !1) : (document.getElementById(e).addBehavior("foo.htc"),
            document.getElementById(e).attachEvent("onreadystatechange", i))
        }
        ,
        t.clearX5SecData = function() {
            try {
                if (document.cookie.indexOf("x5secdata") <= -1)
                    return;
                var e = location.host
                  , t = e.split(".")
                  , n = t.length > 5 ? 5 : t.length;
                1 !== n && 2 !== n || x(e),
                location.href.indexOf("_____tmd_____") && x("." + e),
                e = "." + t.pop();
                for (var a = 2; a < n; a++)
                    x(e = "." + t.pop() + e);
                x(e = t.pop() || "" + e)
            } catch (e) {
                console.log("x5secdata clear error")
            }
        }
        ,
        t.canFeedback = function(e) {
            return i.indexOf(e) > -1
        }
        ,
        t.getFeedbackLink = function(e, t, n, a) {
            var i = a.HOST
              , o = a.PATH
              , s = a.SECDATA
              , c = a.action
              , d = a.appUpgrade
              , p = void 0;
            if (c.indexOf("captcha") < 0 && (p = (p = location.href.match(/origin=([^&]+)/)) && decodeURIComponent(p[1]).split("?")[0]))
                try {
                    p = "https:" !== (p = new URL(p)).protocol && "http:" !== p.protocol ? null : p.href
                } catch (e) {
                    "string" != typeof p || 0 !== p.indexOf("http") ? (E("Feedback origin illegal:" + JSON.stringify(p)),
                    p = null) : p = p.replace(/&/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/'/g, "").replace(/`/g, "").replace(/javascript/g, "").replace(/iframe/g, "")
                }
            return '<a id="' + t + '" href="' + (p || "https://" + (navigator && navigator.userAgent && navigator.userAgent.indexOf("miniProgram") > -1 ? window.location.host : i) + "/" + o) + "/_____tmd_____/page/feedback?rand=S3WxGHAgAt756EpznwfNzJq2AFA2qBNla3j6EINUS8We9dazM_iKElp8DwVSHZUevpC41Bx7RzivXIj9RnZgdg" + (c.indexOf("captcha") > -1 || "loginlv" === c ? "&x5secdata=" + encodeURIComponent(s) : "&uuid=" + encodeURIComponent(n)) + "&type=" + (d ? "8" : r[c]) + '" target="_blank">' + e + "</a>"
        }
        ,
        t.reportLoadPageAndCookieDisabled = function(e) {
            var t = p(e) + "/_____tmd_____/report"
              , n = new Date;
            n.setSeconds(n.getSeconds() + 3),
            document.cookie = "bx-cookie-test=1;path=/;expires=" + n.toGMTString(),
            o({
                url: t,
                type: "GET",
                data: {
                    x5secdata: e.SECDATA,
                    type: "loadPageSuccess",
                    msg: "PunishPage load success",
                    uuid: e.NCTOKENSTR
                },
                success: function(t) {
                    if (t = JSON.parse(t || "{}"),
                    !_ && !v && t.result && "cookieDisabled" === t.result.message) {
                        var n = "";
                        n = navigator.cookieEnabled || Number(e.crossSite) ? "Third-party cookies disabled" : "Cookies disabled";
                        var a = document.getElementById(e.pureCaptcha ? "pure-bx-feedback-btn" : "bx-feedback-btn");
                        a && (a.href += "&cookieDisabled=true"),
                        o({
                            url: p(e) + "/_____tmd_____/report",
                            type: "GET",
                            data: {
                                x5secdata: e.SECDATA,
                                type: "cookiesDisabled",
                                msg: n,
                                uuid: e.NCTOKENSTR
                            }
                        })
                    }
                }
            })
        }
        ,
        t.nativeReport = function(e, t) {
            if (_ && lib && lib.mtop) {
                var n = e.PATH
                  , a = e.SECDATA
                  , i = e.NCTOKENSTR
                  , r = e.NCAPPKEY;
                try {
                    var o = n.split("/")
                      , s = o && o[2];
                    if (!s)
                        return void E("mtop api解析失败: PATH=" + n);
                    lib.mtop.request({
                        api: s,
                        v: "_____tmd_____/sdrp?x5secdata=" + encodeURIComponent(a) + "&ts=" + t,
                        H5Request: !1,
                        WindVaneRequest: !0,
                        ecode: 0
                    }).then((function(e) {
                        E("report success", 15, i, r)
                    }
                    ), (function(e) {
                        E(JSON.stringify(e), 15, i, r)
                    }
                    ))
                } catch (e) {
                    E(JSON.stringify(e), 15, i, r)
                }
            }
        }
    },
    "./src/modules/punishpage/vi.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        var s = o.isMobile ? "h5" : o.isAjax ? "mini" : "pc";
        function c() {
            return "h5" === s || "pc" === s
        }
        t.default = {
            template: function(e) {
                return c() ? "" : (e.logo = "",
                window.addEventListener("message", (function(e) {
                    e.data && e.data.indexOf("smToken") > -1 && (0,
                    o.close)()
                }
                )),
                (0,
                r.default)(e, ' <div class="bannar">\n      <iframe class="iframe-box" src="' + function(e) {
                    var t = (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/viverify?entrance=" + s + "&x5secdata=" + e.SECDATA + "&x5step=100";
                    return (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/viurl?entrance=" + s + "&x5secdata=" + e.SECDATA + "&bxOriginalUrl=" + encodeURIComponent(t)
                }(e) + '" />\n    </div>'))
            },
            render: function(e) {
                if (c()) {
                    if (location.href.indexOf("jumpReturn=true") > -1)
                        return (0,
                        o.close)();
                    var t = (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/viverify?entrance=" + s + "&x5secdata=" + e.SECDATA + "&originalUrl=" + encodeURIComponent((0,
                    o.addQueryString)(window.top.location.href, "jumpReturn", "true"));
                    window.top.location.replace((0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/viurl?entrance=" + s + "&x5secdata=" + e.SECDATA + "&bxOriginalUrl=" + encodeURIComponent(t))
                }
            }
        }
    },
    "./src/modules/punishpage/wait.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(n("./src/modules/punishpage/base-template.js"))
          , i = n("./src/modules/punishpage/utils/index.js")
          , r = o(n("./src/modules/punishpage/pureDenyWait.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            template: function(e) {
                var t = e.isMobile
                  , n = e.languageConfig
                  , o = e.uuid
                  , s = e.uuidOrigin
                  , c = e.customImage
                  , d = e.pureDenyWait
                  , p = document.referrer;
                return p.indexOf("___tmd___") > -1 && (p = ""),
                d ? r.default + '<div id="wait">\n          <img src="https://img.alicdn.com/imgextra/i1/O1CN01Zg3rez1QDwJCJn4Js_!!6000000001943-55-tps-14-14.svg">\n          <div class="deny-text">' + (n["wait-pure-tips"] || n["wait-h5-tips"]) + (0,
                i.getFeedbackLink)(n["feedback-link"], "pure-bx-feedback-btn", s, e) + "</div>\n      </div>" : (0,
                a.default)(e, '<div class="bannar">\n        <img id="bg-img" src="' + c + '" />\n        <div class="warnning-text" style="margin-bottom: 100px;">\n            ' + n["wait-h5-tips"] + "\n            " + (e.showCenterClose ? '<p style="text-align:center;margin-top: 10px;"><a  class="btn-submit-close" id="js-btn-submit-close" href="javascript:void(0)">' + n["close-btn-text"] + "</a>\n            </p>" : "") + '\n            <p class="p-uuid-tips">' + (!t && o ? o : "") + "</p>\n            " + (t || !p || i.isAjax ? "" : '<a class="back-referrer" href=' + p + "><img class='back-up-img' src='https://img.alicdn.com/tfs/TB1AWGWD1L2gK0jSZFmXXc7iXXa-200-200.png' />" + n["previous-page"] + "</a>") + "\n        </div>\n    </div>")
            },
            render: function(e) {
                e.pureDenyWait && (0,
                i.pureRender)("wait")
            }
        }
    },
    4: function(e, t, n) {
        e.exports = n("./src/modules/punishpage/index.js")
    }
});
