import { generateRandomId } from "../helpers/generateRandomId";

export const INITIAL_STATE = [
  {
    id: generateRandomId(),
    name: "Test",
    comments: [
      {
        id: generateRandomId(),
        text: "Test comment",
        color: "#000000",
      },
    ],
  },
];
