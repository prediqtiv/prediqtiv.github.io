Code, Styling and Abstraction
===


_"It’s much easier to recover from no abstraction than the wrong abstraction"_ &ndash; Sebastian Markbage

## Concept / Issue to be solved

Money is often viewed as something that can only be played with by the rich and famous.
For most everybody else cash/economics/wherewithal is a serious matter and must be dealt with respect, fear or submission.

But does it have to be that way?

Or can we fork and apply the tools we learn about at maker faires/ hackathons/ demonstrations to investigate the nature of wealth/ capital/ assets and their movements, morphings and manipulations?

And more importantly can we take what we learned preparing static, paper-oriented 2D graphics, remove the various biases from our eyes and brains, and devise whole new ways of visualizing data that works for virtual reality, augmented reality and open source reality?

Can we make money/data/numbers fun again?

### Mission

* All code here is [FOSS]( https://en.wikipedia.org/wiki/Free_and_open-source_software ) with [MIT License]( https://en.wikipedia.org/wiki/MIT_License ) hosted in public repositories on [GitHub]( https://en.wikipedia.org/wiki/GitHub )
* All code here is entry-level plain-vanilla client-side [JavaScript]( https://en.wikipedia.org/wiki/JavaScript ) written in a very open, airy [coding style]( https://github.com/mrdoob/three.js/wiki/Mr.doob's-Code-Style%E2%84%A2 )
* All data gathering is carried via tools hosted and available at no charge accessing data sources with open [APIs]( https://en.wikipedia.org/wiki/Application_programming_interface ) available at no charge
* All apps are interactive animated real-time 3D processing large amounts of data with numerous variables
* All apps seek to maximize the use movement, color, shape, morphing, sound and user experience
* All methods seek to enlarge the number of data sets viewed simultaneously while keeping individual data points
* All methods seek to display as many variables as possible in a single view

### Vision
* Inspire youngsters and oldsters fascinated by STEM topics with playthings available regardless of location, wealth or ability
* See and feel $$$/many things/numbers in unimaginable ways
* Offer alternatives to current directions

## Coding Notes

The current scripts are designed to run inside an [iframe]( https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe ).
The scripts are included in iframes in the project read me files are are therefore being tested continuously.

The style of the code follows the style of its principal dependency. The code has a single dependency: the FOSS [Three.js]( https://threejs.org ) library hosted on GitHub and maintained by [Mr.doob]( https://mrdoob.com ). The style is described in the Three.js Wiki: [Mr.doob's Code Style™]( https://github.com/mrdoob/three.js/wiki/Mr.doob's-Code-Style%E2%84%A2 )

The intention is to keep the code as simple and readable as possible and thus easing the feasibility of embedding in larger more complex projects.

There are, however, a few personal quirks in the code:

* CSS is added via JavaScript rather than inside a `style` tag
* HTML is added via JavaScript rather than being inside a `body` tag
* Quotation are omitted unless absolutely required

These quirks can and may be removed upon request.


## See also

* http://jaanga.github.io/documents/jaanga-practice-notes/#code-mission-vision-r1.md
* http://jaanga.github.io/terrain3/index.html#coding-style.md
* http://va3c.github.io/viewer/va3c-viewer-html5/
	* https://github.com/va3c/viewer/tree/gh-pages/va3c-viewer-html5
* http://ladybug.tools/ladybug-web/ladybug-web-via-github-api-r2.html#coding-style.md

References

Sebastian Markbage's quote
* http://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html

