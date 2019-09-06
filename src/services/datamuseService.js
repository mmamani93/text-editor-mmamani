import { create } from 'apisauce';

const DATAMUSE_URL = 'https://api.datamuse.com/';

const api = create({
  baseURL: DATAMUSE_URL,
  timeout: 10000
});

export const getSynonyms = word => api.get(`words?rel_syn=${word}`);
