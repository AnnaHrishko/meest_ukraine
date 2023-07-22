$('.content').hide();
$('.faq-wrap__accordion-sec').click(function() {
  $(this).toggleClass('active')
  $('.faq-wrap__accordion-sec').not(this).removeClass('active')
  $('.faq-wrap__accordion-sec').not(this).find('.content').slideUp()
  $(this).find('.content').slideToggle()
  return false;
});

if(".select".length > 0){
    $(document).ready(function() {
        $('.select').select2();
    });
}


$('.phone').each(function(){
    window.intlTelInput(this, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    separateDialCode: true,
});
})

$('.navigations-menu-page li').click(function(){
    let index = $(this).attr("menu-tag") 
    $(".section-cooperation").fadeOut(0)
    $('.wrap' + index).fadeIn(200);
     if (index == 1) {
       $(".wrap1").fadeIn(200)
     }
    return false
})

$(function() {
    $(".form-for-consultation").validate({
        rules: {
            "name": {
                required: true,
            },
            "phone": {
                required: true,
                required: true,
                number: true,
                min: 10,
                max: 10,
            },
        },
        messages: {
            "name": {
                required: "Required field",
            },
            "phone": {
                required: "Required field",
                number: "Enter only number",
                min: "Enter full phone number",
            },
        },
    });
});