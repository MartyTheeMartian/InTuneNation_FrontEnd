const steps = [
  {
    element: '.intro-interface-welcome',
    intro: 'Welcome to InTuneNation, the pitch-accuracy vocal coach for your web browser! If you would like a quick introduction to how this screen works, continue with the next button: otherwise, feel free to skip this and go do some singing.',
  },
  {
    element: '.intro-interface-piano',
    intro: 'Click any note on this digital keyboard to hear that note played back to you. The name and octave of that note will be displayed in the indicator below labeled *Piano Note*.',
    position: 'right',
  },
  {
    element: '.intro-interface-octaveButtons',
    intro: 'The keyboard can play from c2 to c5, spanning the maximum vocal range of the human voice: the current octaves the piano is set to are adjusted with the left and right buttons respectively',
    position: 'right',
  },
  {
    element: '.intro-interface-captureButton',
    intro: 'The center button is what you press when you are ready to record an exercise that you want to judge your intonation by. After hitting this button the first time, every note you click will be added to the target table below. Clicking this button again will finalize your exercise table.',
    position: 'bottom',
  },
  {
    element: '.intro-interface-targetTable',
    intro: 'After pressing the Key Capture button and playing a couple of notes, you will start to see this table fill up with notes that you will have to sing. Each row has a special significance...',
    position: 'top',
  },
  {
    element: '.intro-interface-targetTable-noteOrder',
    intro: 'This row indicates the order of the notes you have to sing.',
    position: 'top',
  },
  {
    element: '.intro-interface-targetTable-targetNotes',
    intro: 'This row indicates the name of the notes you have to sing. We will get to the next two rows in a little bit: for now, time to move over to those big blue buttons above...',
    position: 'top',
  },
  {
    element: '.intro-interface-startNoteButton',
    intro: "Forgot your starting note? Don't worry, you can hear it again by clicking this button.",
    position: 'bottom',
  },
  {
    element: '.intro-interface-resetButton',
    intro: 'Need to start over or make a new exercise? Press this button to return everything back to normal.',
    position: 'top',
  },
  {
    element: '.intro-interface-singButton',
    intro: "The moment you hit this button, it's time to start singing your exercise! The table will highlight your current note to show you what note you have to pass. Until you satisfy our tuner, you have to stay on the same pitch, so be as accurate as you can be!",
    position: 'left',
  },
  {
    element: '.intro-interface-indicators',
    intro: 'Behind the scenes, your microphone is picking up the frequencies of your voice and measuring them against perfect pitches in units called cents. The name of the closest perfect pitch is displayed as text underneath the gauge. You want to stay in the green zone and out of the yellow or red zones.',
    position: 'right',
  },
  {
    element: '.intro-interface-targetTable-scores',
    intro: 'Your score will deplete incrementally or rapidly if you are in the yellow or red zones respectively...',
    position: 'top',
  },
  {
    element: '.intro-interface-targetTable-greentime',
    intro: "If you hit the green zone, a counter increments in the background. Do this enough times, and you'll pass the note and move on to the next one in your exercise. Rinse & repeat until your exercise is complete!",
    position: 'top',
  },
  {
    element: '.intro-interface-sliders',
    intro: 'These sliders let you adjust the difficulty settings of your InTuneNation experience.',
    position: 'top',
  },
  {
    element: '.intro-interface-sliders-greenzone',
    intro: 'This adjusts how big of a green zone you would like to hit the zone: novices should keep it wide, while professionals can make it thin for an added challenge.',
    position: 'top',
  },
  {
    element: '.intro-interface-sliders-time',
    intro: 'This adjusts how much green time you have to accumulate before you pass every note in the scale. Keep it small unless you want an added challenge (and have some patience as well).',
    position: 'top',
  },
  {
    element: '.intro-interface-repeatExercise',
    intro: "You will know your exercise is complete when this button's text reads 'Repeat Ex'. When it does, click this button to easily repeat the same exercise again to go for a higher score.",
  },
  {
    element: '.intro-interface-profile',
    intro: 'After finishing your exercise, your scores are stored on your profile page, where you can see the history of your scores over time. This is the end of the tour for this page: enjoy your time on InTuneNation, and never stop singing!',
  },
];

const introOptions = {
  exitOnOverlayClick: false,
  exitOnEsc: false,
  showProgress: true,
};


// make hint for green time
module.exports = { steps, introOptions };
