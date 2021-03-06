import {default as dsv, delimitedFormat} from './dsv';
import json from './json';
import topojson from './topojson';

export const format = {
  dsv: dsv,
  csv: delimitedFormat(','),
  tsv: delimitedFormat('\t'),
  json: json,
  topojson: topojson
};

export function formats(name, reader) {
  if (arguments.length > 1) {
    format[name] = reader;
    return this;
  } else {
    return format.hasOwnProperty(name) ? format[name] : null;
  }
}

export function responseType(type) {
  const f = formats(type);
  return f && f.responseType || 'text';
}
