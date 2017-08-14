$( document ).ready(function() {
	// STAR WARS Game
	// Game object instead of globals?

	// 	Create characters with HealthPoints, AttackPower, CounterAttackPower
	//	name, image
	var characterList = [
		{name:"Luke Skywalker",healthPoints:"50",attackPower:"10",counterAttackPower:"10"},
		{name:"Princess Leia Organa",healthPoints:"50",attackPower:"10",counterAttackPower:"10"},
		{name:"Han Solo",healthPoints:"50",attackPower:"10",counterAttackPower:"10"},
		{name:"Darth Vader",healthPoints:"50",attackPower:"10",counterAttackPower:"10"},
		{name:"Darth Maul",healthPoints:"50",attackPower:"10",counterAttackPower:"10"},
		{name:"Emperor Palpatine",healthPoints:"50",attackPower:"10",counterAttackPower:"10"},
	];

	const charactersDiv = $("#characters");

	// onLoad add all characters to "characters" div
	// add event handler for onLoad
	// add charDiv property to each character
	for (var i = 0; i < characterList.length; i++) {
		characterList[i].htmlString = "<figure id='c"+i+"'>";
		characterList[i].htmlString += "<span>"+characterList[i].name+"</span><br>";
		characterList[i].htmlString += "<span class='health'>Health: "+characterList[i].healthPoints+"</span>";
		characterList[i].htmlString += "<span class='attack'>Attack: "+characterList[i].attackPower+"</span><br>";
		characterList[i].htmlString += "<span>Counter: "+characterList[i].counterAttackPower+"</span>";
		characterList[i].htmlString += "</figure>";
		charactersDiv.append(characterList[i].htmlString);
		characterList[i].charDiv = $("#c"+i);
		// console.log(characterList[i].charDiv);
	}
	// console.log(charactersDiv.html);
	
	// 	Gameplay

	// 	Player clicks a character to pick an attacker (attacker)

	// 	Player clicks a character to pick a defender (defender)

	//	Player makes ATTACK
	//		attack reduces defenders HealthPoints
	//		attack increases attacker Attack Power
	//		
	//		attack triggers COUNTER-ATTACK
	//				COUNTER-ATTACK reduces attackers HealthPoints
	//
	//		if attacker's HealthPoints reach 0 or less, then player loses
	//		else if defender's HealthPoints reach 0 or less, then player wins

});

/*	function character(health, attack, counter) {
		// character object (health = number, attack = number, counter = number)
		this.healthPoints = health;
		this.attackPower = attack;
		this.counterAttackPower = counter;
		this.status;

		this.takeHit = function(opponent) {
			// reduce health
			// counter attack
		}

		function attack(opponent) {
			// opponent.takeHit(this);
		}
	}*/