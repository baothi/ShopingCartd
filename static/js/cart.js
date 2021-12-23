function add_product_card(obj,id,csrf_token,car_id){
    console.log("1111111111111111111111111111 js replace");
	var color = '';
    var size = '';
    var price = $('div.price_'+car_id).text().replace("$", "");
    var quantity = $('#quantity_'+car_id).val();
    // var total = $('div.total').text().replace("$", "");
    // var total_price = $('div.total_price').text().replace("$", "");
    // var tax = $('div.tax').text().replace("$", "");
    // var grand_total = $('div.grand_total').text().replace("$", "");
    $(obj).parent().parent().parent().parent().find(".product_variant span").each(function(){
        if($(this).html().indexOf('Color') > -1){
            color = $(this).html().split(': ')[1];
        }
        else if($(this).html().indexOf('Size') > -1){
            size = $(this).html().split(': ')[1];
        }
    });
        console.log('price : ', car_id)
        console.log('quantity :',quantity)
        // console.log('total :',total)
        var serializedData = $(this).serialize() + "&csrfmiddlewaretoken="+ csrf_token + "&color="+color+ "&size="+size;
    $.ajax({
            type: 'POST',
            url: 'add_cart/'+id+'/',
            data: serializedData,
            success: function (response) {
                // // console.log(response)
                // total = price*quantity;
                // $('div.total').text('$'+total);
                // total_price = total_price+total;
                // $('div.total_price').text('$'+total_price);
                // grand_total = total_price+tax;
                // $('div.grand_total').text('$'+grand_total)
            }
        });
}