$(document).ready(()=>{
    $('.btn').click((e)=>{
        e.target.matches('.next') && $('.slider').append($('.card')[0]);
        e.target.matches('.prev') && $('.slider').append($('card')[$('card').length -1])
    })
})