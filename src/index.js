import Gameplay from "./scripts/gameplay";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')

    canvas.width = 1000; 
    canvas.height = 650;  

    const gameplay = new Gameplay(ctx).animate();
})
