export interface LocaleFooter {
    locale: string;
    title: string;
    disclamer: string;
    links: {
        github: LocaleFooterGitHub;
        linkedin: LocaleFooterLinkedIn;
    };
}

export interface LocaleFooterGitHub {
    title: string;
    url: string;
}

export interface LocaleFooterLinkedIn {
    title: string;
    url: string;
}