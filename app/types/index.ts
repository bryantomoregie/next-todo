type ValuePiece = Date | null;

type Value = ValuePiece;

interface TodoItem {
  todo: string;
  id: string;
  date: Value;
}

type TodosArray = TodoItem[];
