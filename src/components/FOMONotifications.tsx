import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Notification {
  id: string;
  message: string;
  city: string;
}

const FOMONotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const fomoMessages = [
    { name: "Rahul", city: "Noida", emoji: "🎉" },
    { name: "Ashish Singh", city: "Kolkata", emoji: "🔥" },
    { name: "Shipra", city: "Dhanbad", emoji: "🚀" },
    { name: "Priya Sharma", city: "Mumbai", emoji: "✨" },
    { name: "Vikash", city: "Patna", emoji: "💎" },
    { name: "Ankit", city: "Delhi", emoji: "⭐" },
    { name: "Sneha", city: "Pune", emoji: "🎯" },
    { name: "Rohit Kumar", city: "Bangalore", emoji: "🏆" },
    { name: "Deepika", city: "Chennai", emoji: "💫" },
    { name: "Amit", city: "Hyderabad", emoji: "🔥" },
    { name: "Kavya", city: "Lucknow", emoji: "🎊" },
    { name: "Sanjay", city: "Jaipur", emoji: "⚡" }
  ];

  const actions = [
    "has enrolled in this course",
    "just bought this course",
    "has joined the program",
    "successfully registered",
    "completed enrollment"
  ];

  useEffect(() => {
    const createNotification = () => {
      const randomMessage = fomoMessages[Math.floor(Math.random() * fomoMessages.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      const notification: Notification = {
        id: Math.random().toString(36).substr(2, 9),
        message: `${randomMessage.emoji} ${randomMessage.name} ${randomAction}`,
        city: randomMessage.city
      };

      setNotifications(prev => [notification, ...prev.slice(0, 2)]); // Keep max 3 notifications

      // Auto-dismiss after 6 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 6000);
    };

    // Initial notification after 3 seconds
    const initialTimeout = setTimeout(createNotification, 3000);

    // Recurring notifications with random intervals
    const scheduleNext = () => {
      const randomInterval = Math.random() * (35000 - 10000) + 10000; // 10-35 seconds
      setTimeout(() => {
        createNotification();
        scheduleNext();
      }, randomInterval);
    };

    scheduleNext();

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 z-50 pointer-events-none">
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            className={`
              bg-white/95 backdrop-blur-sm border border-slate-200 
              rounded-lg shadow-lg p-4 max-w-sm pointer-events-auto
              transform transition-all duration-500 ease-out
              animate-in slide-in-from-right-full fade-in
            `}
            style={{
              animationDelay: `${index * 100}ms`,
              transform: `translateY(${index * 4}px)`,
              opacity: 1 - (index * 0.1)
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {notification.message}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  from {notification.city}
                </p>
              </div>
              
              <button
                onClick={() => dismissNotification(notification.id)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            
            {/* Progress bar */}
            <div className="mt-3 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
                style={{
                  animation: 'shrink 6s linear forwards'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FOMONotifications;