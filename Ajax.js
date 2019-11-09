$(document).ready();

function Fashionpics() {
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.imgur.com/3/account/oliviera89/album/GE3jLD5",
    method: "GET",
    headers: {
      Authorization: "Bearer 676bab962a7dedac5a3d659bc1890176e96392a4",
      //   "User-Agent": "PostmanRuntime/7.19.0",
      Accept: "*/*",
      "Cache-Control": "null",
      "Postman-Token":
        "0348d0b8-ff5f-4f6f-95a2-9779b4b3512b,fce98e0a-fb93-4d4a-a033-ea2c24e77904",
      //   "Host": "api.imgur.com",
      //   "Accept-Encoding": "gzip, deflate",
      //   "Cookie": "IMGURUIDJAFO=506bdd8a5cac84b7aec13fde4caf5c9873a17864a3cff2c018f2691b927076ab; _ga=GA1.2.95290676.1572914099; _fbp=fb.1.1572914099159.256027191; __qca=P0-529917019-1572914099174; G_ENABLED_IDPS=google; amplitude_id_f1fc2abcb6d136bd4ef338e7fc0b9d05imgur.com=eyJkZXZpY2VJZCI6ImFkYzFjYTkyLTc2NDktNGVjZS1iMGM0LWJmZGVhODI0ZWI1NFIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU3MjkxOTQwMDgyNSwibGFzdEV2ZW50VGltZSI6MTU3MjkyMTQ2NDA4NiwiZXZlbnRJZCI6MSwiaWRlbnRpZnlJZCI6Miwic2VxdWVuY2VOdW1iZXIiOjN9; SESSIONDATA=%7B%22sessionCount%22%3A1%2C%22sessionTime%22%3A1572921464132%7D",
      //   "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*"
    }
  };

  $.ajax(settings).done(function(response) {
    console.log(response);

<<<<<<< HEAD
    var results = response.data;
    var results2 = results.images;
    console.log(results);
    console.log(results.images[0]);
=======
        function Fashionpics() {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.imgur.com/3/account/oliviera89/album/GE3jLD5",
                "method": "GET",
                "headers": {
                  "Authorization": "Bearer 676bab962a7dedac5a3d659bc1890176e96392a4",
                //   "User-Agent": "PostmanRuntime/7.19.0",
                  "Accept": "*/*",
                  "Cache-Control": "null",
                  "Postman-Token": "0348d0b8-ff5f-4f6f-95a2-9779b4b3512b,fce98e0a-fb93-4d4a-a033-ea2c24e77904",
                //   "Host": "api.imgur.com",
                //   "Accept-Encoding": "gzip, deflate",
                //   "Cookie": "IMGURUIDJAFO=506bdd8a5cac84b7aec13fde4caf5c9873a17864a3cff2c018f2691b927076ab; _ga=GA1.2.95290676.1572914099; _fbp=fb.1.1572914099159.256027191; __qca=P0-529917019-1572914099174; G_ENABLED_IDPS=google; amplitude_id_f1fc2abcb6d136bd4ef338e7fc0b9d05imgur.com=eyJkZXZpY2VJZCI6ImFkYzFjYTkyLTc2NDktNGVjZS1iMGM0LWJmZGVhODI0ZWI1NFIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU3MjkxOTQwMDgyNSwibGFzdEV2ZW50VGltZSI6MTU3MjkyMTQ2NDA4NiwiZXZlbnRJZCI6MSwiaWRlbnRpZnlJZCI6Miwic2VxdWVuY2VOdW1iZXIiOjN9; SESSIONDATA=%7B%22sessionCount%22%3A1%2C%22sessionTime%22%3A1572921464132%7D",
                //   "Connection": "keep-alive",
                "Access-Control-Allow-Origin": "*"
                }
              }
              
              $.ajax(settings).done(function (response) {
                console.log(response);
                
                var results = response.data;
                var results2 = results.images;    
                        console.log(results);  
                        console.log(results.images[0]);   
<<<<<<< HEAD
                        var results3=JSON.stringify(results2);
                        console.log(results3);    
=======
                     
>>>>>>> a02c631b6ed4da0f61eb4141ea81f3b7d4825f5c
                        for (let jj =0; jj<results2.length; jj++)
                        {
                          
                            var ClothesDiv =$("<div>");            
                            var Clotheimage = $("<img>");
                            Clotheimage.attr("src",results2[jj].link);
                          
                            ClothesDiv.append(Clotheimage);
                        
                            $("#imagespants").append(Clotheimage);
>>>>>>> 5725f81d9b96511d52c3cc0c77b9f589a4060a24

    for (let jj = 0; jj < results2.length; jj++) {
      var ClothesDiv = $("<div>");
      var Clotheimage = $("<img>");
      Clotheimage.attr("src", results2[jj].link);

      ClothesDiv.append(Clotheimage);

      $("#imagespants").append(Clotheimage);
    }
  });
}

Fashionpics();
