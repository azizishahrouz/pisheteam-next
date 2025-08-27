import React, { useState } from 'react';
import styles from './UserDashboard.module.css';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user] = useState({
    name: 'احمد محمدی',
    code: 'ABC123-PT',
    plan: 'طلایی',
    daysLeft: 15,
    referralCount: 3
  });

  const [stats] = useState({
    todayQuestions: 50,
    totalConversations: 1250,
    responseRate: 98.5
  });

  const [subscription] = useState({
    currentPlan: 'طلایی',
    price: '2,500,000',
    nextBilling: '15 روز دیگر'
  });

  const [products] = useState([
    { id: 1, name: 'لپ‌تاپ گیمینگ', price: '45,000,000', description: 'لپ‌تاپ مخصوص بازی' },
    { id: 2, name: 'هوشمند ساعت', price: '2,500,000', description: 'ساعت هوشمند ورزشی' }
  ]);

  const [supportFeatures] = useState([
    { id: 1, name: 'پردازش عکس', price: '2,000,000', description: 'تشخیص محصولات از تصاویر' },
    { id: 2, name: 'تخفیف خودکار', price: '1,500,000', description: 'سیستم تخفیف هوشمند' },
    { id: 3, name: 'گیمیفیکیشن', price: '3,000,000', description: 'سیستم امتیازدهی و جایزه' }
  ]);

  const [tickets] = useState([
    { id: 1, title: 'پیشنهاد هفتگی', message: 'سلام! این هفته پردازش صوت رو با تخفیف امتحان کن!', status: 'جدید' },
    { id: 2, title: 'درخواست فعال‌سازی', message: 'درخواست شما برای فعال‌سازی پردازش عکس دریافت شد', status: 'در حال بررسی' }
  ]);

  const renderDashboard = () => (
    <div className={styles.dashboardContent}>
      <div className={styles.welcomeCard}>
        <h2>خوش آمدید، {user.name}!</h2>
        <p>کد اختصاصی شما: <span className={styles.userCode}>{user.code}</span></p>
      </div>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>💬</div>
          <div className={styles.statInfo}>
            <h3>{stats.todayQuestions}</h3>
            <p>سوال امروز</p>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📊</div>
          <div className={styles.statInfo}>
            <h3>{stats.totalConversations}</h3>
            <p>کل مکالمات</p>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>✅</div>
          <div className={styles.statInfo}>
            <h3>{stats.responseRate}%</h3>
            <p>نرخ پاسخ‌دهی</p>
          </div>
        </div>
      </div>

      <div className={styles.subscriptionCard}>
        <h3>اشتراک فعلی</h3>
        <div className={styles.planInfo}>
          <span className={`${styles.planBadge} ${styles.goldPlan}`}>{subscription.currentPlan}</span>
          <p>قیمت: {subscription.price} تومان</p>
          <p>تاریخ بعدی: {subscription.nextBilling}</p>
        </div>
        <button className={styles.renewBtn}>تمدید با تخفیف</button>
      </div>
    </div>
  );

  const renderSubscription = () => (
    <div className={styles.subscriptionContent}>
      <div className={styles.currentPlanCard}>
        <h3>پلن فعلی شما</h3>
        <div className={styles.planDetails}>
          <div className={`${styles.planBadge} ${styles.goldPlan}`}>طلایی</div>
          <p className={styles.daysLeft}>{user.daysLeft} روز باقیمانده</p>
          <p className={styles.planPrice}>2,500,000 تومان</p>
        </div>
      </div>

      <div className={styles.renewalOptions}>
        <h3>گزینه‌های تمدید</h3>
        <div className={styles.renewalGrid}>
          <div className={styles.renewalCard}>
            <h4>3 ماهه</h4>
            <p className={styles.discount}>10% تخفیف</p>
            <p className={styles.price}>6,750,000 تومان</p>
            <button className={styles.renewBtn}>تمدید</button>
          </div>
          
          <div className={styles.renewalCard}>
            <h4>6 ماهه</h4>
            <p className={styles.discount}>20% تخفیف</p>
            <p className={styles.price}>12,000,000 تومان</p>
            <button className={styles.renewBtn}>تمدید</button>
          </div>
          
          <div className={styles.renewalCard}>
            <h4>1 ساله</h4>
            <p className={styles.discount}>30% تخفیف</p>
            <p className={styles.price}>21,000,000 تومان</p>
            <button className={styles.renewBtn}>تمدید</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReferral = () => (
    <div className={styles.referralContent}>
      <div className={styles.referralCard}>
        <h3>برنامه معرفی</h3>
        <p>کد معرفی خود را با دوستانتان به اشتراک بگذارید</p>
        
        <div className={styles.referralCode}>
          <span>{user.code}</span>
          <button className={styles.copyBtn}>کپی</button>
        </div>

        <div className={styles.referralStats}>
          <p>تعداد معرفی‌های موفق: <strong>{user.referralCount}</strong></p>
        </div>

        <div className={styles.referralBenefits}>
          <h4>مزایای معرفی:</h4>
          <ul>
            <li>هر معرفی موفق = 3 روز رایگان</li>
            <li>5 معرفی = فیچر جدید با نصف قیمت</li>
            <li>10 معرفی = یک فیچر رایگان</li>
          </ul>
        </div>

        <div className={styles.shareButtons}>
          <button className={styles.shareBtn}>اشتراک در تلگرام</button>
          <button className={styles.shareBtn}>اشتراک در واتساپ</button>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className={styles.productsContent}>
      <div className={styles.productsHeader}>
        <h3>مدیریت محصولات</h3>
        <button className={styles.addProductBtn}>+ محصول جدید</button>
      </div>

      <div className={styles.productsTable}>
        <table>
          <thead>
            <tr>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>توضیحات</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price} تومان</td>
                <td>{product.description}</td>
                <td>
                  <button className={styles.editBtn}>ویرایش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.updateOptions}>
        <h4>گزینه‌های آپدیت</h4>
        <div className={styles.updateCards}>
          <div className={styles.updateCard}>
            <h5>آپدیت خودکار</h5>
            <p>هزینه: 5,000 تومان</p>
            <button className={styles.updateBtn}>آپدیت کن</button>
          </div>
          
          <div className={styles.updateCard}>
            <h5>سپردن به تیم پیشتیم</h5>
            <p>هزینه: متغیر</p>
            <button className={styles.delegateBtn}>درخواست</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className={styles.supportContent}>
      <div className={styles.featuresSection}>
        <h3>خدمات پشتیبانی</h3>
        <div className={styles.featuresGrid}>
          {supportFeatures.map(feature => (
            <div key={feature.id} className={styles.featureCard}>
              <h4>{feature.name}</h4>
              <p>{feature.description}</p>
              <p className={styles.featurePrice}>{feature.price} تومان</p>
              <button className={styles.activateBtn}>درخواست فعال‌سازی</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ticketsSection}>
        <h3>پیام‌های پشتیبانی</h3>
        <div className={styles.ticketsList}>
          {tickets.map(ticket => (
            <div key={ticket.id} className={styles.ticketCard}>
              <div className={styles.ticketHeader}>
                <h4>{ticket.title}</h4>
                <span className={`${styles.status} ${styles[ticket.status]}`}>
                  {ticket.status}
                </span>
              </div>
              <p>{ticket.message}</p>
              <div className={styles.ticketActions}>
                <button className={styles.replyBtn}>پاسخ</button>
                <button className={styles.requestBtn}>درخواست</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'subscription':
        return renderSubscription();
      case 'referral':
        return renderReferral();
      case 'products':
        return renderProducts();
      case 'support':
        return renderSupport();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <span className={styles.logoText}>پیشتیم</span>
          <span className={styles.logoDot}>.</span>
        </div>
        
        <nav className={styles.navigation}>
          <button 
            className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <span className={styles.navIcon}>📊</span>
            داشبورد
          </button>
          
          <button 
            className={`${styles.navItem} ${activeTab === 'subscription' ? styles.active : ''}`}
            onClick={() => setActiveTab('subscription')}
          >
            <span className={styles.navIcon}>💳</span>
            اشتراک
          </button>
          
          <button 
            className={`${styles.navItem} ${activeTab === 'referral' ? styles.active : ''}`}
            onClick={() => setActiveTab('referral')}
          >
            <span className={styles.navIcon}>🎁</span>
            معرفی
          </button>
          
          <button 
            className={`${styles.navItem} ${activeTab === 'products' ? styles.active : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <span className={styles.navIcon}>📦</span>
            محصولات
          </button>
          
          <button 
            className={`${styles.navItem} ${activeTab === 'support' ? styles.active : ''}`}
            onClick={() => setActiveTab('support')}
          >
            <span className={styles.navIcon}>🛠️</span>
            پشتیبانی
          </button>
        </nav>

        <div className={styles.logout}>
          <button className={styles.logoutBtn}>
            <span className={styles.navIcon}>🚪</span>
            خروج
          </button>
        </div>
      </div>

      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.userInfo}>
            <h1>{user.name}</h1>
            <p>کد: {user.code}</p>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.notificationBtn}>🔔</button>
            <div className={styles.userAvatar}>
              <img src="/profile-user.jpg" alt="پروفایل کاربر" />
            </div>
          </div>
        </header>

        <main className={styles.content}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
