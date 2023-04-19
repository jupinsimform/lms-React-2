interface data {
  id: number;
  value: string;
  completed: boolean;
}

const Data: data[] = [
  {
    id: 1,
    value: "Buy a new sweatshirt",
    completed: true,
  },
  {
    id: 2,
    value: "Begin promotional phase",
    completed: true,
  },
  {
    id: 3,
    value: "Read an artical",
    completed: false,
  },
  {
    id: 4,
    value: "Try Not to fall a Sleep",
    completed: false,
  },
  {
    id: 5,
    value: "Watch 'Sherlock'",
    completed: false,
  },
  {
    id: 6,
    value: "Begin QA for Product",
    completed: false,
  },
  {
    id: 7,
    value: "Go for a Walk",
    completed: false,
  },
];

export const month: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default Data;
