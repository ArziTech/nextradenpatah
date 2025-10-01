"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageKitImageById } from "@/components/ImageKit";
import { Program } from "@prisma/client";

export type ProgramCardProps = {} & Program;

export const ProgramCard = ({
  title,
  id,
  image,
  customeUrl,
  showMoreLink,
}: ProgramCardProps) => {
  return (
    <div
      className={
        "glassmorphic-lg group flex h-fit flex-col justify-end gap-4 rounded-2xl border-2 border-white p-4 hover:bg-white" +
        " relative transition duration-200"
      }
    >
      <ImageKitImageById
        className={
          "relative w-full rounded-md border-2 border-white transition duration-200 " +
          " group-hover:-translate-y-12 group-hover:scale-[105%] group-hover:shadow-[0_0_18px_0_rgba(30,170,200,0.7)]"
        }
        id={image}
        width={400}
        height={400}
        alt={`Gambar dari program ${title}`}
      />
      {showMoreLink ? (
        <Button variant="default" className="py-6" asChild>
          <Link href={customeUrl || `/programs/${id}`}>Selengkapnya</Link>
        </Button>
      ) : (
        <Button variant="default" className="py-6" disabled>
          <span>Selengkapnya</span>
        </Button>
      )}
    </div>
  );
};
