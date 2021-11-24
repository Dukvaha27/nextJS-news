export interface NewsType {
  id: number;
  lead: string;
  image_big: string;
  image_small: string;
  title: string;
  date: string;
  parent_category: { category_title: string };
}
