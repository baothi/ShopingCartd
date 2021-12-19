function add_product_card(obj,id,csrf_token){
    console.log("1111111111111111111111111111");
	var color = '';
    var size = '';
    $(obj).parent().parent().parent().parent().find(".product_variant span").each(function(){
        if($(this).html().indexOf('Color') > -1){
            color = $(this).html().split(': ')[1];
        }
        else if($(this).html().indexOf('Size') > -1){
            size = $(this).html().split(': ')[1];
        }
    });
        console.log(color)
        console.log(size)
        var serializedData = $(this).serialize() + "&csrfmiddlewaretoken="+ csrf_token + "&color="+color+ "&size="+size;
    $.ajax({
            type: 'POST',
            url: 'add_cart/'+id+'/',
            data: serializedData,
            success: function (response) {
            }
        });
}