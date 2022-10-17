$("#addTodo").click(function () {
    // テキストボックスの文字列を取得してタスクを追加する。
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    // テキストボックスの中身を空にする。
    $("input").val("");
})