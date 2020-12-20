import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizRoute extends Route {

    @service quizDetail;

    beforeModel() {
        this.quizDetail.start();
    }
}