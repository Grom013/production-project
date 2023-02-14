import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const [value, setValue] = useState('');
    const { t } = useTranslation();
    const onChange = (val:string) => {
        setValue(val);
    };
    return (
        <div>
            {t('Главная страница')}
            <Input
                placeholder="Введите текст"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
