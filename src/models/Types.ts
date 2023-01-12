
export class Clothing{
   public id:number;
   public type:string;
   public color:string;
   public size:string;
   public brand:string;

   public constructor(clothing:Clothing) {
    this.id = clothing.id;
    this.type = clothing.type;
    this.color = clothing.color;
    this.size = clothing.size;
    this.brand = clothing.brand;
   }
}

export class MySet{
  public id: number;
  public brand: string;
  public type: string;
  public size: string;
  public color: string;

   public constructor(myset:MySet) {
      this.id = myset.id;
      this.brand = myset.brand;
      this.type = myset.type;
      this.size = myset.size;
      this.color = myset.color;
   }
}


export const ADD_CLOTHING = 'ADD_CLOTHING';
export const UPDATE_CLOTHES = 'UPDATE_CLOTHES';
export const DELETE_CLOTHES = 'DELETE_CLOTHES';
export const UPDATE_CLOTH = 'UPDATE_CLOTH';
