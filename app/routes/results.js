import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ResultsRoute extends Route {
    @service quizDetail;
    model() {
        const {quizDetail: {results, questionsLength}} = this;
        return {results, questionsLength}
    }
}
