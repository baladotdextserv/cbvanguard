"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { THSCodeDetails } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// type PageProps = {
//     hscode: string;
// }



const Page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<THSCodeDetails | null>(null);

  const router = useRouter();
  const { hscode } = router.query;

  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/FocusApi/hs/${hscode}`);
    const details = await res.json();
    setData(details);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [hscode]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <Card className="w-4/5 mx-auto">
      <CardHeader className="font-bold text-xl bg-indigo-400 text-white rounded-md">
        Details
      </CardHeader>
      <CardContent className="mt-6">
        <h1>
          hs code: <span className="font-bold">{data?.hS_Code}</span>
        </h1>
        <h3>
          chapter: <span className="font-bold">{data?.chapter}</span>
        </h3>
        <p>
          Description: <span className="font-bold">{data?.description}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default Page;