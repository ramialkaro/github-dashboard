import { formatZonedDate } from './dateFormatter';

interface testCase {
  message: string;
  znDate: string | Date;
  expected: string;
}

describe("isEvening", () => {

  const testCases: testCase[] = [ 
    { message: 'should return true if it is morning', znDate: '2022-10-16T13:52:00.652Z', expected:'October 16, 2022 4:52 PM'},
    {message: 'should return false if it is night',  znDate: '2022-02-26T08:42:16.652Z', expected: 'February 26, 2022 10:42 AM'},
    {message: 'should not accept empty string', znDate: '', expected: 'Invalid date'},
    {message: 'should not accept random string', znDate: 'random value', expected: 'Invalid date'}
  ]
  

  testCases.forEach( (tCase) => {
    it(tCase.message, () => {
      const mockedDateFormatter = jest.fn(formatZonedDate);

      expect(mockedDateFormatter(tCase.znDate)).toEqual(tCase.expected)

    });
  });
  });