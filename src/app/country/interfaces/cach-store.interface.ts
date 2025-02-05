
import { Region, Country } from '../interfaces'; // multiple imports from the same file can be grouped together


export interface CacheStore {
  byCountry: TermCountry;
  byCapital: TermCapital;
  byRegion: RegionCountry;


}

export interface TermCountry {
  term: string;
  countries: Country[];

}
export interface TermCapital {
  term: string;
  countries: Country[];

}
export interface RegionCountry{
  region: Region;
  countries: Country[];

}
