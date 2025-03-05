using System.Linq;

namespace Solution
{
  class Kata
    {
      public static int find_it(int[] seq)
      {
        return  seq.First(x => seq.Count(s => s == x) % 2 == 1);
      }

    }
}