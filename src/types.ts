type ActionGenerator<Name extends string, Payload> = {
  type: Name;
  payload: Payload;
};

type PlusAction = ActionGenerator<"Plus", { a: number; b: number }>;
type SquareAction = ActionGenerator<"Square", { a: number }>;

export type IMessage = PlusAction | SquareAction;
