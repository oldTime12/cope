import { notFound } from "next/navigation";
import React from "react";

export default function page() {
  notFound();
  return <div>test页面</div>;
}
