const writeAuthCode=(options)=>{
	let canvas = document.getElementById(options.canvasId);
	canvas.width=options.width||300
	canvas.height=options.height||150
	let ctx = canvas.getContext('2d');/**建立一個canvas物件*/
	ctx.textBaseline = "middle";
	ctx.fillStyle = randomColor(200, 255);/**這個範圍的顏色作背景看起來清晰一些*/
	ctx.fillRect(0, 0, options.width, options.height);
    
	for (let i = 0; i < options.txt.length; i++) {
		let txt = options.txt.charAt(i);/**讓每個字不一樣*/
		ctx.font = '25px SimHei';
		ctx.fillStyle = randomColor(50, 160); /**隨機生成字型顏色*/
		ctx.shadowOffsetY = randomNum(-3, 3);
		ctx.shadowBlur = randomNum(-3, 3);
		ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
		let x = options.width / (options.txt.length+1) * (i+1);
		let y = options.height / 2;
		let deg = randomNum(-30, 30);
		/**設定旋轉角度和座標原點*/
		ctx.translate(x, y);
		ctx.rotate(deg * Math.PI / 180);
		ctx.fillText(txt, 0, 0);
		/**恢復旋轉角度和座標原點*/
		ctx.rotate(-deg * Math.PI / 180);
		ctx.translate(-x, -y);
	}
    
	/**1~4條隨機干擾線隨機出現*/
	for (let i = 0; i < randomNum(1,4); i++) {
		ctx.strokeStyle = randomColor(40, 180);
		ctx.beginPath();
		ctx.moveTo(randomNum(0, options.width), randomNum(0, options.height));
		ctx.lineTo(randomNum(0, options.width), randomNum(0, options.height));
		ctx.stroke();
	}
	/**繪製干擾點*/
	for (let i = 0; i < options.width / 4; i++) {
		ctx.fillStyle = randomColor(0, 255);
		ctx.beginPath();
		ctx.arc(randomNum(0, options.width), randomNum(0, options.height), 1, 0, 2 * Math.PI);
		ctx.fill();
	}
};
/**隨機數字**/
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
/**隨機顏色**/
function randomColor(min, max) {
	let r = randomNum(min, max);
	let g = randomNum(min, max);
	let b = randomNum(min, max);
	return "rgb(" + r + "," + g + "," + b + ")";
}