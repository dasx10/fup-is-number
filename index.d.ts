export type IsNumber = {
  (x: number) : true;
  (x: unknown): x is number;
};

declare const isNumber: IsNumber;
export default isNumber;
