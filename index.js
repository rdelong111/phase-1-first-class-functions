function receivesAFunction(spy) {
	spy();
}

function returnsANamedFunction() {
	return function test() {
	}
}

function returnsAnAnonymousFunction() {
	return function () {
	}
}