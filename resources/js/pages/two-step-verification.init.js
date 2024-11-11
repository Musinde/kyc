/*
Template Name: webadmin - Admin & Dashboard Template
Author: Themesdesign
Website: https://Themesdesign.com/
Contact: Themesdesign@gmail.com
File: two step verification Init Js File
*/


// move next
function moveToNext(elem, count) {
    if (elem.value.length > 0) {
        document.querySelector("#digit" + count + "-input").focus();
    }
}
var count = 1;
var value = document.querySelectorAll(".two-step");
value.forEach(function (el) {
    el.addEventListener('keyup', function (e) {
        if (count == 0) {
            count = 1;
        }
        if (e.keyCode === 8) {
            if (count == 5) {
                count = 3;
            }
            if (document.querySelector("#digit" + count + "-input"))
                document.querySelector("#digit" + count + "-input").focus();
            count--;
        } else {
            if (count > 0) {
                count++;
                if (document.querySelector("#digit" + count + "-input"))
                    document.querySelector("#digit" + count + "-input").focus();
            }
        }
    });
});