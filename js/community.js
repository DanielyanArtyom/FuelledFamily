$(document).ready(function () {

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    $('.block__number').each(async function (index, el) {

        // for (let i = 0; i <= el.attr('data-count'); i += 10) {
        //     await sleep(0)
        //     $(this).html(i)
        // }
        let valUp = 0;
        let i = 0

        if ($(this).attr('data-count') >= 10 && $(this).attr('data-count') % 2 == 0) {
            valUp = 10
        } else {
            valUp = 1;
        }
        while (i <= $(this).attr('data-count')) {
            await sleep(5)
            $(this).html(i)
            i += valUp
        }
    })
})