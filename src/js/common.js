
import $ from 'jquery';
import { isEmpty, isEqual, isUndefined, isFunction, isObject, template, contains, toArray } from 'lodash';
const moment = require('moment');
const date = new Date();

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname;

    if (/http/i.test(window.location.protocol) && window.location.port && window.location.port != 80) {
        window.location.origin += ":" + window.location.port;
    } else if (/https/i.test(window.location.protocol) && window.location.port && window.location.port != 443) {
        window.location.origin += ":" + window.location.port;
    }
}

if (!window.console || !window.console.log) { window.console = { log : function() {} }}
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(word){
        return this.indexOf(word) === 0;
    };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(word) {
        var endIndex = this.length - word.length;
        return this.indexOf(word) === endIndex
    };
}

var env = {
    "profile": window.location.href.indexOf("teddy10.comPop") > 0 ? "production" : "development",
    "contextPath": ""
};

/** 태그 명 가져오기 플러그인 */
$.fn.tagName = function() { return this.prop('tagName') };

/** 아이디 가져오기 플로그인 */
$.fn.id = function() { return this.attr('id') };

/** 보임 여부 */
$.fn.isShow = function() { return this.is(':visible') };

/** disabled 플러그인 */
$.fn.disabled = function(isDisabled) { return this.prop('disabled', isDisabled === undefined ? true : isDisabled) };
$.fn.enabled = function(isEnabled) { return this.prop('disabled', isEnabled === undefined ? false : !isEnabled) };
/** checked 플러그인 */
$.fn.checked = function(isChecked) { return this.prop('checked', isChecked === undefined ? true : isChecked); };
/** readonly 플러그인 */
$.fn.readonly = function(isReadonly) { return this.prop('readonly', isReadonly === undefined ? true : isReadonly); };
/** jquery 인스턴스 존재여부 확인 */
$.fn.exists = function() { return this.length > 0 };
/** jquery 자식을 가지고 있는 지 여부 존재여부 확인 */
$.fn.hasChild = function() { return this.children().length > 0 };
$.fn.notChild = function() { return this.children().length <= 0 };
/** jquery 클래스 추가/삭제 */
$.fn.addClassEx = function(className) { return (!this.hasClass(className)) ? this.addClass(className) : this };
$.fn.removeClassEx = function(className) { return (this.hasClass(className))  ? this.removeClass(className) : this };
/** jquery 객체 offset 값 조회 */
$.fn.offsetTop    = function() { var offset = this.offset(); return offset && offset.top };
$.fn.offsetLeft   = function() { var offset = this.offset(); return offset && offset.left };
$.fn.offsetBottom = function() { var top = this.offsetTop();   return isNaN(top)? undefined : top + this.outerHeight() };
$.fn.offsetRight  = function() { var left = this.offsetLeft(); return isNaN(left)? undefined : left + this.outerWidth() };
$.fn.posTop    = function() { var pos = this.position(); return pos && pos.top };
$.fn.posLeft   = function() { var pos = this.position(); return pos && pos.left };
$.fn.posBottom = function() { var top = this.posTop();   return isNaN(top)? undefined : top + this.outerHeight() };
$.fn.posRight  = function() { var left = this.posLeft(); return isNaN(left)? undefined : left + this.outerWidth() };
/** jquey val() 이 null 이면 빈값 또는 기본값 */
$.fn.valEx = function() { return cmm.getOr(this.val(), cmm.getOrEmpty(arguments[0])) };
/** jquery data() 를 문자열로 반환 */
$.fn.dataString = function(name) { var data = this.data(name); return data == null ? data : String(data); }
$.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});

window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted ||
        ( typeof window.performance != "undefined" &&
    window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});

$(document).ready(function () {
    // 해더 및 플로팅 버튼 영역
    // hdFix();

    //셀렉트 콤보 선택 이벤트
    selectcomPopbo();

    // 인풋 이벤트
    inputEv();

    // 아코디언 메뉴 이벤트 : 20210903 최상림
    accordionEv();

    // input only number
    allowOnlyNumber('input.onlynumber');

    // 팝업창 닫기 터치 이벤트
    $(document).on('click', '.popup-container .popup-close, .popup-container .popup-btn-continue, .popup-container .alert-popup-bg', function () {
        var _this = $(this);
        if (!_this.hasClass('btn-not-close')) {
            var id = _this.closest('.popup-container')[0].id;
            popClose(id);
        }
    });

    // 경고 팝업창 닫기 터치 이벤트
    $(document).on('click', '.alert-container .popup-close, .alert-container .alert-btn-continue, .alert-container .alert-btn-close, .alert-container .alert-popup-bg', function () {
        var id = $(this).closest('.alert-container').attr('id');

        if ($(this).hasClass("bg-not-close")) {
            return false;
        } else {
            alertClose(id);
        }
    });

    /*
    $(window).resize(function () {
        // 해더 및 플로팅 버튼 영역
        hdFix();
    });
    */

    $('input[type="text"]').attr('autocomPopplete', 'off');
    $('input[type="tel"]').attr('autocomPopplete', 'off');
});


// 공통 팝업 함수
export const comPop = () => {};

/** 메세지창 호출 함수 */
comPop.msg = {
    warn: function (message, callback) {
        comPop.msg._show({
            iconCls: 'warning',
            message: message
        }, callback);
    },

    info: function (message, callback) {
        comPop.msg._show({
            message: message
        }, callback);
    },

    confirm: function (message, callback) {
        comPop.msg._show({
            message: message,
            msgType: 'confirm',
            okButtonText: '예',
            cancelButtonText: '아니오',
        }, callback);
    },

    confirmMain: function (message, callback) {
        comPop.msg._show({
            message: message,
            msgType: 'confirm',
            okButtonText: '메인으로',
            cancelButtonText: '계속하기',
        }, callback);
    },

    _show: function (htmlOpts, callback) {
        var $msg = $(comPop.msg.getHtml(htmlOpts)).appendTo('body');

        comPop.msg.bindEvent($msg, callback);

        $msg.css('display', 'flex');

        setTimeout(function () {
            $msg.find('.alert-popup-bg').stop().animate({'opacity': 1}, 200);
            $msg.find('.alert-wrap').addClass('move');
        });

        $('html').addClass('alert-open');
    },

    /**
     * @param opts
     * {
     *   title: '제목'
     *   iconCls: 'warning' or 'notice'
     *   message: '내용'
     *   okButtonText: '확인'
     *   cancelButtonText: '취소'
     *   msgType: 'alert' or 'confirm'
     * }
     */
    getHtml: function (opts) {
        opts = $.extend({
            title: '알려드립니다',
            iconCls: '',
            message: '',
            okButtonText: '확인',
            cancelButtonText: '',
            msgType: 'alert'
        }, opts);

        var html = '';

        html += '<div class="alert-container">';
        html += '    <div class="alert-popup-bg"></div>';
        html += '    <div class="alert-wrap">';
        html += '        <div class="alert-content">';
        html += '            <p>' + opts.message + '</p>';
        html += '        </div>';
        html += '        <div class="alert-btn">';
        if (opts.msgType === "confirm") {
            html += '				<button type="button" class="alert-btn-confirm"><span>' + opts.okButtonText + '</span></button>';
            html += '				<button type="button" class="alert-btn-continue"><span>' + opts.cancelButtonText + '</span></button>';
        } else {
            html += '				<button type="button" class="alert-btn-continue"><span>' + opts.okButtonText + '</span></button>';
        }
        html += '        </div>';
        html += '    </div>';
        html += '</div>';

        return template(html)(opts);
    },

    bindEvent: function ($alertBox, callback) {
        var closeAction = function () {
            setTimeout(function () {
                $alertBox.find('.alert-popup-bg').stop().animate({'opacity': 0}, 200, function () {
                    $alertBox.stop().remove();
                    if (!$('.alert-container').is(':visible')) $('html').removeClass('alert-open');
                });
                $alertBox.find('.alert-wrap').removeClass('move');
            }, 0);
        };

        $alertBox.find('.alert-btn-continue').on('click', function () {
            closeAction();

            if (typeof callback === 'function') {
                callback(false);
            }
        });
        $alertBox.find('.alert-btn-confirm').on('click', function () {
            closeAction();

            if (typeof callback === 'function') {
                callback(true);
            }
        });
        $alertBox.find('.alert-popup-bg').on('click', function () {
            closeAction();

            if (typeof callback === 'function') {
                callback(false);
            }
        });
    }    
}
    
/** 원데이고도화 팝업 함수 오브젝트 */
comPop.popup = {
    /** 팝업 로드한다 */
    load: function (url, popSelector, comPoppleted) {

        cmm.assert(!url, 'url를 입력해주세요. \nfunction(url, popSelector, comPoppleted)')
        cmm.assert(!popSelector, 'popSelector를 입력해주세요. \nfunction(url, popSelector, comPoppleted)')


        $('<div></div>').appendTo('body').load(url, function () {

            //popupInit(popSelector);

            if (typeof comPoppleted === 'function') {
                comPoppleted();
            }
        });

        return comPop.popup;
    },

    /** 팝업 오픈 */
    open: function (popId) {
        if (isEmpty(popId) || $('#' + popId).length == 0) {
            console.error('팝업이 존재하지 않습니다.' + popId);
            return;
        }

        // layerPopupFn.openFn(popId);
        popOpen(popId);

        return comPop.popup;
    },

    /** 팝업 클로즈 */
    close: function (popId) {

        // layerPopupFn.closeFn(popId);
        popClose(popId);

        return comPop.popup;
    },

    /** 팝업 레이어의 data 에 params 함수 등록 */
    params: function (fn, params) {

        if (typeof fn !== 'function') {
            console.log('params 수신할 function이 없습니다');
        } else {
            fn(params);
        }

        return comPop.popup;
    },

    /** 팝업 레이어의 data 에 callback 함수 등록 */
    callback: function (popId, callback) {

        $('#' + popId).data('callback', callback);

        return comPop.popup;
    },

    /** 팝업 레이어의 콜백함수를 로드하여 호출한다 */
    invokeCallback: function (popId, data) {
        var callback = $('#' + popId).data('callback');

        if (typeof callback !== 'function') {

            console.log('#' + popId + '에 콜백이 등록되지 않았습니다');
        } else {

            callback(data);
        }


        return comPop.popup;
    },

    /**
     * 윈도우 팝업의 센터 포지션 및 크기를 가져온다
     * @return {
     *   width: 가로
     *   height: 세로
     *   left: x좌표
     *   top: y좌표
     * }
     * */
    getWindowPopupRect: function (width, height) {
        var screenLeft = window.screenLeft ? window.screenLeft : window.screenX;
        var screenTop = window.screenTop ? window.screenTop : window.screenY;

        var windowWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : Screen.width;
        var windowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : Screen.height;


        return {
            width: width,
            height: height,
            left: (windowWidth - width) / 2 + screenLeft,
            top: (windowHeight - height) / 2 + screenTop
        };
    },


    /**
     * 윈도우 팝업을 오픈한다.
     * @param options
     * {
     * 	toolbar: 툴바 표시여부(false)
     * 	menubar: 메뉴바 표시여부(false)
     * 	location: 주소창 표시여부(false)
     * 	scrollbars: 스크롤바 표시여부(false)
     * 	status: 하단 상태바창 표시여부(false)
     * 	resizable: 창 크기 변경 사용여부(false)
     * 	fullscreen: 전체화면 사용여부(false)
     * 	channelmode: F11키 기능 사용여부(false)
     * 	dependent: 부모 윈도우에 종속된 윈도우 여부(false)
     * 	width: 가로크기
     * 	height: 세로크기
     * }
     * @param 윈도우 팝업 객체
     */
    openWindowPopup: function (popupName, url, options) {


        options = $.extend({
            toolbar: false,
            menubar: false,
            location: false,
            scollbars: false,
            status: false,
            resizable: false,
            dependent: false,
            width: 900,
            height: 600
        }, options);

        var rect = comPop.popup.getWindowPopupRect(options.width, options.height);

        options = $.extend(options, rect);

        var arrOption = [];

        for (var key in options) {

            var value = options[key];

            if (typeof value === 'boolean') {
                value = value ? 'yes' : 'no';
            } else if (typeof value === 'number') {
                value = Math.floor(value);
            }

            arrOption.push(key + '=' + value);
        }

        return window.open(url, popupName, arrOption.join(','));
    }
};
    
