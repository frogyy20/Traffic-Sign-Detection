function image(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    $.ajax({
      url: "https://trafficsign-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/f66540dc-e5e4-4628-b680-c14539a4458e/classify/iterations/Iteration1/image",
      data: reader.result,
      processData: false,
      contentType: "application/octet-stream",
      headers: {
        'Prediction-key': '16093e92215040d5b755a4043766c208'
      },
      type: 'POST',
      body: file,
      success: function(response) {
        var result = response["Predictions"];
        alert('Detection is successful.');
      },
      error: function(error) {
        alert('Please upload an image file.');
      }
    });
  }
  reader.readAsArrayBuffer(file);
}