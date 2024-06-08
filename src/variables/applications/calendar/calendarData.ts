type RowObj = {
  title: string;
  borderColor: string;
  start: string;
  end: string;
  backgroundColor: string;
  className: string;
};

export const calendarData: RowObj[] = [
  {
    title: 'Meeting with a client',
    borderColor: 'transparent',
    start: '2024-06-08',
    end: '2024-06-08',
    backgroundColor: '#7551FF',
    className: 'info',
  },


  {
    title: 'Design UI and check sales on PayPal',
    borderColor: 'transparent',
    start: '2024-10-10',
    end: '2024-10-12',
    backgroundColor: '#FFB547',
    className: 'warning',
  },

  {
    title: 'Configure table for Daily tasks on Notion',
    borderColor: 'transparent',
    start: '2024-10-21',
    end: '2024-10-23',
    backgroundColor: '#7551FF',
    className: 'error',
  },
];
