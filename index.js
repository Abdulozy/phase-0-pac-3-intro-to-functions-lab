describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  });

  function shout(string) {
      return string;
  }

  function shout(string) {
    return string.toUpperCase();
  }

  describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("HELLO")).toEqual("hello");
    });
  });

  function shout(string) {
    console.log (string);

    }


  function shout(string) {
    console.log (string).toLowerCase();
  }