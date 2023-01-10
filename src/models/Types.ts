
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

export class Set{
   public id:number;
   public name:string;
   public clothingIds:[];
   public selected:boolean;

   public constructor(set:Set) {
      this.id = set.id;
      this.name = set.name;
      this.clothingIds = set.clothingIds;
      this.selected = set.selected;
   }
}

export type RootState = {
   sets: Set[];
   clothes: Clothing[];
   // Other state properties go here...
 };


export const ADD_CLOTHING = 'ADD_CLOTHING';
export const UPDATE_CLOTHES = 'UPDATE_CLOTHES';
export const DELETE_CLOTHES = 'DELETE_CLOTHES';
export const UPDATE_CLOTH = 'UPDATE_CLOTH';
