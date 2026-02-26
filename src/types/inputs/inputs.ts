export type AutoCompleteItem<T> = {
  id: number;
  value: T;
  label: string;
  category: string;
  icon?: string;
};

export type AutoCompleteProps<T> = {
  selectedValue: T;
  onSelectedValueChange: (value: T) => void;
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  items: AutoCompleteItem<T>[];
  isLoading?: boolean;
  isFetching?: boolean;
  disabled?: boolean;
  emptyMessage?: string;
  placeholder?: string;
};