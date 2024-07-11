// const { filter } = require("minimatch");

var $projectContent = $('.project__content').isotope({
    itemSelector: '.project__item',
    layoutMode: 'fitRows'
})

$('.project__tab .project__tab-btn').on('click', function(){
    $('.project__tab .project__tab-btn').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('id');
    $projectContent.isotope({
        filter: value
    })
})