import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchObject } from "@/actions";

const ObjectComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.object);

  useEffect(() => {
    dispatch(fetchObject("7"));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Object Details</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ObjectComponent;
