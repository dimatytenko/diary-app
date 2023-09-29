export interface IComment {
  id: number;
  text: string;
  color: string;
}

export interface IItem {
  id: number;
  name: string;
  comments: IComment[];
}
