
$(document).ready(function () {
	$("#check_login").click(function(e) {
		e.preventDefault()
		var full_name = $("#full_name").val();
		$.ajax({
			url: '{% url "perform_register" %}',
			type: "POST",
			dataType: "json",
			data : {
				csrfmiddlewaretoken: '{{ csrf_token }}',
				'full_name': full_name
			},
            success: function (data) {
				console.log(data);
            },
            error: function (error) {
                console.log(error);
            }
		});
	});
});
