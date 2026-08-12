// browser loads html > browser loads js > open the dialog > user closes dialog >
//  audio system loads > user clicks sound button
// find out dialog
const introDialog = document.getElementById("intro-dialog");
// find the close button
const introDialogCloseButton = document.getElementById("intro-dialog-close");
//show the found element in oour browser console
//console.log(introDialog);
// find out test button
const testbutton = document.getElementById('test-button');
// init our synth
const synth = new Tone.Synth().toDestination();


////Dialog
introDialog.showModal();
introDialogCloseButton.addEventListener("click", function closeIntroDialog() {
    introDialog.close();
});

//we put the whole function inside the event listener instead as its only called there
//function closeIntroDialog{}

// do something when this button is clicked
testbutton.addEventListener("click", playNote)

// fuction that runs when button is clicked
function playNote(){
    // play a note for a duration
synth.triggerAttackRelease("c4", "8n");
}