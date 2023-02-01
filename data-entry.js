var $addButton = $(".add_field_button");

// 1D
var aFieldName = "a[]";
var bFieldName = "b[]";
var cFieldName = "c[]";
var aQtyFieldName = "a_qty[]";
var bQtyFieldName = "b_qty[]";
var cQtyFieldName = "c_qty[]";
var $oneDfillOption = $('<select/>', {
        id: 'oneDfillOption'
    }).append(new Option("All", "1d_all"))
    .append(new Option("A", "1d_a"))
    .append(new Option("B", "1d_b"))
    .append(new Option("C", "a1d_c"));

// 2D
var abFieldName = "ab[]";
var bcFieldName = "bc[]";
var acFieldName = "ac[]";
var abQtyFieldName = "ab_qty[]";
var acQtyFieldName = "ac_qty[]";
var bcQtyFieldName = "bc_qty[]";
var $twoDfillOption = $('<select/>', {
        id: 'twoDfillOption'
    }).append(new Option("All", "2d_all"))
    .append(new Option("AB", "2d_ab"))
    .append(new Option("BC", "2d_bc"))
    .append(new Option("AC", "2d_ac"));

// 3D Tkt, 3D Box, 4D Tkt, 4D Box
var abcFieldName = "abc[]";
var abcQtyFieldName = "abc_qty[]";

// 5D Tkt
var abcdeFieldName = "abcde[]";
var abdecQtyFieldName = "abcde_qty[]";

var $div = $("<div>", {
    id: "custom_fields"
});
var $pageHeader = $(".page-header");
var $textArea = $("<textarea rows=10 cols=40/>", {
    id: 'textAreaField'
});
var $tktOption = $('<select/>', {
        id: 'tkt_option'
    })
    .append(new Option("Select", "select"))
    .append(new Option("1D Ticket", "1d_tkt"))
    .append(new Option("2D Ticket", "2d_tkt"))
    .append(new Option("3D Ticket", "3d_tkt"))
    .append(new Option("3D Box", "3d_box"))
    .append(new Option("4D Ticket", "4d_tkt"))
    .append(new Option("4D Box", "4d_box"))
    .append(new Option("5D Ticket", "5d_tkt"))
    .on('change', function () {
        var selected = this.value;
        $("#custom_fields_for_type").remove();
        var $divCustomFieldsForType = $("<div>", {
            id: "custom_fields_for_type"
        });
        $divCustomFieldsForType.appendTo($div);

        if (selected == "1d_tkt") {
            $textArea.appendTo($divCustomFieldsForType);
            $qtyTextBox.appendTo($divCustomFieldsForType);
            $oneDfillOption.appendTo($divCustomFieldsForType);
            $insertButton.appendTo($divCustomFieldsForType);
        } else if (selected == "2d_tkt") {
            $textArea.appendTo($divCustomFieldsForType);
            $qtyTextBox.appendTo($divCustomFieldsForType);
            $twoDfillOption.appendTo($divCustomFieldsForType);
            $insertButton.appendTo($divCustomFieldsForType);
        } else if (selected == "3d_tkt" || selected == "3d_box" || selected == "4d_tkt" || selected == "4d_box") {
            $textArea.appendTo($divCustomFieldsForType);
            $qtyTextBox.appendTo($divCustomFieldsForType);
            $insertButton.appendTo($divCustomFieldsForType);
        } else if (selected == "5d_tkt") {
            $textArea.appendTo($divCustomFieldsForType);
            $qtyTextBox.appendTo($divCustomFieldsForType);
            $insertButton.appendTo($divCustomFieldsForType);
        }
    });

var $qtyTextBox = $("<input/>", {
    type: 'text',
    id: "qty_input"
});

