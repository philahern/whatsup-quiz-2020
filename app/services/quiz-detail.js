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
                detail:"There was a new arrival to Shane's family in May. Was it?",
                answers: {
                    1: "A seagull called Gully",
                    2: "A seagull called Fluffy",
                    3: "A seagull called Sooty",
                    4: "A seagull called Long Johnson"
                },
                correct: 3
            },
            5: {
                detail:"3rd of July was a busy day for pints with The Davs and The Keanes out celebrating. Which two wolfpackers have a birthday on the 3rd?",
                answers: {
                    1: "Shane & Holly",
                    2: "Cathal & Shane",
                    3: "Mark (Daly Murphy) & Phil",
                    4: "Phil & Shane"
                },
                correct: 3
            },
            6: {
                detail:"In July, Holly broke the sad news of the passing of a great honorary Irishman. Who was that?",
                answers: {
                    1: "Chadwick Boseman",
                    2: "Jack Charlton",
                    3: "Kobe Bryant",
                    4: "Diego Maradona"
                },
                correct: 2
            },
            7: {
                detail:"Paul kept the spirits high with constant news of a vaccine. Which vaccine was the first to be talked about in The Wolfpack?",
                answers: {
                    1: "Oxford-AstraZeneca",
                    2: "Moderna",
                    3: "Pfizer-BioNTech",
                    4: "Johnson & Johnson"
                },
                correct: 1
            },
            8: {
                detail:"In August The Keanes had to make a break for it when Kildare was being put into temporary lockdown. Which two other counties joined kildare in lockdown?",
                answers: {
                    1: "Dublin & Donegal",
                    2: "Dublin & Wicklow",
                    3: "Laois & Dublin",
                    4: "Laois & Offaly"
                },
                correct: 4
            },
            9: {
                detail:"August saw a trip to Athlone in sunny weather. What nickname was given to Lough Ree?",
                answers: {
                    1: "Lake Garda",
                    2: "Lake Como",
                    3: "The Ozarks",
                    4: "The Dead Sea"
                },
                correct: 3
            },
            10: {
                detail:"Fanore! Mighty weekend and we didn't get barred (we think). How many campers & caravans were in our group?",
                answers: {
                    1: "4",
                    2: "5",
                    3: "6",
                    4: "7"
                },
                correct: 4
            },
            11: {
                detail:"What was thr storm called that broke Jose's plant and caused 'unbeliebavle destruction' to Grace's inflatable pool?",
                answers: {
                    1: "Ciara",
                    2: "Francis",
                    3: "Brendan",
                    4: "Ellen"
                },
                correct: 2
            },
            12: {
                detail:"The pubs reopened on the 21st of Sept. Who was the first person to post a photo of a pint?",
                answers: {
                    1: "Ken on the 21st",
                    2: "Elaine on the 22nd",
                    3: "Grace on the 21st",
                    4: "Phil on the 29th"
                },
                correct: 4
            },
            13: {
                detail:"Who's pint is this? First since lockdown. Sept 9th",
                answers: {
                    1: "Elaine",
                    2: "Mark Wankel",
                    3: "Mark (Daly Murphy)",
                    4: "Cathal"
                },
                correct: 3
            },
            14: {
                detail:"Throughout the year Mark Daly kept our spirits up by sharing some spotify music with us all. Which band did he share in Oct? They just released a new album. ",
                answers: {
                    1: "The Killers",
                    2: "ACDC",
                    3: "Future Islands",
                    4: "The Pixies"
                },
                correct: 3
            },
            15: {
                detail:"Oct started off wild with Trump getting Covid but it wasn't all good news. Lockdown 2 Electric Boogalo kicked off in Oct. On what date?",
                answers: {
                    1: "20th Oct",
                    2: "21st Oct",
                    3: "30th Oct",
                    4: "31st Oct"
                },
                correct: 2
            },
            16: {
                detail:"Who posted this vegiie fry?",
                answers: {
                    1: "Cathal",
                    2: "Grace",
                    3: "Anne-Marie",
                    4: "Brian"
                },
                correct: 1
            },
            17: {
                detail:"2020 strikes again with Phil breaking his arm in a cycling accident. Which bird knocked him off his bike?",
                answers: {
                    1: "Seagull",
                    2: "Pigeon",
                    3: "Duck",
                    4: "Pheasant"
                },
                correct: 4
            },
            18: {
                detail:"Ali doesn't post much but when she does it's good news. What good news did Ali break to the group?",
                answers: {
                    1: "New Coral found in Great Barrier Reef",
                    2: "Vaccine phase 3 trial a success",
                    3: "New Zealand covid free",
                    4: "Pubs open."
                },
                correct: 1
            },
            19: {
                detail:"3rd of Nov was election day in the US. Birte kicked of day trying to distract us with a:",
                answers: {
                    1: "Youtube video funny of Trump",
                    2: "A meme about The Mandalorian",
                    3: "A meme about Fr Ted",
                    4: "A meme about Fr Ted & The Mandalorian."
                },
                correct: 4
            }
        });
    }

    @action
    choice(number, guess) {
        if (this.questions[number].guess) return;  
        this.set(`questions.${number}.guess`, guess*1);
    }

    @action
    start() {
      this.set(`hasStarted`, true);
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

