//var years = [1990, 1965, 1979]
//
//function arrayCalc(arr, fn) {
//    var newArr = [];
//    for(var i = 0; i < arr.length; i++) {
//        newArr.push(fn(arr[i]))
//    }
//    return newArr;
//}
//
//function calculateAge(el) {
//    return 2016 - el
//}
//
//var ages = arrayCalc(years, calculateAge);
//
//console.log(ages)

//function interviewQuestion(job) {
//    if (job === 'designer') {
//        return function(name) {
//            console.log(name + ', can you please explain what UX design is?');
//        }
//    } else if (job === 'teacher') {
//        return function(name) {
//            console.log('What subject do you teach, ' + name + '?');
//        }
//    } else {
//        return function(name) {
//            console.log('Hello ' + name + ', what do you do?');
//        }
//    }
//}
//
//var teacherQuestion = interviewQuestion('teacher');
//
//
//console.log(teacherQuestion('john'))

//var score = 0;
//(function(player){
//    var score = Math.random() * 10;
//    console.log(typeof(score + player))
//})('john')

//function test(param) {
//    if(param === 'test') {
//        return function(param2) {
//            console.log( param2 + ' ' + param)
//        }
//    }
//}
//
//var storage =  test('test')('te')
//
//console.log(storage)

//function retirement(retirementAge) {
//    var a = ' year left until retirement'
//    return function(yearOfBirth) {
//        var age = 2016 - yearOfBirth;
//        console.log((retirementAge - age) + a);
//    }
//}
//
//var retirementUs = retirement(66);
//retirementUs(1990)
//
//var retirementGermany = retirement(65);
//retirementGermany(1990)
//
//var retirementIceland = retirement(67);
//retirementIceland(1990)



//function interviewQuestion(job){
//    return function(name) {
//        if (job === 'designer') {
//            console.log(name + ', can you please explain what UX design is?');
//        } else if (job === 'teacher') {
//            console.log('What subject do you teach, ' + name + '?');
//        } else {
//            console.log('Hello ' + name + ', what do you do?');
//        }
//    }
//}
//
//var teacher = interviewQuestion('teacher')
//teacher('bubo')
//
//
//
//function testClosures() {
//    var closure = true;
//    return function(arg){
//        if (closure) {
//            console.log('look, im using closure to decide!' + arg)
//        }
//    }
//}
//
//var first = testClosures();
//first('haha')







//function interviewQuestion(job) {
//    if (job === 'designer') {
//        return function(name) {
//            console.log(name + ', can you please explain what UX design is?');
//        }
//    } else if (job === 'teacher') {
//        return function(name) {
//            console.log('What subject do you teach, ' + name + '?');
//        }
//    } else {
//        return function(name) {
//            console.log('Hello ' + name + ', what do you do?');
//        }
//    }
//}



//
//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function isFullAge(el, limit) {
//    return el >= limit;
//}
//
//function calculateAge(el) {
//    return 2016 - el;
//}
//
//var ages = arrayCalc(years, calculateAge)
//
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
//
//
//console.log(ages)
//console.log(fullJapan)


//
//var john = {
//    name: 'John',
//    age: 26,
//    job: 'teacher',
//    presentation: function(style, timeOfDay) {
//        if (style === 'formal') {
//            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//        } else if (style === 'friendly') {
//            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//        }
//    }
//};
//
//var emily = {
//    name: 'Emily',
//    age: 35,
//    job: 'designer'
//};

//john.presentation('formal', 'morning')

//john.presentation.call(emily, 'friendly', 'afternoon')
//
//var  johnFriendly = john.presentation.bind(john, 'friendly');
//johnFriendly('morning');
//
//
//var emilyFormal = john.presentation.bind(emily, 'formal');
//emilyFormal('afternoon');
//
//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return 2016 - el;
//}
//
//function isFullAge(el, limit) {
//    return el >= limit;
//}
//
//var ages = arrayCalc(years, calculateAge);
//
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
//
//
//console.log(fullJapan)
//

(function(){
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.consoleQuestion = function() {
        console.log(this.question)
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkCorrect = function(ans, callBack) {
        var sc;

        if(ans === this.correct) {
            console.log(true)
            sc = callBack(true)
        } else {
            console.log(false)
            sc = callBack(false)
        }
        this.displayScore(sc)
    }

    Question.prototype.displayScore = function() {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }

    var question1 = new Question('are you teacher?', ['yes', 'no'], 0);
    var question2 = new Question('are you female?', ['yes', 'no'], 1);
    var question3 = new Question('are you single?', ['yes', 'no'], 0);

    var questions = [question1, question2, question3]


    function score(){
        var sc = 0;
        return function(correct){
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();


    function callAnother() {
        var random = Math.floor(Math.random()*questions.length);
        questions[random].consoleQuestion()
        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[random].checkCorrect(parseInt(answer), keepScore);
            callAnother()
        }
    }
    callAnother();
})()




































