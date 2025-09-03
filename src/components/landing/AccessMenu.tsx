"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export default function AccessMenu() {
  return (
    <Button asChild variant="outline" size="sm">
      <Link href="/login">Acceso a Defendra</Link>
    </Button>
  );
}
