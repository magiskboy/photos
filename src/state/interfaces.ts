export interface IAction<Type> {
  type: string;
  payload?: Type;
}
