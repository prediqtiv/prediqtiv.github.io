
URLs Get Read Me
===

<iframe src="https://docs.google.com/spreadsheets/d/1O2eqMtFCmtm_Lt_OGJNYzsSbw7AEHYawZGk7ryQdsxs/pubhtml?gid=376133839&amp;single=true&amp;widget=true&amp;headers=false" width=800 height=500 ></iframe>

## [sp500 urls get]( https://docs.google.com/spreadsheets/d/1O2eqMtFCmtm_Lt_OGJNYzsSbw7AEHYawZGk7ryQdsxs/edit#gid=376133839 )

## Concept / Issue to be resolved

Given a stock market symbol or a company name, what is the correct web site address or URL for that company? And is it possible to do this without paying money for the information?

After a fairly lengthy investigation, it appears that there are no readily available FOSS tools for doing gathering such corporate data. So we thought we should give it a try.

The corporate URLs have no current direct uses by predIQtiv scripts. The information will be used to obtain correct and appropriate links to appropriate for LinkedIn pages and other data sources.

## Mission

* Given a list of [ticker symbols]( https://en.wikipedia.org/wiki/Ticker_symbol ) return the appropriate corporate URL for that symbol
* Check for changes such as additions, deletions and name changes on a daily basis.
* Obtain new URLs as needed
* All of the above without human intervention
* Gather data using a system that has no charges and offers scheduled script execution - such as Google Apps
* Commit updates to a GitHub repo

## Features

The current effort is in a Google Apps spreadsheet:

It uses several different methods to gather the data. Unfortunately, it still requires human invention.

The nice feature is that the parts that are working can be made to run on a schedule and operate without human intervention.

The current set of tools operate on the SP 500 list of symbols. This will be enhanced that they run on any given set of symbols

## Statistics
* About 75% of the URLs were guessed correctly on the first try
* Another 10% were guessed on the second try and the spreadsheet was updated by hand
* 15% had to be searched for and entered entirely by hand. The spreadsheet provides a link with a search term built on the guess.


## Change Log

### 2017-05-13 ~ Theo

* Code cleanup
* Try/catch added
* Menu added
* Remaining human-entered URLs added
* Read Me added

### 2017-05-13 ~ Theo

* GAS spreadsheet created