import {animation, style, animate, trigger, transition, useAnimation} from '@angular/animations';

/*
* DSL
* */
export const fadeIn = animation([
  // start
  style({
    opacity: 0,
    'border-radius': '5px'
  }),
  // end
  animate(
    '1000ms',
    style({
      opacity: 1,
    })
  )
]);

export const fadeOut = animation(
  animate(
    '500ms',
    style({opacity: 0})
  )
);

/*
* Transition
* */
export const fadeInOut = trigger('fadeInOut', [
  transition('void => *', useAnimation(fadeIn)),
  transition('* => void', useAnimation(fadeOut))
]);
