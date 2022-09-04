import React from "react";
import { People } from "../interfaces";

interface IProps {
  people: People[];
  title: string;
}
export const List = ({ people, title }: IProps): JSX.Element => (
  <div>{people.map((p) => p.name)}</div>
);
