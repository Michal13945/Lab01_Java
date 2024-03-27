// const sounds = {
//     'a': document.querySelector('#s1'),
//     's': document.querySelector('#s2'),
//     'd': document.querySelector('#s3'),
// }

 const tom = document.querySelector('#s1')
 const kick = document.querySelector('#s2')
 const hihat = document.querySelector('#s3')
 const boom = document.querySelector('#s4')

addEventListener('keypress', (ev) => { 
    const key = ev.key 
    
     switch(key)
    {
        case 'a':
            tom.currentTime = 0
            tom.play()
            break;
        case 's':
            kick.currentTime = 0
            kick.play()
            break;
        case 'd':
            hihat.currentTime = 0
            hihat.play()
            break;
        case 'f':
            boom.currentTime = 0
            boom.play()
            break;
    }
    // clap.currentTime = 0
    // clap.play()
}) 

