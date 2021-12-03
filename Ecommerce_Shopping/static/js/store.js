function get_product_detail(id){
  console.log("hello 333 co ba nhe : ", id)
  var serializedData = $(this).serialize() + "&id=" + id;
  $.ajax({
      type: 'GET',
      url: 'get_product_detail',
      contentType: 'application/json',
      data: serializedData,
      success: function (response) {
        var objJson = JSON.parse(response);
        console.log("11111122211111111" , objJson);
      }
  });
}