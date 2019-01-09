import { DateChecker } from '../src/weekday.js';
describe('DateChecker', function () {



  it('should return what day today is', function () {
    var newDate = new DateChecker('2010-12-12');
    expect(newDate.getDayOfWeek()).toEqual("Saturday");
  });
});

