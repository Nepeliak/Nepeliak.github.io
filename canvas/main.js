var 
    canv = document.getElementById("canvas"),
    ctx    = canv.getContext('2d');

    canv.width = window.innerWidth
    canv.height = window.innerHeight;

    // code 1 (Малювання чотирикутника) 

    // var x = 50;
    // ctx.fillstyle = 'magenta';
    // ctx.fillRect(x, 50, 300, 200);

    // setInterval(function(){
    //     ctx.fillRect(x++, 50, 300, 200); 
    // }, 1000 );


    // code 2 (Малювання кола)

    // ctx.fillstyle = 'magenta';
    // ctx.arc(canv.width / 2 , canv.height / 2 , 100, 0, 2*Math.PI , false);
    // ctx.fill();


    //  code 3 (Малювання трикутника)
        // ctx.fillstyle = 'magenta';

        // ctx.strokeStyle = 'red';
        // ctx.lineWidth = 5;
        // ctx.scale(2 , 2);
        

        // ctx.beginPath();
        // ctx.moveTo(50 , 50);
        // ctx.lineTo(25 , 100);
        // ctx.lineTo(75 , 100);
        // ctx.closePath();

        // ctx.stroke();


        //code 4 (Введення тексту)
        var
            grad = ctx.createLinearGradient(0, 0, 500, 0);

            grad.addColorStop('0', 'magenta');
            grad.addColorStop('.50', 'green');
            grad.addColorStop('1', 'red');
            
        ctx.fillstyle = grad;

        ctx.font = '40px Georgia';
        ctx.fillText('Hello world!', 100, 100);