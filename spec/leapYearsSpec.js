describe("LEAP YEARS", function(){
    it("should return yes if year is divisble by 400", function(){
        let year = 400;
        let result = leapYear(year)
        expect(result).toEqual('Yes, This is a Leap Year')
    })
    it("should return yes if year is divisible by 100 and not 400", function(){
        let year = 100;
        let result = leapYear(year)
        expect(result).toEqual('No, This is not a Leap Year')
    })
})