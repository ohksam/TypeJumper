// this is your entry file - this is what Webpack will read
// import Example from './scripts/example';
// import stuff from somewhere
// import TyperJump from './scripts/game';


// document.addEventListener('DOMContentLoaded', () => {
//     console.log('hello world')

//     const main = document.getElementById('main');
//     new Example(main)

// })


// now beginning with mario tutorial!
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    console.log(ctx)

    canvas.width = 480;
    canvas.height = 640;

    ctx.fillStyle = "#81D5FF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

})
