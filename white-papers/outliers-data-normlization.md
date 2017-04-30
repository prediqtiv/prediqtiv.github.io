
Markets, Outliers and Data Normalization
===

_“If at first the idea is not absurd, then there is no hope for it.”_ — Albert Einstein


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

The logical maneuver to to normalize all the data so that values are constrained to being between 0 and 1.


## Normalizing the Data

We would like to create a 3D animation - with each frame representing a moment in time. We need to decide what each axis represents.

The easiest to deal with the X-axis is the gain or loss each trade.  An easy way to normalize the data is to turn the change into a change percent relating to the difference between the current price and yesterday's close or this morning's opening.

    100 x ( current price - open price ) / open price.

For the vertical or Z-axis we can use a static number: the market capitalization of a symbol or the number of tweets.

A point to consider is that items that float in Z may be very hard to gauge. It's a good idea to the symbol start on the XY plave and finish at the Z.

The Y-axis is a bit trickier.  It must represent volume and volume varies significantly between symbols. Fortunately, the average daily volume is a readily obtainable statistic. Therefore we can create values that show the current volume as a percentage of the average daily volume.

    100 * current volume / average daily volume.


With this setup, the values of all the symbols start at 0,0 at opening and move across the ground during course the trading session.
As symbols gain or lose value the shift between the green and red areas. As the volume increases the symbol progress towards the 100%  daily average volume bar. Some symbols wil be below average and some symbols may be many times the average.

For the most part the volume movement is tracked in a linear manner. Some symbols will trade at many time their normal volume. When this happens the symbol may go way out of the normal screen area and be very hard to find or track.

The current fix-it is to have the symbol change course and move in the vertical direction and to track using a logrhythmic scale. This makes for a somewhat bizarre movement but most people seem to get it without thinking about it too much.

## Maximizing effective use of the viewing area

You are leaving the world of paper. Everything can move and twist, morph and colorize - all with the full six degrees of freedom.

One of the things you want to do is use every available axis - both positive and negative. The first thoughts about adding the count of cashtags for each symbol related to placing a symbol - such as a 3D bird - just above the placard that hovers over each symbol. The bird would be larger or small depending on the count. Needless to say this made for a very messy and not easy to read 'middle of the pack' space. Adding the tweets as negative Y-axis elements provides a happy, quite readable fix-it.

Further revisions of the app will do things such as enabling 'candles' for each symbol so you will be able to view open, high, low and close for each tick of each symbol.

Making effective use of the above the table and below the table spaces will be a fun thing to explore in upcoming revisions. And even more beguiling: could a mirror-like use be found for the negative Y-axs?

















