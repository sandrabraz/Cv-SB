
         $(document).ready(function() {
         
      $(".link").click(function(){
         $(".toggler").prop("checked", false);
         
         })
        })
       

        jQuery(document).ready(function() {
         /*MODIFICATION START*/
           jQuery(document).on('scroll', function(){
             if(jQuery('html,body').scrollTop() > jQuery('#skills').height()){
         /*MODIFICATION END*/
               $(".skillset").scroll(function() {
                 jQuery(this).find(".bar").animate({
                   width: jQuery(this).attr("bar")
                 });
         
               }); 
               };
         /*MODIFICATION START*/
             })
           });
         /*MODIFICATION END*/
       ;     