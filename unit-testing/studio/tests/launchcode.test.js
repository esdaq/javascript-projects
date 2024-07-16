// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("organization should contain nonprofit", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("executive director should contain jeff", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("percentageCoolEmployees should contain 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("programsOffered should contain ", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });


  test("launchOutput() method meets output", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
    expect(launchcode.launchOutput(3)).toBe("Code!");
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");

  });
  
});

