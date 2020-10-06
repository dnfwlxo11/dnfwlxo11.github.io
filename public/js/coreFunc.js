function getBoxname(name) {
    var name = name.split(' ');
    var tab_menu_div = document.getElementsByClassName(name[1]);
    var tab_box_div = document.getElementsByClassName('tab_box');

    for (var i = 0; i < tab_menu_div.length; i++) {
        tab_menu_div[i] = tab_menu_div[i].classList.remove('on');
    }

    for (var i = 0; i < tab_box_div.length; i++) {
        tab_box_div[i].style.display = 'none';
        tab_box_div[i].classList.remove('on');
    }

    document.getElementsByClassName(name[0])[0].classList.add('on');

    var tmp = 'tab_box' + name[0][name[0].length - 1]
    document.getElementsByClassName(tmp)[0].style.display = 'block';
}

// Ajax 방식으로 데이터 보내기
function sendFilename_POST(url, data) {
    data = { 'data': data }
    data = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
}

// 쿠키 설정
function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + 24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString();
}

// 쿠키 가져오기
function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}

function getBox(num) {
    if (num==null)
        return;
        
    var tab_menu_div = document.getElementsByClassName('tab_menu_btn');
    var tab_box_div = document.getElementsByClassName('tab_box');

    for (var i = 0; i < tab_menu_div.length; i++) {
        tab_menu_div[i] = tab_menu_div[i].classList.remove('on');
    }

    for (var i = 0; i < tab_box_div.length; i++) {
        tab_box_div[i].style.display = 'none';
        tab_box_div[i].classList.remove('on');
    }

    document.getElementsByClassName('tab_menu_btn' + num)[0].classList.add('on');

    var tmp = 'tab_box' + num
    document.getElementsByClassName(tmp)[0].style.display = 'block';
}