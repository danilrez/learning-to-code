using System.Linq;
using System.Collections.Generic;

public static class Kata
{
  public static List<string> Anagrams(string word, List<string> words)
  {
    return words.FindAll(s => s.OrderBy(c => c).SequenceEqual(word.OrderBy(c => c)));
  }
}