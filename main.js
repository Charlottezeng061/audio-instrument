// find out test button
const testbutton = document.getElementById('test-button');
// init our synth
const synth = new Tone.Synth().toDestination();

// do something when this button is clicked
testbutton.addEventListener("click", playNote)

// fuction that runs when button is clicked
function playNote(){
    // play a note for a duration
synth.triggerAttackRelease("c4", "8n");
}