import { useContractRead, useContractWrite } from 'wagmi';
import CounterABI from '../abi/Counter.json';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export function useCounter() {
  const { data: count } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CounterABI,
    functionName: 'getCount',
  });

  const { data, write: increment } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CounterABI,
    functionName: 'increment',
  });

  return {
    count,
    increment,
    data,
  };
}
