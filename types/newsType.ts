export type NewsType = {
  id: number;
  lead: string;
  image_big: string;
  image_small: string;
  title: string;
  date: string;
  image:string;
  parent_category:categoryType;
}

type categoryType = {
  category_title:string
}
