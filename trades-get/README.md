
[SP500 Trades Get Read Me]( https://jaanga.github.io/sp500/#trades-get/README.md )
===
_Request and obtain intraday trades for hundreds of stock market symbols for a number of days_

predIQtive uses a [Google Apps Script (GAS)]( https://developers.google.com/apps-script/ ) and spreadsheet in order to obtain its market data.

## Full Screen Demo: GAS [SP500 Ticks Get 2]( https://docs.google.com/spreadsheets/d/1lQ44DlwQ96khNTKk7DPFVzjt5ocXF5cyN2E7wzougEM/edit )

## Embedded Web Page: SP500 Ticks Get

<iframe src="https://docs.google.com/spreadsheets/d/1lQ44DlwQ96khNTKk7DPFVzjt5ocXF5cyN2E7wzougEM/pubhtml?widget=true&amp;headers=false" width=100% height=600px ></iframe>

### Deprecated: Full Screen Demo: [SP500 Trades Get ]( https://prediqtiv.github.io/trades-get/index.html )
* Client-side HTML, CSS & JavaScript in single file
* Fast, nice simple script
* But there's no [FOSS]( https://en.wikipedia.org/wiki/Free_and_open-source_software ) way of getting it to run on a schedule unattended


## Concept

Request and obtain stock market intraday data for any number of ticker symbols sourced via Wikipedia, Google and Yahoo


### Mission
<!-- a statement of a rationale, applicable now as well as in the future -->

* Create simple effective ways of scraping historical market tick public data with unattended scheduling
* Use open [RESTful]( https://en.wikipedia.org/wiki/Representational_state_transfer ) Web services

### Vision
<!--  a descriptive picture of a desired future state -->

Identify outliers or 'Black Swans' as they are occurring


## Features

* Gathers six data items for 390 minutes for 500 symbols or 1,181,700 data points from a data source plus 11 other useful data items for the 500 symbols and commits this to GitHub as 500 CSV files.
* Handles errors, delays and transmissions issues moderately well
* Run time is between twenty to thirty minutes with various speed-ups available
* Keeps within most modest GitHub API registered developer usage limits. IE, incurs no usage charges.
* All open source plain vanilla entry-level JavaScript

## Developer Notes

Issue: JavaScript files hosted on GitHub Pages cannot be set to run at fixed time

Solution: write and run files using [Google Apps Script]( https://developers.google.com/apps-script/ ) (GAS) which allows for triggers to run scripts at fixed times and intervals

Issue: There is a six minute limit to the duration of any script running on GAS. Using GAS, it takes over six minutes to send 500 files to GitHub all at once.

Solution: Set up GAS triggers - these can be set for every 30, 15, 10, 5 or 1 minutes. This allows for multiple six minute sessions.

Another approach might be to run multiple sessions. See

[Running things in parallel using HTML service]( http://ramblings.mcpher.com/Home/excelquirks/htmlservice/parallel )

<!--
Current timings: sending 25 symbols once a minute. Takes over a thousand seconds, but has had very few failures. Speed-ups will be explored.
-->

### Issues

* 2017-06-20 ~ ongoing incomplete run issues



### Wish List / To Do

Soon
* 2017-05-23 ~ at init: delete all triggers except daily run trigger
* 2017-05-18 ~ Obtain data from multiple sources << Yahoo next


More
* Reduce run time down to a few minutes and run multiple times during the day
* Select exchange & portfolio
* Get trades for selected symbols or portfolio of issues not in sp500


## Copyright and License

* [Copyright and License]( https://prediqtiv.github.io/#license.md )


## Change Log & Developer Notes

****Remember to leave the app running with a trigger!!****

****Manage versions before making changes!!****


### 2017-06-22 ~ Theo

* testing...

### 2017-06-21 ~ Theo

* fix send2gh using row instead of index
* testing send...

### 2017-06-20 ~ Theo

* Add send2log and return if weekend and market closed
* 2017-05-23 ~ Add go back and retry getting ticks missed in prior run << done after verify
* 2017-05-18 ~ Obtain data from multiple sources << Alpha Vantage underway
* 2017-05-18 ~ Improve use of named or pre-selected ranges
* 2017-05-18 ~ Fix remaining glitches in messages
* 2017-06-20 ~ Add verify Sha - a start

### 2017-06-16 ~ Theo

I thought the Google Doc spreadsheet hd been working, but no.
Since past weekend, it appears to run successfully, but no data shows up on GitHub.

* Oath checks out
* Add clear commit display before each commit
* Found the error: it was sitting in the chair: files were being sent to wrong folder ( trades-alpha-vantage )

### 2017-06-07 ~ Theo

* More runs and fixes with Alpha Vantage
* Code cleanup and streamlining
* Still getting fails with triggers not triggering

### 2017-06-05 ~ Theo

* Doing some trial runs with Alpha Vantage: looks like servers got overloaded


### 2017-06-04 ~ Theo

* SP500 Get Ticks Alpha Vantage just about operational
* Need to send only most recent days trades

### 2017-06-02 ~ Theo

* [Status Update]( https://github.com/prediqtiv/prediqtiv.github.io/issues/9 ) post
* Started [SP500 Get Ticks Alpha Vantage]( https://docs.google.com/spreadsheets/d/1lQ44DlwQ96khNTKk7DPFVzjt5ocXF5cyN2E7wzougEM/edit )


### 2017-05-30 ~ Theo

* May have fixed not reading last row issues

### 2017-05-23 ~ Theo

* Ongoing effort to catch errors as they happen
	* Takes much time as each run takes twenty or so minutes to complete
	* Most of times runs without errors
	* Learning how to simulate errors ;-)

### 2017-05-21 ~ Theo

Friday's run failed. Fingers crossed today's cleanup fixed things

* Full code cleanup and streamline
* 2017-05-18 ~ Set trigger to run daily


### 2017-05-18 ~ Theo

* Successful hands-off run around 11:00 am

### 2017-05-17 ~ Theo

One complete run-through: no errors

GAS is quite wonderful - but it's taken a lot of time to unlearn/relearn in order make it function nicely

Did I take a long tie because I'm old and slow or because the task was unusual and complex?


* 2017-05-16 ~ Add getNamedRange to getSingleTick
* 2017-05-16 ~ Start connecting display output to named ranges
* 2017-05-16 ~ Add getNamedRange to getSha

### 2017-05-16 ~ Theo

Continued failure on one always-same symbol. Why?

* 2017-05-16 ~ Add try/catch to getSha
* start adding named ranges
* Now runs all the way to last symbol

### 2017-05-15 ~ Theo

* More fixes / getting there
* 2017-05-14 ~ Add triggers to load full sp500

### 2017-05-14 ~ Theo

* GAS SP500 ticks get2 - mostly up and running
* Gathers tick data SP500 using triggers because runs over the six minute limit
* Verify function available, but looks like not essential to run it every run
* Send to GitHub sends batches of 256, can pick up where left off

All of these are responded to in one way or another given the new release, so deprecated
* 2017-05-11 ~ Creates a commit entry for the uploading of each symbol. Very distracting
* 2017-05-05 ~ if testing delete all triggers
* 2017-05-05 ~ getTicks: simplify so runs faster / keeps under 360 second limit
* 2017-05-05 ~ verify receipt while uploading
* 2017-05-04 ~ Verify number of symbols' data that have arrived at GitHub at any time
* 2017-05-04 ~ If any files not sent to GitHub, send only missing files
* 2017-04-29 ~ Add way of getting several previous days - repair after an error
* 2017-04-25 ~ Add getMoreTicks function
* 2017-04-25 ~ Catch errors on getTick - especially over six minutes termination error - and start new trigger
* 2017-04-24 ~ filesToGitHub: show how many files uploaded each run
* 2017-04-23 ~ try out add multiple files
* Display start index << ??

### 2017-05-12 ~ Theo

* Started GAS SP500 ticks get2 - so far, tighter and cleaner

### 2017-05-11 ~ Theo

* More verification and greater understanding of the ongoing issues
* Still needs more work - may even need more triggers in order to complete

### 2017-05-10 ~ Theo

* Verification of entries being added to GitHub beginning to work
* Full upload to GitHub completed

### 2017-05-09 ~ Theo

Trying to catch the errors when saving to GitHub is: Not easy
Using one minute triggers means is take many minutes to complete a run
Makes debugging extremely tedious. Often you forget what you are meant to be doing


### 2017-05-05 ~ Theo

* 2017-04-29 ~ Add verify function
* 2017-05-03 ~ Add top row to triggers indicating test run
* 2017-05-03 ~ Delete test run triggers

### 2017-05-03 ~ Theo

* Get running again - weekdays only
* Work on UI and row ordering and display
* 2017-05-01 ~ Don't erase previous tweet count run until just before new count << not really an issue. only erases on first run
* 2017-04-30 ~ Add headers to spreadsheet
* 2017-04-30 ~ Confirm trigger for every day of week
* 2017-04-30 ~ Push next run to next day when time is after the designated hour

### 2017-05-01 ~ Theo

* Generally mess things up and leave in un-runnable condition

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


