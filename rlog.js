// note

const runs = [];


function addRun(todayDate, todayLength, todayTime){
     let todaysRun = {'date':todayDate, 'length':todayLength, 'timein mins':todayTime, 'avg pace in mins':todayTime/todayLength};
     runs.push(todaysRun);
     console.log(runs);
    }

addRun('Monday', 3, '30');
addRun('Tuesday', 6.5, '50');
