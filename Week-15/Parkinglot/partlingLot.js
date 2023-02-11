process.stdout.write("---- PARKING LOT  ----- \n");

let lots = [];
let log = [];
let lengthLots = 0;

function print(text) {
  process.stdout.write(`${text} \n`);
}

function createParkingLot(lot) {
  if (lot <= 0) {
    process.stdout.write("\n you can't create lot with 0 or below number");
  } else {
    lengthLots = lot;
  }
}

function parkCar(carNumber, color) {
  if (lots.length > lengthLots && lots.length > 0) {
    print("Sorry, parking lot is full");
  } else {
    const emptData = lots.findIndex((l) => !l.carNumber);
    if (emptData <= 0) {
      lots.push({
        carNumber,
        color,
      });
      log.push(`${carNumber} ${color}`);
    } else {
      lots[emptData] = {
        carNumber,
        color,
      };
      log.push(`${carNumber} ${color}`);
    }
  }
}

function leave(number) {
  lots[number] = {};
}

function findCar(carNumber) {
  const carIndex = lots.findIndex((l) => l.carNumber === carNumber);
  if (carIndex <= 0) {
    print("Not found");
  } else {
    print(carIndex);
  }
}

process.stdin.on("data", function (data) {
  const input = data.toString().trim().split(" ");
  const cmd = input[0];
  const arguments = input.slice(1);

  switch (cmd) {
    case "create_parking_lot":
      createParkingLot(arguments[0]);
      print(`Created a parking lot with ${arguments[0]} slots`);
      break;
    case "park":
      parkCar(arguments[0], arguments[1]);
      print(`Allocated slot number: ${lots.length}`);
      break;
    case "leave":
      leave(arguments[1]);
      print(`Slot number ${arguments[0]} is free`);
      break;
    case "status":
      print("Slot No. Registration No Colour");
      log.forEach((l) => print(l));
      break;
    case "registration_numbers_for_cars_with_colour":
      lots.filter((l) => l.color === arguments[0]).forEach((l) => print(l));
      break;
    case "slot_numbers_for_cars_with_colour":
      let lo = [];
      lots.forEach((l, i) => {
        if (l.color === arguments[0]) {
          lo.push(i);
        }
      });
      print(lo.join(" ,"));
      break;
    case "slot_number_for_registration_number":
      findCar(arguments[0]);
      break;
    case "exit":
      process.exit(0);
      break;
    default:
      process.stdout.write(`Unknown command: ${cmd}\n`);
  }

  process.stdout.write("$ ");
});
