import { useContractRead, useContractWrite } from 'wagmi';
import CounterABI from '../abi/Counter.json';

// Replace with your actual contract address
const CONTRACT_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678" as `0x${string}`;

export function useCounter() {
  // Read the current counter value
  const { data: count } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CounterABI,
    functionName: 'getCount',
  });

  // Prepare write operation
  const writeContract = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CounterABI,
    functionName: 'increment',
  });

  return {
    count,
    increment: writeContract.writeAsync, // Use writeAsync to trigger the transaction
    data: writeContract.data,
  };
}
