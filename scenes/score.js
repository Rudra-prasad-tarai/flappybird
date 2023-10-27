add([
	sprite("bg"),
	scale(width() / 100, height() / 100),
	layer("bg"),
    
    ]); const mark = add([
	sprite("mark"),
	scale(1),
	pos(width() / 2, height() / 2 - 24),
	origin("center")
]);

mark.action(() => {
	mark.scale = vec2(wave(1, 2, 6));
}); 

add([
	text(`${args.score}`, 32),
	pos(width() / 2, height() / 2 + 32),
	origin("center"),
]);

keyPress("space", () => {
	go("main");
});
