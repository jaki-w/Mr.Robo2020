# _Mr. Roboger's Neighborhood_

#### _A number list generator, 08/21/2020_

#### By _**Jaki Widby**_

## Description

_This is a webpage that allows the user to input a number of choice and it returns a list of all numbers from 0 up to the specified number. Numbers 1, 2, and 3 are expceptions. Numbers containing 1 will be replaced with "Beep!". Numbers containing 2 will be replaced with "Boop!". Numbers containing 3 will be replaced with "Won't you be my neighbor?". Number 3 will take precedence over 1 and 2. Number 2 will take precedence over 1._

## Setup/Installation Requirements

* _To view page in browser without cloning the repository, open web browser of choice and navigate to https://jaki-w.github.io/Mr.Robo2020/_
_or_




_or_

* _Open web browser and navigate to Github website_

* _Search for user jaki-w and navigate to Mr.Robo2020 repository_

* _Click the clone or download button and copy url_

* _Open your machine's terminal and run $ cd desktop_

* _Run $ git clone_

* _Navigate to your machine's desktop and open Mr.Robo2020 folder_

* _Drag the index.html file into the browser to view page._


## Support and contact details

_For questions or comments please email jaki.widby@gmail.com_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_

## Specifications

[X] Spec: _The program returns a range of numbers   from 0 to the user's inputted number._
  * Input: "5"
  * Output: "0, 1, 2, 3, 4, 5"

[X] Spec: _The program replaces all numbers containing the number 3 with "Won't you be my neighbor?"_
  * Input: "5"
  * Output: "0, 1, 2, Won't you be my neighbor?, 4, 5"

[X] Spec: _The program replaces all numbers containing the number 2 with "Boop!"_
  * Input: "5"
  * Output: "0, 1, Boop!, 3, 4, 5"

[X] Spec: _The program replaces all numbers containing the number 1 with "Beep!"_
  * Input: "5"
  * Output: "0, Beep!, 2, 3, 4, 5"

[X] Spec: _Higher number exceptions apply before lower number exceptions apply._
  * Input: "13"
  * Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?"

### License

*This project is licensed under the MIT license*

Copyright (c) 2020 **_Jaki Widby_**