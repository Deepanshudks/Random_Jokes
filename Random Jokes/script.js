let jokes = [`what did one hat say to the other?
You wait here — I'll go on ahead!`,

  `Why don't the circus lions eat the clowns?
Because they taste funny!`,

  `what did the pirate say when he turned 80?
"Aye matey."`,

  `Why did the chicken cross the playground?
To get to the other slide!`,

  `Why did the actor fall through the floorboards?
They were going through a stage!`,

  `Why did a scarecrow win a Nobel prize?
He was outstanding in his field!`,

  `Why are peppers the best at archery?
Because they habanero!`,

  `what did the duck say after she bought chapstick?
Put it on my bill!`,

  `Why did an old man fall in a well?
Because he couldn’t see that well!`,

  `what do you call a fake noodle?
An impasta!`,

  `what did the three-legged dog say when he walked into a saloon?
“I’m looking for the man who shot my paw!”`,

  `How do you tell the difference between a bull and a cow?
It is either one or the udder!`,

  `What’s red and smells like blue paint?
Red paint!`,

  `What’s the difference between a hippo and a Zippo?
One is very heavy, the other is a little lighter!`,

  `what happened when Bluebeard fell overboard in the Red Sea?
He got marooned!`,

  `Why couldn't the skeleton go to school?
His heart just wasn’t in it.`,

  `what did the termite say when it walked into a bar?
"Where's the bar tender?"`,

  `Why can’t you send a duck to space?
Because the bill would be astronomical!`,

  `what does Jeff Bezos do before he goes to sleep?
He puts his PJ-Amazon!`,

  `what happened when the world's tongue-twister champion got arrested?
They gave him a tough sentence!`,

  `what did the mama cow say to the calf?
It’s pasture bedtime!`,

  `How does a vampire start a letter?
Tomb it may concern!`,

  `what do you call an illegally parked frog?
Toad!`,

  `what did one plate say to the other?
Dinner is on me!`,

  `Why do hummingbirds hum?
Because they don’t know the words!`,

  `what do sprinters eat before a race?
Nothing. They fast!`,

  `what kind of cat likes living in water?
An octo-puss.`,

  `Why did the dinosaur cross the road?
Because chickens hadn't evolved yet.`,

  `what do you call a cow that can't make milk?
An udder failure — a milk dud.`,

  `what do cats eat for breakfast?
Mice Crispies!`,

  `what do you call an elephant that doesn’t matter?
An irrelephant!`,

  `what do you get when you cross a rabbit with shellfish?
An oyster bunny!`,

  `Where do polar bears keep their money?
In a snow bank!`,

  `Why did the pony get sent to his room?
He wouldn’t stop horsing around!`,

  `what kind of dog does a magician have?
A Labracadabrador!`,

  `Where do cows go on Friday nights?
They go to the moo-vies!`,

  `Why couldn't the pony sing “Happy Birthday?”
Because she was just a little hoarse!`,

  `How do you make an octopus laugh?
With ten-tickles!`,

  `How do you keep a bull from charging?
Take away its credit card!`,

  `Why can’t a leopard hide?
Because he’s always spotted!`,

  `How do you get a squirrel to like you?
Act like a nut!`,

  `what is the difference between a cat that took a nap on the Xerox machine and a cat that imitates everything you do?
One is a cat copy, and the other is a copy cat.`,

  `How do young bees get to school?
They take the school buzz!`,

  `what do frogs order at fast-food restaurants?
French flies!`,

  `what do you get from a pampered cow?
Spoiled milk!`,

  `what do you call an alligator who solves mysteries?
An investigator!`,

  `Why is a snake difficult to fool?
You can’t pull its leg!`,

  `what kind of socks do grizzlies wear?
None, they have bear feet!`,

  `what do you get when you cross a snail with a porcupine?
A slowpoke!`,

  `what did the dog say when it sat on sandpaper?
"Ruff!"`,

  `what's a cat's favorite dessert?
Chocolate mouse!`,

  `what fish only swims at night?
Starfish!`,

  `what does a triceratops sit on?
Its tricera-bottom!`]

// let fun = confirm("Want to hear a joke?")
//   if(fun== true){ 
  //   let num = Math.floor(Math.random() * jokes.length)
  //    let jk =  document.getElementById("joke")
  //      jk.innerHTML = jokes[num]
  
// }
// else if(fun==false){
//    let jk =  document.getElementById("joke")
//      jk.innerHTML = "Oops! No Joke Today" 
  
// }
function myFunction(){
  let num = Math.floor(Math.random() * jokes.length)
  document.getElementById("joke").innerHTML = jokes[num]
}


