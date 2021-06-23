$(document).ready(function(){

    $(".filter-link").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});

// $(document).ready(function() {
//     $('.gallery').magnificPopup({ 
//         delegate: 'a',
//         type: 'image',
//         tLoading: 'Loading image #%curr%...',
//         mainClass: 'mfp-img-mobile',
//         gallery:{
//             enabled:true,
//             navigateByImgClick: true,
// 			preload: [0,1]
//         }
//         // other options
//     });
//  });
