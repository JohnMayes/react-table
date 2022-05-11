//@ts-nocheck

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: (d) => `${d.first_name} ${d.last_name}`,
    // Cell: ({ accessor }) => accessor['first_name'],
  },

  {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
];
