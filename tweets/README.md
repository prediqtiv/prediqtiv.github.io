<span style=display:none; >[You are now in a GitHub source code view - click this link to view Read Me file as a web page]( http://predIQtiv.github.io/ "View file as a web page." )
</span>
<div><input type=button onclick=window.location.href='https://github.com/prediqtiv/prediqtiv.github.io';
value='You are now in a GitHub web page view - Click this button to view this read me file as source code' ></div>


Tweets Read Me
===


predIQtive uses a Google Apps spreadsheet in order to obtain its Tweets.

This is because Google Apps:

* Is free
* Enables running scripts on a schedule without human intervention - similar to Chron on Linux
* Enables fetching remote password protected files in a manner similar to Curl

The scripts are here:

[Twitter API Scripts]( https://docs.google.com/spreadsheets/d/1ySMstriI4Fb93CXp8_dF1FKK9dJXvuzMmjyHzpRN5KY/edit#gid=0 )


## To Do

* 2017-04-14 ~ Add if verifies then save
* 2017-04-11 ~ Delete any files with same name, then save to CSV
	* Enables saving multiple times during the day
* 2017-04-10 ~ Export directly from GAS to GitHub
* 2017-04-09 ~ Trigger to get tweets every 15 to 20 minutes  / Or Save to five at end of every cycle


## Change Log

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

