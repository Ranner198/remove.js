Array.prototype.remove = function (value) {
	for (var i = 0; i < this.length; i++) {
		console.log(this[i]);
		if (this[i] == value) {
			this.splice(i, 1);
			i -= 1;
		}
	}
}

Array.prototype.removeAt = function (num) {
	for (var i = 0; i < this.length; i++) {
		if(i == num) {
			this.splice(i, 1);
		}
	}
}
