using System.Collections.Generic;
using System.Linq;
public class DoubleLinear
{

  public static int DblLinear(int n)
  {
    SortedSet<int> list1 = new SortedSet<int> { 1 };
    for (int i = 1; i <= n; i++)
    {
      int min = list1.First();
      list1.Remove(min);
      list1.Add(min * 2 + 1);
      list1.Add(min * 3 + 1);
    }
    return list1.First();
  }
}