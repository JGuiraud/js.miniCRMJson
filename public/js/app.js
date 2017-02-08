$(document).ready(function () {

    $.ajax({
        url: "/data",
        dataType: "json",
        success: function (data) {
            var customers = data.customers

            for (var i = 0; i < customers.length; i++) {
                var customer = customers[i];
                console.log(customer);
                var template =
                    "<h2>Customer numéro : {{id}} {{first_name}} {{last_name}}</h2>" +
                    "<h3>{{company}} | {{role}}</h2>" +
                    "<p>{{phone}} | {{email}}</p>" +
                    "<p>{{description}}</p><br>";
                var rendered = Mustache.render(template, customer);
                $('#target').append(rendered);
            }
        },

        error: function () { alert("something bad happened!") }
    });




});

