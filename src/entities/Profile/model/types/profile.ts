import { Country, Currency } from 'shared/const/common';

export interface Profile {
    name: string,
    lastname: string,
    agw: 27,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
