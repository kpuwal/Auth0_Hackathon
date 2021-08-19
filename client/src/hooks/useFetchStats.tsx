import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch } from '../redux/store';
import { fetchStatistics } from '../redux/slices/statsSlice';

const useFetchStats = () => {
  const dispatch = useAppDispatch();
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getData = async () => { 
      try {
      const token = await getAccessTokenSilently();
      dispatch(fetchStatistics(token));
    } catch {}}
    getData();
  }, [dispatch, getAccessTokenSilently]);
}

export default useFetchStats;