const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const nums_to_sixty = {
    0: "ZERO",
    1: "ONE",
    2: "TWO",
    3: "THREE",
    4: "FOUR",
    5: "FIVE",
    6: "SIX",
    7: "SEVEN",
    8: "EIGHT",
    9: "NINE",
    10: "TEN",
    11: "ELEVEN",
    12: "TWELVE",
    13: "THIRTEEN",
    14: "FOURTEEN",
    15: "FIVETEEN",
    16: "SIXTEEN",
    17: "SEVENTEEN",
    18: "EIGHTTEEN",
    19: "NINETEEN",
    20: "TWENTY",
    21: "TWENTYONE",
    22: "TWENTYTWO",
    23: "TWENTYTHREE",
    24: "TWENTYFOUR",
    25: "TWENTYFIVE",
    26: "TWENTYSIX",
    27: "TWENTYSEVEN",
    28: "TWENTYEIGHT",
    29: "TWENTYNINE",
    30: "THIRTY",
    31: "THIRTYONE",
    32: "THIRTYTWO",
    33: "THIRTYTHREE",
    34: "THIRTYFOUR",
    35: "THIRTYFIVE",
    36: "THIRTYSIX",
    37: "THIRTYSEVEN",
    38: "THIRTYEIGHT",
    39: "THIRTYNINE",
    40: "FOURTY",
    41: "FOURTYONE",
    42: "FOURTYTWO",
    43: "FOURTYTHREE",
    44: "FOURTYFOUR",
    45: "FOURTYFIVE",
    46: "FOURTYSIX",
    47: "FOURTYSEVEN",
    48: "FOURTYEIGHT",
    49: "FOURTYNINE",
    50: "FIFTY",
    51: "FIFTYONE",
    52: "FIFTYTWO",
    53: "FIFTYTHREE",
    54: "FIFTYFOUR",
    55: "FIFTYFIVE",
    56: "FIFTYSIX",
    57: "FIFTYSEVEN",
    58: "FIFTYEIGHT",
    59: "FIFTYNINE",
    60: "SIXTY"
};

// ↓ call main here
main();


function main() {
    // init
    aria();
    displayTimeLeft();
}


function getTimeLeft(time_left) {
    let result = {};

    // calc
    result.days_num = Math.floor(time_left / (1000 * 60 * 60 * 24));
    result.hours_num = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    result.minutes_num = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
    result.seconds_num = Math.floor((time_left % (1000 * 60)) / 1000);

    return result;
}


let my_interval = setInterval(e => {
    displayTimeLeft()

    // if the time is less or equal to zero clear interval
    if (time_left <= 0) {
        days.innerHTML = nums_to_sixty[0];
        hours.innerHTML = nums_to_sixty[0];
        minutes.innerHTML = nums_to_sixty[0];
        seconds.innerHTML = nums_to_sixty[0];

        clearInterval(my_interval);
    }
}, 1000);


function displayTimeLeft() {
    //                       ↓ set date minus now time
    const time = getTimeLeft(new Date("Dec 1, 2022 12:00:00").getTime() - new Date().getTime());

    // display
    days.innerHTML = nums_to_sixty[time.days_num];
    hours.innerHTML = nums_to_sixty[time.hours_num];
    minutes.innerHTML = nums_to_sixty[time.minutes_num];
    seconds.innerHTML = nums_to_sixty[time.seconds_num];
}


// for people with screen readers
function aria() {
    //                       ↓ set date minus now time
    const time = getTimeLeft(new Date("Dec 1, 2022 12:00:00").getTime() - new Date().getTime());

    // display
    document.querySelector(".aria").innerHTML = `a blank screen with only a count down which is due in ${time.days_num} days, ${time.hours_num} hours, ${time.minutes_num} minutes, ${time.seconds_num} seconds`;
}
