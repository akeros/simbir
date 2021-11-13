import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useCallback, useState } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useForceUpdate = () => {
  const [, setUpdate] = useState({});

  return useCallback(() => {
    setUpdate({});
  }, []);
}
