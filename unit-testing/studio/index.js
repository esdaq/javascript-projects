
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput : function (input) {
    let output = "";

    if (input % 2 === 0 && input % 3 === 0 && input % 5 === 0) {
      return output = 'LaunchCode Rocks!';
    }else if (input % 2 === 0 && input % 3 === 0) {
      return output = "LaunchCode!";
    }else if (input % 3 === 0 && input % 5 === 0) {
      return output = "Code Rocks!";
    } else if (input % 2 === 0 && input % 5 === 0) {
      return output = 'Launch Rocks! (CRASH!!!!)';
    }  else if (input % 2 === 0) {
      return output = 'Launch!';
    } else if (input % 3 === 0) {
      return output = 'Code!';
    } else if (input % 5 === 0) {
      return output = 'Rocks!';
    } else {
      return output = "Rutabagas! That doesn't work.";
    }
  }
};

module.exports = launchcode;

