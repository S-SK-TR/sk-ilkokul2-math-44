import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useStore from '../store';

const MathGame = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [operation, setOperation] = useState('add');

  const { addScore } = useStore();

  useEffect(() => {
    generateQuestion();
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [operation]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      addScore(score);
    }
  }, [timeLeft]);

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;

    switch(operation) {
      case 'add':
        setQuestion(`${num1} + ${num2} = ?`);
        break;
      case 'subtract':
        setQuestion(`${Math.max(num1, num2)} - ${Math.min(num1, num2)} = ?`);
        break;
      case 'multiply':
        setQuestion(`${num1} × ${num2} = ?`);
        break;
      default:
        setQuestion(`${num1} + ${num2} = ?`);
    }
  };

  const checkAnswer = () => {
    const [num1, operator, num2] = question.split(' ');
    let correctAnswer;

    switch(operator) {
      case '+':
        correctAnswer = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        correctAnswer = parseInt(num1) - parseInt(num2);
        break;
      case '×':
        correctAnswer = parseInt(num1) * parseInt(num2);
        break;
      default:
        correctAnswer = 0;
    }

    if (parseInt(answer) === correctAnswer) {
      setFeedback('Doğru! 🎉');
      setScore(prev => prev + 10);
    } else {
      setFeedback(`Yanlış! Doğru cevap: ${correctAnswer}`);
    }

    setTimeout(() => {
      setFeedback('');
      setAnswer('');
      generateQuestion();
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    generateQuestion();
  };

  if (gameOver) {
    return (
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Oyun Bitti!</h2>
        <p className="text-xl text-gray-600 mb-6">Toplam Puan: {score}</p>
        <button
          onClick={resetGame}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Tekrar Oyna
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Puan: {score}</span>
          <span className="text-lg font-medium">Kalan Süre: {timeLeft}s</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${(timeLeft / 30) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-center mb-4">Soru</h2>
        <p className="text-3xl text-center font-medium mb-6">{question}</p>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded-lg px-4 py-2 text-lg text-center"
            placeholder="Cevabı girin"
            autoFocus
          />
          <button
            onClick={checkAnswer}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Cevabı Gönder
          </button>
        </div>
        {feedback && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-center text-lg font-medium ${feedback.includes('Doğru') ? 'text-green-600' : 'text-red-600'}`}
          >
            {feedback}
          </motion.p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => setOperation('add')}
          className={`px-4 py-2 rounded-lg ${operation === 'add' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 transition`}
        >
          Toplama
        </button>
        <button
          onClick={() => setOperation('subtract')}
          className={`px-4 py-2 rounded-lg ${operation === 'subtract' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 transition`}
        >
          Çıkarma
        </button>
        <button
          onClick={() => setOperation('multiply')}
          className={`px-4 py-2 rounded-lg ${operation === 'multiply' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 transition`}
        >
          Çarpma
        </button>
      </div>
    </div>
  );
};

export default MathGame;