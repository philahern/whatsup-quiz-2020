import EmberRouter from '@ember/routing/router';
import config from 'quiz/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('quiz', function () {
    this.route('question', { path: '/:question/'});
  });
  this.route('results');
});
