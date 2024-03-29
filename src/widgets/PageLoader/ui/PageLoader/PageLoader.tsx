import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Loader } from '@/shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps{
    className?:string
}

export const PageLoader = (props:PageLoaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
