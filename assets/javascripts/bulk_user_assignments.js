$(document).ready(function(){
    $('.toggle-link').toggle(function(){
        $(this).parent().parent().find('input[type=checkbox]').attr('checked','checked');
        $(this).val('uncheck all')
    },function(){
        $(this).parent().parent().find('input[type=checkbox]').removeAttr('checked');
        $(this).val('check all');        
    })
});