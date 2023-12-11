let _ul = document.querySelectorAll('#acc>li>ul')
let _li = document.querySelectorAll('#acc>li')
let _h2 = document.querySelectorAll('#acc>li>h2')
let _arrow = document.querySelectorAll('.arrow')
_ul.forEach((val) => {
    val.setAttribute('data-height', val.clientHeight)
    val.style.height = 0
})
// reset*******
_li.forEach((val, index) => {
    val.addEventListener('click', () => {
        for (let i = 0; i < _li.length; i++) {
            if (i != index) {
                _ul[i].style.height = 0
                _li[i].setAttribute('data-status', 'off')
                _h2[i].style.backgroundColor = 'rgb(255, 162, 229)'
                _h2[i].style.color = 'black'
                _arrow[i].classList.remove('bi-chevron-down')
                _arrow[i].classList.add('bi-chevron-up')
            }
        }
    })

})
// **************
_li.forEach((val) => {
    val.addEventListener('click', () => {
        let _child = val.children
        let _height = _child[1].getAttribute('data-height')
        let icon = _child[0].children
        icon = icon[1]
        let _status = val.getAttribute('data-status')
        if (_status == 'off') {
            _child[1].style.height = _height + 'px'
            val.setAttribute('data-status', 'on')
            _child[0].style.backgroundColor = ' rgb(195, 120, 132)'
            _child[0].style.color = 'white'
            icon.classList.remove('bi-chevron-up')
            icon.classList.add('bi-chevron-down')
        } else {
            _child[1].style.height = 0
            val.setAttribute('data-status', 'off')
            _child[0].style.backgroundColor = 'rgb(255, 162, 229)'
            _child[0].style.color = 'black'
            icon.classList.remove('bi-chevron-down')
            icon.classList.add('bi-chevron-up')
        }
    })
})
_ul.forEach((val) => {
    val.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
    })
})



