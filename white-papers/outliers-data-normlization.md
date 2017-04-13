
Markets, Outliers and Data Normalization
===

## Definitions
What are we talking about?

### Outliers

In this paper we use the term 'outlier' very loosely

Here are some typical definitions of 'outliers' along with algorithms for identifying them

* https://en.wikipedia.org/wiki/Outlier
* http://gladwell.com/outliers/
* http://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm
* http://mathworld.wolfram.com/Outlier.html
* https://en.wiktionary.org/wiki/outlier
* https://en.wiktionary.org/wiki/inlier
* http://www.mathwords.com/o/outlier.htm
	* A definition with a formula for calculating outliers
* https://graphpad.com/quickcalcs/Grubbs1.cfm
	* Performs Grubbs Test
* https://onlinecourses.science.psu.edu/stat501/node/339
* http://www.thesaurus.com/browse/outlier
* http://scikit-learn.org/stable/modules/outlier_detection.html
* https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-interpreting-scatter-plots/a/outliers-in-scatter-plots

### Black Swan Events / Theory

Another similar reference is a 'black swan' event.

* https://en.wikipedia.org/wiki/Black_swan_theory
* http://rationalwiki.org/wiki/Black_swan

### Outlying outliers

This white paper discusses ways of identifying items of interest from within a large group of items that are constantly in motion or changing.

'Item of interest' is rather a tedious expression, so this paper will use the term 'outlier' instead - even though our use of the term is somewhat of an outlier to the general meaning of the term.

The item in motion we want to look at may be interesting for a number of reasons

* It may currently be outside for the main swarm for a just a short while
* It may be in the swarm but moving in a direction than the 'main' direction
* It could be going in the the main direction but at a different rate of speed
* Within a swarm there may be sub-groups. For example a swarm of birds has males and females, young and old. There may be instance where the item of interest is in the middle of the swarm but outside the volume of the members of its cohort


## Large Amounts Data

A good swarm of things has hundreds of members. We want to see differences over time. Thinking in terms of the movement of birds in flight or a school of fish or an index of stocks being traded we would like to see hundreds of time slots. Each of those slots might have half a dozen elements. In the case of birds it might be three dimensions and three rotations. For stocks it might be open, high, low, close plus volume.

500 stock x 400 minutes * 5 variable = 1,000,000 items of data to cover a day of trading

You have no idea where the outlers are going to be and you have a million data pointts.

It's pretty eay to conclude that tables, worksheets or whatever containing a million cells are of no help.

Five hundred charts showing the movement of each bird, fish or stock are of no help either.

Now if we are talking of birds or fish, we know exactly what to do in order to view the outliers. We go out into the field or dive into the oceans and watch the movement in 3D. Instantly we see the movement of the flock and spot outliers instantly. We may even catch glimpses of outliers of direction inside the swarm.

The question of this paper is can we do the same thing with stocks or weather or other large data sets that vary over time?


## Data Normalization

* https://en.wikipedia.org/wiki/Normalization_(statistics)
* http://www.statisticshowto.com/normalized/
* http://stats.stackexchange.com/questions/70801/how-to-normalize-data-to-0-1-range

Birds and fish tend to be roughly of the same size and move at similar rates. But stock and weather statistics may have significantly varying base lines. One stock might be worth $500 and the next worth $2. A price change of $1 means very different things to the two stocks.

The logical maneuver to to normalize the data between 0 and 1.


## Normalizing the Data

We would like to create a 3D animation - with each frame representing a moment in time. We need to decide what each axis represents.

The easiest to deal with the X-axis is the gain or loss each trade.  An easy way to normalize the data is to turn the change into a change persent/

100 x ( current price - open price ) / open price.

For the vertical or Z-axis we can use a static number: the market capitalization of a symbol.

The Y-axis is a bit trickier.  It must represent volume and volume varies siggnifcantly between symbols. Fortunately, the avergae daily volume is a readily obtainable statistic. Therefor we can

100 * current volume / average daily volume.



To be continued...







