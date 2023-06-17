export type CountryDetailsType = {
  capital: string;
  code: string;
  currency: string;
  emoji: string;
  name: string;
  native: string;
};

export type CountryType = {
  country?: CountryDetailsType;
};
