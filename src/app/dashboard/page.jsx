"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from 'swr'

const DashboardPage = () => {
 //const [data, setData] = useState([]);
 //const [err, setErr] = useState(false);
 //const [isLoading, setIsLoading] = useState(false);

 //useEffect(() => {
 //  const getData = async function getData() {
 //    setIsLoading(true);
 //    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
 //      cache: "no-store", // Ensures fresh data on each request
 //    });
 //    if (!res.ok) {
 //      setErr(true);
 //    }
 //    setData(await res.json());
 //    setIsLoading(false);
 //  };
 //  getData();
 //}, []); // Empty dependency array to run only once on mount

 const fetcher=(...args)=>fetch(...args).then(res=>res.json)

 function Profile() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

  return <div className={styles.container}>DashboardPage</div>;
};

export default DashboardPage;
