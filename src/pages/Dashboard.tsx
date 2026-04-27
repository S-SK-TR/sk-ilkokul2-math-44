import { motion } from 'framer-motion';
import useStore from '../store';

const Dashboard = () => {
  const { scores } = useStore();

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Öğrenci Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Son Oyun Sonuçları</h2>
          {scores.length > 0 ? (
            <ul className="space-y-2">
              {scores.slice(-5).reverse().map((score, index) => (
                <li key={index} className="flex justify-between">
                  <span>Oyun {scores.length - index}</span>
                  <span className="font-medium">{score} puan</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Henüz oyun oynanmadı.</p>
          )}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">İstatistikler</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Toplam Oyun Sayısı: {scores.length}</p>
            </div>
            <div>
              <p className="text-gray-600">En Yüksek Puan: {scores.length > 0 ? Math.max(...scores) : 0}</p>
            </div>
            <div>
              <p className="text-gray-600">Ortalama Puan: {scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : 0}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Öğrenme İlerlemesi</h2>
        <div className="h-64 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
          <p className="text-gray-600">Grafik görselleştirme alanı</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;