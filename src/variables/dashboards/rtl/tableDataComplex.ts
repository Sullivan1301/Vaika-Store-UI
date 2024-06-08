type RowObj = {
  name: string;
  status: string;
  date: string;
  progress: number;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'Vaika Store Client',
    progress: 75.5,
    status: 'Approved',
    date: '13 Jan 2024',
  },
  {
    name: 'Vaika Store Admin',
    progress: 25.5,
    status: 'Disable',
    date: '21 Feb 2024',
  },
  {
    name: 'Weekly Update',
    progress: 90,
    status: 'Error',
    date: '13 Mar 2024',
  },
  {
    name: 'Marketplace',
    progress: 50.5,
    status: 'Approved',
    date: '24 Oct 2023',
  },
];
export default tableDataComplex;
