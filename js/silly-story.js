// VARIABLE DECLARATIONS

/* STEP 1:*/
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

/* STEP 3: */
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

/* STEP 4: */
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

/* STEP 2: have a look at the following function - if you call this function and pass it an array, it will return one of the elements of that array randomly */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: Review the partially complete result() function below */
function result() {
    // STEP 7:
    var newStory = storyText;

    /* STEP 8:*/
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    //console.log(xItem);

    /* STEP 9: */
    newStory = newStory.replace(/:insertx:/g, xItem)
    .replace(':inserty:', yItem)
    .replace(':insertz:', zItem);

    /* STEP 10:*/
    if (customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    /* STEP 11: If the metric radio button has been checked, we need to convert the temperature and mass numbers in the story */
    if (document.getElementById("metric").checked) {

        // STEP 11a + STEP 11b: 
        var weight = Math.round(300 * 0.453592) + ' kilograms';

        // STEP 12a: Create a variable called temp and convert °F to °C ... the formula for conversion is °C = (°F - 32) x 5/9
        var temp = Math.round((94 - 32) * (5 / 9)) + ' Celsius';

        // STEP 12b: Replace the string '94 fahrenheit' with the updated temperature in °C
        newStory = newStory.replace('300 pounds', weight).replace('94 fahrenheit', temp);

    }
    /* STEP 13:*/
    story.textContent = newStory;
    
    // The following line makes the paragraph visible
    story.style.visibility = "visible";
}

// EVENT LISTENERS
/* STEP 5: Add a click event listener to the randomize variable 
so that when the button it represents is clicked, the result() function is run. */
randomize.addEventListener("click", result);
// This lab based on the excellent assessment challenge at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator
