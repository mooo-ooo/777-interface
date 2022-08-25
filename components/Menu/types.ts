export interface Language {
    code: string;
    language: string;
    locale: string;
}

export interface Profile {
    email?: string;
    balance?: string;
    isLoggedIn: boolean;
    // noProfileLink: string
    // showPip?: boolean
}

export interface PushedProps {
    isPushed: boolean;
    pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
    background: string;
}

export interface MenuSubEntry {
    label: string;
    href: string;
    calloutClass?: string;
}

export interface MenuEntry {
    label: string;
    icon: string;
    items?: MenuSubEntry[];
    href?: string;
    target?: string;
    calloutClass?: string;
    initialOpenState?: boolean;
}

export interface PanelProps {
    currentLang: Language;
    langs: Language[];
    setLang: (lang: Language) => void;
    links: Array<MenuEntry>;
}

export interface NavProps extends PanelProps {
    isMobile: boolean;
    children: React.ReactNode;
}

export interface SidebarProps {
    menu: Array<MenuEntry>;
    subMenu: Array<MenuEntry>;
    isPushed: boolean;
    setIsPushed: (push: boolean) => void;
}
