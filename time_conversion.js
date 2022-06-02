// Sample input 07:05:45PM
// Sample input 12:01:00PM

function timeConversion(s) {

    let timeArr = s.split(':');

    let hours = timeArr[0];
    let minutes = timeArr[1];

    let arrSeconds = [...timeArr[2]];

    let seconds = arrSeconds[0] + arrSeconds[1];
    let period = arrSeconds[2] + arrSeconds[3];

    if (period == 'AM' && hours == 12) {
        hours = '00';
    }

    if (period == 'PM') {
        switch (hours) {
            case '01':
                hours = '13';
                break;
            case '02':
                hours = '14';
                break;
            case '03':
                hours = '15';
                break;
            case '04':
                hours = 16;
                break;
            case '05':
                hours = '17';
                break;
            case '06':
                hours = '18';
                break;
            case '07':
                hours = '19';
                break;
            case '08':
                hours = '20';
                break;
            case '09':
                hours = '21';
                break;
            case '10':
                hours = '22';
                break;
            case '11':
                hours = '23';
                break;
        }
    }

    let result = [hours, minutes, seconds];

    return result.join(':');
}

console.log(timeConversion('11:50:59PM'));
console.log(timeConversion('12:01:00PM'));