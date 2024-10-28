import data from "./data.json";

export function fetchDestinations() {
  return data.destinations;
}

export function fetchCrew() {
  return data.crew;
}

export function fetchTech() {
  return data.technology;
}
