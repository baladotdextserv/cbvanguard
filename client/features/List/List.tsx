"use client";

import { Card, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllHsCode } from "@/services/FocusApi";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function List() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllHsCode();
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <Card className='w-1/2 mx-auto'>
      <CardHeader className='font-bold text-xl bg-indigo-400 text-white rounded-md'>
        Tariff Code
      </CardHeader>
      {data.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <Table>
          <TableCaption>HS Code</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Chapter</TableHead>
              <TableHead className='w-[100px]'>HS Code</TableHead>
              <TableHead className='text-center'>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.chapter}</TableCell>
                <TableCell className='font-medium'>
                  <Link href='/hscode/[hscode]' as={`/hscode/${item.hS_Code}`}>
                    {item.hS_Code}
                  </Link>
                </TableCell>
                <TableCell className='text-center'>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
}
