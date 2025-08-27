import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard after successful login
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          <span className={styles.logoText}>پیشتیم</span>
          <span className={styles.logoDot}>.</span>
        </div>
        
        <h2>ورود به پنل کاربری</h2>
        <p>اطلاعات حساب کاربری خود را وارد کنید</p>
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">ایمیل یا شماره موبایل</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">رمز عبور</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="رمز عبور خود را وارد کنید"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.loginBtn}
            disabled={isLoading}
          >
            {isLoading ? 'در حال ورود...' : 'ورود'}
          </button>
        </form>
        
        <div className={styles.loginFooter}>
          <a href="#" className={styles.forgotPassword}>فراموشی رمز عبور</a>
          <p>
            حساب کاربری ندارید؟ 
            <a href="#" className={styles.signupLink}>ثبت‌نام کنید</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
