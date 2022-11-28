var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(error=>{
    console.log(error);
})

document.querySelector('button').addEventListener('click', () =>{
    var canvas = document.querySelector('canvas');
    // altura e largura da tag canvas =  altura e largura da tag video
    canvas.height = video.videoHeight; 
    canvas.width = video.videoWidth;

    //inicializa a tag canvas
    var context = canvas.getContext('2d');
    //desenha no canvas (desenha o video, posicao 0, posicao 0)
    context.drawImage(video, 0, 0);

    var link = document.createElement('a'); //cria tag 'a'
    link.className = "video-link";
    link.download = 'PimerestPhoto.png';
    link.href = canvas.toDataURL();
    link.textContent = "Baixe sua foto";
    document.body.appendChild(link);
});
