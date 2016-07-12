import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const schedules = [
  {
    id: "1",
    days: ["Monday", "Wednesday"],
    frequency: "ONE_WEEK",
    interval: "null",
    startDate: "2016-04-30",
    endDate: "2016-05-15",
    survey: "surveyURL1"
  },
  {
    id: "2",
    days: ["Monday"],
    frequency: "MONTHLY",
    interval: "null",
    startDate: "2016-05-25",
    endDate: "2016-12-25",
    survey: "surveyURL2"
  }];

  const respondent = [

  ];

  const users = [
    {
      id: "1",
      email: "user1@test.com",
      firstName: "Test1",
      lastName: "User1"
    },
    {
      id: "2",
      email: "user2@test.com",
      firstName: "Test2",
      lastName: "User2"
    },
    {
      id: "3",
      email: "user3@test.com",
      firstName: "Test3",
      lastName: "User3"
    },
  ];

  const attributeTypes;

  const allowedAttributes;

  class ScheduleApi {
    static getAllSchedules() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], schedules));
            }, delay);
        });
    }

    static getScheduleById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let schedule = schedules.find((theSchedule) => {
                    return schedule.id === id;
                });
                if (schedule) {
                    resolve(Object.assign({}, schedule));
                } else {
                    reject(`No schedule with id of ${id} found.`);
                }

            }, delay);
        });
    }
}

export default ScheduleApi;
