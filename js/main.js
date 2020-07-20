import socials from '../data/socials.js';
import progressBars from '../data/progress-bars.js';
import renderIcons from './renderIcons.js';
import renderClock from './clock.js';
import renderProgressBars from './renderProgressBars.js';

const { leftProgressBars } = progressBars;

renderIcons( '.icons-list', socials );
renderClock( '.clock' );


renderProgressBars( leftProgressBars );

