import { nanoid } from "nanoid";

export default function generateDice() {
  return Array.from({ length: 10 }, () => ({
    id: nanoid(),
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
  }));
}
