class GapInPrimes
{
    public static long[] Gap(int g, long m, long n)
    {
        var (a, b) = (0L, 0L);
        for (long i = m; i - 1 <= n; i++)
        {
            if (b - a == g)
              return new[] { a, b };
            if (IsPrime(i))
              (a, b) = (b, i);
        }
        return null;
    }

    private static bool IsPrime(long n)
    {
        if (n % 2 == 0)
          return n == 2;
        for (long i = 3; i * i <= n; i += 2)
          if (n % i == 0)
            return false;
        return true;
    }
}