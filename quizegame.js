
const questions = [
    {
        'que': 'Javascript is an _______ language?',
        'a': 'Object-Oriented',
        'b': 'Object Based',
        'c': 'Procedural',
        'd': 'None of the above'
        , 'correct': 'a',

    },

    {
        'que': 'Which of the following keywords is used to define a variable in Javascript?',
        'a': 'var',
        'b': 'let',
        'c': 'Both a and b',
        'd': 'None of the above',
        'correct': 'c',
    },
    {
        'que': ' Which of the following methods is used to access HTML elements using Javascript?',
        'a': 'getElementById()',
        'b': 'getElementByClassName()',
        'c': 'Both a and b',
        'd': 'None of the above',
        'correct': 'c',
    },
    {
        'que': 'Which of the following methods can be used to display data in some form using Javascript?',
        'a': 'document.Write()',
        'b': 'console.log()',
        'c': 'window.alert()',
        'd': 'All of the above'
        , 'correct': 'a',
    },
    {
        'que': 'How can a datatype be declared to be a constant type?',
        'a': 'Const',
        'b': 'cont',
        'c': 'cosnt',
        'd': 'constant',
        'correct': 'a',
    },
    {
        'que': 'What keyword is used to check whether a given property is valid or not?',
        'a': 'in',
        'b': 'is in',
        'c': ' exists',
        'd': 'lies',
        'correct': 'a',
    },
    {
        'que': 'When an operators value is NULL, the typeof returned by the unary operator is:',
        'a': 'Boolean',
        'b': 'Undefined',
        'c': 'Object',
        'd': 'Integer',
        'correct': 'c',
    },
    {
        'que': 'Which of the following are closures in Javascript?',
        'a': 'Variable',
        'b': 'Functions',
        'c': ' Objects',
        'd': 'All of the above',
        'correct': 'd',
    }
]
let index = 0;
total=questions.length;
right=0; wrong=0;
 const quebox = document.getElementById("quebox");
const inp_option = document.querySelectorAll(".inp_option");
const loadquestion = () => {
    if(index===total){
return endquize();
    }
    reset();
     data = questions[index];
    quebox.innerText = ` ${index + 1}) ${data.que}`
    inp_option[0].nextElementSibling.innerText = data.a;
    inp_option[1].nextElementSibling.innerText = data.b;
    inp_option[2].nextElementSibling.innerText = data.c;
    inp_option[3].nextElementSibling.innerText = data.d;

    console.log(data);

}



const submitquize = () => {
    const ans = getanswer();
    if(ans===data.correct){
right++;
    }
    else{
        wrong++;
    }
     index++;
     loadquestion();
    return;

 }

const getanswer = () => {
    let selectedAnswer;
    inp_option.forEach((input) => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });
    return selectedAnswer;
}
const reset=()=>{
    inp_option.forEach((input) => {
        input.checked=false;
    })

}
const endquize=()=>{
    document.getElementById("second_box").innerHTML=`<h2> thank you for the playing quize</h2>
    <h2> ${right} / ${total} are correct</h2>       `
}
loadquestion();

 
