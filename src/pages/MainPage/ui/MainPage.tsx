import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const [value, setValue] = useState('');
    const { t } = useTranslation();
    const onChange = (val:string) => {
        setValue(val);
    };
    return (
        <div>
            {t('Главная страница')}

        </div>
    );
};

export default MainPage;