export var Accordion = function (el, multiple, unbind) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    if (unbind) links.unbind('click');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
}
Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    var $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
    ;
}

// 팝업창 열기
var popTrigger, popTimeout;
export function popOpen(id) {
    if (popTrigger) return false;
    popTrigger = true;

    var pop = $('#' + id);
    if (pop.hasClass("popup-container") && pop.hasClass("layer-popup-type") && !pop.hasClass("layer-popup-type2") || pop.hasClass("notification-popup")) {
        $("html").addClass("not-hidden");
    }
    if (pop.hasClass("not-hidden") == true) {
        $("html").addClass("not-hidden");
    }

    pop.addClass('view');

    var scrTop = $(window).scrollTop();
    $('html').attr('data-scr-top', scrTop);

    // 팝업이 슬라이드 팝업 and 중간 높이 팝업일 경우
    if (pop.hasClass('layer-popup-type') && !pop.hasClass('layer-popup-type2')) {
        pop.find('.popup-wrap').css({bottom: -pop.find('.popup-wrap').outerHeight()});
    }

    setTimeout(function () {
        pop.find('.alert-popup-bg').stop().animate({'opacity': 1}, 400);
        pop.find('.popup-wrap').addClass('move');
    });

    // 바닥 페이지 플로팅 버튼 숨기기
    $('.ground-btm').each(function () {
        var _this = $(this);
        var parentPop = _this.closest('.popup-container');
        if (parentPop.length == 0) {
            _this.addClass('hidden-ground');
        }
    });

    clearTimeout(popTimeout);
    popTimeout = setTimeout(function () {
        $('html').addClass('pop-open');
        popTrigger = false;
    }, 400);
}

// 팝업창 닫기
export function popClose(id) {
    if (popTrigger) return false;
    popTrigger = true;

    var pop = $('#' + id);
    if (pop.hasClass("popup-container") && pop.hasClass("layer-popup-type") && !pop.hasClass("layer-popup-type2") || pop.hasClass("notification-popup")) {
        $("html").removeClass("not-hidden")
    }
    if (pop.hasClass("not-hidden") == true) {
        $("html").removeClass("not-hidden")
    }

    pop.find('.alert-popup-bg').stop().animate({'opacity': 0}, 400);
    pop.find('.popup-wrap').removeClass('move');

    if ($('.popup-container:visible').length == 1) {
        $('html').removeClass('pop-open');

        var scrTop = $('html').attr('data-scr-top') ? parseInt($('html').attr('data-scr-top'), 10) : 0;
        $('html, body').stop().animate({scrollTop: scrTop}, 0);
        $('html').attr('data-scr-top', 0);
    }

    // 바닥 페이지 플로팅 버튼 보이기
    $('.ground-btm.hidden-ground').removeClass('hidden-ground');

    clearTimeout(popTimeout);
    popTimeout = setTimeout(function () {
        pop.removeClass('view');
        popTrigger = false;
    }, 400);
}
    
/*  String prototype  */
String.prototype.left = function(size) {
    if (this.length < size) return String(this);

    return this.substring(0, size);
};

String.prototype.right = function(size) {
    if (this.length < size) return String(this);

    return this.substring(this.length - size, this.length);
};

String.prototype.mid = function(start, size) {
    if (this.length < (start + size)) return String(this);

    return this.substring(start, start + size);
};

String.prototype.lpad = function(size, letter) {
    if(this.length >= size) return String(this);

    return Array(size - this.length + 1).join(letter||' ') + String(this);
};

String.prototype.rpad = function(size, letter) {
    if(this.length >= size) return String(this);
    return String(this) + Array(size - this.length + 1).join(letter||' ');
};
    
/* //String prototype  */
/* Number prototype  */
Number.prototype.lpad = function(size, letter) {
    var str = String(this);
    return str.lpad(size, letter);
};

Number.prototype.rpad = function(size, letter) {

    var str = String(this);

    return str.rpad(size, letter);
};
/*//Number prototype  */
    
