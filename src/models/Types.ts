
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

export class ClothingWithDesign extends Clothing {
   timestamp: Date;
   selected: boolean;
   constructor(props: {id:number, brand:string, type:string, color: string, size: string, timestamp: Date, selected: boolean }) {
       super(props);
       this.timestamp = props.timestamp;
       this.selected = props.selected;
   }
}


export const ADD_CLOTHING = 'ADD_CLOTHING';
export const ADD_SET = 'ADD_SET';
export const REMOVE_SET = 'REMOVE_SET';
export const DELETE_CLOTHES = 'DELETE_CLOTHES';
export const REMOVE_CLOTHING = 'REMOVE_CLOTHING';
