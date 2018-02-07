describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels from given string', () => {
		const filteredString = $filter('removeAllVowels')('Lo and Behold')
		expect(filteredString).toEqual('L nd Bhld')
	})

});
