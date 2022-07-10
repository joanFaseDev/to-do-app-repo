# TO-DO APP

## Project Overview

The goal here is to build a tiny app to display on screen a list of things to do. More specifically, one use a form with a text input and a pair of _Submit_&sol;_Clear List_ buttons. Every time an entry is submitted, it should appear in the center of the page. If there's already entries on the list, then the new one should appear at the bottom of the list.
The _Clear List_ button should erase all entries in the list plus each item of the list should display a pair of buttons _X_&sol;_Done_. The first is used to remove an item individually, the second mark it as _Done_ and add a little effect for visual feedback (e.g changing its color, lined-through it,...).
This project came from a youtube video of [Andy Sterkowitz](https://www.youtube.com/watch?v=roumzWd4XJU&list=PLOSs2PF1l7PLPhmH0ep2DGxtZT1OH2czk&index=2)meant to provide some inspirations for wannabe developpers lacking ideas and&sol;or motivation. There's no solution provided, only instructions on what the finished product should look like. I find this kind of content really useful and it seems fair to share the source here.

Ressources: \* [Tab icon](https://icones8.fr/icons/set/to-do)

## Project Review (once completed)

- _Events_ are actions occuring inside the system you are programming. When they occurs the system fire a signal so that some code implementation can be run in reaction to a particular action. There's a ton of [events which we can react to](https://developer.mozilla.org/en-US/docs/Web/Events)

- The [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method take two parameters, a type of event to listen for and a listener. A listener can be _null_, a function or an object with a method named _handleEvent()_. All objects that can fire an event have an _addEventListener_ method.

```javascript

    function listener() { event handler /* The code which meant to be run */}

    element.addEventListener(event, listener() /* Listen out for the event happening */)
```

- _Events_ are not specifics to JavaScript and can be totally different from a programming environment to another.

## Conclusion

I achieved what was asked. The way i did it is not optimal, of that i'm sure BUT i did achieve what was asked and to me that's what really matter. I heard yesterday that 'dropping tutorials (not entirely of course), getting his hands dirty and actually coding something' is the best way to learn. By making mistakes, searching for solutions and developping solid skills at problem solving then the path to be a true developper should open and... yeah that sounds kind of lame, well you've got the idea.
I set myself a time limit on that project so i didn't push the css part as much as i wanted but still the visual is ok and the app functionnal. Again that was the goal so i'm happy with the end product.
