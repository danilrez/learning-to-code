using System;

public static class Kata
{
  public static string EvensAndOdds(int num)
  {
    return Convert.ToString(num, num % 2 == 0 ? 2 : 16);
  }
}