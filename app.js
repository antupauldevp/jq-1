$(function(){

    let add = $(`.add`);
    let remove = $(`.remove`);
    let toggle = $(`.toggle`);
    let box = $(`.box`);

    add.on(`click`,function(){
        // box.show();
        // box.slideDown(1000);
        box.animate({
            'height' : '270px',
            'width': '270px',
            'margin-left' : '300px',
            'opacity' : '0.6'

        },1000)
          

        
    });
    
    
    remove.on(`click`,function(){
        // box.hide();
        box.fadeOut(1200);
    });
    toggle.on(`click`,function(){
        // box.toggle();
        box.slideToggle(500);
    });




});