type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface TodoItem {
  todo: string;
  date?: Value;
  id?: string;
}

type TodosArray = TodoItem[];
