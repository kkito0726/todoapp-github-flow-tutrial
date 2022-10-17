$("#addTodo").click(function () {
    // テキストボックスの文字列を取得してタスクを追加する。
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    // テキストボックスの中身を空にする。
    $("input").val("");
});

// チェックボックスがTrueになったとき線を引く
$(document).on("change", "input[type=checkbox]", function () {
    if ($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through");
        $(this).parent().css("color", "#ccc");
    } else {
        $(this).parent().css("text-decoration", "none");
        $(this).parent().css("color", "#000");
    }
});