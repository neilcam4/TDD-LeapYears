describe("LEAP YEARS", function(){
    it("should return yes if year is divisble by 400", function(){
        let year = 400;
        let result = leapYear(year)
        expect(result).toEqual('Yes, This is a Leap Year')
    })
})