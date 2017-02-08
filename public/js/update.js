$(document).ready(function () {

    $.getJSON("/data", function (data) {
        // console.log(data)
        // var firstName, lastName, company, role, phone, email, description;

        $("#send").click(function () {
            location.href = '/post';
        });


        //     function (data) {
        //     firstName = $("#firstName").val();
        //     lastName = $("#lastname").val();
        //     company = $("#company").val();
        //     role = $("#role").val();
        //     phone = $("#phone").val();
        //     email = $("#email").val();
        //     description = $("#description").val();

        //     console.log(firstName + lastName + company + role + phone + email + description);

        //     var newCustomer = {
        //         "first_name": firstName,
        //         "last_name": lastName,
        //         "company": company,
        //         "role": role,
        //         "phone": phone,
        //         "email": email,
        //         "description": description
        //     }

        //     var newJson = JSON.stringify(newCustomer);
        //     console.log(newJson);
        //     console.log(data);
        // });
    })
});





