const direction = prompt("which way do you travel, Left or Right... Choose carefully "
)

if (direction === "left" || "Left") {
    
  console.log("You travel left");
  const talk = prompt("You see a traveler, You speak to them yes or no? ");
  if (talk === "yes" || "Yes") {
    console.log("Welcome settler, I have a quest for you! ");
    console.log(
      "My quest requires a dirty book from the bell tower, go retrieve it "
    );
  } else if (talk === "no") {
    console.log("You walk past the traveler!");
  }
  const lightHouse = prompt(
    "You see a knight at the bell tower, do you sneak or fight ? "
  );
  if (lightHouse === "sneak" || "Sneak") {
    console.log("You snuck past the knight and retrieve the book ");
  } else if (lightHouse === "fight" || "Fight") {
    console.log(
      "You have taken a lot of damage, but you have defeated the knight "
    );
  }
}
