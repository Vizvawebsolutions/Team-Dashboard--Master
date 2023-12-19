const notifications = [];

// Function to add a notification
const addNotification = (message) => {
  notifications.push({ message, timestamp: new Date() });
};

// Function to get all notifications
const getNotifications = () => {
  return notifications;
};

module.exports = {
  addNotification,
  getNotifications,
};