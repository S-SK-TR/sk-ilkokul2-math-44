import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Matematik Eğitim Platformu
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-600 mb-8"
      >
        İlköğretim 2. sınıf öğrencileri için matematik öğrenme platformu.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Matematik Oyunu</h2>
          <p className="text-gray-600">Toplama, çıkarma ve çarpma egzersizleri yapın.</p>
          <Link to="/game" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Oyuna Başla</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Dashboard</h2>
          <p className="text-gray-600">İlerlemenizi izleyin ve istatistiklerinizi görüntüleyin.</p>
          <Link to="/dashboard" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Dashboard'a Git</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;