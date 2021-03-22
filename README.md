# Pre-work - *Memory Game*

Sequence Memory is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Cody Park

Time spent: ~14.5 hours spent in total (~2.5 hours on base game, ~12 hours on additional features)

Link to project: https://glitch.com/edit/#!river-upbeat-hole

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Buttons grow a little bit on hover and when activated
- [X] Color blind mode
- [X] Game modes are able to be toggled between
- [X] user cannot press buttons when not his/her turn
- [X] Count which level user is on

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="http://g.recordit.co/uYRie3blLl.gif" width=800><br>

<img src="http://g.recordit.co/dkdUakD4sn.gif" width=800><br>

<img src="http://g.recordit.co/XcKzouAc68.gif" width=800><br>

<img src="http://g.recordit.co/6cnPti2vRY.gif" width=800><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    http://www.swarthmore.edu/NatSci/ceverba1/Class/e5_2007/MusicalScales.html
    https://www.w3schools.com/jsref/jsref_push.asp
    https://www.w3schools.com/js/js_random.asp
    https://stackoverflow.com/questions/32459646/removing-the-shadow-from-a-button
    https://www.geeksforgeeks.org/javascript-pass-string-parameter-in-onclick-function/
    https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs
    https://www.tutorialspoint.com/Remove-elements-from-a-Dictionary-using-Javascript
    https://travis.media/how-to-make-an-item-grow-on-hover-with-css/
    https://stackoverflow.com/questions/19886843/how-to-remove-outline-border-from-input-button
    https://www.w3schools.com/css/css3_variables.asp
    https://stackoverflow.com/questions/9067892/how-to-align-two-elements-on-the-same-line-without-changing-html
    https://designers.hubspot.com/docs/snippets/design/centering-your-website-using-max-width-and-auto-margins
    https://stackoverflow.com/questions/9067892/how-to-align-two-elements-on-the-same-line-without-changing-html
    https://stackoverflow.com/questions/21511641/css-button-text-and-button-background-different-opacity/21511748
    https://stackoverflow.com/questions/18750803/getting-the-button-into-the-top-right-corner-inside-the-div-box/18750849#:~:text=2%20Answers&text=Just%20add%20position%3Aabsolute%3B%20top,the%20CSS%20for%20your%20button.
    https://www.w3schools.com/cssref/pr_text_text-decoration.asp
    https://www.w3schools.com/js/js_htmldom_html.asp
    http://theremin.music.uiowa.edu/MISpiano.html
    https://programminghead.com/how-to-play-audio-in-html-using-javascript/
    https://www.w3schools.com/jsref/met_win_setinterval.asp
    https://www.w3schools.com/jsref/met_win_clearinterval.asp
    https://www.w3schools.com/cssref/pr_background-image.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    A challenge I encountered when developing this project was having the buttons at the bottom of the screen toggle between select game modes. 
    The difficultly came not from making it functional but from making it efficient. “lambMode” was the first mode I implemented and the function that made 
    the modes toggleable was designed soon after. The first iteration of it worked, but I planned on adding more modes in the future. The main problem was 
    that the current code for mode selection was not scalable. This was my first experience with JavaScript, but the logic and syntax were like other languages I have learned previously. One iteration that stayed throughout most of the project consisted of two functions. The first one toggled the mode that was selected while the second one turned off all others. This worked well and allowed for an easy addition of other modes. However, I was unhappy with the usage of multiple functions and loops for the system to work properly. While thinking about how to further optimize this feature, I realized that by adding a variable representing the previous mode, only this would need to be turned off when activating another. This also made turning off a mode by clicking it again simple. Should this occur, the previous and current mode would be the same. Therefore, trying to turn it on would be fruitless for it would be immediately deactivated. Deselecting all modes would return the game to a normal state. All the aforementioned code fit nicely in a single function and I am very happy with the end result. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    Although I learned a lot throughout the course of this project, I still have many questions about web development. One thing I am curious about is whether common features 
    are implemented using standardized templates. For instance, the mode toggling function in my project went through a few iterations before a final design was chosen, but surely this feature is common within web development. When features such as this are implemented into the code, are functions for them developed from scratch, or are there company specified code templates reused for this? Another question I have is about the amount of people that work on individual blocks of code. I assume that changes to the program need to be looked over before being added to the main branch, but how much of the code is developed as a team as opposed to individually?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    If I had a few more hours to work on this project, there are a few things I would change. The first of which would be to fix some bugs currently in the game. When toggling between the modes quickly, the game will sometimes try to play both patterns simultaneously. This rarely happens and I cannot always replicate it so I would have to investigate it more the find out its cause. I am not sure if there is a way in HTML or JavaScript to check the state of a mouse, but I would spend extra time looking into it and would try to fix it. A game I really enjoy is Rhythm Heaven and I admire the way it makes simple tasks engaging. Functionally it is just a pattern game, but it finds a way to make each of its modes feel unique and fun. I would spend extra time adding more intractability like that in Rhythm Heaven. The implementation 
    of this would involve adding visuals and at least another JavaScript file. Finally, I would find a way to make the game playable with a keyboard. The letters on the squares during colorblind mode correspond to the note that plays when its pressed, but that could be changed to match a corresponding keyboard key. This would open new gameplay possibilities and make it easier for people with trackpads or reduced motor functionality to play the game. 

## License

    Copyright Cody Park

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.