describe("LEAP YEARS", function(){
    it("should return yes if year is divisble by 400", function(){
        let year = 400;
        let result = leapYear(year)
        expect(result).toEqual('Yes, This is a Leap Year')
    })
    it("should return no if year is divisible by 100 and not 400", function(){
        let year = 100;
        let result = leapYear(year)
        expect(result).toEqual('No, This is not a Leap Year')
    })
    it("should return no if year is divisible by 100 and not 400", function(){
        let year = 5;
        let result = leapYear(year)
        expect(result).toEqual('No, This is not a Leap Year')
    })
    it("should return yes if year is divisible by 4 and not 100", function(){
        let year = 96;
        let result = leapYear(year)
        expect(result).toEqual('No, This is not a Leap Year')
    })
})