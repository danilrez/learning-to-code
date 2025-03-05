using System;

class PrimeConsec
{

    private static int countPrimeDiv(long n)
    {
        int cnt = 0;
        for (long i = 2; i * i <= n; i++)
        {
            while (n % i == 0)
            {
                cnt++;
                n /= i;
            }
        }
        if (n > 1) cnt++;
        return cnt;
    }
    public static int ConsecKprimes(int k, long[] arr)
    {
        int cnt = 0;
        for (int i = 0; i < arr.Length - 1; ++i)
            if ((countPrimeDiv(arr[i]) == k) && (countPrimeDiv(arr[i+1]) == k))
                cnt += 1;
        return cnt;
    }
}