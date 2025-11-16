import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import CounterABI from '../abi/Counter.json';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export const useCounter = () => {
  const { data: count } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CounterABI,
    functionName: 'count',
  });

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CounterABI,
    functionName: 'increment',
  });
  const { write: increment } = useContractWrite(config);

  return { count, increment };
};
