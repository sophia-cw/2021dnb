$(function(){
    // 勾同意填資料 (同意即為A版)
    $('body').on('change', '#policy', function () {
        if ($('#policy').is(':checked')) {
            $('.errorPolicy').removeClass('show')
            $('#00N2w00000Hh3Kk').val('A版')
            $('#00N2w00000Hh3NF').val('同意')
        } else {
            $('.errorPolicy').addClass('show')
            $('#00N2w00000Hh3Kk').val('')
            $('#00N2w00000Hh3NF').val('')
        }
    })

    // jQuery預填活動類型
    $("#00N2w00000Hh3MW").val("");
    // 取得日期
    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

    // jQuery預填報名日期為當日日期
    $("#00N2w00000Hh3C1").val(strDate);


    // 填寫時移除error
    $('#last_name').focus(function () {
        $('.errorName,.errorSubmit').removeClass('show')
    })
    $('#email').focus(function () {
        $('.errorMail,.errorSubmit,.blankEmail').removeClass('show')
    })
    $('#company').focus(function () {
        $('.errorCompany,.errorSubmit').removeClass('show')
    })
    $('#note1').focus(function () {
        $('.blanknote1,.errorSubmit').removeClass('show')
    })
    $('#note2').focus(function () {
        $('.blanknote2,.errorSubmit').removeClass('show')
    })
    $('.department').focus(function () {
        $('.departmentBlank,.errorSubmit').removeClass('show')
    })
    $('#title').focus(function () {
        $('.errortitle,.errorSubmit').removeClass('show')
    })
    $("input[name='radio']").click(function () {
        $('.blanknote3,.errorSubmit').removeClass('show')
    })
    $('#mobile').focus(function () {
        $('.blankMobile,.errorSubmit,.errorMobile').removeClass('show')
    })
    $('#policy').focus(function () {
        $('.error.errorPolicy').removeClass('show')
    })

    $('#policy').click(function () {
        $('.error.errorPolicyNotAgree').removeClass('show')
        if ($('#policy').is(':checked')) {
            $('#policy').prop("checked", true);
            $('#policyNotAgree').prop("checked", false);
            $('.error.errorPolicy').addClass('show')
        } else {
            $('#policy').prop("checked", false);
            $('#policyNotAgree').prop('checked', true);
            $('.error.errorPolicy').removeClass('show')
        }
    })

    $('#policyNotAgree').click(function () {
        $('.error.errorPolicy').removeClass('show')
        if ($('#policyNotAgree').is(':checked')) {
            $('#policyNotAgree').prop("checked", true);
            $('#policy').prop("checked", false);
            $('.error.errorPolicyNotAgree').addClass('show')
        } else {
            $('#policyNotAgree').prop("checked", false);
            $('#policy').prop('checked', true);
            $('.error.errorPolicyNotAgree').removeClass('show')
        }
    })

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (!regex.test(email)) {
            return false
        } else {
            return true
        }
    }
    function checkMobile(mobile) {
        var MobileReg = /^(09)[0-9]{8}$/;
        if (!MobileReg.test(mobile)) {
            return false
        } else {
            return true
        }
    }

    $('#sendBtn').click(function () {

        var last_name = $('#last_name').val().trim()
        var email = $('#email').val().trim()
        var company = $('#company').val().trim()
        var department = $('.department').val().trim()
        var title = $('#title').val().trim()
        var mobile = $('#mobile').val().trim()
        var policy = $('#policy').val()

        var $Emailchecking2 = IsEmail($('#email').val().trim())
        var $mobile = checkMobile($('#mobile').val().trim())

        //備註欄位-------------------start
        var note1 = $('#note1').val().trim()
        var note2 = $('#note2').val().trim()
        var note3 = $("input[name='radio']:checked").val();
        var note = '公司統編：' + note1 + '\n' + '\n' + '公司電話：' + note2 + '\n' + '\n' + '是否為2021年鄧白氏中小企業菁英獎得獎企業：' + note3
        $('#00N2w00000Hh3Mv').val(note)
        //備註欄位-------------------end

        //備註欄位需加入!=='' （ note1 !== '' && note2 !== '' ）
        if (email !== '' && $Emailchecking2 == true && mobile !== '' && $mobile == true && last_name !== '' &&
            company !== '' && note1 !== '' && note2 !== '' && note3 !== undefined && $('#policy').is(':checked')) {
            $('#sfBtn').click()
            $('.sf_form').hide()
            $('.tks').show()
        } else {

            //姓名驗證是否填寫
            if (last_name == '') {
                $('.errorName,.errorSubmit')
                    .addClass('show')
                    .addClass('flash')
            }

            //手機驗證是否填寫/是否填寫正確
            if ($mobile == false && mobile !== '') {
                //回傳true是對的mobile
                if ($mobile == false) {
                    $('.errorMobile,.errorSubmit').addClass('show')
                } else {
                    $('.error.blankMobile')
                        .removeClass('show')
                        .removeClass('flash')
                    $('.error.blankMobile')
                        .addClass('flash')
                        .addClass('flash')
                }
            } else {
                if (mobile == '') {
                    $('.error.blankMobile')
                        .addClass('show')
                        .addClass('flash')
                } else {
                    //true
                    $('.errorMobile,.errorSubmit').removeClass('show')
                    $('.error.blankMobile')
                        .removeClass('show')
                        .removeClass('flash')
                    $('.error.blankMobile')
                        .removeClass('show')
                        .removeClass('flash')
                }
            }

            //信箱驗證是否填寫/是否填寫正確
            if ($Emailchecking2 == false && email !== '') {
                //回傳true是對的信箱
                if ($Emailchecking2 == false) {
                    $('.errorMail,.errorSubmit').addClass('show')
                } else {
                    $('.error.blankEmail')
                        .removeClass('show')
                        .removeClass('flash')
                    $('.error.blankEmail')
                        .addClass('flash')
                        .addClass('flash')
                }
            } else {
                if (email == '') {
                    $('.error.blankEmail')
                        .addClass('show')
                        .addClass('flash')
                } else {
                    $('.errorMail,.errorSubmit').removeClass('show')
                    $('.error.blankEmail')
                        .removeClass('show')
                        .removeClass('flash')
                    $('.error.blankEmail')
                        .removeClass('show')
                        .removeClass('flash')
                }
            }

            //公司是否填寫
            if (department == '') {
                $('.departmentBlank,.errorSubmit')
                    .addClass('show')
                    .addClass('flash')
            }

            //所屬部門是否填寫
            if (company == '') {
                $('.errorCompany,.errorSubmit')
                    .addClass('show')
                    .addClass('flash')
            }


            //職稱是否填寫
            if (title == '') {
                $('.errortitle,.errorSubmit')
                    .addClass('show')
                    .addClass('flash')
            }


            //公司統編是否填寫
            if (note1 == '') {
                $('.blanknote1,.errorSubmit')
                    .addClass('show')
                    .addClass('flash')
            }

            //公司電話是否填寫
            if (note2 == '') {
                $('.blanknote2,.errorSubmit')
                    .addClass('show')
                    .addClass('flash')
            }

            //是否為2021年鄧白氏中小企業菁英獎得獎企業是否填寫
            if (note3 == undefined) {
                $('.blanknote3,.errorSubmit')
                    .addClass('show')
                    .addClass('flash')
            }

            //個資聲明驗證是否勾選
            if (!$('#policy').is(':checked')) {
                $('.errorPolicy,.errorSubmit')
                    .addClass('show')
                    .addClass('flash')
                    $('.error.errorPolicy').addClass('show')
            }
            if (!$('#policyNotAgree').is(':checked')) {
                $('.error.errorPolicyNotAgree').removeClass('show')
            }else{
                $('.error.errorPolicy').removeClass('show')
            }

            return false
        }

        // 如果必填欄位都過了 才會到這邊
        if(status){
            // 按下salesforce的按鈕
            $("#sfBtn").click();
            // 打包 要的資料，將這邊的名稱帶入gs檔裡
            var data = {
                'last_name': last_name,
                'email' : email,
                'company': company,
                'note1': note1,
                'department': department,
                'title': title,
                'note2': note2,
                'mobile': mobile,
                'note3': note3,
                'policy': policy,
            }
            // 呼叫 send ajax function
            send(data);
            // $('.sf_form').hide();
            $(".tks").show();
        }
    });
})

// 送資料去googlesheet
function send(data){
    $.ajax({
        // 這邊用get type
        type: "get",
        // api url - google appscript 產出的 url，sheet：https://docs.google.com/spreadsheets/d/16iIiHABFmhLkGofCsOBGa-8MuHdj63jKtClOi0Za6Lo/edit#gid=0
        url: "https://script.google.com/macros/s/AKfycbzM-s-uwqjotwGaJEr7lBeKp_iUMWVYhgmgEtKR03EGqGkskA9b/exec",
        // 剛剛整理好的資料帶入
        data: data,
        // 資料格式是JSON 
        dataType: "JSON",
        // 成功送出 會回頭觸發下面這塊感謝
        success: function (response) {
        // console.log(response);
        // alert('感謝，您已完成訂閱!');
        }
    });
}