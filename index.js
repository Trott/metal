var namer = require('metal-name');

var el = document.getElementById('results');

var names = [];

var recursiveNameGenerator = function () {
	names.push(namer());
	if (names.length > 10) {
		names.shift();
	}
	el.textContent = names.join("\n\n");
	setTimeout(recursiveNameGenerator, 2000);
};

recursiveNameGenerator();