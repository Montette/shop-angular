export class Product {
    public name: string;
    public description: string;
    public imgUrl: string;
    public price: number;
    public id: number;
    public avalaibleAmount: number;
    constructor(name: string, description: string, imgUrl: string, price: number, id: number, avalaibleAmount: number) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.price = price;
        this.id = id;
        this.avalaibleAmount = avalaibleAmount;
    }
}