var checkLength = function (expLen, val) {
    var val = val.trim().replace(/\D/g, '');
    var valtemp = val;
    if (valtemp.length > expLen) {
        val = valtemp.substring(0, expLen);
        alert("Value " + valtemp + " is wrong and replaced to " + val)
    } else if (valtemp.length < expLen) {
        alert("Value " + valtemp + " is wrong");
    }
    // alert('cl - ' + val);
    return val;
}

var $divSection = $("#custom_fields");
var $insertButton = $('<button/>', {
    text: 'Add Data',
    id: 'addData',
    click: function () {
        var value = $textArea.val();
        var selectedTktOption = $tktOption.val();
        var qty = $qtyTextBox.val();
        console.log(value);
        console.log(selectedTktOption);
        var first = true;
        var valuesCleaned = [];
        value.split(/[-\s\n,.\/]/).forEach(function (val, index) {
            var formatted = parseInt(val.trim());
            if (val.trim().length > 0 && !isNaN(formatted)) {
                valuesCleaned.push(val.trim());
            }
        });

        var values = valuesCleaned.forEach(function (val, index) {
            var formatted = parseInt(val.trim());
            if (val.trim().length > 0 && !isNaN(formatted)) {
                if (first) {
                    first = false;
                } else {
                    $addButton.click();
                }
                if (selectedTktOption == '1d_tkt') {
                    var selectedOption = $("#oneDfillOption").val();
                    val = checkLength(1, val);
                    if ("1d_a" == selectedOption) {
                        $("[name='" + aFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + aQtyFieldName + "']").eq(index).val(qty);
                    } else if ("1d_b" == selectedOption) {
                        $("[name='" + bFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + bQtyFieldName + "']").eq(index).val(qty);
                    } else if ("1d_c" == selectedOption) {
                        $("[name='" + cFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + cQtyFieldName + "']").eq(index).val(qty);
                    } else {
                        $("[name='" + aFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + cFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + bFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + aQtyFieldName + "']").eq(index).val(qty);
                        $("[name='" + cQtyFieldName + "']").eq(index).val(qty);
                        $("[name='" + bQtyFieldName + "']").eq(index).val(qty);
                    }
                } else if (selectedTktOption == '2d_tkt') {
                    val = checkLength(2, val);
                    var selectedOption = $("#twoDfillOption").val();
                    if ("2d_ab" == selectedOption) {
                        $("[name='" + abFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + abQtyFieldName + "']").eq(index).val(qty);
                    } else if ("2d_bc" == selectedOption) {
                        $("[name='" + bcFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + bcQtyFieldName + "']").eq(index).val(qty);
                    } else if ("2d_ac" == selectedOption) {
                        $("[name='" + acFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + acQtyFieldName + "']").eq(index).val(qty);
                    } else {
                        $("[name='" + abFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + acFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + bcFieldName + "']").eq(index).val(val.trim());
                        $("[name='" + abQtyFieldName + "']").eq(index).val(qty);
                        $("[name='" + acQtyFieldName + "']").eq(index).val(qty);
                        $("[name='" + bcQtyFieldName + "']").eq(index).val(qty);
                    }

                } else if (selectedTktOption == "3d_tkt" || selectedTktOption == "3d_box" || selectedTktOption == "4d_tkt" || selectedTktOption == "4d_box") {
                    len = selectedTktOption == "3d_tkt" || selectedTktOption == "3d_box" ? 3 : 4;
                    val = checkLength(len, val);
                    $("[name='" + abcFieldName + "']").eq(index).val(val.trim());
                    $("[name='" + abcQtyFieldName + "']").eq(index).val(qty);
                } else if (selectedTktOption == '5d_tkt') {
                    val = checkLength(5, val);
                    $("[name='" + abcdeFieldName + "']").eq(index).val(val.trim());
                    $("[name='" + abdecQtyFieldName + "']").eq(index).val(qty);
                }
            } else {
                console.log("NAN : " + formatted + " - " + index);
            }
        });
    }
});
$divSection.remove();
$div.insertAfter($pageHeader);
$tktOption.appendTo($div);
