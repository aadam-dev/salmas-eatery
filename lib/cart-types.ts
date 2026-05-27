export type CartLine = {
  itemId: string;
  name: string;
  priceDisplay: string;
  unitPrice: number;
  quantity: number;
};

export type DeliveryDetails = {
  name: string;
  phone: string;
  address: string;
  notes: string;
};
