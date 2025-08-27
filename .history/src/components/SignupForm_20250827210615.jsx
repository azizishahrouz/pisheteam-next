import React, { useState } from 'react';
import styles from './SignupForm.module.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'برنزی'
  });
  const [isLoading, setIsLoading] = useState(false);

  const plans = [
    { id: 'برنزی', name: 'برنزی', price: '1,500,000', features: ['پشتیبانی پایه', '5 محصول'] },
    { id: 'نقره‌ای', name: 'نقره‌ای', price: '2,500,000', features: ['پشتیبانی پیشرفته', '15 محصول', 'گزارش هفتگی'] },
    { id: 'طلایی', name: 'طلایی', price: '4,000,000', features: ['پشتیبانی VIP', 'نامحدود محصول', 'گزارش روزانه', 'فیچرهای اختصاصی'] }
  ];

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
      // Show success message and redirect to login
      alert('ثبت‌نام با موفقیت انجام شد! کد اختصاصی شما به ایمیل ارسال خواهد شد.');
      window.location.href = '/login';
    }, 2000);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <div className={styles.logo}>
          <span className={styles.logoText}>پیشتیم</span>
          <span className={styles.logoDot}>.</span>
        </div>
        
        <h2>ثبت‌نام در پیشتیم</h2>
        <p>حساب کاربری خود را ایجاد کنید و شروع کنید</p>
        
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">نام و نام خانوادگی</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام خود را وارد کنید"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">ایمیل</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">شماره موبایل</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="09xxxxxxxxx"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="plan">انتخاب پلن</label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className={styles.planSelect}
            >
              {plans.map(plan => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} - {plan.price} تومان
                </option>
              ))}
            </select>
          </div>
          
          <div className={styles.selectedPlan}>
            <h4>پلن انتخاب شده: {formData.plan}</h4>
            {plans.find(p => p.id === formData.plan) && (
              <div className={styles.planFeatures}>
                <p className={styles.planPrice}>
                  قیمت: {plans.find(p => p.id === formData.plan).price} تومان
                </p>
                <ul>
                  {plans.find(p => p.id === formData.plan).features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <button 
            type="submit" 
            className={styles.signupBtn}
            disabled={isLoading}
          >
            {isLoading ? 'در حال ثبت‌نام...' : 'ثبت‌نام و پرداخت'}
          </button>
        </form>
        
        <div className={styles.signupFooter}>
          <p>
            قبلاً حساب کاربری دارید؟ 
            <a href="/login" className={styles.loginLink}>وارد شوید</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
