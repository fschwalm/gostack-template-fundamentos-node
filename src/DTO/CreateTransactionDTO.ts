export default interface CreateTransactionDTO {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}
