var click_product_detail = 0;
function get_product_detail(obj,id){
  console.log("hello 333 co ba nhe : ", id)
  click_product_detail++;
  var serializedData = $(this).serialize() + "&id=" + id;
  if(click_product_detail == 1){
    $.ajax({
        type: 'GET',
        url: 'get_product_detail',
        contentType: 'application/json',
        data: serializedData,
        success: function (response) {
          $("#product_detail_modal.product_detail_section").html(response);
          $(obj).attr('data-modal','#modalone');
          $(obj).click();
          $('body').addClass('model_open');
        }
    });
  }else{
    click_product_detail = 0;
  }
}