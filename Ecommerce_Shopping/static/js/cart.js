function add_product_card(obj,id,csrf_token,car_id){
    console.log("add_product_card")
    var color = '';
    var size = '';
    var price = $('div.price_'+car_id).text().replace("$", "");
    var total = $('div.total').text().replace("$", "");
    
    var grand_total = $('div.grand_total').text().replace("$", "");
    $(obj).parent().parent().parent().parent().find(".product_variant span").each(function(){
        if($(this).html().indexOf('Color') > -1){
            color = $(this).html().split(': ')[1];
        }
        else if($(this).html().indexOf('Size') > -1){
            size = $(this).html().split(': ')[1];
        }
    });
        
        // console.log('total :',total)
        var serializedData = $(this).serialize() + "&csrfmiddlewaretoken="+ csrf_token + "&color="+color+ "&size="+size;
    $.ajax({
        type: 'POST',
        url: 'add_cart/'+id+'/',
        data: serializedData,
        success: function (response) {
            var quantity = $('#quantity_'+car_id).val();
            total = eval(price)*eval(quantity);
            $('.total_'+car_id).text('$'+total);
            // calculate total
            var total_price = 0;
            $('.cart_table .linetotal').each(function(){
                total_price = eval(total_price) + eval($(this).text().replace('$',''));
            });
            $('div.total_price').text('$'+total_price);
            var tax = 0;
            tax = (2 * eval(total_price))/100
            $('div.tax').text('$'+tax);
            grand_total = eval(total_price)+eval(tax);
            $('div.grand_total').text('$'+grand_total)
        }
    });
}

function remove_cart(obj,product_id,csrf_token,car_id){
    var serializedData = $(this).serialize() + "&csrfmiddlewaretoken="+ csrf_token;
    $.ajax({
        type: 'POST',
        url: 'remove_cart/'+product_id+'/'+car_id+'/',
        data: serializedData,
        success: function (response) {
            var quantity = $('#quantity_'+car_id).val();
            if(quantity == 0)
            {
                $(".cart_table #cart_"+car_id).css("display","none")
            }
            var price = $('div.price_'+car_id).text().replace("$", "");
            var total = $('div.total_'+car_id).text().replace("$", "");
            console.log('total :' , total)
            console.log('price : ', price)
            total = eval(total) - eval(price);
            $('.total_'+car_id).text('$'+total);
            var total_price = 0;
            $('.cart_table .linetotal').each(function(){
                total_price = eval(total_price) + eval($(this).text().replace('$',''));
            });
            $('div.total_price').text('$'+total_price);
            var tax = 0;
            tax = (2 * eval(total_price))/100
            $('div.tax').text('$'+tax);
            grand_total = eval(total_price)+eval(tax);
            $('div.grand_total').text('$'+grand_total)
        }
    });
}

function remove_cart_item(obj,product_id,csrf_token,car_id){
    var serializedData = $(this).serialize() + "&csrfmiddlewaretoken="+ csrf_token;
    $.ajax({
        type: 'POST',
        url: 'remove_cart_item/'+product_id+'/'+car_id+'/',
        data: serializedData,
        success: function (response) {
            $(".cart_table #cart_"+car_id).css("display","none")
            var total = $('div.total_'+car_id).text().replace("$", "");
            var total_price = $('div.total_price').text().replace("$", "");
            total_price = eval(total_price) - eval(total)
            // $('.cart_table .linetotal').each(function(){
            //     total_price = eval(total_price) + eval($(this).text().replace('$',''));
            // });
            $('div.total_price').text('$'+total_price);
            var tax = 0;
            tax = (2 * eval(total_price))/100
            $('div.tax').text('$'+tax);
            grand_total = eval(total_price)+eval(tax);
            $('div.grand_total').text('$'+grand_total)
        }
    });
}