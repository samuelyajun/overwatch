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
    survey: "surveyURL1",
    respondents: [
         {
           "allowedAttributes": [
             {
               "value": "DEV",
               "attributeTypes": {
                 "name": "ROLE"
               }
             },
             {
               "value": "BALTIMORE",
               "attributeTypes": {
                 "name": "OFFICE"
               }
             },
             {
               "value": "CHOICE",
               "attributeTypes": {
                 "name": "CLIENT"
               }
             },
             {
               "value": "PMSI",
               "attributeTypes": {
                 "name": "PROJECT"
               }
             }
           ],
           "user": {
             "email": "user1@test.com",
             "firstName": "Test1",
             "lastName": "User1"
           }
         }
       ]
  },
  {
    id: "2",
    days: ["Monday"],
    frequency: "MONTHLY",
    interval: "null",
    startDate: "2016-05-25",
    endDate: "2016-12-25",
    survey: "surveyURL2",
    respondents: [
         {
           "allowedAttributes": [
             {
               "value": "TECH LEAD",
               "attributeTypes": {
                 "name": "ROLE"
               }
             },
             {
               "value": "BEAVERTON",
               "attributeTypes": {
                 "name": "OFFICE"
               }
             },
             {
               "value": "CHOICE",
               "attributeTypes": {
                 "name": "CLIENT"
               }
             },
             {
               "value": "DB1",
               "attributeTypes": {
                 "name": "PROJECT"
               }
             }
           ],
           "user": {
             "email": "user2@test.com",
             "firstName": "Test2",
             "lastName": "User2"
           }
         }
       ]
  }];

  function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
  }

  //This would be performed on the server in a real app. Just stubbing in.
  const generateId = (schedule) => {
  return replaceAll(schedule.title, ' ', '-');
  };

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

    static saveSchedule(schedule) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (schedule.id) {
          const existingScheduleIndex = schedules.findIndex(a => a.id == schedule.id);
          schedules.splice(existingScheduleIndex, 1, schedule);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new schedules in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          schedule.id = generateId(schedule);
          schedule.watchHref = `http://www.pluralsight.com/courses/${schedule.id}`;
          schedules.push(schedule);
          //console.log('schedules: ' + schedules);
        }

        resolve(Object.assign({}, schedule));
      }, delay);
    });
  }
}

export default ScheduleApi;
