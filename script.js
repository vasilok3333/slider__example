


function addActive(elem) {
    elem.classList.add('active');
}

function deleteActive(elem) {
    elem.classList.remove('active');
}


let slid = document.querySelectorAll('.slide-single');



function draw() {
    let offset = -1;
    for (let i = 0; i < slid.length; i++) {
        slid[i].style.left = offset * 240 + 'px';
        offset++;
        if (slid[i].style.left == '240px' && slid[i].class != 'active' ) {
            addActive(slid[i])
        } else if (slid[i].style.left != '240px' && slid[i].class != 'active' ) {
            deleteActive(slid[i])
        }
    }

    
};

draw();

function left() {
    buttonPrew.onclick = null;
    for (let i = 0; i < slid.length; i++) {
        if (slid[i].style.left == '720px') {
            slid[i].style.zIndex = '0';
        }
        slid[i].style.left = parseInt(slid[i].style.left) - 240 + 'px';
        if (slid[i].style.left == '240px' && slid[i].class != 'active' ) {
            addActive(slid[i])
        } else if (slid[i].style.left != '240px' && slid[i].class != 'active' ) {
            deleteActive(slid[i])
        }
     
        if ((parseInt(slid[i].style.left)) < -240) {
            slid[i].style.zIndex = '-1000';
            slid[i].style.left = 720 + 'px';            
        };
    };
    buttonPrew.onclick = left;
}

function right() {

    for (let i = 0; i < slid.length; i++) {
        if (slid[i].style.left == '-240px') {
            slid[i].style.zIndex = '0';
        }
        slid[i].style.left = parseInt(slid[i].style.left) + 240 + 'px';

        if (slid[i].style.left == '240px' && slid[i].class != 'active' ) {
            addActive(slid[i])
        } else if (slid[i].style.left != '240px' && slid[i].class != 'active' ) {
            deleteActive(slid[i])
        }

        
        if ((parseInt(slid[i].style.left)) > 720) {
            slid[i].style.zIndex = '-1000';

            slid[i].style.left = -240 + 'px';
        };
    };

}


let buttonPrew = document.querySelector('.btn-prew');
let buttonNext = document.querySelector('.btn-next');



buttonPrew.onclick = left;
buttonNext.onclick = right;



