const buttons = document.querySelectorAll('button');
const sounds = document.querySelectorAll('audio');
let index=0;
const playFunction = (element) =>
{
    switch(element)
    {
        case 0:
            stopSongs();
            sounds[0].play();  
            break;
        case 1:
            stopSongs();       
            sounds[1].play();   
            break;
        case 2:
            stopSongs();       
            sounds[2].play();   
            break;
        case 3:
            stopSongs();
            sounds[3].play();
            break;
        case 4:
            stopSongs();
            sounds[4].play();
            break;
        case 5:
            stopSongs();
            sounds[5].play();
            break;
    }
}
const stopSongs = () =>
{
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime=0;
        }
    );

}
buttons.forEach(button => {
    button.addEventListener('click',playFunction.bind(null,index));
    index++;
})
