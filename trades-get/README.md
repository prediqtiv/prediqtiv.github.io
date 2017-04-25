
[SP500 Trades Get Read Me]( https://jaanga.github.io/sp500/#trades-get/README.md )
===
_request and obtain intraday trades for hundreds of stock market symbols for a number of days_

In process of moving to self-running process. Preliminary version on Google Apps Script

[Trades Get]( https://docs.google.com/spreadsheets/d/1Qe8UxwBWIMmlFrsTMxkorJwlX4beGQAeRNANSjJ8TME/edit )


### Full Screen Demo: [SP500 Trades Get ]( https://prediqtiv.github.io/trades-get/index.html )


## Web Page

<iframe src="https://prediqtiv.github.io/trades-get/index.html" width=100% height=600px ><img src="trades-get-r4.png" ></iframe>


## Concept

Request and obtain stock market intraday data for hundreds of symbols sourced via Wikipedia, Google and Yahoo

### Issues / Problems



### Mission
<!-- a statement of a rationale, applicable now as well as in the future -->


### Vision
<!--  a descriptive picture of a desired future state -->


### Wish List / To Do

* 2017-04-24 ~ filesToGitHub: show how many files uploaded each run
* 2017-04-24 ~ Add daily set time trigger
* 2017-04-23 ~ try out add multiple files
* Move to Google Apps Script and daily trigger
* Select exchange & portfolio
* Get trades for selected symbols or portfolio of issues not in sp500
* Display start index


## Usage Notes



## Copyright and License

* [Copyright and License]( https://prediqtiv.github.io/#license.md )


## Change Log & Developer Notes


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


