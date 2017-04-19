export class Library {
        public classIcon: string;
        public order: number;
        public image: string;        
        public audio: string;
        public author: string;
        public isComingSoon: boolean;
        public isFree: boolean  
        public price: number;

    constructor(public id: number,
        public name: string,
        public title: string,
        public description: string
        ) { }
}