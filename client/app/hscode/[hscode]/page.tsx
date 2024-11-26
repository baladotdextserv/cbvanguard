"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { use, useEffect, useState } from "react";

interface PageProps {
  params: {
    hscode: string;
  };
}

export default function Page({ params }: PageProps) {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const param = use<any>(params);

  useEffect(() => {
    const fetchData = async () => {
      let url = `${base_url}/FocusApi/hs/${param.hscode}`;
      console.log(url);
      const res = await fetch(url);
      const details = await res.json();
      setData(details);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Card className='w-4/5 mx-auto'>
          <CardHeader className='font-bold text-xl bg-indigo-400 text-white rounded-md'>
            Details
          </CardHeader>
          <CardContent className='mt-6'>
            <h1> hs code: {data.hS_Code}</h1>
            <h3> chapter: {data.chapter}</h3>
            <p> Description: {data.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
