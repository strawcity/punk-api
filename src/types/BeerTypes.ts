export type Beer = {
  abv: number;
  attenuation_level: number;
  boil_volume: { value: number; unit: string };
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: {
    malt: {
      amount: { unit: string; value: number };
      name: string;
    }[];
    hops: {
      add: string;
      amount: { value: number; unit: string };
      attribute: string;
      name: string;
    }[];
    yeast: string;
  };
  method: {
    mash_temp: { duration: number; temp: { value: number; unit: string } }[];
    fermentation: { temp: { unit: string; value: number } };
    twist: null;
  };
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: { value: number; unit: string };
};
