import Service from '@ember/service';
import EmberObject from '@ember/object';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QuizDetailService extends Service {

    @tracked questions
    
    constructor() {
        super();
        this.questions = EmberObject.create({
            1: {
                detail: "What was the first post of 2020?",
                answers: {
                    1: "A Gaviscon bottle photo by Phil",
                    2: "'Happy New year' by Jose just after midnight on the 1st",
                    3: "A meme by Cathal on the 4th of Jan",
                    4: "Susie with a question about murder mountain on Netflix"
                },
                correct: 2
            },
            2: {
                detail:"Who was the first person to mention Trump in 2020?",
                answers: {
                    1: "Phil with a meme",
                    2: "Holly with a youtube video",
                    3: "Dion with a link followed by 'World is fucked'",
                    4: "Birte with a youtube video"
                },
                correct: 4
            },
            3: {
                detail:"Who caused controversy in Feb with the revealtion that they used to put milky tea in their cornflakes as a child?",
                answers: {
                    1: "Mark (Daly Murphy)",
                    2: "Dion",
                    3: "Ross",
                    4: "Phil"
                },
                correct: 4
            },
            4: {
                detail:"The first two posts in Feb were emojis. Who posted 👀 followed by 👋?",
                answers: {
                    1: "Marie",
                    2: "Grace",
                    3: "Emer",
                    4: "Susie"
                },
                correct: 4,
                isLast:true
            }
        });
    }

    @action
    choice(number, guess) {
      this.set(`questions.${number}.guess`, guess*1);
    }

    @action
    start() {
      this.set(`questions.hasStarted`, true);
    }

    get results() {
        const questions = Object.values(this.questions);
        let total = 0;
        questions.forEach(question => {
            if (question.guess === question.correct) total++
        });
        return total;
    }

    get questionsLength() {
        const questions = Object.values(this.questions);
        return questions.length;
    }
}

