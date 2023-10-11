$(function(){


    $('#banner').slick(
        { 
        
         prevArrow:false,
         nextArrow:false,
          autoplaySpeed:1000,
         autoplay:true,
         arrows:false,
        dots:true,
        dotsClass:"bannerdots container"}
    );

         $('#cosmatic').slick(
            { 
            
            prevArrow:false,
           nextArrow:false,
            autoplaySpeed:2000,
            autoplay:true,
            arrows:false,
          
            dotsClass:"bannerdots container"}
         );


    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




})