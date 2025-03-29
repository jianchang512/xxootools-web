import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-6 bg-background">
      <div className="px-4 md:px-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t('footer.allRightsReserved')} 
            <Link to="https://pvt9.com/yinsizhengce" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy', '隐私政策')}
            </Link> | <a href="https://pvt9.com/guanyu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.contact', '联系我们')}
            </a> | <a href="https://github.com/Go7hic/xxootools-web" target="_blank">Fork from Go7hic</a>
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
