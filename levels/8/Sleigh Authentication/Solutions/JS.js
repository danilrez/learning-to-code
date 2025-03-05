function Sleigh() {}
Sleigh.prototype.authenticate = (name, password) =>
	name === 'Santa Claus' && password === 'Ho Ho Ho!';
