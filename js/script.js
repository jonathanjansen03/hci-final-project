$(document).ready(function() {
    let n = $('.image-slider div.slides div.slide').length
    let slideWidth = $('.image-slider div.slides div.slide').width()
    let slideHeight = $('.image-slider div.slides div.slide').height()
    let totalWidth = slideWidth * n
    
    $('.image-slider').css({width: slideWidth, weight: slideHeight})
    $('.slides').css({width: totalWidth, marginLeft: -slideWidth})
    $('.slide:last-child').prependTo('.slides')

    $('#previous').click(function() {
        $('.slides').animate({
            left: slideWidth
        }, 1000, function() {
            $('.slide:last-child').prependTo('.slides')
            $('.slides').css({left: ''})
        })
    })

    $('#next').click(function() {
        $('.image-slider div.slides').animate({
            left: -slideWidth
        }, 1000, function() {
            $('.slide:first-child').appendTo('.slides')
            $('.slides').css({left: ''})
        })
    })
})