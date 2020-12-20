import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuestionRoute extends Route {

    @service quizDetail;

    model(params) {

        return {
            question: this.quizDetail.questions[params.question],
            number: params.question
        }
    }

}