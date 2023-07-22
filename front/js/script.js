$('.content').hide();
$('.faq-wrap__accordion-sec').click(function() {
  $(this).toggleClass('active')
  $('.faq-wrap__accordion-sec').not(this).removeClass('active')
  $('.faq-wrap__accordion-sec').not(this).find('.content').slideUp()
  $(this).find('.content').slideToggle()
  return false;
});

if($(".select").length){
    $(document).ready(function() {
        $('.select').select2();
    });
}

// if($(".phone").length){
// $('.phone').each(function(){
//     window.intlTelInput(this, {
//     utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
//     separateDialCode: true,
// });
// })
// }

// $('.navigations-menu-page li').click(function(){
//     let index = $(this).attr("menu-tag") 
//     $(".section-cooperation").fadeOut(0)
//     $('.wrap' + index).fadeIn(200);
//      if (index == 1) {
//        $(".wrap1").fadeIn(200)
//      }
//     return false
// })

jQuery.validator.addMethod("phone_validate", function(value, element) {
    return this.optional(element) || /^[0-9)( -]+$/i.test(value);
  }, "Letters only please");

if($(".form-for-consultation").length){
$(function() {
    $(".form-for-consultation").validate({
        rules: {
            "name": {
                required: true,
            },
            "phone-number": {
                required: true,
                phone_validate: true,
                minlength: 2,
                maxlength: 16,
            },
        },
        messages: {
            "name": {
                required: "Required field",
            },
            "phone-number": {
                required: "Required field",
                number: "Enter only number",
                minlength: "Enter full phone number",
            },
        },
    });
});
}

$(document).ready(function() {
	if ($('#phone-number').length > 0) {
	var input = document.querySelector("#phone-number");
	var iti = intlTelInput(input, {
	  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
	  initialCountry: "auto",
	  excludeCountries: ["ru", "by"],
	  separateDialCode: true,
	  geoIpLookup: function(success, failure) {
		$.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
		  var countryCode = (resp && resp.country) ? resp.country : "us";
		  success(countryCode);
		});
	  },
	  autoPlaceholder: "aggressive",
	});
	setTimeout(function() {
	  var countryData = iti.getSelectedCountryData();
	  $('.phone_code').val(countryData['dialCode']);
	}, 2000);
  
	input.addEventListener("countrychange", function() {
	  var countryData = iti.getSelectedCountryData();
	  $('.phone_code').val(countryData['dialCode']);
	});
	$("button").click(function() {
	  var countryphone = iti.getNumber();
	  $('.phone_all').val(countryphone);
	});
  
	$(".iti__flag-container").click(function() {
	  $('#phone-number').attr('maxlength', '')
	  $('#phone-number').removeClass('valid')
	  $('#phone-number').removeClass('has_text')
	});
  
	$(input).on("countrychange", function(event) {
	  $('#phone-number').val('')
	  var activePlaceholder = $('#phone-number').attr('placeholder')
	  var mask = activePlaceholder.replace(/[1-9]/g, "0");
	  $('#phone-number').mask(mask);
	});
	$( ".form-for-consultation button" ).click(function() {
		let countryphone = iti.getNumber();
		$('.form-for-consultation .all_phone').val(countryphone);
	 });
  
	// jQuery.validator.addMethod("phone_validate", function(value, element) {
	//   return this.optional(element) || /^[0-9)( -]+$/i.test(value);
	// }, "Letters only please");
  
	// $(".form-for-consultation").validate({
	// 	errorClass: 'error',
	//     // errorPlacement: $.noop,
	//   rules: {
	// 	"phone-number": {
	// 		required: true,
	// 		phone_validate: true,
	// 		minlength: 2,
	// 		maxlength: 16,
	// 	},
	//   },
    //   messages: {
	// 	"phone-number": {
	// 		required: "Required field",
	// 		minlength: "Enter full phone number",
	// 		maxlength: "",
	// 	},
	//   },
	// });
	}
  });


