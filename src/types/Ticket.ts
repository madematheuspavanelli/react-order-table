export type Ticket = {
  id: string;
  status: string;
  attendant: {
    name: string;
  };
  description: string;
  created_at: string;
  protocol: string;
  sector: {
    acronym: string;
  };
  supplier: {
    type: string;
  };
  title: string;
};
