$( document ).ready(function() {
	// STAR WARS Game
	// Game object instead of globals?
	var attackerName = "";
	var defenderName = "";

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

	// make variables for the main html areas
	const charactersDiv = $("#characters");
	const attackerDiv = $("#attacker");
	const defenderDiv = $("#defender");

	// onLoad add all characters to "characters" div
	// add charDiv property to each character
	// add event handler for click
	for (var i = 0; i < characterList.length; i++) {
		characterList[i].htmlString = "<figure id='c"+i+"'>";
		characterList[i].htmlString += "<span>"+characterList[i].name+"</span><br>";
		characterList[i].htmlString += "<span class='health'>Health: "+characterList[i].healthPoints+"</span>";
		characterList[i].htmlString += "<span class='attack'>Attack: "+characterList[i].attackPower+"</span><br>";
		characterList[i].htmlString += "<span>Counter: "+characterList[i].counterAttackPower+"</span>";
		characterList[i].htmlString += "</figure>";
		charactersDiv.append(characterList[i].htmlString);

		characterList[i].charDiv = $("#c"+i);

		characterList[i].clickEvent = characterList[i].charDiv.click(function () {
			var index = $(this).attr("id")[1];

			if (attackerName === "") {
				characterList[index].charDiv.remove();
				attackerDiv.prepend(characterList[index].htmlString);
				attackerName = characterList[index].name;
			} 
			else if (defenderName === "") {
				characterList[index].charDiv.remove();
				defenderDiv.prepend(characterList[index].htmlString);
				defenderName = characterList[index].name;
			}
		});
	}
	// console.log(charactersDiv.html);

	

	// 	Gameplay

	// 	Player clicks a character to pick an attacker (attacker)
		// remove attacker from characters
		// add attacker to attacker div


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