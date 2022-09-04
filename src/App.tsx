import React, { ReactElement, ReactNode, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "./components/List";
import { People } from "./interfaces";

let name: string | number = "Fast Track";

function test(test: number): string {
  return "Hello";
}

//1.conventional props

function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({
  children,
}: {
  children: JSX.Element;
}): ReactElement {
  return <h1>{children}</h1>;
}

//2.default props

const defaultContainerProps = {
  heading: <h1>My Defalt Heading</h1>,
};

function Container({
  heading,
  children,
}: {
  children: ReactNode;
  heading: ReactNode;
}): ReactElement {
  return (
    <div>
      <>{heading}</>
      {children}
    </div>
  );
}

//3.Functional Props

function TextWithNumber({
  children,
}: {
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = useState<number>(1);
}

Container.defaultProps = defaultContainerProps;

function App() {
  const [number, setNumber] = useState<number | string>(5);

  // const [people, setPeople] = useState([
  //   {
  //     name: "Fast Track",
  //     year: "2022",
  //     url: "",
  //   },
  //   {
  //     name: "Fast Track",
  //     year: "2022",
  //     url: "",
  //     note: "best track ever",
  //   },
  // ]);

  interface IState {}
  const [people, setPeople] = useState<People[]>([]);

  people.map((p) => p.name);
  const changeNumber = () => {
    setNumber("10");
  };

  return (
    <div>
      <Heading title="Hi Fast Track" />
      <HeadingWithContent>
        <>Hello,Fast Track</>
      </HeadingWithContent>
      <Container>Inner Content</Container>
      <List title="Hello" people={people} />
      {name}
      {number}
    </div>
  );
}

export default App;
