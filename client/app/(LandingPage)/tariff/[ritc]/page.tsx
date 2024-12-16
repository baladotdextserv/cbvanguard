"use client";

import { getTariff } from "@/services/policy";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function TariffPage() {
  const parms = useParams();
  const [data, setData] = useState<any>(null);

  let tariffItem: string;

  if (Array.isArray(parms.ritc)) {
    tariffItem = parms.ritc[0];
  } else {
    tariffItem = parms.ritc;
  }

  useEffect(() => {
    getTariff(tariffItem)
      .then(res => {
        setData(res);
      })
      .catch(error => {
        console.error("Error fetching tariff:", error);
      });
  }, [tariffItem]);

  return (
    <div>
      <h1>Tariff Page</h1>
      <div>Tariff value: {tariffItem}</div>
      <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}</div>
    </div>
  );
}
