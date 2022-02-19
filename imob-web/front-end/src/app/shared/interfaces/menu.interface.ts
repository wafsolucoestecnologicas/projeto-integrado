export interface Menu {
    title: string;
    icon: string;
    options: Option[];
}

export interface Option {
    name: string;
    link: string;
}