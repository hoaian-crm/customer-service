import { BadRequestException, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

export type Place = {
  description: string;
  matched_substrings: Array<string>;
  place_id: string;
  reference: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
  terms: Array<any>;
  has_children: boolean;
  display_type: string;
  score: number;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
};

export type PlaceDetail = {
  place_id: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
};

@Injectable()
export class GoongService {
  private core: AxiosInstance;
  constructor() {
    this.core = axios.create({
      baseURL: 'https://rsapi.goong.io',
      params: {
        api_key: process.env.GOONG_MAP_API_KEY,
      },
    });
  }

  async autoComplete(input: string): Promise<{ predictions: Array<Place> }> {
    return this.core
      .get('/Place/AutoComplete', {
        params: {
          input,
          limit: 100,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new BadRequestException(error);
      });
  }

  async getPlaceDetail(placeId: string): Promise<PlaceDetail> {
    return this.core
      .get('/Place/Detail', {
        params: {
          place_id: placeId,
        },
      })
      .then((response) => response.data.result)
      .catch((error) => {
        throw new BadRequestException(error.message);
      });
  }
}
