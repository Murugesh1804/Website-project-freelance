import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, User, DollarSign, BookOpen, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('User Details');
  const [userDetails, setUserDetails] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState({ totalCollection: 0, totalEnrollments: 0, activeUsers: 0 });

  useEffect(() => {
    // Simulated data fetching
    setUserDetails([
      { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-02-20' },
      // Add more user details...
    ]);

    setTransactions([
      { id: 1, userId: 1, courseId: 1, amount: 99.99, date: '2024-03-01' },
      { id: 2, userId: 2, courseId: 2, amount: 149.99, date: '2024-03-05' },
      // Add more transactions...
    ]);

    setCourses([
      { id: 1, title: 'Mindfulness Meditation', students: 150, revenue: 14999 },
      { id: 2, title: 'Yoga for Beginners', students: 200, revenue: 19999 },
      // Add more courses...
    ]);

    setStats({
      totalCollection: 34998,
      totalEnrollments: 350,
      activeUsers: 280
    });
  }, []);

  const chartData = [
    { name: 'Mindfulness', students: 150 },
    { name: 'Yoga', students: 200 },
    { name: 'Breathing', students: 120 },
    { name: 'Meditation', students: 180 },
  ];

  const styles = `
    .dashboard {
      display: flex;
      font-family: 'Arial', sans-serif;
      color: #333;
      height: 100vh;
      overflow: hidden;
      background-color: #f0f4f8;
    }

    .left-panel {
      width: 250px;
      background-color: #1a237e;
      color: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
    }

    .admin-info {
      text-align: center;
      margin-bottom: 30px;
    }

    .admin-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 10px;
      border: 3px solid white;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }

    .nav-item {
      padding: 10px;
      margin: 5px 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
    }

    .nav-item:hover {
      background-color: #303f9f;
      transform: translateX(5px);
    }

    .nav-item.active {
      background-color: #3f51b5;
      border-radius: 5px;
    }

    .nav-item svg {
      margin-right: 10px;
    }

    .main-content {
      flex-grow: 1;
      padding: 20px;
      overflow-y: auto;
    }

    .top-stats {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .stat-card {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      width: 30%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }

    .stat-title {
      font-size: 14px;
      color: #666;
    }

    .stat-value {
      font-size: 24px;
      font-weight: bold;
      margin-top: 5px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;
    }

    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }

    th {
      background-color: #3f51b5;
      color: white;
    }

    tr:hover {
      background-color: #f5f5f5;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input, textarea, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #303f9f;
    }

    @media (max-width: 768px) {
      .dashboard {
        flex-direction: column;
      }

      .left-panel {
        width: 100%;
        order: 2;
      }

      .main-content {
        order: 1;
      }

      .top-stats {
        flex-direction: column;
      }

      .stat-card {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="dashboard">
        <div className="left-panel">
          <div className="admin-info">
            <img src="/api/placeholder/80/80" alt="Admin Avatar" className="admin-avatar" />
            <h3>Admin Name</h3>
            <p>admin@example.com</p>
          </div>
          <div className="nav-item" onClick={() => setActiveSection('User Details')}>
            <User size={20} />
            User Details
          </div>
          <div className="nav-item" onClick={() => setActiveSection('User Transactions')}>
            <DollarSign size={20} />
            User Transactions
          </div>
          <div className="nav-item" onClick={() => setActiveSection('Add Course')}>
            <BookOpen size={20} />
            Add Course
          </div>
          <div className="nav-item" onClick={() => setActiveSection('Course Management')}>
            <AlertCircle size={20} />
            Course Management
          </div>
          <div className="nav-item" onClick={() => setActiveSection('User Activity')}>
            <Activity size={20} />
            User Activity
          </div>
        </div>
        <div className="main-content">
          <div className="top-stats">
            <div className="stat-card">
              <div className="stat-title">Total Collection</div>
              <div className="stat-value">${stats.totalCollection.toLocaleString()}</div>
            </div>
            <div className="stat-card">
              <div className="stat-title">Total Enrollments</div>
              <div className="stat-value">{stats.totalEnrollments}</div>
            </div>
            <div className="stat-card">
              <div className="stat-title">Active Users</div>
              <div className="stat-value">{stats.activeUsers}</div>
            </div>
          </div>
          {activeSection === 'User Details' && (
            <div>
              <h2>User Details</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Join Date</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.joinDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSection === 'User Transactions' && (
            <div>
              <h2>User Transactions</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Course ID</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td>{transaction.id}</td>
                      <td>{transaction.userId}</td>
                      <td>{transaction.courseId}</td>
                      <td>${transaction.amount}</td>
                      <td>{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSection === 'Add Course' && (
            <div>
              <h2>Add Course</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="courseTitle">Course Title</label>
                  <input type="text" id="courseTitle" name="courseTitle" required />
                </div>
                <div className="form-group">
                  <label htmlFor="courseDescription">Course Description</label>
                  <textarea id="courseDescription" name="courseDescription" rows="4" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="coursePrice">Course Price</label>
                  <input type="number" id="coursePrice" name="coursePrice" min="0" step="0.01" required />
                </div>
                <button type="submit">Add Course</button>
              </form>
            </div>
          )}
          {activeSection === 'Course Management' && (
            <div>
              <h2>Course Management</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Students</th>
                    <th>Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map(course => (
                    <tr key={course.id}>
                      <td>{course.id}</td>
                      <td>{course.title}</td>
                      <td>{course.students}</td>
                      <td>${course.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSection === 'User Activity' && (
            <div>
              <h2>User Activity</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;