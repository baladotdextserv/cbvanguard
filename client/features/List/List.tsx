"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { getAllHsCode } from "@/services/FocusApi";
import Link from "next/link";
import { useEffect, useState } from "react";

interface THSCodeDetails {
  chapter: string;
  hS_Code: string;
  description: string;
}

export default function List() {
  const [hsCodeDetails, setHSCodeDetails] = useState<THSCodeDetails[]>([]);

  useEffect(() => {
    const fetchHSCodeDetails = async () => {
      const data = await getAllHsCode();
      setHSCodeDetails(data);
    };
    fetchHSCodeDetails();
  }, []);

  return (
    <Card className="w-1/2 mx-auto">
      <CardHeader className="font-bold text-xl bg-indigo-400 text-white rounded-md">
        Tariff Code
      </CardHeader>
      {hsCodeDetails.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHead>Chapter</TableHead>
              <TableHead className="w-[100px]">HS Code</TableHead>
              <TableHead className="text-center">Description</TableHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {hsCodeDetails.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.chapter}</TableCell>
                <TableCell className="font-medium">
                  <Link href="/hscode/[hscode]" as={`/hscode/${item.hS_Code}`}>
                    {item.hS_Code}
                  </Link>
                </TableCell>
                <TableCell className="text-center">{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
}
