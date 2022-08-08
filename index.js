function scuberGreetingForFeet(sample) {
  if (sample <= 400) {
    return "This one is on me!";
  } else if (sample >= 400 && sample < 2000) {
    return "That will be twenty bucks.";
  } else if (sample > 2000 && sample < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (sample > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(destination) {
  if (destination === "NYC") {
    return "Ok, sounds good.";
  } else if (destination !== "NYC") {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "not as generous":
      return "Thank you.";
      break;
    case "generous":
      return "Thank you so much.";
      break;
    default:
      return "Bye.";
  }
}
