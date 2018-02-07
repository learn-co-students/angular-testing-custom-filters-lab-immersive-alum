describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter items by favorite food', () => {
		const mockedArr = [
		{ name: 'Chris', favoriteFood: 'pizza' },
		{ name: 'Tom', favoriteFood: 'pie' },
		{ name: 'Liz', favoriteFood: 'pie' },
		]

	const filteredArr = $filter('favoriteFood')(mockedArr, 'pie')
	expect(filteredArr.length).toBe(2)
	})

});
