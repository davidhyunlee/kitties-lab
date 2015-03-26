(function() {

	angular
		.module("KittiesApp", [])
		.controller("KittiesController", KittiesController);

		function KittiesController() {

		var self = this;

		this.remove = remove;
		this.add = add;
		// this.adopt = adopt();

		function add() {
			self.Kitties.push(
				{
					catName: self.newCat,
					monthsOld: self.monthsOld,
					gender: self.gender,
					image: self.image,
					adopted: false
				}
				);
					self.newCat = null;
					self.monthsOld = null;
					self.gender = null; 
					self.image = null;
			}

		function remove($index) {
			self.Kitties.splice($index, 1);
		}

		this.Kitties = [
				{
					catName: 'Karl',
					monthsOld: 5,
					gender: 'boy',
					image: "images/carl.png",
					adopted: true,
				},
				{
					catName: 'Jack',
					monthsOld: 4,
					gender: 'boy',
					image: "images/jack.png",
					adopted: false
				},
				{
					catName: 'Oscar',
					monthsOld: 2,
					gender: 'boy',
					image: "images/oscar.png",
					adopted: false
				},
				{
					catName: 'Princess Mew',
					monthsOld: 3,
					gender: 'girl',
					image: "images/princessmew.png",
					adopted: false
				}
			];

		}

})();



