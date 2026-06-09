$(function () {
    $.validator.addMethod("validatePassword", function (value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
    }, "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");

    $("#student-form").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,

        rules: {
            "msv": {
                required: true,
                minlength: 10,
                maxlength: 10,
            },

            "name": {
                required: true,
                minlength: 2,
                maxlength: 40,
            },

        },

        messages: {
            "msv": {
                required: "Bắt buộc nhập msv",
                minlength: "Phải nhập 10 ký tự",
                maxlength: "Phải nhập 10 ký tự",
            },

            "name": {
                required: "Bắt buộc nhập tên",
                minlength: "Phải nhập tối thiếu 2 ký tự",
                maxlength: "Được nhập tối đa 40 ký tự",
            }
        }
    })
})