/** 공통 함수 오브젝트 */
export var cmm = {
    regexSpWord: /[`~!@#$%^&*|\\\'\";:\/?]/gi,

    url  : function(aUrl) {
        return aUrl;
    },

    /** 페이지 이동 */
    goTo : function(url) {
        dimOpen();
        cmm.openLoading();
        window.location.href = url;
    },

    left : function(str, length) {
        return (typeof str !== 'string') ? str : str.left(length);
    },
    right : function(str, length) {
        return (typeof str !== 'string') ? str : str.right(length);
    },
    /**
     * 주민번호를 파싱해서 생년월일(8자리), 내/외국인(1:내,2:외), 성별(1:남,2:여)
     * @return
     * {
     *   sBirthDay
     *   sGender
     *   sForeigner
     * }
     *
     */
    parseCustNo: function(custNo) {
        var str = onlyNum(custNo);

        if (!str || str.length < 7) {
            //console.warn('입력된 주민번호의 최소 자리수는 7자리입니다 - ' + custNo);
            return;
        }

        var piece1 = str.left(6);
        var piece2 = str.mid(6, 1);
        var birthYear;
        var gender;
        var foreigner;

        switch(piece2) {
            case '9': birthYear = '18'; gender = '1'; foreigner = '1'; break;
            case '0': birthYear = '18'; gender = '2'; foreigner = '1'; break;
            case '1': birthYear = '19'; gender = '1'; foreigner = '1'; break;
            case '2': birthYear = '19'; gender = '2'; foreigner = '1'; break;
            case '3': birthYear = '20'; gender = '1'; foreigner = '1'; break;
            case '4': birthYear = '20'; gender = '2'; foreigner = '1'; break;
            case '5': birthYear = '19'; gender = '1'; foreigner = '2'; break;
            case '6': birthYear = '19'; gender = '2'; foreigner = '2'; break;
            case '7': birthYear = '20'; gender = '1'; foreigner = '2'; break;
            case '8': birthYear = '20'; gender = '2'; foreigner = '2'; break;
            default: break;
        }

        return {
            sBirthDay : birthYear + piece1,
            sGender : gender,
            sForeigner: foreigner
        };
    },

    trim : function(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/^\s+/, '').replace(/\s+$/, '')
    },

    changeStr : function(str, separator, changeStr) {
        if (typeof str !== 'string') return str;
        var arrStr = str.split(separator);
        var returnStr = "";
        for( var i = 0; i < arrStr.length ; i++){
            returnStr += arrStr[i]+changeStr;
        }
        return returnStr
    },

    removeSpWord: function(str) {
        if (typeof str !== 'string') return str;
        return str.replace(cmm.regexSpWord, '')
    },

    getOr : function(value, def) {
        return value == null ? def : value;
    },

    getOrEmpty : function(value) {
        return cmm.getOr(value, "");
    },

    ifEmpty : function(value, def) {
        return value == null || value == '' ? def : value;
    },

    getFullBirthday : function(birthday) {
        if (typeof birthday !== 'string') return '';

        var str = onlyNum(birthday);

        if (str.length < 6 || str.length == 8) return birthday;

        var pre = Number( str.left(2) ) <= Number( moment().format('YY') ) ? '20' : '19';

        return pre + str;
    },

    getBirthday : function(birthday) {
        if (typeof birthday !== 'string') return '';

        var str = onlyNum(birthday);

        if (str.length <= 6) return birthday;

        return str.substring(2);
    },

    /**
     * 생년월일로 만나이 계산
     * @param birthday
     * @return 만나이
     */
    getAge : function(birthday) {
        return date.betweenYears(birthday, date.now());
    },

    /**
     * 생년월일로 만나이 계산
     * @param birthday
     * @param baseDate 기준일
     * @return 만나이
     */
    getAgeByInput : function(birthday, baseDate) {
        return date.betweenYears(birthday, baseDate);
    },

    /**
     * 생년월일로 보험나이 계산
     * @param birthday
     * @param baseDate 기준일
     * @return 보험나이
     */
    getInsuranceAge : function(birthday) {

        var crrDt = date.now('YYYYMMDD');
        var birth_dd = birthday.substring(6,8);
        var curr_dd = crrDt.substring(6,8);

        var age = parseInt(cmm.gfnGetPassMonths(birthday , crrDt) / 12);
        var MonthGap = cmm.gfnGetPassMonths(birthday , crrDt) % 12 ;

        if(MonthGap > 6 || MonthGap == 6 && (parseInt(curr_dd) >= parseInt(birth_dd))) {
            age = age + 1 ;
        }

        return age;
    },

    gfnGetPassMonths: function(yyyymmdd1, yyyymmdd2) {

        if( yyyymmdd1.length != 8 ) {
            return 0;
        } else if( yyyymmdd2.length != 8 ) {
            return 0;
        } else if (yyyymmdd1 >= yyyymmdd2) {
            return 0;
        }

        var totalMonths = 0;
        var yyyy1 = yyyymmdd1.substring(0,4);
        var mm1 = yyyymmdd1.substring(4,6);
        var yyyy2 = yyyymmdd2.substring(0,4);
        var mm2 = yyyymmdd2.substring(4,6);

        if (yyyy1 <= yyyy2) {
            totalMonths += (parseInt(yyyy2) - parseInt(yyyy1)) * 12;
            if (mm1 <= mm2) {
                totalMonths += parseInt(mm2) - parseInt(mm1);
            }else {
                totalMonths -= parseInt(mm1) - parseInt(mm2);
            }
        }

        return 	totalMonths;
    },

    /**
     * 전화번호를 3개로 분리한다.
     * @return 배열
     * */
    parsePhone: function(phone) {
        //return fmt.phone(phone).split('-');
    },

    assert : function(flag, errorMsg) {
        if (flag) {
            alert(errorMsg + '\n\n콘솔 로그를 확인해주세요');
            throw errorMsg;
        }
    },

    isOpenLoading : function() {

        var $loading = $('#loading');

        if ($loading.length <= 0) {

            var html = '<div id="loading"><div class="loading-bar"><div class="dot_box"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div></div>';
            // var mz_html = '<div id="loading"><div class="q-loading fullscreen flex flex-center z-max"><div class="q-loading__backdrop bg-transparent"></div><div class="q-loading__box column items-center "><svg class="q-spinner text-blue q-spinner-mat q-loading__spinner" width="40" height="40" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg></div></div></div>';
            // var html = '<div id="loading"><div class="q-loading fullscreen flex flex-center z-max"><div class="q-loading__backdrop bg-transparent"></div><div class="q-loading__box column items-center "><svg class="q-spinner text-blue q-loading__spinner" width="40" height="40" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g></svg></div></div></div>';
            // var html = '<div id="loading" class="loadingWrap"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>';

            $(html).appendTo('body');

            return false;
        } else {
            return $loading.is(':visible');
        }
    },

    openLoadingCnt : 0,

    openLoading : function() {
        cmm.openLoadingCnt++;

        console.log('openLoading() - ' + cmm.openLoadingCnt);

        if (cmm.openLoadingCnt === 1 && !cmm.isOpenLoading()) {
            console.log('openLoading() -> open');
            //$('#loading').stop().fadeIn(100);
            $('html').addClass('now-loading');
            $('#loading').stop().show();
        }
    },

    closeLoading : function() {
        cmm.openLoadingCnt--;
        if (cmm.openLoadingCnt < 0) cmm.openLoadingCnt = 0;

        console.log('closeLoading() - ' + cmm.openLoadingCnt);

        if (cmm.openLoadingCnt === 0 && cmm.isOpenLoading()) {
            console.log('closeLoading() -> close');
            //$('#loading').stop().fadeOut(100);
            $('html').removeClass('now-loading');
            $('#loading').stop().hide();
        }
    } ,

    birthSSNConvert : function(vBirth , vSex){

        if(isUndefined(vBirth)) return '';

        var birthDate = vBirth.substring(2);
        var birthYear = vBirth.substring(0, 2);

        if (birthYear <= "19") {
            if (isEqual(vSex , "M")  ) {
                vSex = "1";
            } else if (isEqual(vSex , "F")) {
                vSex = "2";
            }
        } else {
            if (isEqual(vSex , "M")) {
                vSex = "3";
            } else if (isEqual(vSex , "F")) {
                vSex = "4";
            }
        }
        return birthDate + vSex + "000000";
    },


    isTrue : function(value) {

        switch(typeof value) {
            case 'boolean': return value;
            case 'string' : return /(Y|true|ok|yes)/i.test( value );
            default: return false;
        }
    },
    isFalse : function(value) { return ! cmm.isTrue(value); },

    /** 텍스트 입력창 엔터 키 이벤트 바인딩 */
    onEnterKeyPressed : function(selector, listener) {
        $(selector).off('keypress.enterkey').on('keypress.enterkey', function(e) {
            if (e.keyCode === 13) {
                if (typeof listener === 'function') {
                    listener();
                }
            }
        });
    },

    /**
     * /download/prd?instype=2100&type=agree&spctype=0&fmdt=20190131
     * @param selector
     * @param parameters 하단 - 보험상품 링크
     * 	 insType: (필수)보종코드
     type (필수) 파일타입 - agree:상품약관, workway:사업방법서, product:상품요약서, leaflet:리플릿, info:가입안내, guaran:보장내용, subs:가입예시
        fmDt: (선택)보험시기
        spcType: (선택)공동물건 - 자보는 필수(0: 일반, 1: 공동)
        */
    bindLink : function(selector, url, parameters) {
        var queryString;
        if (!isEmpty(parameters)) {
            queryString = $.param(parameters)
        }

        if (queryString) {
            url = url + '?' + queryString;
        }

        $(selector).attr('href', url);
    },

    /*
        * 확인버튼이 있는 약관팝업
        * */
    bindPdfViewerLink : function(selector, url, parameters) {
        var queryString;

        if (!isEmpty(parameters)) {
            queryString = $.param(parameters)
        }

        if (queryString) {
            url = url + '?' + queryString;
        }

        var encodePdfUrl = encodeURIComponent(url);
        var pdfViewerURL = '/static/pdfViewer/web/viewerHoneQ.html?file='+encodePdfUrl;

        $(selector).attr('href', pdfViewerURL);
        $(selector).attr('target', '_blank');

    },

    /**
     * options {
     *   target: selector
     *   number
     *   duration: (선택) 기본 1850
     *   format: (선택)
     *   comPopplete: (선택)
     * }
     */
    numberAnimate : function(options) {
        var self = this;
        var $e1 = $(options.target);

        var duration = isNaN(options.duration) ? 1850 : options.duration;

        var format = isFunction(options.format) ? options.format : function(value) { return value };

        $({val:0}).stop().animate({val: options.number},{

            duration:duration,
            step:function(){
                $e1.text( format( this.val.toFixed(1) ) );
            },
            comPopplete:function(){
                $e1.text( format( this.val.toFixed(1) ) );
                if (typeof options.comPopplete === 'function') options.comPopplete.call(self);
            }
        });
    },

    setCookie : function(cname, cvalue, exdays, path) {
        if(!path) path = '/';
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        // chrome80의 쿠키 정책 변경으로 cookieTail은 필수로 붙인다.
        var cookieTail = ";SameSite=None;Secure";
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + path + cookieTail;
    },

    getCookie : function(cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
    },

    getByte : function(str, num){
        var len       = str.length;// 현재 value값의 글자 수
        var byteCnt   = 0;         // 한글일 경우 2 그외에는 1바이트 수 저장
        var chkEscape = "";        // 현재 한/영 체크할 letter를 저장
        var subCnt    = 0;         // substring 할때 사용할 제한 길이를 저장

        var result = {
            byteLen : 0,
            subStr : str
        };

        for (var i = 0; i < len; i++) {
            chkEscape = str.charAt(i);// 1글자만 추출

            // 체크문자가 한글일 경우 2byte 그 외의 경우 1byte 증가
            if (escape(chkEscape).length > 4) {
                byteCnt += 2;// 한글인 경우 2byte
            } else {
                byteCnt++;   // 그외의 경우 1byte
            }

            //전체 크기가 제한 글자 수를 넘지 않으면
            if (byteCnt <= num) {
                // 제한할 문자까지의 count값을 subCnt에 누적
                subCnt = i + 1;
            }
        }

        result.byteLen = byteCnt;

        // 전체 크기가 제한 글자 수를 넘으면
        if (byteCnt > num) {
            // 글자 자르기
            //	result.subStr = str.substring(0, subCnt);
            return false;
        }
        //return result;
        return true;
    },

    // 자동차 산출기 사용
    getWebLogRenewTag: function(){
        //추후 관리 태그가 늘어날 경우 태그 제네레이터를 설계한다.
        //if(isEqual(Global.step02Info.s1.sNewCarCalcu , "N")){
        //   console.log("갱신웹로그태그 히트");
        //    return '?tgRenew=RE';
        //}else{
        //    return '';
        //}
    },

    // [2020.02.10 추가] pdf viewer comPopmon
    transPdfViewerURL: function(url){
        var encodePdfUrl = encodeURIComponent(url);
        var pdfViewerURL = '/static/pdfViewer/web/viewer.html?file=';
        return pdfViewerURL + encodePdfUrl;
    },// [2020.02.10 추가] pdf viewer comPopmon end

    // [2020.01.31 추가] 브라우저 별 파일업로드 방식 변경
    /**
     * IE 버전 조회
     * @return IE 또는 edge 버전을 반환한다(그 외 브라우저는 -1 반환)
     */
    getIEVersion: function() {
        var word;
        var agent = navigator.userAgent.toLowerCase();

        if (navigator.appName == 'Microsoft Internet Explorer') word = 'msie ';

        else if (agent.search('trident') > -1) word = 'trident/.*rv:';

        else if (agent.search('edge/') > -1) word = 'edge/';

        else return -1;

        var reg = new RegExp( word + '([0-9]{1,})(\\.{0,}[0-9]{0,1})');

        if (reg.exec(agent) != null) return parseFloat( RegExp.$1 + RegExp.$2 );

        return -1;
    }, // [2020.01.31 추가] end

    addcomPopma : function(value) { // 문자열을 3자리 단위의 숫자 형식으로 콤마 추가하여 문자열을 만든다.
        var _amount = value.toString().split('.');
        var _integer = _amount[0];
        var _decimal = _amount.length > 1 ? '.' + _amount[1] : '';
        var _regex = /(^[+-]?\d+)(\d{3})/;
        while (_regex.test(_integer)) {
            _integer = _integer.replace(_regex, '$1' + ',' + '$2');
        }
        return _integer + _decimal;
    },

    // 경단위 까지 사용 가능
    numberToKorean : function(number) {
        var inputNumber = number < 0 ? false : number;
        var unitWords = [ '', '만', '억', '조', '경' ];
        var splitUnit = 10000;
        var splitCount = unitWords.length;
        var resultArray = [];
        var resultString = '';

        for (var i = 0; i < splitCount; i++) {
            var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
            unitResult = Math.floor(unitResult);

            if (unitResult > 0) {
                resultArray[i] = unitResult;
            }
        }

        for (var i = 0; i < resultArray.length; i++) {
            if (!resultArray[i]) continue;
            resultString = cmm.addcomPopma(String(resultArray[i])) + unitWords[i] + resultString;
        }

        return resultString + '원';
    }
};

// 스크롤 이동
export var scrTo = function (pos, time) {
    var _time = time ? time : 0;
    $('html, body').stop().animate({scrollTop: pos}, _time);
}

// 화면 클릭 방지를 위한 딤 처리 열기
export function dimOpen() {
    $('body').append('<div class="dim-full"></div>');
}

// 화면 클릭 방지를 위한 딤 처리 닫기
export function dimClose(){
    $('.dim-full').remove();
}

// 경고 팝업창 열기
var alertTrigger, alertTimeout;
export function alertOpen(id, msg) {
    if (alertTrigger) return false;
    alertTrigger = true;

    var pop = $('#' + id);
    pop.css('display', 'flex');
    if (msg) pop.find('.alert-content p').html(msg);

    setTimeout(function () {
        pop.find('.alert-popup-bg').stop().animate({'opacity': 1}, 200);
        pop.find('.alert-wrap').addClass('move');
    });

    $('html').addClass('alert-open');

    clearTimeout(alertTimeout);
    alertTimeout = setTimeout(function () {
        alertTrigger = false;
    }, 200);
}

// 경고 팝업창 닫기
export function alertClose(id) {
    if (alertTrigger) return false;
    alertTrigger = true;

    var pop = $('#' + id);
    pop.find('.alert-popup-bg').stop().animate({'opacity': 0}, 200);
    pop.find('.alert-wrap').removeClass('move');

    clearTimeout(alertTimeout);
    alertTimeout = setTimeout(function () {
        pop.stop().hide();
        if (!$('.alert-container').is(':visible')) $('html').removeClass('alert-open');
        alertTrigger = false;
    }, 200);
}

//아코디언 메뉴 이벤트 : 20210903 최상림
export function accordionEv() {
    $('.accordion-wrap .accordion-tit').on('click', function () {
        var _this = $(this);
        var wrap = _this.closest('.accordion-wrap');
        if (wrap.hasClass('open')) {
            wrap.removeClass('open');
            wrap.find('.accordion-cont').stop().slideUp();
        } else {
            $('.accordion-wrap').removeClass('open');
            $('.accordion-wrap .accordion-cont').stop().slideUp();
            wrap.addClass('open');
            wrap.find('.accordion-cont').stop().slideDown();
        }

    });
}

//셀렉트 콤보 선택 이벤트
var comPopboTrigger, comPopboTimeout;
export function selectcomPopbo() {
    $(document).on('click', '.select-comPopbobox .comPopbo-tit', function () {
        if (comPopboTrigger) return false;
        comPopboTrigger = true;

        var _this = $(this);
        var selectcomPopbo = _this.closest('.select-comPopbobox');
        var selectList = selectcomPopbo.find('ul');

        if (selectcomPopbo.hasClass('open')) {
            $('.select-comPopbobox').removeClass('open');
            $('.select-comPopbobox ul').stop().hide();
            selectcomPopbo.removeClass('open');
            selectList.stop().hide();
            comPopboTrigger = false;
        } else {
            $('.select-comPopbobox').removeClass('open');
            $('.select-comPopbobox ul').stop().hide();
            selectcomPopbo.addClass('open');
            selectList.stop().stop().slideDown(200);
            clearTimeout(comPopboTimeout);
            comPopboTimeout = setTimeout(function () {
                comPopboTrigger = false;
            }, 200);
        }

        // 이메일 셀렉트 박스일 때
        if ($("#selEmail").length > 0) {
            var email_selectcomPopbo = selectcomPopbo.closest(".email-address-form");
            var selectcomPopbo_ul = selectcomPopbo.children("ul");
            var selectcomPopbo_li = selectcomPopbo_ul.children("li");
            var selectcomPopbo_li_height = selectcomPopbo_li.height();
            var selectcomPopbo_li_length = selectcomPopbo_li.length;
            $(".email-address-form").css({
                "padding-bottom": "0"
            });

            if (selectcomPopbo.hasClass("open") == true) {
                if (selectcomPopbo_li_length >= 6) {
                    email_selectcomPopbo.css({
                        "padding-bottom": "294px"
                    });
                } else {
                    email_selectcomPopbo.css({
                        "padding-bottom": selectcomPopbo_li_height * selectcomPopbo_li_length
                    });
                }
            } else {
                email_selectcomPopbo.css({
                    "padding-bottom": "0"
                });
            }
        }
    });

    $(document).on('click', '.select-comPopbobox .selectable', function () {
        var _this = $(this);
        var selectcomPopbo = _this.closest('.select-comPopbobox');
        var selectList = selectcomPopbo.find('ul');
        var email_selectcomPopbo = selectcomPopbo.closest(".email-address-form");
        var selectcomPopbo_ul = selectcomPopbo.children("ul");
        var selectcomPopbo_li = selectcomPopbo_ul.children("li");
        var selectcomPopbo_li_height = selectcomPopbo_li.height();
        var selectcomPopbo_li_length = selectcomPopbo_li.length;

        selectcomPopbo.removeClass('open');
        selectList.stop().hide();
        comPopboTrigger = false;

        selectList.find('.selectable').removeClass('selected');
        _this.addClass('selected');
        selectcomPopbo.find('.selected-tit').text(_this.text());

        _this.each(function (index, item) {
            const _item = $(item);
            const _item_wrap = _item.closest(".email-address-form")

            _item_wrap.each(function (index, email) {
                const email_wrap = $(email).siblings(".form-input");
                const email_text = email_wrap.find("#txtemailAddress");

                if (_item.hasClass("direct-input") === true) {
                    email_text.val("");
                    email_text.focus();
                } else {
                    email_text.val(_item.text());
                }
            });
        });

        if (selectcomPopbo.hasClass("open") == true) {
            if (selectcomPopbo_li_length >= 6) {
                email_selectcomPopbo.css({
                    "padding-bottom": "294px"
                })
            } else {
                email_selectcomPopbo.css({
                    "padding-bottom": selectcomPopbo_li_height * selectcomPopbo_li_length
                })
            }
        } else {
            email_selectcomPopbo.css({
                "padding-bottom": "0"
            })
        }
    });
}

// 인풋 이벤트
export function inputEv() {
    $(document).on('focus', '.input-text input', function () {
        var _this = $(this);
        if (_this.prop("readonly") == true) {
            return false;
        }

        var inputText = _this.closest('.input-text');

        // focused 클래스 추가
        if (!_this.hasClass('touchTranskey')) inputText.addClass('focused');

        // 플레이스홀더 데이터 추가
        if (_this.attr('placeholder')) _this.attr('data-placeholder', _this.attr('placeholder'));

        // 포커스 시 플레이스홀더 숨기기
        if (_this.attr('data-placeholder')) _this.attr('placeholder', '');
    });

    $(document).on('blur', '.input-text input', function () {
        var _this = $(this);
        var inputText = _this.closest('.input-text');

        // focused 클래스 삭제
        inputText.removeClass('focused');

        // 블러 시 플레이스홀더 보이기
        if (_this.attr('data-placeholder')) _this.attr('placeholder', _this.attr('data-placeholder'));
    });

    $(document).ready(function () {
        const all_input = $(".input-text input");
        all_input.each(function (index, item) {
            if ($(item).prop("readonly") || $(item).prop("disabled")) {
                if ($(item).hasClass("touchTranskey") == true) {
                    return false;
                }
                const _this = $(this);
                const _thisWrap = _this.closest(".input-text");
                const disabled_class = "disabled"

                if (_thisWrap.hasClass(disabled_class)) {
                    return false;
                } else if (!_thisWrap.hasClass(disabled_class)) {
                    _thisWrap.addClass(disabled_class)
                }
            }
        });
    });
}

// 인풋 포커스 시 스크롤 이동
var _inputFocusTimeout;
export function inputFocusScroll() {
    $(document).on('focus', '.form-input input', function () {
        var _this = $(this);
        if (!_this.hasClass('touchTranskey') && !_this.hasClass('input-pinpad') && !_this.hasClass("no-scroll")) {
            input_click_move_fun(_this, "origin");
        }
    });

    const input_click_move_fun = function (_this, what) {
        var formInput = _this.closest('.form-input');
        var topSpace = parseInt($('.container').css('padding-top'), 10);
        var txtSpace = 0;

        // 모바일 & IOS 기기일 때 header 영역 만큼 높이값 감소
        if (chkDevice.isMobile() && chkDevice.isIos()) {
            topSpace = 0;
        }

        // .join-progress 내부 .main-txt 가 있을 경우 해당 영역만큼 간격 추가
        if (_this.closest('.join-progress').find('.main-txt').length > 0) {
            txtSpace = _this.closest('.join-progress').find('.main-txt').outerHeight() + parseInt(_this.closest('.join-progress').find('.progress-wrap').css('padding-top'));
        }

        switch (what) {
            case "origin" :
                var st = formInput.offset().top - topSpace - txtSpace;
                clearTimeout(_inputFocusTimeout);
                _inputFocusTimeout = setTimeout(function () {
                    $('html, body').stop().animate({scrollTop: st}, 200);
                }, 50);
                break;
            default: break;
        }
    }
}
    
export function getParameter(param) {
    var requestParam = '';

    var url = unescape(window.location.href);

    var exsistsParam = contains(url, '=');

    if (exsistsParam) {
        var paramArr = (url.substring(url.indexOf('?') + 1, url.length)).split('&');

        for(var i=0; i < paramArr.length; i++) {
            var temp = paramArr[i].split('=');

            if (temp[0].toUpperCase() == param.toUpperCase()) {
                requestParam = paramArr[i].split('=')[1];
                break;
            }
        }
    }

    return requestParam;
}
    
// 디바이스 환경 체크
export var chkDevice = {
    isMobile: function () {
        var _isMobile = false;
        var pcDevice = 'win16|win32|win64|mac|macintel';
        if (navigator.platform) {
            if (pcDevice.indexOf(navigator.platform.toLowerCase()) < 0) {
                _isMobile = true;
            }
        }
        return _isMobile;
    },
    isIos: function () {
        var _isIos = false;
        var iosArr = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
        if (navigator.platform || navigator.userAgent) {
            if (iosArr.includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)) {
                _isIos = true;
            }
        }
        return _isIos;
    }
}
    
// 해더 및 플로팅 버튼 영역
export function hdFix() {
    if ($('.ground-btm').length < 1) return false;

    if ($('.contract-list').hasClass("have-data") === true) {
        $('.container').css('padding-bottom', '0');
        return false;
    }

    if ($(".accordion.app-setting").hasClass("faq") == true) {
        $('.container').css('padding-bottom', '0');
        return false;
    }

    var floatH = 90;
    for (var i = 0; i < $('#wrap .ground-btm').length; i++) {
        if ($('#wrap .ground-btm').eq(i).is(':visible')) {
            var floatH2 = $('#wrap .ground-btm').eq(i).outerHeight();
            if (floatH2 >= floatH) floatH = floatH2;
        }
    }
    $('.container').css('padding-bottom', floatH + 'px');
}
    
export function allowOnlyNumber(selector) {
    $(selector).keypress(inputKeyPressHandler_AllowOnlyNumber);
    $(selector).keyup(inputKeyUpHandler_DisallowHandle);
};
    
export function inputKeyPressHandler_AllowOnlyNumber(e) {
    let code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        return false;
    }
    return true;
};
    
export function inputKeyUpHandler_DisallowHandle() {
    this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
};
    
/** 원데이고도화 웹 API 오브젝트 */
export var apiOneday = {
    /**
     * 웹 JSON API 를 호출한다
     * @param opts <pre>
     * {
     *    url      : string
     *    data     : body json
     *    loading  : true/false
     *    success  : function(resultJson)
     *    failure  : function(resultJson)
     *    error    : function()
     *    comPopplete : function()
     * }
     * </pre>
     */
    call : function(opts) {

        if (apiOneday.call.callId === undefined) {
            apiOneday.call.callId = 0;
        }

        var callId = ++apiOneday.call.callId;
        var logTag = "[API-" + callId + "] ";
        console.log(logTag + "==[ Start ]=============");

        opts = $.extend({
            loading : true
        }, opts);

        if (opts.loading) cmm.openLoading();

        console.log(logTag + "Request url - " + opts.url+" opts.loading["+ opts.loading+"]");

        var ajaxParams = {
            type : 'POST',
            url  : opts.url,
            contentType : 'application/json;charset=utf-8',
            dataType    : 'json',
        };

        if (typeof opts.data === 'object') {
            var data = JSON.stringify(opts.data);
            console.log(logTag + "Request params - " + data);
            ajaxParams.data = data;
        }

        ajaxParams.success = function(resultJson, textStatus, xhr) {
            if (window.logonTimer) window.logonTimer.resetTime();

            var header = resultJson.header;
            if (header.success) {
                console.log(logTag + "Response : success - ", resultJson);

                if (isFunction(opts.success)) {
                    try {
                        //XSS방지코드 추가/START
                        //211027 취약성점검으로 인한 result XSS 작업 - 박수용D
                        //220208 reportKey 생성 result XXS 처리 제외 추가 - 정혜린D
                        if(opts.url.indexOf('/travel/hanainsure/w/terms/') == -1 && opts.url.indexOf('/p/comPopmon/getReportKey') == -1){
                            var cleanJson = apiOneday.cleanXSSJson(resultJson);
                            resultJson = JSON.parse(cleanJson);
                        }
                        //XSS방지코드 추가/END
                        opts.success(resultJson);
                    } catch(e) {
                        console.error(e);
                        comPop.msg.warn('결과를 처리 중 오류가 발생하였습니다');
                    }
                }

            } else {
                console.log(logTag + "Response : failure - ", resultJson);

                if (!isFunction(opts.failure)) {

                    apiOneday.callFailureAction(resultJson, textStatus, xhr);
                } else {
                    opts.failure(resultJson);
                }
            }

            if (isFunction(opts.comPopplete)) {
                opts.comPopplete();
            }

            if (opts.loading) cmm.closeLoading();
        };

        ajaxParams.error = function(xhr, textStatus, errorThrown) {
            console.log(logTag + "Response : Error - ", xhr, textStatus, errorThrown);
            if (opts.loading) cmm.closeLoading();

            try {
                var json = JSON.parse(xhr.responseText);

                if (!isFunction(opts.error)) {

                    comPop.msg.warn(json.header.message, function() {
                        if (json.header.forwardUrl) {
                            window.location.href = json.header.forwardUrl;
                        }
                    });

                } else {
                    opts.error(json);
                }
            } catch(e) {

                var json = {
                    header: {
                        result: '0',
                        message: '시스템 에러가 발생하였습니다'
                    }
                };

                if (!isFunction(opts.error)) {

                    comPop.msg.warn(json.header.message);
                } else {
                    opts.error(json);
                }

            }



            if (isFunction(opts.comPopplete)) {
                opts.comPopplete();
            }
        };

        ajaxParams.comPopplete = function(xhr) {
            console.log(logTag + "Transaction-id : " + xhr.getResponseHeader('Transaction-id'));
            console.log(logTag + "Execution-time  : " + xhr.getResponseHeader('Execution-time') + 'ms');
            console.log(logTag + "===============[ End ]==");
        };


        $.ajax(ajaxParams);
    },

    callFailureAction : function(resultJson, textStatus, xhr) {

        comPop.msg.warn(resultJson.header.message, function() {
            if (resultJson.header.forwardUrl) {
                window.location.href = resultJson.header.forwardUrl;
            }
        });
    },

    /**
     * 웹 JSON API 를 호출한다
     * @param opts <pre>
     * {
     *    form     : string(필수)
     *    url      : string(선택)
     *    loading  : true/false(선택)
     *    success  : function(resultJson)
     *    failure  : function(resultJson)
     *    error    : function()
     *    comPopplete : function()
     * }
     * </pre>
     */
    /*upload : function(opts) {

        $(function() {
            if (apiOneday.upload.uploadId === undefined) {
                apiOneday.upload.uploadId = 0;
            }

            var uploadId = ++apiOneday.upload.uploadId;
            var logTag = "[UPLOAD-" + uploadId + "] ";
            console.log(logTag + "==[ Start ]=============");

            // [2020.02.13] 토스 업로드 오류 수정
            var ieVer = cmm.getIEVersion();
            var isUploadWithForm = (ieVer > 0 && ieVer < 10) || !EnvGlobalFunc.isMobile(); // true: 폼으로 전송, false: ajax 로 전송


            // [2020.03.20] 업로드 URL 수정
            opts = $.extend({
                url : cmm.url('/uploadWithMultipart'),
                loading : true
            }, opts);


            if (opts.loading) cmm.openLoading();

            var ajaxParams = {
                url         : opts.url,
                type		: 'POST',
                dataType    : 'json',
            };
            // [2020.03.20] end

            ajaxParams.success = function(resultJson, textStatus, xhr, $form) {
                var header = resultJson.header;
                if (header.success) {
                    console.log(logTag + "Response : success - ", resultJson);

                    if (isFunction(opts.success)) {
                        opts.success(resultJson);
                    }

                } else {
                    console.log(logTag + "Response : failure - ", resultJson);

                    if (!isFunction(opts.failure)) {

                        comPop.msg.warn(resultJson.header.message, function() {
                            if (resultJson.header.forwardUrl) {
                                window.location.href = resultJson.header.forwardUrl;
                            }
                        });

                    } else {
                        opts.failure(resultJson);
                    }
                }

                if (isFunction(opts.comPopplete)) {
                    opts.comPopplete();
                }

                if (opts.loading) cmm.closeLoading();
            };

            ajaxParams.error = function(xhr, textStatus, errorThrown) {
                console.log(logTag + "Response : Error - ", xhr, textStatus, errorThrown);
                if (opts.loading) cmm.closeLoading();

                try {
                    var json = JSON.parse(xhr.responseText);

                    comPop.msg.warn(json.header.message, function() {

                        if (json.header.forwardUrl) {
                            window.location.href = json.header.forwardUrl;
                        }
                    });

                } catch(e) {

                    comPop.msg.warn('시스템 에러가 발생하였습니다');
                }
            };

            ajaxParams.uploadProgress = function(event, position, total, percent) {
                console.log('upload progress :: pos=' + position + ', total=' + total + ', percent=' + percent);
            };

            ajaxParams.comPopplete = function(xhr) {
                console.log(logTag + "Transaction-id : " + xhr.getResponseHeader('Transaction-id'));
                console.log(logTag + "Execution-time  : " + xhr.getResponseHeader('Execution-time') + 'ms');
                console.log(logTag + "===============[ End ]==");
            };


            // [2020.01.31 수정] 브라우저 별 파일업로드 방식 변경
            // [2020.02.13] 토스 업로드 오류 수정

            var $form = $(opts.form);

            // IE 버전 10 미만 및 PC버전인경우
            if ( isUploadWithForm ) {
                console.log(logTag + 'upload with submit');


                console.log(logTag + "Request url - " + ajaxParams.url);

                $form.attr('enctype', 'multipart/form-data');

                console.log('$form', $form);
                $form.ajaxSubmit(ajaxParams);
            }
            // 모바일
            else {
                console.log('upload with formData');

                var encOpts;


                // [2020.02.17] 업로드 URL 수정
                // 하나손해보험 앱 또는 모바일

                // [2020.03.20] 업로드 URL 수정
                if (ajaxParams.url !== cmm.url('/upload')) {
                    // [2020.03.20] end

                    // [2021.04.28] 다중파일업로드 가능하도록 수정
                    var $file = $form.find('[name=file]');

                    var files = $file[0].files;

                    var file;

                    if (/^file$/i.test( $file.attr('type') ) ) {

                        for(var i = 0; i < files.length; i++) {
                            file = files[i];
                            console.log(file);
                        }
                    } else {
                        console.error("INPUT[type=file] 이 없습니다!!!");
                    }

                    if (files.length > 0) {
                        // formData에 가져온 파일을 하나씩 append로 저장
                        var formData = new FormData();
                        for (var i = 0; i < files.length; i++) {
                            formData.append('file', files[i]);
                        }
                        // [2021.04.28] 다중파일업로드 끝
                        encOpts = {
                            type: 'post',
                            enctype: 'multipart/form-data',
                            data: formData,
                            contentType: false,
                            processData: false,
                            cache: false,
                            timeout: 600000
                        };
                    } else {
                        if (opts.loading) cmm.closeLoading();
                        comPop.msg.warn('선택된 파일이 없습니다');
                        return;
                    }
                }
                // 토스 앱
                else {

                    encOpts = {
                        type: 'post',
                        contentType : 'application/json;charset=utf-8',
                        dataType    : 'json',
                        data: JSON.stringify({
                            fileData: $form.find('[name=fileData').val(),
                            fileName: $form.find('[name=fileName').val()
                        }),
                        cache: false,
                        timeout: 600000
                    };
                }
                // [2020.02.17] end


                console.log(logTag + "Request url - " + ajaxParams.url);
                console.log(logTag + "EncOpts - ", encOpts);

                $.ajax($.extend(ajaxParams, encOpts));
            }
            // [2020.02.13 수정] end
            // [2020.01.31 수정] end
        })
    },*/
    /**
     * 웹 URL 를 호출한다
     * @param opts <pre>
     * {
     *    container : jquery selector
     *    url      : string
     *    loading  : true/false(선택)
     *    cache    : true/false(선택)
     *    success  : function(responseText, textStatus, jqXHR)
     *    error    : function(responseText, textStatus, jqXHR)
     *    comPopplete : function()
     * }
     * </pre>
     */
    load: function(opts) {
        if (apiOneday.load.loadId === undefined) {
            apiOneday.load.loadId = 0;
        }

        if (typeof apiOneday.load.cached !== 'object') {
            apiOneday.load.cached = {};
        }

        var loadId = ++apiOneday.load.loadId;
        var logTag = "[LOAD-" + loadId + "] ";
        console.log(logTag + "==[ Start ]=============");

        opts = $.extend({
            loading: true,
            cache: true
        }, opts);

        console.log(logTag + "Request url - " + opts.url);

        var $container = $(opts.container);
        var container = $container.get(0);

        var cachedHtml = apiOneday.load.cached[opts.url];
        var isCached = ! isEmpty(cachedHtml);

        if (isCached) {

            console.log(logTag + "cached - " + isCached);
            $container.html( cachedHtml );

            if (isFunction(opts.success)) {
                opts.success.call(container, cachedHtml);
            }

            if (isFunction(opts.comPopplete)) {
                opts.comPopplete.call(container);
            }

            console.log(logTag + "===============[ End ]==");
        } else {

            if (opts.loading) cmm.openLoading();

            console.log($container);

            $container.load(cmm.url(opts.url), function(responseText, textStatus, jqXHR) {
                var status = jqXHR.status;

                if (status >= 200 && status < 400) {

                    console.log(logTag + "Response : success - status=" + status);

                    apiOneday.load.cached[opts.url] = responseText;

                    if (isFunction(opts.success)) {
                        opts.success.call(container, responseText, textStatus, jqXHR);
                    }
                } else {

                    console.log(logTag + "Response : error - status=" + status);

                    if (isFunction(opts.error)) {

                        opts.error.call(container, responseText, textStatus, jqXHR);
                    }
                }

                if (isFunction(opts.comPopplete)) {
                    opts.comPopplete.call(container);
                }

                if (opts.loading) cmm.closeLoading();

                console.log(logTag + "===============[ End ]==");
            });
        }
    },
    //Json value cleanXSS logic - 20211027 박수용D
    cleanXSSJson : function(unVal){
        if(typeof unVal == 'string'){
            return '"'+apiOneday.cleanXSS(unVal)+'"';
        }else if(typeof unVal == 'boolean'){
            return unVal;
        }else if(typeof unVal == 'number'){
            return '"'+unVal+'"';
        }

        var bin = [];
        if(Array.isArray(unVal)){
            if(unVal.lengh==0){
                return '{}';
            }else{
                for(var i=0;i<unVal.length;i++){
                    if(typeof unVal[i] === 'string'){
                        var str = apiOneday.cleanXSSJson(unVal[i]);
                        bin.push(str);
                    }else if(Array.isArray(unVal[i])){
                        var arr = apiOneday.cleanXSSJson(unVal[i]);
                        bin.push(arr);
                    }else{
                        var ifObj = apiOneday.cleanXSSJson(unVal[i]);
                        bin.push(ifObj);
                    }
                }
            }
            return '['+bin+']';
        }//end isArray
        else{
            var createdArr = [];
            if(unVal==null || Object.keys(unVal).lengh === 0 ){
                return '{}';
            }else{
                for(var key in unVal){
                    if(typeof unVal[key] === 'string' || unVal[key] === null ){
                        var strKey = '"'+key+'"';
                        var strVal = apiOneday.cleanXSSJson(unVal[key]);
                        var strArr = strKey + ':' + strVal;
                        createdArr.push(strArr);
                    }else if(Array.isArray(unVal[key])){
                        var arrKey = '"'+key+'"';
                        var arrVal = apiOneday.cleanXSSJson(unVal[key]);
                        var arrArr = arrKey + ':' + arrVal;
                        createdArr.push(arrArr);
                    }else if(unVal[key] === undefined){
                        delete unVal[key];
                        apiOneday.cleanXSSJson(unVal);
                    }else{
                        var objKey = '"'+key+'"';
                        var objVal = apiOneday.cleanXSSJson(unVal[key]);
                        var objObjr = objKey + ':' + objVal;
                        createdArr.push(objObjr);
                    }
                }
            }
            return '{'+createdArr+'}';
        }
    },
    cleanXSS : function(val){
        val = val.replace(/\</gi, "&lt;");
        val = val.replace(/\>/gi, "&gt;");
        val = val.replace(/\&/gi, "&amp;");
        val = val.replace(/\"/gi, "&qout;");
        val = val.replace(/\'/gi, "&#039;");
        val = val.replace(/\\/g, "\\\\");
        val = val.replace(/\n/g, "");
        return val;
    }
};
    
/** 숫자 외에는 삭제한다 */
export function onlyNum(str) {
    if (typeof str !== 'string') return str;

    return str.replace(/\D/g, '');
}

/** 유효성 체크 오브젝트 */
export var validation = {
    langType: {
        ENG: /[a-zA-Z]/g,
        KR: /[ㄱ-ㅎㅏ-ㅣ가-힣]/g,
        KR_CON: /[ㄱ-ㅎㅏ-ㅣ]/g,
        NUM: /[0-9]/g,
        SPC: /[\[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\\₩]/g,
        SP: /\s/g,
        EMOJI: /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
    },
    langTypeExcept: {
        ENG: /[^a-zA-Z]/g,
        KR: /[^가-힣]/g,
        KR_CON: /[^ㄱ-ㅎㅏ-ㅣ가-힣]/g,
        NUM: /[^0-9]/g,
        name: /^[ -]|[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣ㆍᆢ -]|[ -]+(?= |-)/g,
        name_eng: /^[ -]|[^a-zA-Z -]|[ -]+(?= |-)/g,
        PASSPORT : /[^A-Za-z0-9]/g
    },
    chkLangTypeExcept: {
        ENG: /[^a-zA-Z]/,
        KR: /[^가-힣]/,
        NUM: /[^0-9]/,
        name_eng: /[^a-zA-Z -]/
    },
    deleteLang: function (data, lang, isExcept) {
        var reg = isExcept ? this.langTypeExcept[lang] : this.langType[lang] || lang;
        return String(data).replace(reg, '');
    },

    /**
     * 이름 유효성 체크
     * @param name (필수)이름
     * @param jumin (선택)주민번호
     */
    personName : function(name, jumin) {

        if (typeof jumin === 'string') {

            var j = onlyNum(jumin);

            if (!isNaN(j) && j.length >= 7) {

                var obj = cmm.parseCustNo(j);
                if (isObject(obj)) {

                    switch(obj.sForeigner) {
                        case "1": // 내국인
                            return !/[^가-힣]/gm.test(name);
                        case "2": // 외국인
                            return !/[^a-z^A-Z^\s]/gm.test(name);
                        default: break;
                    }
                }
            }
        }

        return !/[^a-z^A-Z^가-힣^\s]/gm.test(name);
    },
    /** 한글 이름 검증 */
    personKorName : function(name) {
        return !/[^가-힣]/gm.test(name);
    },
    /** 영문 이름 검증 */
    personEngName : function(name) {
        return !/[^a-z^A-Z^\s]/gm.test(name);
    },

    /** 숫자면 True 아님 false **/
    isNumber : function(value) {
        return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
    },

    /** 휴대폰 */
    mobile : function(src) {
        var str = onlyNum(src);
        if (str && str.length > 11) {
            return /^(050[0-9])-?([0-9]{4})-?([0-9]{4})$/.test(str);
        }

        return /^(01[016789])-?([0-9]{3,4})-?([0-9]{4})$/.test(str);
    },

    /** 전화번호 */
    phone : function(src) {
        return /^\d{2,4}-?\d{3,4}-?\d{4}$/.test(src);
    },

    /** 가상번호 */
    virtualNo : function(src) {
        return /^(0506)-?\d{3}-?\d{4}$/.test(src);
    },

    /**
     * 이메일 True 아님 false
     * @param test@test.comPop		true
     * @param test				false
     */
    email : function(src) {
        var hasEmail = true;
        var r = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if( !r.test(src)) {
            hasEmail = false;
        }
        r= /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if( !r.test(src) ) {
            hasEmail = false;
        }

        r= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( !r.test(src) ) {
            hasEmail = false;
        }

        return src != null && src.length >= 6 && hasEmail;
    },

    /** 인자 값이 날짜형식인지 비교 */
    date : function(yyyymmdd) {
        yyyymmdd = onlyNum(yyyymmdd);
        if (!/^\d{4}[0-1]\d[0-3]\d$/.test(yyyymmdd)) return false;

        return moment(yyyymmdd, 'YYYYMMDD').isValid();
    },

    /** data1이 data2 보다 같거나 이전일일 때 true */
    sameOrBeforeDate: function(date1, date2) {
        var m1 = moment(date1, 'YYYYMMDD');
        var m2 = moment(date2, 'YYYYMMDD');

        return m1.isSameOrBefore(m2);
    },

    /** data1이 data2 보다 같거나 이전일일 때 true */
    sameOrBeforeYearMonth: function(date1, date2) {
        var m1 = moment(date1, 'YYYYMM');

        if ( isUndefined(date2)) {
            date2 = date.now('YYYYMM');
        }

        var m2 = moment(date2, 'YYYYMM');

        return m1.isBefore(m2);
    },
    /**
     * 영업용 차량번호 체크
     * @param plateNo
     * @returns 승용차(car), 승합차(van), 화물차(truck),
     */
    isCarType: function(sPlateNo) {
        sPlateNo = sPlateNo.replace(/\s/g, "");	//공백제거
        var sPlateLen = sPlateNo.length;

        var car3 = '';
        var car2 = '';
        switch(sPlateLen) {
            case 7: // 12가1234
                car2 = sPlateNo.substring(0,2);
                car3 = sPlateNo.substring(2,3);
                break;
            case 8:
                // 123가1234
                if(/^\d{3}/.test(sPlateNo)){
                    car2 = sPlateNo.substring(0,3);
                    car3 = sPlateNo.substring(3,4);
                }else{// 서울2가1234
                    car2 = sPlateNo.substring(2,3);
                    car3 = sPlateNo.substring(3,4);
                }
                break;
            case 9: // 서울12가1234
                car2 = sPlateNo.substring(2,4);
                car3 = sPlateNo.substring(4,5);
                break;
            default: return 'nan';
        }

        if (!validation.isKorean(car3)) {
            return 'nan';
        }

        if ( 	car3 == "바" ||
            car3 == "사" ||
            car3 == "아" ||
            car3 == "자" ||
            car3 == "하" ||
            car3 == "호" ||
            car3 == "허" ||
            car3 == "배" ){

            return 'business';
        }

        // 123가1234
        if(/^\d{3}/.test(sPlateNo)){
            if (Number(car2) > 99 && Number(car2) < 800) {
                return 'car';
            }else if (Number(car2) > 799 && Number(car2) <= 979) {
                return 'truck';
            }else{
                return 'nan';
            }
        }else{
            switch(sPlateLen) {
                case 7: // 12가1234
                case 9: // 서울12가1234
                    if (Number(car2) > 0 && Number(car2) < 70) {
                        return 'car';
                    }

                    if (Number(car2) > 69 && Number(car2) < 80) {
                        return 'van';
                    }

                    if (Number(car2) > 79 && Number(car2) < 98) {
                        return 'truck';
                    }

                    return 'nan';
                    break;
                case 8: // 서울1가1234
                    if (Number(car2) > 0 && Number(car2) < 5) {
                        return 'car';
                    }

                    if (Number(car2) > 4 && Number(car2) < 7) {
                        return 'van';
                    }

                    if (Number(car2) > 6 && Number(car2) < 9) {
                        return 'truck';
                    }
                    return 'nan';
                    break;
                default: break;
            }
        }

    },
    /**
     * 이륜차 체크
     * @param sPlateNo  	 이륜차번호
     */
    isBicycleNo : function(sPlateNo) {
        sPlateNo = sPlateNo.replace(/\s/g, '');	//공백제거

        // 이륜차 번호 체크 경기수원사1234, 세종하1234
        if (validation.isKorean(sPlateNo.substring(0,3))) {
            return true;
        }

        return false;

    },
    /**
     * 차번호 or 차대번호 정합성 체크
     * @param sPlateNoType  1: 차량번호 or 이륜차, 2: 차대번호
     * @param sPlateNo  	 번호
     */
    checkPlateNo: function(sPlateNoType, sPlateNo) {
        sPlateNo = sPlateNo.replace(/\s/g, '');	//공백제거
        var sPlateLen = sPlateNo.length;

        if( sPlateNoType == 1 ) {

            switch(sPlateLen) {
                case 7: // 12가1234
                    return /^\d{2}[가-힣]{1}\d{4}$/.test( sPlateNo );

                case 8:
                    // 123가1234
                    if(/^\d{3}/.test(sPlateNo)){
                        return /^\d{3}[가-힣]{1}\d{4}$/.test( sPlateNo );
                    }
                // 서울1가1234
                case 9: // 서울12가1234
                    return /^[가-힣]{2}\d{1,2}[가-힣]{1}\d{4}$/.test( sPlateNo );
                default: return false;
            }

        } else {
            if ( sPlateLen != 17 ) {
                return false;
            }
        }

        return true;
    },
    /** 한글이면 True 아님 false **/
    isKorean : function(value) {
        var i = 0;
        var value_length = value.length;
        var result = true;

        for (i; i < value_length; i++) {
            if (!((value.charCodeAt(i) > 0x3130 && value.charCodeAt(i) < 0x318F) || (value.charCodeAt(i) >= 0xAC00 && value.charCodeAt(i) <= 0xD7A3))) {
                result = false;
                break;
            }
        }
        return result;
    },

    genderCheck: function (b, g, t) {
        var year = ''+String(b).substr(0,2);
        var gender_num = ''+String(t).substr(0,1);
        var gender = g;
        if (year <= "19" && gender == "1" && (gender_num == "1" || gender_num == "5")) {
            return true;
        } else if (year <= "19" && gender == "2" && (gender_num == "2" || gender_num == "6")) {
            return true;
        } else if (year >= "20" && gender == "1" && (gender_num == "3" || gender_num == "7")) {
            return true;
        } else if (year >= "20" && gender == "2" && (gender_num == "4" || gender_num == "8")) {
            return true;
        } else return false;
    },

    // 외국인/내국인 통합 주민등록번호 유효성 검사
    /**
     * params
     * e - ssno
     * f - check only korean jumin number... default `true`
     * */
    ssnCheck: function (e, f) {
        if (13 !== e.length) return !1;
        var myDate = new Date();
        var koDate = new Date(myDate.toLocaleString('en-US', {
            timeZone: "Asia/Seoul"
        }));
        if ($(e.substring(0, 6)) && Number(e.substr(0, 2)) <= Number(koDate.getFullYear().toString().substr(-2)) && Number(e.substring(0, 4)) >= 2010) return !0;
        var t = e.substr(6, 1),
            a = ["5", "6", "7", "8"].includes(t) ? "frn" : "kor";
        e = e.split("-").join("");
        var n = 0;
        [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5].forEach((function (t, a) {
            n += Number(e[a]) * t
        }));
        var r = n % 11;
        return "kor" === a ? (11 - r) % 10 === Number(e[12]) : (!Number(f ?? 1) == 1 ? (13 - r) % 10 === Number(e[12]) : !1)
    },

    /**
     * 사업자번호 검증
     * 사업자번호 10자리 (-제외)
     * 예) 110-81-41272
     * @return true / false
     */
    bizCheck : function(biz) {
        biz = onlyNum(biz);
        if (!biz || biz.length < 10) {
            return false;
        }

        var sum = 0;
        var comPoppare = [1,3,7,1,3,7,1,3,5,1];

        for(var i = 0 ; i < 9 ; i++) {
            sum = sum + (Number(biz[i]) * comPoppare[i]);
        }

        sum = sum +  Math.floor((Number(biz[8]) * comPoppare[8]) / 10);
        var remander = (10 - Math.floor(sum%10)) % 10;

        if(remander != biz[9]) {
            return false;
        }
        return true;
    },

    /**
     * 특수문자여부 체크
     * @param src
     */
    hasSpWord: function(src) {
        return cmm.regexSpWord.test(src);
    },

    cardNo: function() {

        var src;

        switch(arguments.length) {
            case 1: src = arguments[0]; break;
            case 4: src = toArray(arguments).join(''); break;
            default: break;
        }

        if (typeof src !== 'string') return false;

        return [14, 15, 16].indexOf(src.length) >= 0;
    },

    /**
     * 입력된 input value 조건에 따라 제거
     * @param e: event
     * @param targetLang: 제거하거나 남길 구문 유형
     * @param isOnly: targetLang만 남길 경우 true
     * @param cb: callback
     * @param ordArr: auto focus 순서 담은 배열 - 특정 범위 지정할 경우 사용 (ex. popup), 기본값은 inputOrd
     */
    cleanInput: function(e, targetLang, isOnly, cb, ordArr) {
        if (!targetLang) return false;

        var targetInput = $(e.target);
        var val = targetInput.val();
        var maxLength = Number(targetInput.attr('maxlength'));

        if (targetLang === 'MOBILE') {
            val = val.replace(/[^0-9]/g, '');
            // val = val.replace(/[^0-9]/g, '')
            //     .replace(/^(\d{0,3})(\d{0,3}|\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
            //     .replace(/(\-{1,2})$/g, '');
        } else if (typeof targetLang === 'string') {
            val = validation.deleteLang(val, targetLang, isOnly);
        } else {
            $.each(targetLang, function (i, v) {
                val = validation.deleteLang(val, v, isOnly);
            });
        }

        targetInput.val(val);

        if (!!val && !!cb) cb(val);

        return true;
    }

};
    
/** 약관 관련 기능 */
export var terms = {
    /** 이전 약관 팝업 열기 */
    openPrevPop: function(termsId) {
        var id = "divPrevTermsPopWrap-" + termsId;
        var $popContainer = $('#' + id);

        if ($popContainer.exists()) {
            $popContainer.pop.open($popContainer.children().id());
        } else {
            $popContainer = $('<div id="' + id + '"></div>').appendTo('body');

            $popContainer.load(cmm.url('/travel/hanainsure/w/terms/popup/prev?termsId=' + termsId), function() {
                var popupId = $popContainer.children().id();
                $popContainer.popupInit("#" + popupId);
                $popContainer.pop.open(popupId);
            });
        }
    },
    /**
     * ajax 로 호출하여 붙이기
     * options = {
     *   title : 셀렉터
     *   content : 약관내용
     *   termsId : 약관 ID -> 관리번호-일련번호
     *   direction : 'prev' or 'next'
     *   comPopplete: 완료 팝업
     * }
     * */
    load: function(options) {
        var url = "/travel/hanainsure/w/terms/" + options.termsId;
        if (options.direction) url = url + "/" + options.direction;

        var $content = $(options.content);
        $content.text('약관 내용을 로드 중입니다..');

        apiOneday.call({
            url: url,
            loading: false,
            success: function(json) {
                if (options.title) {
                    $(options.title).text(json.body.sTermsNm);
                }

                $content.html(json.body.sTermsContent);
                if (typeof options.comPopplete === 'function') {
                    options.comPopplete();
                }
            },
            failure: function(json) {
                if (json.header.resultCode == '2') {

                    $content.html("<p style='font-size:16px;height:auto'>시스템 내 약관 및 정책(<strong style='color:red'>" + options.termsId.split('-')[0] + "</strong>)이 등록되어 있지 않습니다<br><br>등록 후 확인해주세요</p>");
                } else {

                    comPop.msg.warn(json.header.message);
                }
                if (typeof options.comPopplete === 'function') {
                    options.comPopplete();
                }
            }
        })
    },
    /**
     * 약관 및 정책 > 약관
     * options = {
     *   title : 셀렉터
     *   content : 약관내용
     *   termsId : 약관 ID -> 관리번호-일련번호
     *   direction : 'prev' or 'next'
     *   comPopplete: 완료 callback
     * }
     * */
    contentLoad: function(options) {
        var url = "/travel/hanainsure/w/terms/" + options.termsId;
        if (options.direction) url = url + "/" + options.direction;

        var $content = $(options.content);
        //$content.text('약관 내용을 로드 중입니다..');

        apiOneday.call({
            url: url,
            loading: false,
            success: function(json) {
                if (options.title) {
                    $(options.title).text(json.body.sTermsNm);
                }
                $content.empty();
                $content.html(json.body.sTermsContent);
                if (typeof options.comPopplete === 'function') {
                    options.comPopplete(json);
                }
            },
            failure: function(json) {
                if (json.header.resultCode == '2') {

                    switch(options.direction) {
                        case 'prev':
                            comPop.msg.warn('이전 약관 또는 정책이 없습니다.');
                            break;
                        case 'next':
                            comPop.msg.warn('다음 약관 또는 정책이 없습니다.');
                            break;
                        default :
                            comPop.msg.warn('약관 또는 정책이 없습니다.');
                            break;
                    }
                    //$content.html("<p style='font-size:16px;height:auto'>시스템 내 약관 및 정책(<strong style='color:red'>" + options.termsId.split('-')[0] + "</strong>)이 등록되어 있지 않습니다<br><br>등록 후 확인해주세요</p>");
                } else {
                    comPop.msg.warn(json.header.message);
                }
                if (typeof options.fail === 'function') {
                    options.fail(json);
                }
            }
        })
    },
    /** 약관 동의 여부 체크하기 */
    checkAgree: function(disagreeCallback) {
        var isAgree = true;

        $('[id^=term]').each(function() {
            var $self = $(this);

            if ($self.data('agree')) {

                var rel = $self.attr('rel');
                if (rel) {

                    var $rel = $(rel);
                    var inputType = $rel.attr('type');
                    if (typeof inputType === 'string') inputType = inputType.toLowerCase();

                    if (	(inputType === 'checkbox' && !$rel.is(':checked'))
                        || (inputType === 'radio' && !/([1yY]|true)/.test($rel.filter(function() { return $(this).is(':checked') }).val()))
                    ) {

                        isAgree = false;
                        var title = $rel.attr('title');
                        if (typeof disagreeCallback === 'function') {
                            disagreeCallback($rel[0], title);
                        } else {
                            comPop.msg.warn(title + "를 동의해주세요");
                        }
                        return false;
                    }
                }
            }
        });

        return isAgree;
    }
};
    
// 전체동의 체크박스 이벤트
export function chkAgreeEv(){
    // 전체동의 확인 체크 시
    $('.agree-select-wrap .check-all').change(function(){
        var _this = $(this);
        var wrap = _this.closest('.agree-select-wrap');

        if(_this.prop('checked')){
            wrap.find('.agree-each input[type="checkbox"], .agree-each input[type="radio"].radio-option-agree').prop('checked', true);
            $('.btn-agree-all').prop('disabled', false).removeClass('disabled');
            $('[data-js-pub="advertise-chk"]').find('input[type="checkbox"]').attr("disabled", false);
        }
        else{
            wrap.find('.agree-each input[type="checkbox"], .agree-each input[type="radio"].radio-option-agree').prop('checked', false);
            // wrap.find('.agree-each input[type="radio"].radio-option-disagree').prop('checked', true);
            $('[data-js-pub="advertise-chk"]').prop('disabled', true).addClass('disabled');
        }
    });

    // 전체동의 확인 체크 시---- 최은영 추가  2021-09-16
    $('.more-info-btn-area .check-all').change(function(){
        var _this = $(this);
        var wrap = _this.closest('.more-info-btn-area');

        if(_this.prop('checked')){
            $('.btn-floating').prop('disabled', false).removeClass('disabled');
        }
        else{

            $('.btn-floating').prop('disabled', true).addClass('disabled');
        }
    });

    // 필수동의 확인 체크 시
    $('.agree-select-wrap .agree-each .check-required').change(function(){
        var wrap = $(this).closest('.agree-select-wrap');
        var chkAll = wrap.find('.check-all');

        // 필수체크 모두 확인 후 전체동의 on/off, 버튼 on/off
        for(var i = 0; i < wrap.find('.check-required').length; i++){
            var item = wrap.find('.check-required').eq(i);
            if( !item.prop('checked') ){
                chkAll.prop('checked', false);
                $('.btn-agree-all').prop('disabled', true).addClass('disabled');
                return false;
            }

            if($('#rdoReceiveType1').prop('checked') && $('#rdoReceiveType2').prop('checked') && $('#rdoReceiveType3').prop('checked') && $('#rdoReceiveType4').prop('checked')) {
                chkAll.prop('checked', true);
            }
            $('.btn-agree-all').prop('disabled', false).removeClass('disabled');
        }
    });

    // 최은영 추가 2021-10-08
    $('.agree-select-wrap .agree-each .chk-only').change(function(){
        var wrap = $(this).closest('.agree-select-wrap');
        var chkAll = wrap.find('.check-all');

        // 필수체크 모두 확인 후 전체동의 on/off, 버튼 on/off
        for(var i = 0; i < wrap.find('.chk-only').length; i++){
            var item = wrap.find('.chk-only').eq(i);
            if( !item.prop('checked') ){
                chkAll.prop('checked', false);
                $('.btn-agree-all').prop('disabled', true).addClass('disabled');
                return false;
            }
            chkAll.prop('checked', true);
            $('.btn-agree-all').prop('disabled', false).removeClass('disabled');
        }

    });

    // 선택옵션 미동의 선택 시
    $('.agree-select-wrap .agree-each .radio-option-disagree').on('change', function(e){
        var wrap = $(this).closest('.agree-select-wrap');
        var chkAll = wrap.find('.check-all');
        
        if (e.target.checked) chkAll.prop('checked', false);
    });

    // 체크 상태에 따른 버튼 활성화
    $('.chk-to-btn').change(function(){
        var _this =$(this);
        var _target = $( _this.attr('data-target') );
        var chks = $('.chk-to-btn');

        for(var i = 0; i < chks.length; i++){
            var chk = chks.eq(i);
            if( !chk.prop('checked') ){
                _target.prop('disabled', true).addClass('disabled')
                return false;
            }
        }
        _target.prop('disabled', false).removeClass('disabled');
    });

    // 개별 동의를 다 눌렀을 때 - 최찬식 추가 2022-02.08
    $('[data-pub-check="content-agree-check"]').change(function(){
        const _this_list_all_lenght = $('[data-pub-check="content-agree-check"]').length;
        const _this_list_check_lenght = $('[data-pub-check="content-agree-check"]:checked').length;
        const chkAll = $('.agree-select-wrap .check-all');

        if(_this_list_all_lenght == _this_list_check_lenght){
            chkAll.prop("checked", true);
        }else{
            chkAll.prop('checked', false);
        }
    });
}

// 체크박스 전체 동의
export function checkAll(t, target){
    var _target = $('#'+target);
    var chk = t.checked;
    if( chk ){
        _target.find('.agree-each input[type="checkbox"]').prop('checked', true);
        _target.find('.agree-each input[type="radio"]').each(function(){
            if( $(this).val() == '1' ) $(this).prop('checked', true);
        });
    }
    else{
        _target.find('.agree-each input[type="checkbox"]').prop('checked', false);
        _target.find('.agree-each input[type="radio"]').each(function(){
            if( $(this).val() == '0' ) $(this).prop('checked', true);
        });
    }
}

// 체크박스 부분 동의
export function chkSub(target, val){
    var _target = $('#'+target);
    _target.find('input[type="checkbox"]').prop('checked', val);

    if(val == true) {
        $('#agree_option').find('input[type="radio"]').prop('checked', val);
    } else {
        $('#rdoAgreeOptioin1_1').prop('checked', true);
        $('#rdoAgreeRequired3_1').prop('checked', true);
    }

    if(val == false){
        //_target.find('input[type="checkbox"]').attr("disabled", true);
    }else{
        _target.find('input[type="checkbox"]').attr("disabled", false);
    }
}
    
//case for datepicker calendar accordion plugin
(function ($, win, doc) {
    'use strict';
    var pluginName = 'accordion';
    var defaults = {
        anchor: '[data-js=accordion-anchor]',
        item: '[data-js=accordion-item]',
        panel: '[data-js=accordion-panel]',
        activeClassName: 'is-active',
        onlySelfToggle: false,
        animateSpeed: 350,
        easingEffect: 'swing',
    };

    function Plugin(element, options) {
        this.el = element;
        this.name = pluginName;
        this.opts = $.extend({}, defaults, options);
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            var self = this;
            self.buildCache();
            self.bindEvents();
        },
        buildCache: function () {
            var self = this;
            self.$el = $(self.el);
            self.$item = self.$el.find(self.opts.item);
            self.$anchor = self.$el.find(self.opts.anchor);
            self.$panel = self.$el.find(self.opts.panel);
        },
        destroy: function () {
            var self = this;
            self.$el.removeData('plugin_' + self.name)
        },
        bindEvents: function () {
            var self = this;
            self.$anchor.off('click.' + pluginName).on('click.' + pluginName, function (e) {
                var $this = $(this);
                var $item = $this.closest(self.opts.item);
                var $siblingsItem = $item.siblings();
                var $panel = $item.find(self.opts.panel);
                var $siblingsPanel = $item.siblings().find(self.opts.panel);
                var $itemHasClass = $item.hasClass(self.opts.activeClassName);

                if (!self.opts.onlySelfToggle) self.closePanel($siblingsPanel, $siblingsItem);
                $itemHasClass ? self.closePanel($panel, $item) : self.openPanel($panel, $item);
            });
        },
        openPanel: function ($target, $parentItem) {
            var self = this;
            $parentItem.addClass(self.opts.activeClassName);
            $target.stop().slideDown({
                duration: self.opts.animatedSpeed,
                easing: self.opts.easingEffect
            });
        },
        closePanel: function ($target, $parentItem) {
            var self = this;
            $parentItem.removeClass(self.opts.activeClassName);
            $target.stop().slideUp({
                duration: self.opts.animatedSpeed,
                easing: self.opts.easingEffect
            });
        },
    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if ($.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName).destroy();
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options || $(this).data('options')));
            } else {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options || $(this).data('options')));
            }
        });
    };

    $(function () {
        $('[data-js=accordion]').accordion();
    });
})($, window, document);
    
$('.btn-home').click(function() {
    comPop.msg.confirmMain("계속하지 않고 메인화면으로 </br> 이동하시겠어요?", function (confirm) {
        if (confirm) {
            window.location.href="/";
        }
    });
});

$('.link-copy').click(function () {
    var tempElem = document.createElement('textarea');
    tempElem.value = 'https://www.teddy10.comPop' + localStorage.getItem('shnPathname');
    document.body.appendChild(tempElem);
    tempElem.select();
    document.execcomPopmand("copy");
    document.body.removeChild(tempElem);
    comPop.msg.warn('링크가 복사되었습니다.');
});


$('.js-click-modal').click(function () {
    var modalClass = $(this).attr('data-modal');
    $('.' + modalClass).show();
});

// close popup
$('.btn-close, .popup-bga').click(function(){
    $('.popup-wrap').hide();
});

//약관보기
$(".btn-view-terms").on('click', function () {

    var url = '';
    if($('input[name=insuranceTy]').val() === 'overseas') url = '/files/shinhan-overseas-tnc-202404.pdf';
    else if($('input[name=insuranceTy]').val() === 'longterm') url = '/files/shinhan-long-term-tnc-202404.pdf';
    else if($('input[name=insuranceTy]').val() === 'domestic') url = '/files/shinhan-domestic-tnc-202404.pdf';

    window.open(url, '_blank');
});

