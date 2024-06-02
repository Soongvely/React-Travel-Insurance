import $ from 'jquery';
import {comPop, validation, allowOnlyNumber, onlyNum, apiOneday} from './common.js';
import {isEmpty} from 'lodash';
import { comUtil } from './util.js';

// 해외여행 > 자녀 추가
var cpCount     = 0;  // id 에 부여하기 위한 숫자, 순차적으로 증가
var cpViewCount = 0;  // 현재 자녀 수를 확인하기 위한 숫자, 추가 시 +1, 삭제 시 -1
var cpViewMax   = 50; // 쵀대 자녀 수
var selectedCmp   = []; // 마이 Teddy 동반자

var inInsuranceType = $('[name="insuranceTy"]');
var inPurposeCd = $('[name="purposeCd"]');
var inCountryCd = $('[name="nationCd"]');

var importedSubscribers = [];
var shnPathname = localStorage.getItem('shnPathname');
const moment = require('moment');

$(document).ready(function () {
    //JoinJs.init();
});

const JoinJs = {
    init: () => {

        // show product details
        $('.left-pdt-details').each(function() {
            $(this).hide();
        });
        $('.left-pdt-details.' + $('input[name=insuranceTy]').val()).show();

        if ($('input[name=birthRep]').value.length === 0) {
            $('input[name=birthRep]').focus();
        }

        // $('.btn-home').click(function() {
        //     comPop.msg.confirmMain("계속하지 않고 메인화면으로 </br> 이동하시겠어요?", function (confirm) {
        //         if (confirm) {
        //             window.location.href="index.html";
        //         }
        //     });
        // });

        $('.btn-before').click(function () {
            //cmm.goTo(shnPathname);
        });

        var inBirthRep = $('.onlynumber');
        inBirthRep.on({
            'change keyup input paste': function (e) {
                validation.cleanInput(e, 'NUM', true);
            },
            'blur': function (e) {
            }
        });

        $(document).on('keyup input', 'input[type=tel]', function () {
            if ($(this).val().length === 8) {
                /*
                if ($(this).attr('name') === 'birthRep') {
                    var _ossno = $(this).parent().parent().find('.txtInsrdNameSsno').val();
                    if(_ossno != undefined && _ossno != '') {
                        var _nwg = $(this).parent().parent().find('input[name=rdoInsrdGender]:checked').val();
                        var _nwb = $(this).val();
                        var _nbr = _nwb.substr(2, 6);
                        $(this).parent().parent().find('.txtInsrdNameSsno').val( _nbr + _nwg + _ossno.substr(7, 6) );
                    }
                }
                else {
                    var _ossno = $(this).parent().parent().find('.txtNameSsno').val();
                    if(_ossno != undefined && _ossno != '') {
                        var _nwg = $(this).parent().parent().find('input[class=rdoCompanionGender]:checked').val();
                        var _nwb = $(this).val();
                        var _nbr = _nwb.substr(2, 6);
                        $(this).parent().parent().find('.txtNameSsno').val( _nbr + _nwg + _ossno.substr(7, 6) );
                    }
                }
                */
                //JoinJs.checkBtnDisabled('', '');
            } else {
                //JoinJs.checkBtnDisabled('force', '');
            }
        });

        $(document).on('click', 'input[type=radio][name=rdoInsrdGender], input[type=radio][class=rdoCompanionGender]', function () {
            /*
            if ($(this).attr('name') === 'rdoInsrdGender') {
                var _ossno = $(this).parent().parent().find('.txtInsrdNameSsno').val();
                if(_ossno != undefined && _ossno != '') {
                    var _nwg = $(this).val();
                    var _nwb = $(this).parent().parent().parent().find('.birthRep').val();
                    var _nbr = _nwb.substr(2, 6);
                    $(this).parent().parent().find('.txtInsrdNameSsno').val( _nbr + _nwg + _ossno.substr(7, 6) );
                }
            }
            else {
                var _ossno = $(this).parent().parent().find('.txtNameSsno').val();
                if(_ossno != undefined && _ossno != '') {
                    var _nwg = $(this).val();
                    var _nwb = $(this).parent().parent().find('.txtCompanionBirth').val();
                    var _nbr = _nwb.substr(2, 6);
                    $(this).parent().parent().find('.txtNameSsno').val( _nbr + _nwg + _ossno.substr(7, 6) );
                }
            }
            */
            //JoinJs.checkBtnDisabled('', '');
        });

        // Companions excel file import
        $(".btn-download-sample-import").on('click', function () {
            var url = window.location.protocol + "//" + window.location.host + "/files/teddyx_insu_form.xlsx";
            // var url = window.location.protocol + "//" + window.location.host + "/files/" + (inInsuranceType !== 'longterm' ? 'teddyx_insu_form' : 'teddyx_insu_form_overseas') + ".xlsx";
            window.open(url, '_blank');
        });

        /*
        document.querySelector('.excel-btn').addEventListener('click', function(){
            document.querySelector('.excel-popup').style.display = 'block';
            $('.upload_confirmation').remove();
        });
        document.querySelector('.close').addEventListener('click', function(){
            document.querySelector('.excel-popup').style.display = 'none';
        });
        document.querySelector('.excel-popup .popup-background').addEventListener('click', function(){
            document.querySelector('.excel-popup').style.display = 'none';
        });
        */

        $('#excel_file').change(function (file) {

            $('.add-companion').hide();
            $('.upload_confirmation').remove();

            if (this.files[0]) {
                var file = this.value;
                var fsize = this.files[0].size;
                var ext = file.split(".");
                ext = ext[ext.length-1].toLowerCase();
                var arrayExtensions = ["xls", "xlsx"];

                if (arrayExtensions.lastIndexOf(ext) == -1) {
                    comPop.msg.info('엑셀 파일 형식만 업로드 해주세요.');
                    $("#excel_file").val("");
                    return false;
                }

                if (fsize > 2097152) { /*1048576-1MB(You can change the size as you want)*/
                comPop.msg.info('파일 크기가 너무 큽니다!<br>2MB 이하로 올려주세요.');
                    $("#excel_file").val("");
                    return false;
                }
            }
            else return false;

            /*this.fnUploadSubscribersList().done(function (result) {
                var str = '<div class="upload_confirmation">';
                var error = 0;

                if (result.import > 0) {
                    $(result.items).each(function (idx, ele) {
                        if((ele.indexOf('오류') > 0) || (ele.indexOf('벗어') > 0)) {
                            str += "<p class='error'>" + ele + "</p>";
                            error += 1;
                        }
                        else {
                            str += '<p>' + ele + '</p>';
                        }
                    });
                    str += '</div>';

                    if (error == 0) {
                        $('.btn-save-excel-list').removeClass('disabled');
                        importedSubscribers = result;
                    }
                }
                else {
                    $(result.errors).each(function (idx, ele) {
                        str += "<p class='error'>" + ele + "</p>";
                    });
                    str += '</div>';
                    $('.btn-save-excel-list').removeClass('disabled').addClass('disabled');
                }

                $('.upload_confirmation').remove();
                $('.q-scrollarea_content').append( str );
                document.getElementById("subscribers_list_excel").reset();
            });*/
        });

        $('.btn-save-excel-list').on('click', function () {

            if ($(this).hasClass('disabled')) {
                return
            }

            $('.upload_confirmation').remove();
            $('#companion_list').html('');

            var result = importedSubscribers;

            // find if 가입자 정보 is filled or not
            var sl = 0;
            // if ($('#birthRep').val() == '') {
            sl = 1;
            $('#birthRep').val( result.list[0].birth );
            if(result.list[0].gender == 1) $("#rdoInsrdGender_1").prop("checked", true);
            else $("#rdoInsrdGender_2").prop("checked", true);
            $("#txtInsrdNameKorean").val( result.list[0].nameKor );
            $("#txtInsrdNameEnglish").val( result.list[0].nameEng );
            $("#txtInsrdIsKorean").val( result.list[0].isKorean );
            // $("#txtInsrdNameSsno").val( result.list[0].ssno );
            // }

            cpCount = 0;
            cpViewCount = 0;

            for (var i = sl, j = 0; i < result.items.length; i++, j++) {
                cpCount++;
                cpViewCount++;
                var wrap = $('#companion_list');
                var temp = $('#template_child_info');
                var html = temp.html().replace(/\{no\}/gi, cpCount);
                wrap.append( html );

                var inBirthRep = $('.onlynumber');
                inBirthRep.on({
                    'change keyup input paste': function (e) {
                        validation.cleanInput(e, 'NUM', true);
                    },
                    'blur': function (e) {
                    }
                });

                $("#txtCompanionBirth_" + (j+1)).val( result.list[i].birth );
                if(result.list[i].gender == 1) $("#rdoCompanionGender_" + (j+1) + "_1").prop("checked", true);
                else $("#rdoCompanionGender_" + (j+1) + "_2").prop("checked", true);
                $("#txtNameKorean_" + (j+1)).val( result.list[i].nameKor );
                $("#txtNameEnglish_" + (j+1)).val( result.list[i].nameEng );
                $("#txtIsKorean_" + (j+1)).val( result.list[i].isKorean );
                // $("#txtNameSsno_" + (j+1)).val( result.list[i].ssno );
            }

            $('.btn-close').trigger('click');
            // $('.excel-popup').hide();
            // document.querySelector('.excel-popup').style.display = 'none';
            $('.btn-save-excel-list').removeClass('disabled').addClass('disabled');
            JoinJs.checkBtnDisabled('', '');

            $(".scrollarea_container").animate({scrollTop: $('.scrollarea_container .contents').height()}, 500);

        });

    },

    addCompanion: (id) => {
        $('.excel-btn').hide();

        // 최대 자녀 수에 도달하면 동작 금지
        if (cpViewCount == cpViewMax) return false;

        cpCount++;
        cpViewCount++;
        var wrap = $('#' + id);
        var temp = $('#template_child_info');
        var html = temp.html().replace(/\{no\}/gi, cpCount);
        wrap.append(html);

        // 해외여행 > 자녀 추가 스택 애니메이션
        this.addCompanionStack(id);

        // allowOnlyNumber('input.onlynumber');
        var inBirthRep = $('.onlynumber');
        inBirthRep.on({
            'change keyup input paste': function (e) {
                validation.cleanInput(e, 'NUM', true);
            },
            'blur': function (e) {
            }
        });

        // 해외여행 > 자녀 수 체크 후 추가버튼 제어, 순서 텍스트 변경
        this.chkCompanion(id);
    }

    // 해외여행 > 자녀 추가 스택 애니메이션
    , addCompanionStack: (id) => {
        var wrap = $('#' + id);
        var item = wrap.find('> div.name-birth-form-after-list').eq(0);
        var itemH = item.outerHeight();
        var st = $('.scrollarea_container .contents').height();

        wrap.css({top: -itemH});
        wrap.stop().animate({top: 0}, 500);
        item.stop().fadeIn(500);

        var _time = 500;
        $('.scrollarea_container').stop().animate({scrollTop: st}, _time);
    }

    // 해외여행 > 자녀 수 체크 후 추가버튼 제어, 순서 텍스트 변경
    , chkCompanion: (id) => {
        var wrap = $('#' + id);
        var items = wrap.find('> div.name-birth-form-after-list');

        // 추가 버튼 제어
        if (cpViewCount == cpViewMax) {
            $('.btn-more').addClass('lock').prop('disabled', true);
        } else {
            $('.btn-more').removeClass('lock').prop('disabled', false);
        }

        // 자녀 목록 순서 텍스트 변경
        for (var i = items.length; i > 0; i--) {
            var item = items.eq(items.length - i);
            var cnt = items.length - i + 1;
            item.find('.cp-no').text(cnt);
        }

        allowOnlyNumber('input.onlynumber');

        JoinJs.checkBtnDisabled(false);
    }

    // 해외여행 > 자녀 삭제
    , delCompanion: (t, id) => {
        cpViewCount--;
        $(t).closest('.name-birth-form-after-list').remove();

        // 해외여행 > 자녀 수 체크 후 추가버튼 제어, 순서 텍스트 변경
        this.chkCompanion(id);

        var deletedCno = $(t).closest('.form-input').find('.input-group input[type=tel]').data('cno');
        if(deletedCno != undefined && $.inArray(deletedCno, selectedCmp) > -1) {
            $('.have_comp ul li').each(function () {
                if ($(this).find('input[type=checkbox]').data('cno') == deletedCno) {
                    $(this).find('input[type=checkbox]').prop('checked', false);
                }
            });
            selectedCmp.splice($.inArray($(this).data('in'), selectedCmp), 1);
        }

        JoinJs.checkBtnDisabled('', '');

        if($('.companion-card').length === 0) {
            $('.add-companion, .excel-btn').show();
        }
    }

    , checkBtnDisabled: (force, showError, obj) => {
        var insrdList = force == 'force' ? true : JoinJs.getInsrdList(showError == 'show' ? true : false, obj);
        if (force || insrdList == false || insrdList.length != cpViewCount + 1) {
            $('.btn-next').addClass('disabled');
        } else {
            $('.btn-next').removeClass('disabled');
        }
    }

    , getInsrdList: (showError, obj) => {
        debugger;
        var insrdList = [];
        var birth, gender, favorite;

        birth = $('#birthRep').value;
        gender = $('input[name="rdoInsrdGender"]:checked').value;
        favorite = 'N';
        var stDt = moment($('#startDate').val()).format('YYYYMMDD');
        var insrd = {
            manAge: moment().diff(moment(birth,'YYYYMMDD'), 'years'),
            insAge: Math.round(moment(stDt, 'YYYYMMDD', true).diff(moment(birth, 'YYYYMMDD'), 'years', true)),
            favorite: favorite,
            type: 'p',
        }

        birth = $('#birthRep').value;
        if (!JoinJs.checkBirth(birth, 'p', showError, '가입자')) {
            return false;
        }
        insrd['birth'] = birth;

        if (gender === undefined) {
            if (showError) comPop.msg.warn("가입자 성별을 선택해주세요.");
            return false;
        }
        insrd['gender'] = gender;
        insrd['nameKor'] = $('#txtInsrdNameKorean').value !== null ? $('#txtInsrdNameKorean').value : '';
        insrd['nameEng'] = $('#txtInsrdNameEnglish').value !== null ? $('#txtInsrdNameEnglish').value : '';
        insrd['isKorean'] = $('#txtInsrdIsKorean').value !== null ? $('#txtInsrdIsKorean').value : '';
        // insrd['ssno'] = $('#txtInsrdNameSsno').value !== null ? $('#txtInsrdNameSsno').value : '';

        insrdList.push(insrd);

        var isValidList = true;
        $.each($('.name-birth-form-after-list'), function () {
            var cpidx = $(this).data('idx');
            var cpno = $(this).find('.cp-no').text();
            birth = $(this).find($('.txtCompanionBirth')).value;
            gender = $(this).find($('.rdoCompanionGender:checked')).value;

            // age
            if (!JoinJs.checkBirth(birth, 'c', showError, '동반자(' + cpno + ')')) {
                isValidList = false;
                return false;
            }

            // gender
            if (gender == undefined) {
                if (showError) comPop.msg.warn('동반자(' + cpno + ') 성별을 선택해주세요.');
                isValidList = false;
                return false;
            }

            insrd = {
                birth: birth,
                manAge: moment().diff(moment(birth,'YYYYMMDD'), 'years'),
                // nManAge: moment(stDt, 'YYYYMMDD', false).diff(moment(birth, 'YYYYMMDD'), 'years', false),
                insAge: Math.round(moment(stDt, 'YYYYMMDD', true).diff(moment(birth, 'YYYYMMDD'), 'years', true)),
                gender: gender,
                favorite: favorite,
                type: 'c',
                nameKor: $(this).find($('.txtNameKorean')).value !== null ? $(this).find($('.txtNameKorean')).value : '',
                nameEng: $(this).find($('.txtNameEnglish')).value !== null ? $(this).find($('.txtNameEnglish')).value : '',
                isKorean: $(this).find($('.txtIsKorean')).value !== null ? $(this).find($('.txtIsKorean')).value : '',
                // ssno: $(this).find($('.txtNameSsno')).value !== null ? $(this).find($('.txtNameSsno')).value : '',
            }

            insrdList.push(insrd);
        });

        if (isValidList)
            return insrdList;
        else
            return false;
    }

    , validNameKor: (name, showError, dmname) => {
        var value = $('#'+name).val().trim();
        var errorMsg = "";

        if (isEmpty(errorMsg) && value.length < 2) {
            errorMsg = dmname + " 한글 이름은 두자이상 입력해주세요.";
        }

        if (validation.isKorean(value)) {
            if (isEmpty(errorMsg) && !validation.personKorName(value)) {
                errorMsg = dmname + " 한글 이름을 정확히 입력해 주세요.";
            }
            if (isEmpty(errorMsg) && validation.personKorName(value)) { //&& !cmm.getByte(value, 50)
                errorMsg = dmname + " 한글이름은25자까지 입력 가능합니다.";
            }
        }
        if (value.indexOf(" ") > -1 && !validation.personEngName(value)) {
            errorMsg = dmname + " 띄어쓰기 없이 입력해주세요.";
        }

        if (!validation.personKorName(value)) {
            if (value.indexOf(" ") > -1) {
                errorMsg = dmname + " 띄어쓰기 없이 입력해주세요.";
            } else {
                errorMsg = dmname + " 이름은 한글만 입력 가능합니다.";
            }
        }

        if (!isEmpty(errorMsg)) {
            if (showError) comPop.msg.info(errorMsg);
            return false;
        }

        return true;
    }

    , checkBirth: (ymd, type, showError, dmname) => {
        if (ymd == '' || ymd == undefined) {
            if (showError) comPop.msg.warn(dmname + " 생년월일을 입력하세요.");
            return false;
        }

        if (ymd.length != 8 || !moment(ymd,'YYYYMMDD', true).isValid()) {
            if (showError) comPop.msg.warn(dmname + " 생년월일이 올바르지 않습니다. 8자리(YYYYMMDD)로 입력해 주세요.");
            return false;
        }

        if (moment().diff(moment(ymd, 'YYYYMMDD'), 'days', true) < 0) {
            if (showError) comPop.msg.warn(dmname + " 생년월일을 올바르게 입력해주세요.");
            return false;
        }

        var stDt = moment($('#start-input').attr('data-time')).format('YYYYMMDD');
        // var valid = (moment(stDt, 'YYYYMMDD', true).isAfter(moment(ymd, 'YYYYMMDD', true)));
        // //// var valid = moment(ymd,'YYYYMMDD', true).isValid();
        // if (!valid) {
        //     if (showError) comPop.msg.warn(dmname + " 생년월일이 올바르지 않습니다. 8자리(YYYYMMDD)로 입력해 주세요.");
        //     return false;
        // }

        //// var age = moment(stDt, 'YYYYMMDD', false).diff(moment(ymd, 'YYYYMMDD'), 'years', false);
        var age = moment().diff(moment(ymd,'YYYYMMDD'), 'years');
        var insurAge = Math.round(moment(stDt, 'YYYYMMDD', true).diff(moment(ymd, 'YYYYMMDD'), 'years', true));
        var minAgeLmt = ($('input[name=insuranceTy]').val() === 'longterm') ? ($('input[name="purposeCd"]').val() === 'work' ? 15 : 15) : 0;
        var maxAgeLmt = ($('input[name=insuranceTy]').val() === 'longterm') ? ($('input[name="purposeCd"]').val() === 'work' ? 69 : 78) : 99;

        //자녀 나이 제한
        if (type == 'p' && age < minAgeLmt) {
            if (showError) comPop.msg.warn(dmname + " 만 " + minAgeLmt + "세 이상부터 가입 가능합니다.");
            return false;
        } else if (age > maxAgeLmt) {
            if (showError) comPop.msg.warn(dmname + " 만 " + maxAgeLmt + "세까지 가입 가능합니다.");
            return false;
        }

        return true;
    }

    , validEmail: (name, showError, dmname) => {
        var value = $('#'+name).val().trim();
        var errorMsg = "";
        var	regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if (regExp.test(value)) {
            if (value.indexOf('@') > -1 && value.indexOf('.') > -1) {
                var valueArr = value.split('@');
                if (valueArr[0] > 64 || valueArr[1] > 255) {
                    errorMsg = dmname + " 이메일 주소 형식이 맞지 않습니다.";
                }
            } else {
                errorMsg = dmname + " 이메일 주소 형식이 맞지 않습니다.";
            }
        } else {
            errorMsg = dmname + " 이메일 주소 형식이 맞지 않습니다.";
        }

        if ( !isEmpty(errorMsg) ) {
            if (showError) comPop.msg.info(errorMsg);
            return false;
        }

        return true;
    }

    , validCellphone: (name, showError, dmname) => {
        var value = $('#'+name).val().trim();
        var errorMsg = "";

        var lengthCheck = 0;
        if ( value.substring(0,3) == "010" ) {
            lengthCheck = 11;
        } else {
            lengthCheck = 10;
        }

        if ( isEmpty(onlyNum(value)) ) {
            errorMsg = dmname + "의 전화번호를 입력 하세요.";
        } else if ( !validation.mobile(onlyNum(value)) || value.length != lengthCheck ) {
            errorMsg = dmname + " 휴대폰 번호 형식이 맞지 않습니다.";
        }

        if ( !isEmpty(errorMsg) ) {
            if (showError) comPop.msg.info(errorMsg);
            return false;
        }

        return true;
    }

    /*
    , fnUploadSubscribersList: () => {
        var def = $.Deferred();

        var param = new FormData();
        var files = $('#excel_file')[0].files[0];
        param.append('insurance_type', $('input[name=insuranceTy]').val());
        param.append('excel_file', files);
        param.append('start_date', $('input[name=startDate]').val());

        $.ajax({
            type: "POST",
            url: shnPathname + '/importSubscribersList',
            processData: false,
            contentType: false,
            data: param,
            success: function(data){
                def.resolve(data.body);
            },
            err: function(data){
                def.reject(data.header.message);
                fnErrorProc(data.header.message);
            }
        })

        return def.promise();
    }
    
    , fnSetStepParam: () => {
        var def = $.Deferred();
        var insrdList = JoinJs.getInsrdList();

        if (insrdList == false) {
            return false;
        }

        var param = new Object();
        param.sFmdt = $('input[name=startDate]').val();
        param.insrdList = insrdList;

        var joinInitInfo = JSON.parse(localStorage.getItem('joinInitInfo'));
        joinInitInfo.insrdList = insrdList;
        localStorage.setItem('joinInitInfo', JSON.stringify(joinInitInfo));

        apiOneday.call({
            data : param
            , url : shnPathname + '/join'
            , success : function(data) {
                def.resolve(data.body);
            }
            , failure : function(data) {
                def.reject(data.header.message);
                fnErrorProc(data.header.message);
            }
        });

        return def.promise();
    }
    */
}

export {JoinJs};

