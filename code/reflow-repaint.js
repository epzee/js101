var bstyle = document.body.style; // cache
 
bstyle.padding = "20px"; // reflow, repaint
bstyle.border = "10px solid red"; // another reflow and a repaint
 
bstyle.color = "blue"; // repaint only, no dimensions changed
bstyle.backgroundColor = "#fad"; // repaint
 
bstyle.fontSize = "2em"; // reflow, repaint
 
// new DOM element - reflow, repaint
document.body.appendChild(document.createTextNode('dude!'));



/*
http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/

parts of the render tree (or the whole tree) will need to be revalidated and the node dimensions recalculated.
This is called a reflow, or layout. Note that there's at least one reflow - the initial layout of the page
(recalculating parts of the render tree is called reflow (in Mozilla), and called layout in every other browser, it seems)


parts of the screen will need to be updated, either because of changes in geometric properties of a node or because 
of stylistic change, such as changing the background color. This screen update is called a repaint, or a redraw.
(Updating the screen with the results of the recalculated render tree is called repaint, or redraw (in IE/DynaTrace))

http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/

A repaint occurs when changes are made to an elements skin that changes visibility, but do not affect its layout. Examples of this include outline, visibility, or background color. According to Opera, repaint is expensive because the browser must verify the visibility of all other nodes in the DOM tree. A reflow is even more critical to performance because it involves changes that affect the layout of a portion of the page (or the whole page). Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.
*/