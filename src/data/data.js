import { writable } from "svelte/store";

const data = writable(
  [
    {
      "animal": "Chimpanzee",
      "total": 75,
      "male": 68,
      "female": 82
    },
    {
      "animal": "Dog",
      "total": 73,
      "male": 67,
      "female": 78
    },
    {
      "animal": "Cat",
      "total": 70,
      "male": 62,
      "female": 78
    },
    {
      "animal": "Dolphin",
      "total": 62,
      "male": 51,
      "female": 74
    },
    {
      "animal": "Horse",
      "total": 55,
      "male": 45,
      "female": 63
    },
    {
      "animal": "Octopus",
      "total": 24,
      "male": 22,
      "female": 26
    },
    {
      "animal": "Deer",
      "total": 20,
      "male": 20,
      "female": 19
    },
    {
      "animal": "Salmon",
      "total": 12,
      "male": 16,
      "female": 9
    },
    {
      "animal": "Cow",
      "total": 11,
      "male": 12,
      "female": 10
    },
    {
      "animal": "Chicken",
      "total": 7,
      "male": 7,
      "female": 8
    }
  ]
);

export { data };