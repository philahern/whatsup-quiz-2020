import { helper } from '@ember/component/helper';

export default helper(function isCorrect(params/*, hash*/) {
  const [guess, correct, answer] = params;
  if (answer) {
    return guess && correct === answer*1;
  } else {
    return guess === correct;
  }
});
