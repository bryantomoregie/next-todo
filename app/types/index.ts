type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface TodoItem {
  todo: string;
  value: Value;
}

type TodosArray = TodoItem[];
