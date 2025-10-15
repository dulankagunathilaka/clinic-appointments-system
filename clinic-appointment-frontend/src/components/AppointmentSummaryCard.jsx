const AppointmentSummaryCard = ({ title, count, color = 'blue' }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-400 to-blue-500',
      ring: 'ring-blue-200',
      text: 'text-white',
      icon: '✓'
    },
    lightblue: {
      bg: 'bg-gradient-to-br from-sky-400 to-sky-500',
      ring: 'ring-sky-200',
      text: 'text-white',
      icon: '📅'
    },
    skyblue: {
      bg: 'bg-gradient-to-br from-indigo-400 to-indigo-500',
      ring: 'ring-indigo-200',
      text: 'text-white',
      icon: '📊'
    }
  };

  const styles = colorClasses[color];

  return (
    <div className={`${styles.bg} rounded-2xl p-8 ${styles.text} shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ring-4 ${styles.ring} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 text-6xl opacity-10 transform translate-x-4 -translate-y-2">
        {styles.icon}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide opacity-90">{title}</h3>
        <p className="text-6xl font-bold mb-2">{count.toString().padStart(2, '0')}</p>
        <div className="h-1 w-16 bg-white/30 rounded-full mt-4"></div>
      </div>
    </div>
  );
};

export default AppointmentSummaryCard;