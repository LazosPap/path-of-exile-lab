import "@tanstack/react-table";

/**
 * Augment the tanstack react table for the skeleton inside the table.
 * We disable the eslint cause it's creating error for unused vars of TData and TValue.
 */
declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData, TValue> {
    skeleton?: React.ReactNode;
  }
}
