import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps{
    className?:string
}

const ProfilePage = ({ className }:ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>

    );
};
export default ProfilePage;
