export class Products {
    constructor(
        public name: string,
        public shortDescription: string ,
        public bestSellingRank: number,
        public thumbnailImage: string,
        public salePrice: number,
        public url: string,
        public type: string,
        public image: string,
        public customerReviewCount: number,
        public shipping: string,
        public salePrice_range: string,
        public objectID: string,
        public categories: (string)[],
        public id?:string, 
      ) {}
}
