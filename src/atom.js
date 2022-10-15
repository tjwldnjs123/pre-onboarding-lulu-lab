import { atom } from "recoil";

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const phoneNumState = atom({
  key: "phoneNumState",
  default: "",
});

export const subjectState = atom({
  key: "subjectState",
  default: [],
});

export const hourState = atom({
  key: "hourState",
  default: [],
});
