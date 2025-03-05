function dbl-linear($n) {
  [System.Collections.ArrayList]$arr = @()
  for ($i = 0; $i -le ($n + 1); $i++) {
    $null = $arr.Add([int]1)
  }
  $yi = 0; $zi = 0; $cnt = 0
  while ($cnt -le $n) {
    $y = 2 * $arr[$yi] + 1; $z = 3 * $arr[$zi] + 1
    $cnt++
    if ($y -gt $z) {
      $arr[$cnt] = $z; $zi++
    }
    else {
      if ($z -gt $y) {
        $arr[$cnt] = $y; $yi++
      }
      else {
        $arr[$cnt] = $y; $yi++; $zi++
      }
    }
  }
  $arr[$n]
}