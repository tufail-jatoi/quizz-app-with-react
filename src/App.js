import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const[questions, setquestions] = useState([
  {
    numb: 1,
    question: "String manipulators are defined in __ header file.",
    answer: "string.h",
    options: [" string.h","string","st.h","std.h",],
  },
   {
    numb: 2,
    question: "Arrays are of ___ types.",
    answer: "2",
    options: ["1","2","3","4",],
  },
  {
    numb: 3,
    question: "The process of arranging the data in a given array is called ___",
    answer: "Sorting",
    options: ["Merging","Filtering","Sorting","Ordering",],
  },
  {
    numb: 4,
    question: "____  parameters are required for write function.",
    answer: "Two",
    options: ["Two","Three","Four","Five",],
  },
  {
    numb: 5,
    question: "The subscript always commences from ___",
    answer: "Zero",
    options: ["Two","Three","One","Zero",],
  },
  {
    numb: 6,
    question: "A ___ is a collection of variables of the same type that are referenced by a common name.",
    answer: "Array",
    options: ["Program","Array","Constant","Variable",],
  },
  {
    numb: 7,
    question: "____ are otherwise called as literals.",
    answer: "Strings",
    options: ["Data","Variables","Constants","Strings",],
  },
  {
    numb: 8,
    question: "If the elements are stored in row wise manner it is called as ___ order.",
    answer: "Row-major",
    options: ["Row-major","Column","Column-major","Row",],
  },
  {
    numb: 9,
    question: "_____ Dimensional array comprising of finite homogenous elements.",
    answer: "One",
    options: ["One","Two","Three","Multi",],
  },
  {
    numb: 10,
    question: "____ is a member function of standard output stream i.e., ostream.",
    answer: "Write ()",
    options: ["Reads ()","Writes ()","Print ()","Write ()",],
  },
])
const [indexNumber, setIndexNumber] = useState(0);
const [marks, setMarks] = useState(0);
const [result, setResult] = useState(false);

const checkAns = (userSelected, correcAns) => {
 

  if (userSelected == correcAns) {
    setMarks(marks + 1);
    // console.log(marks);

  }

  if (indexNumber + 1 == questions.length) {
    setResult(true);
  }

  setIndexNumber(indexNumber + 1);
};

return (
  <div>
    <header>
      <h1>Quiz App</h1> <hr />
      <div>
        {
          result ? (<h1> YOURS MARKS IS {marks} </h1>) : <div>

            <h1>{questions[indexNumber].question}</h1>
            <hr />
            <div>
              {questions[indexNumber].options.map((e, i) => {
                return (
                  <div key={i}>
                    <button
                      onClick={() => checkAns(e, questions[indexNumber].
                        answer)}>
                      {e}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        }



      </div>



    </header>
  </div>
);
};
export default App;