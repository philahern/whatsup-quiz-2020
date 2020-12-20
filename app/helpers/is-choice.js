import { helper } from '@ember/component/helper';

export default helper(function isChoice(params/*, hash*/) {
  const [guess, answer] = params;
  return guess === answer*1;
});
