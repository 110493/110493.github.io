// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x1 = 0, y1 = 0, dx1 = 5, dy1 = 5, r1 = 30, color1 = "blue";
let x2 = canvas.width, y2 = 0, dx2 = 5, dy2 = 5, r2 = 30, color2 = "red";

// 畫圓形
function drawBall(x1, y1, r1, color1,x2, y2, r2, color2)
{
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
	ctx.beginPath();
    ctx.arc(x2, y2, r2, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x1 = x1 + dx1;
    y1 = y1 + dy1;
	x2 = x2 + dx2;
    y2 = y2 + dy2;


    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
	if (x1 > canvas.width || x1< 0 )
	   {
          dx1 = -dx1
		  color1 = "#" +  Math.floor(Math.random()*16777215).toString(16);
       }
	if (y1 > canvas.height || y1< 0 )
	   {
		   dy1 = -dy1
		   color1 = "#" +  Math.floor(Math.random()*16777215).toString(16);
		}
	if (x2 > canvas.width || x2< 0 )
	   {
          dx2 = -dx2
		  color2 = "#" +  Math.floor(Math.random()*16777215).toString(16);
       }
	if (y2 > canvas.height || y2< 0 )
	   {
		   dy2 = -dy2
		   color2 = "#" +  Math.floor(Math.random()*16777215).toString(16);
		}

    drawBall(x1, y1, r1, color1,x2, y2, r2, color2)
	if ((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) < (r1+r2)*(r1+r2))
	   {
		   [dx1,dy1,dx2,dy2,color1,color2] = [dx2,dy2,dx1,dy1,color2,color1];
       }
    requestAnimationFrame(draw);
}

draw();