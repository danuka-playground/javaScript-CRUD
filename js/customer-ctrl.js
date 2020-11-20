/*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/

/*===============================================================================
 * Global Variables
 *===============================================================================*/

// Todo: add all global variable declaration here

var customers = [];
var selectedCustomer = null;
var selectedRaw = null;
var dd = '';
var pageSize = -1;
var current_page = 1;
var row = Math.ceil($("#tbl-customers").height()/$("#tbl-customers tr").height());
var pageCount = 0;
var current_page =1;
/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init(){
    // Todo: add the initialization code if any
}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/

// Todo: add all event listeners and handlers here

/*===============================================================================
 * Functions
 *===============================================================================*/
// Todo: add all functions

$("#btn-save").click(function (event){
    event.preventDefault();

    if(validate()){
        showTableFooter();
        if(!selectedCustomer){
            $("#tbl-customers tbody").append('<tr>\n' +
                '                       <td class="p">'+$("#txt-id").val()+'</td>\n' +
                '                       <td class="i">'+$("#txt-name").val()+'</td>\n' +
                '                       <td>'+$("#txt-address").val()+'</td>\n' +
                '                       <td><button type="button" id="table_button"><img src="img/trash.png" alt=""></button></td>\n' +
                '                   </tr>')


            customers.push({
                id:$("#txt-id").val(),
                name:$("#txt-name").val(),
                address:$("#txt-address").val()
            });

            $("#txt-id").val('');
            $("#txt-name").val('');
            $("#txt-address").val('');

            $("#txt-id").removeClass('is-valid');
            $("#txt-name").removeClass('is-valid');
            $("#txt-address").removeClass('is-valid');

            handlePagination();

        }else{
            selectedCustomer.name= $("#txt-name").val();
            selectedCustomer.address= $("#txt-address").val();
            selectedRaw[1].innerText = $("#txt-name").val();
            selectedRaw[2].innerText = $("#txt-address").val();
        }

        $("tbody button").click(function (){
            $(this).parents("tr").remove();
            showTableFooter();
        })
    }else {
        return ;
    }


});

$("tbody").on("click","tr",function (event){
    selectedRaw = this.children;
    console.log(this);

    var selected = $(this).hasClass("selected");
    $("#tbl-customers tr").removeClass("selected");
    if(!selected){
        $(this).addClass("selected");
    }

    $("#txt-id").val(selectedRaw[0].innerText);
    $("#txt-name").val(selectedRaw[1].innerText);
    $("#txt-address").val(selectedRaw[2].innerText);
    selectedCustomer = customers.find(function (c){
        return c.id === selectedRaw[0].innerText;
    })

})

$("tbody").on("click","tr",function (event){
    var selected = $(this).hasClass("selected");
    $("#tbl-customers tr").removeClass("highlight");
    if(!selected)
        $(this).addClass("highlight");
})

function showTableFooter(){
    $("table tbody tr").length > 0 ? $("table tfoot").addClass("hide"):$("table tfoot").removeClass("hide");
    console.log($("table tbody tr").length);
}

function clearSelection(){
    var row = $("#tbl-customers tbody").parents("tbody");
    console.log(row)
   /* for (var i = 0; i < row.length; i++) {
        row[i].removeClass('selected');
    }*/

    /*$("#txt-id").val = false;
    $("#txt-name").val('');
    $("#txt-address").val('');*/
}
function validate(){
    /* Object Literal {}, Array Literal [], RegExp Literal /expression/ */
    /* new Object(), new Array(), new RegExp() */

    var regExp = null;
    var validated = true;
/*

    $("#txt-id").removeClass('is-valid');
    $("#txt-name").removeClass('is-valid');
    $("#txt-address").removeClass('is-valid');

    if ($("#txt-address").val().trim().length < 3){
        $("#txt-address").addClass('is-invalid');
        $("#txt-address").select();
        validated = false;
    }
    regExp = /^[A-Za-z][A-Za-z .]{3,}$/;
    if (!regExp.test($("#txt-name").val())){
        $("#txt-name").addClass('is-invalid');
        $("#txt-name").select();
        validated = false;
    }

    regExp = /^C\d{3}$/;
    if (!regExp.test($("#txt-id").val())){
        $("#txt-id").addClass('is-invalid');
        $("helper-txt-id").removeClass('text-muted');
        $("helper-txt-id").addClass('invalid-feedback');
        $("helper-txt-id").select();
        validated = false;
    }
*/

    return validated;
}

function displayList(rows_per_page,page){
    $("#tbl-customers tbody").html('');
    page--;

    let start = rows_per_page*page;
    let end = start + rows_per_page;

}
function setUpPagination(){
    $("#tbl-customers tbody").html('');

    var pageCount = Math.ceil()
}
function handlePagination(){
    var h1 = /*$("#footer").height() + $("#pagination").height() +*/ 250;
    console.log(h1);
    console.log($("#tbl-customers tr").height());

    if($("#tbl-customers").height() > (innerHeight -h1)){
       pageCount++;
    }
}