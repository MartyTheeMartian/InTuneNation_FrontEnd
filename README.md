## Play-Pitch-Precision (_PPP_) Presents:

# InTuneNation: An Ear-Training Coach for All Devices

> Sing in the moment!

Deployed App: https://intunenation.herokuapp.com/

## FOR DEVELOPERS

To utilize our repo, please do the following:
1. Fork & clone this repository
2. Do an NPM install inside your terminal to obtain necessary node modules: `npm install`
3. To run this app locally, run `npm start` inside your terminal to start up a development server with which you can preview your work at any given time.

We sincerely hope you enjoy coding along with our app:
please feel free to send pull requests our way, we would love to see your contributions!

## Technologies Used

Our app is currently built entirely with Javascript, and the front-end heavily relies on Redux for state to dynamically render React components, as well as a very simple back-end for storing exercises and scores. We also rely on a few other pieces of technology, including but not limited to:
* [Google-Oauth](http://passportjs.org/docs) (Google Passport 2.0 OAuth Technologies allow user to sign in through google's account)
* [C3](http://c3js.org/)(A charting library to display line graphs and bar graphs)
* [React-Promise-Middleware](https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/introduction.md)(A middleware that will resolve a promise into one of the three results: FULFILLED, REJECTED or PENDING)
* [Redux-Thunk](https://github.com/gaearon/redux-thunk)(A middleware allows you to write action creators that return a function instead of an action)
* [Teoria.js](https://github.com/saebekassebil/teoria) (For teaching music theory to JavaScript),
* [Microphone-stream](https://github.com/saebekassebil/microphone-stream) (A node module inspired by Web Audio API for requesting access to a user’s microphone and receiving audio input),
* [pitch.js](https://github.com/audiocogs/pitch.js) (For pitch-detection translated from frequency analysis during audio input)

## App demo
![homepage](http://i.imgur.com/9BBZ1JK.png)
![sign in](http://i.imgur.com/J3Usdhu.png)
![user profile]([Imgur](http://i.imgur.com/Teq8ci7.png))
![graph data](http://i.imgur.com/ysF1ud6.png)
![interface](http://i.imgur.com/CybOyoU.png)

## DESCRIPTION

#### Introduction

From the bathroom to the bar, from the sidewalk to the stage, people love to sing. We love to sing because communication is the simplest form of self-expression we possess. Our voices have such an intimate relationship with how we function from day-to-day, granting us the ability to perform tasks both casual, like ordering our favorite cup of coffee and conversing with our colleagues, and intimate, like proposing praises to our loved-ones and defending whatever causes we fight for. Adding pitch to our words makes them lyric, and therefore inspiring.

But some people find it difficult to feel comfortable doing that. There are a vast quantity of reasons why this may be true from person to person, but a large majority of those reasons have to do with feeling unprepared when it comes to one’s past musical training. Fine arts classes in the US have always been under heavy fire from politicians and other conspirators who seek to defund that aspect of public education. Even when a user has had a decade of experience as an artist, they still may feel their intonation skills are wanting when it comes to advanced exercises. Because of these reasons, people feel less confident that they have access to resources which will help them improve their intonation skills.

We at Play-Pitch-Precision (otherwise known as PPP) hope to ameliorate a user's predicament by offering them an app that can stand in as a personal ear training coach that fits on whatever screens they own. Once the user has created a personal account with us (or with Google and other third-parties in the near future), they can play custom exercises on a MIDI keyboard and then sing into their microphone to receive “intonation scores”, which are posted to their profile for later review.

#### A Brief Lesson In Music Theory

For the sake of easing a musical novice’s comprehension of how the app works, here is a brief lesson in music theory.
* A person’s *pitch* is scientifically measured as [frequency](https://en.wikipedia.org/wiki/Frequency) over time.
* A *unison* occurs when two people sing the same pitch/frequency.
* An *octave* occurs when a voice jumps from one pitch to a similar-sounding pitch higher or lower
  * Scientifically-speaking, a frequency is either doubled when the octave ascends or halved when it descends.

* In Western music notation, these octaves are separated by 12 *half-steps*.
* Each of these half steps have a name that consists of a single letter from A to G, sometimes also containing symbols that specify pitch-leaning (otherwise known as *accidentals*). Those symbols are either a *flat* (**b**) or a *sharp* (**#**).
* When a person’s pitch is compared against that of a tuned instrument, their pitch is **flat** when it falls beneath the perfect pitch of the instrument, and it is **sharp** when it rises above the perfect pitch of the instrument.
* This difference is more precisely measured in units of pitch accuracy known as *cents*, and it follows that each half step is comprised of exactly **100 _cents_**, and each octave is comprised of 1200 cents.

#### How Intonation Scores Are Created

While the user is singing, an intonation meter reacts to the frequencies translated from the user’s voice and shows the user what note they need to sing, what note the computer interprets they are singing, and their pitch accuracy in cents, at any given moment.

Every note the user attempts to sing begins with a score of 100, and decrements based on where their pitch falls when compared to stock frequencies.

The user’s intonation score for any given note is based upon a system that is not unlike a common traffic-light signal:
* When the user is singing a pitch that is greater or less than 40 cents away from the perfect pitch given by keyboard, they are in the “red” zone, and their score decrements a large percentage.
* If their pitch is within 15-40 cents in either direction from perfect pitch, they are in the “yellow” zone, and their score decrements a smaller percentage.
* If they are within 15 cents in either direction of perfect pitch, they are in the green zone, and a counter that is stored in the backend will increment.
  * When that counter reaches a certain requirement, their intonation score for that note is finalized and stored in an array of exercise scores.

When the user has finished performing all the notes within the scope of their exercise, their array of scores is finalized and stored in the back-end.

The user can repeat the exercise as often as they desire to improve upon that exercise with better scores!

#### Room For Improvement

In the future we hope to build upon the following goals:
* A mobile-native version of this app using React Native
* Cleaner sounds from the keyboard piano inside the main interface,
* Cleaner algorithms for processing audio input frequencies,
* and much more!

We at PPP sincerely hope you enjoy using our app, and we are excited to continue development of this program in the future.
