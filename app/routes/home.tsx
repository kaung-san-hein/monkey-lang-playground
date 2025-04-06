import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Monkey Language Play Ground" },
    { name: "description", content: "Welcome to Monkdy Language Play Ground" },
  ];
}

export default function Home() {
  return <Welcome />;
}
