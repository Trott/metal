var namer = require('metal-name');

var el = document.getElementById('results');

var recursiveNameGenerator = function () {
	el.textContent += "\n" + namer() + "\n";
	setTimeout(recursiveNameGenerator, 1000);
};

recursiveNameGenerator();