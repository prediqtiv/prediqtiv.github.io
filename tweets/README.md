<span style=display:none; >[You are now in a GitHub source code view - click this link to view Read Me file as a web page]( http://predIQtiv.github.io/ "View file as a web page." )
</span>


Tweets Read Me
===


predIQtive uses a [Google Apps Script (GAS)]( https://developers.google.com/apps-script/ ) and spreadsheet in order to obtain its Tweets.

This is because GAS:

* Is free
* Enables running scripts on a schedule without human intervention - similar to Chron on Linux
* Enables fetching remote password protected files in a manner similar to Curl

The Twitter cashtag gathering script is here:

## Full Page Demo: [SP500 Twitter Cashtags Get]( https://docs.google.com/spreadsheets/d/1ySMstriI4Fb93CXp8_dF1FKK9dJXvuzMmjyHzpRN5KY/edit#gid=0 )

## Embedded Web Page: SP500 Twitter Cashtags Get

<iframe src="https://docs.google.com/spreadsheets/d/1ySMstriI4Fb93CXp8_dF1FKK9dJXvuzMmjyHzpRN5KY/pubhtml?gid=1328191743&amp;single=true&amp;widget=true&amp;headers=false" width=100% height=600px ></iframe>


prediqtiv.github.io/tweets/2017-05-01.csv

## Coding Considerations

The Twitter API has a rate limit of 450 calls every 15 minutes.

Our app captures 28 cashtags per minute until complete in order to comply with the limits


## Wishlist

* 2017-04-15 ~ Use Twitter API code here to do search and other high level queries in Twitter
	* https://mashe.hawksey.info/2016/08/keeping-your-twitter-archive-fresh-and-freely-hosted-on-github-pages/
	* https://script.google.com/d/1E3MlTiAgsjVHdSExaYoOCd0-WEXwKAJGpB8Pjd8ReALs2JxN0aGVtST7/edit?usp=drive_web

## To Do


* 2017-05-02 ~ Separate Trigger item rows to make more readable / see also ticks get
* 2017-05-02 ~ Cleanup  and streamline start, end, count settings
* 2017-05-01 ~ Add back testing capability - for faster test runs - or delete
* 2017-04-29 ~ Add Twitter/token data??
* 2017-04-29 ~ Cleanup elapsed time display
* 2017-04-15 ~ If not all tweets gathered, run again to gather just the missing ones
	* 2017-04-15 ~ Verify tweets collected in separate column of results
	* 2017-04-15 ~ pushing missing tweets to array
* 2017-04-09 ~ Trigger to get tweets every 15 to 20 minutes  / Or Save to five at end of every cycle


## Change Log

****Manage versions before making changes!!****

### 2017-05-03 ~ Theo

* Reordered trigger rows
* Minor cleanup
* Adding sorting tweets to alphabetical order

### 2017-05-02 ~ Theo

* More UI enhancements: verify
* When testing: save data to test folder
* 2017-04-30 ~ shutdown faster
* 2017-05-01 ~ Don't erase previous tweet count run until just before new count << not really an issue. only erases on first run

### 2017-05-01 ~ Theo

* More fixes to UI
* 2017-04-30 ~ Delete all test triggers after a test


### 2017-04-29 ~ Theo

* More fixes to UI
* Add text where data will appear eventually + bolding - helps with design phase
* 2017-04-28 ~ Add most recently captured symbol to init log data
* 2017-04-27 ~ Improve UI for init() / getTwitterUserTweetCount << mostly done

Not an issue with sending/committing to GitHub
* 2017-04-11 ~ Delete any files with same name, then save to CSV
	* Enables saving multiple times during the day

### 2017-04-28 ~ Theo
* More fixes to UI
* Add text where data will appear eventually - helps with design phase
* 2017-04-27 ~ Add time taken output

### 2017-04-27 ~ Theo


* Add dayTim function
* Update Trigger UI a lot

Done
[] 2017-04-15 ~ Show NY/remote time for next time script will run

### 2017-04-25 ~ Theo

* 2017-04-10 ~ Export directly from GAS to GitHub

### 2017-04-15 ~ Theo

* 2017-04-14 ~ Add if verifies then save << added // needs more checking to see if working

### 2017-04-14 ~ Theo

* 2017-04-13 ~ Add symbols currently collected count to log
* 2017-04-12 ~ Verify that tweets for all symbols have been collected


### 2017-04-13 ~ Theo

Debugging scripts that require twenty minutes or so to complete requires a lot of patience. ;-)

* 2017-04-12 ~ Move Log column over one - to avoid conflict with time column << done
* Fixes to the triggering logic

### 2017-04-12 ~ Theo

* 2017-04-09 ~ Set up separate project to create Trigger get get daily tweets << underway and testing. No extra project required - fingers crossed


### 2017-04-11 ~ Theo

* 2017-04-09 ~ export to csv << works
* Improved testing and error trapping


### 2017-04-10 ~ Theo

* 2017-04-09 ~ make first two columns ready for CSV export << 2017-04-10
* 2017-04-09 ~ Drop the $ in symbol names

