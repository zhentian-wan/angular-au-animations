import {animation, style, animate, trigger, query, stagger, transition, useAnimation, state} from '@angular/animations';

/*
* DSL
* */
const fadeIn = animation([
  // start
  style({
    opacity: 0
  }),
  // end
  animate(
    "{{duration}} ease-in",
    style({
      opacity: 1
    })
  )
]);

const fadeOut = animation(
  animate(
    "{{duration}} ease-out",
    style({
      opacity: 0
    })
  )
);

const heightStart =  animation([
  style({
    height: 0
  }),
  animate(
    "{{duration}} ease-in",
    style({
      height: '*'
    })
  )
]);

const heightEnd = animation([
  animate(
    "{{duration}} ease-out",
    style({
      height: 0
    })
  )
]);


/*
* Transition
* */

export const jumpIntoPage = trigger('jumpIntoPage', [
  transition(':enter', [
    query('.form-input', style({transform: 'translateY(-50px)', opacity: 0})),
    query('.form-input', [
      stagger(180, [animate('300ms ease-in', style('*'))])
    ])
  ])
]);

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', useAnimation(fadeIn, {params: {duration: '800ms'}})),
  transition(':leave', useAnimation(fadeOut, {params: {duration: '200ms'}}))
]);

// Using animation
export const heightZeroFull = (params) => {
  return trigger('heightZeroFull', [
    transition(':enter', useAnimation(heightStart, {params})),
    transition(':leave', useAnimation(heightEnd, {params}))
  ]);
};


// Using state
export const heightState = (params) => {
  return trigger('heightState', [
    state('inactive', style({
      height: 0
    })),
    state('active',   style({
      height: params.height
    })),
    transition('inactive => active', animate(`${params.duration} ease-in`)),
    transition('active => inactive', animate(`${params.duration} ease-out`))
  ]);
};
