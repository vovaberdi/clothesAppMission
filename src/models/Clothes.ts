
class Clothes{
   public id?:number;
   public type?:string;
   public color?:string;
   public size?:string;
   public brand?:string;


   public constructor(clothes:Clothes) {
    this.id = clothes.id;
    this.type = clothes.type;
    this.color = clothes.color;
    this.size = clothes.size;
    this.brand = clothes.brand;
   }
}

export default Clothes;