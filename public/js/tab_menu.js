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
    //document.getElementsByClassName(name[0]).classList.add('on');

    var tmp = 'tab_box' + name[0][name[0].length - 1]
    document.getElementsByClassName(tmp)[0].style.display = 'block';
}