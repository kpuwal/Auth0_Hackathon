import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchStatistics } from '../redux/slices/statsSlice';

import useFetchStats from '../hooks/useFetchStats';

const Statistics = () => {
  // const countries = useSelector((state: RootState) => state.stats.byCountries);
  // const titles = useSelector((state: RootState) => state.stats.byTitles);

  // console.log("countries ", countries);
  // console.log("titles ", titles)
  // const dispatch = useAppDispatch();
  // const { getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   const getData = async () => { 
  //     try {
  //     const token = await getAccessTokenSilently();
  //     dispatch(fetchStatistics(token));
  //   } catch {}}
  //   getData();
  // }, [dispatch, getAccessTokenSilently]);
  useFetchStats();
  const countries = useSelector((state: RootState) => state.stats.byCountries);
  const titles = useSelector((state: RootState) => state.stats.byTitles);

  console.log("countries ", countries);
  console.log("titles ", titles)
  // const callSecureApi = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();

  //     const response = await fetch(
  //       `${serverUrl}/statistics`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const responseData = await response.json();
  //       console.log("responseData ", responseData)
  //     setMessage(responseData.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  return (
    <div className="container">
      <h1>External API</h1>
    </div>
  );
};

export default Statistics;
