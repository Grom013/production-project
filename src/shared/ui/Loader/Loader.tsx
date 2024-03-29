import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import './Loader.scss';

interface LoaderProps{
    className?:string
}

export const Loader = (props:LoaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
