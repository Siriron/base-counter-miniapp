import { useContractRead, useContractWrite } from 'wagmi';
import CounterABI from '../abi/Counter.json';

const CONTRACT_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678" as `0x${string}`;

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
