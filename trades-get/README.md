
[SP500 Trades Get Read Me]( https://jaanga.github.io/sp500/#trades-get/README.md )
===
_Request and obtain intraday trades for hundreds of stock market symbols for a number of days_

predIQtive uses a [Google Apps Script (GAS)]( https://developers.google.com/apps-script/ ) and spreadsheet in order to obtain its market data.

## Full Screen Demo: GAS [SP500 Ticks Get]( https://docs.google.com/spreadsheets/d/1Qe8UxwBWIMmlFrsTMxkorJwlX4beGQAeRNANSjJ8TME/edit )


### Full Screen Demo: [SP500 Trades Get ]( https://prediqtiv.github.io/trades-get/index.html ) << to be deprecated


## Embedded Web Page: SP500 Ticks Get

<iframe src="https://docs.google.com/spreadsheets/d/1Qe8UxwBWIMmlFrsTMxkorJwlX4beGQAeRNANSjJ8TME/pubhtml?widget=true&amp;headers=false" width=100% height=600px ></iframe>


## Concept

Request and obtain stock market intraday data for hundreds of symbols sourced via Wikipedia, Google and Yahoo

### Issues / Problems



### Mission
<!-- a statement of a rationale, applicable now as well as in the future -->


### Vision
<!--  a descriptive picture of a desired future state -->


## Developer Notes

Issue:files hosted on GitHub Pages cannot be set to rub at fixed time

Solution: Run files using Google Apps Script which allows for triggers to run scipts at fixed times and intervals

Issue: Using GAS, cannot send 500 files to GitHub all at once.

Solution: Triggers can be set for every 30, 15, 10, 5 or 1 minutes

Current timings: sending 25 symbols once a minute. Takes over a thousand seconds, but has had very few failures. Speed-ups will be explored.

### Wish List / To Do

Soon
* 2017-05-01 ~ Don't erase previous tweet count run until just before new count
* 2017-04-30 ~ Confirm trigger for every day of week
* 2017-04-30 ~ Push next run to next day when time is after the designated hour
* 2017-04-30 ~ Add headers to spreadsheet
* 2017-04-29 ~ Add way of getting several previous days - repair after an error
* 2017-04-29 ~ Add verify function
* 2017-04-25 ~ Add getMoreTicks function
* 2017-04-25 ~ Catch errors on getTick - especially over six minutes termination error - and start new trigger
* 2017-04-24 ~ filesToGitHub: show how many files uploaded each run
* 2017-04-23 ~ try out add multiple files

More
* Select exchange & portfolio
* Get trades for selected symbols or portfolio of issues not in sp500
* Display start index << ??




## Copyright and License

* [Copyright and License]( https://prediqtiv.github.io/#license.md )


## Change Log & Developer Notes


### 2017-05-01 ~ Theoo


### 2017-04-30 ~ Theo

* Fix several delete triggers errors
* Improve UI


### 2017-04-29 ~ Theo

* More testing, cleanup and fixes
* 2017-04-28 ~ Not run on weekends < testing


### 2017-04-28 ~ Theo

* Add UI items
* Add elapsed time to filesToGitHub



### 2017-04-27 ~ Theo

Looks like things can run smoothly now - but still needs recovery from error
- especially if goes over six minute limit

* Code and UI cleanup


### 2017-04-25 ~ Theo

* Rejig the UI a lot
* Add more error-trapping
[*] 2017-04-24 ~ Add daily set time trigger
	* May be working

### 2017-04-24 ~ Theo

Full, successful run accomplished! Data seems to run fine in eyeCue Replay R3

[*] 2017-04-23 ~ fix delete minute triggers
[*] 2017-04-23 ~ Add daily trigger

### 2017-04-23 ~ Theo

* GAS app getting very close to being operational


### 2017-04-20 ~ Theo

* More fixes to GAS app

### 2017-04-18 ~ Theo

* Getting tick data via Google Apps Script and saving directly to GitHub - quite amazing
	* But hitting 1MB files size limit
	* Need to figure out how to upload 6MB files (difficult) or upload 506 or so little files (easier?)
	* Uploading multiple files: exceeded maximum execution time;

### 2017-04-11 ~ Theo

* Stated process for obtaining tick data via Google Apps Script
	* Looking to be faster and simpler than anticipated
* Move to Google Apps Script and daily trigger << started

### 2017-04-07 ~ Theo

* Updated the select symbol bits
* Better error checking in loading Google SS / Wikipedia data
* Add display date that will be saved << make more apparent

### 2017-04-05 ~ Theo

* Add getStart
* Fix brk.b issues again

### 2017-04-04 ~ Theo

Code could use much cleanup and streamlining

* Fixed issues when there's a day with a new symbol
* Added get single day of ticks

### 2017-03-25 ~ Theo

Search and select is not really needed here but it's a simpler sandbox to play in compared to replay or realtime.
But might help later with portfolio creation

* Trades Get R5
* Add search and select subset of symbols via text input
* Add full read me


***

<center title="dingbat" >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; >❦</a>
</center>


