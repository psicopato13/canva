var mouseEvent = "empty";


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    color = "black";
    widthLine = 2;
    canvas.addEventListener("mousedown", myMouseDown);

    function myMouseDown(e)
    {

        //Atividade Adicional Início
        color = document.getElementById("color").value;
        widthLine = document.getElementById("widthLine").value;
        //Atividade Adicional Final

        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {
        PositionMouseX = e.clientX - canvas.offsetLeft;
        PositionMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.arc(PositionMouseX, PositionMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
