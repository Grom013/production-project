import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './Loginform.module.scss';

interface LoginFormProps{
    className?:string
}

export const LoginForm = ({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <Input
                autofocus
                type=""
                className={cls.input}
                placeholder={t('Введите username')}
            />
            <Input
                type=""
                className={cls.input}
                placeholder={t('Введите password')}
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
