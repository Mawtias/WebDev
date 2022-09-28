var h1 = document.createElement("h1")
h1.id = "score";
var score = -1


function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const av = document.querySelector('#avatar');
const co = document.querySelector('#coin')

const init = () => {
    //get the avatar
    //get the coin
    

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowUp' || e.key === 'Down'){
            if(avatar.y > 0 )moveVertical(avatar, -50);
        }
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        }
        if(e.key === 'ArrowLeft' || e.key === 'Down'){
            if(avatar.x > 0)moveHorizontal(avatar, -50);
        }
        if(e.key === 'ArrowRight' || e.key === 'Down'){
            moveHorizontal(avatar, 50);            
        }

        if(isTouching(avatar,coin)) moveCoin();
    });
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    if (currTop + av.height + amount > window.innerHeight) element.style.top = `${window.innerHeight-av.height}px`;
    else if(currTop + av.height <= window.innerHeight)element.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
    const currLeft = extractPos(element.style.left);    
    if (currLeft + av.width + amount > window.innerWidth) element.style.left = `${window.innerWidth-av.width}px`;
    else if(currLeft + av.width <= window.innerWidth)element.style.left = `${currLeft + amount}px`;
    
    console.log(avatar.x, avatar.y);

}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    var x = Math.floor(Math.random() * window.innerWidth)
    var y = Math.floor(Math.random() * window.innerHeight)
    if(x + 100 > window.innerWidth) x = window.innerWidth-100;
    co.style.left = `${x}px`;
    if(y + 100 > window.innerHeight) y = window.innerHeight-100;
    co.style.top = `${y}px`;
    //coin.style.left = `${y}px`;
    
    score+=1;    
    h1.textContent="Score: " + score;    
}

document.body.appendChild(h1);

init();