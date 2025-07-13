import React from 'react';

// Gunakan Generics <T> agar komponen ini bisa menerima array tipe apa pun.
type EachProps<T> = {
  of: T[]; // 'of' adalah sebuah array dari T
  render: (item: T, index: number) => React.ReactNode;
};

// Nama komponen harus PascalCase (EachUtils)
// Props di-destructure dan diberi tipe dengan Generics
const EachUtils = <T,>({ of, render }: EachProps<T>) => {
  // Karena 'of' sudah pasti array, kita bisa langsung .map()
  // Children.toArray tidak diperlukan di sini.
  return (
    <>
      {of.map((item, index) => render(item, index))}
    </>
  );
};

export default EachUtils;