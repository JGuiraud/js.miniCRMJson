$(document).ready(function(){

$.ajax({
    url : "/data",
    dataType : "json",
    success: function(data){
        var customers = data.customers

        for (var i = 0; i<customers.length; i++){
            var customer = customers[i];
            console.log(customer);
            var template = "<h3>{{id}}</h3>"
            var rendered = Mustache.render(template, customer);
            $('#target').append(rendered);
        }
    },

    error: function(){alert("something bad happened!")}
});



});

