export interface Menu {
    title: string;
    options: Option[];
}

export interface Option {
    name: string;
    link: string;
    icon: string;
}